import React, { createContext, useState, useContext } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AuthContext = createContext(); //untuk membuat konteks yang memungkinkan data tertentu tersedia untuk seluruh komponen yang ada dalam hierarki

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  

  const login = async (token) => {
    setUser({ token });
    await AsyncStorage.setItem('userToken', token);

  };
  const logout = async () => {
    setUser(null);
    await AsyncStorage.removeItem('userToken');
  };

  const makeTransaction = async (sender, receiver, amount) => {
    try {
      const token = user?.token || await AsyncStorage.getItem('userToken'); // Ambil token dari state atau AsyncStorage
      const response = await fetch('http://54.254.164.127/api/v1/transactions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`, // Gunakan token untuk otentikasi
        },
        body: JSON.stringify({ sender, receiver, amount }),
      });

      const data = await response.json();
      if (data.success) {
        return data; // Kembalikan data transaksi yang berhasil
      } else {
        throw new Error('Transaction failed');
      }
    } catch (error) {
      console.error('Transaction error:', error);
      throw error; // Propagasi error ke pemanggil
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, makeTransaction }}>
      {children}
    </AuthContext.Provider>
  );
};
//export const useAuth = () => useContext(AuthContext);
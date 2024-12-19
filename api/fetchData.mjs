import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

export const getToken = async () => {
    try {
        const response = await fetch('http://54.254.164.127/api/v1/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                email: 'marshatest@gmail.com', // Ganti dengan email Anda
                password: '123456789',      // Ganti dengan password Anda
            }),
        });
        const data = await response.json();
        console.log('Login Response:', data); // Menampilkan seluruh respons login
        
        if (data.data && data.data.token) {  // Mengakses token yang ada dalam data.data.token
            console.log('Token:', data.data.token);
            return data.data.token;
        } else {
            console.error('Token not found in response.');
            return null; // Mengembalikan null jika token tidak ditemukan
        }
    } catch (error) {
        console.error('Error fetching token:', error.message);
    }
};


export const fetchData = async () => {
try {
        // const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTE5LCJpYXQiOjE3MzQ0NDk1NjcsImV4cCI6MTczNDQ1MzE2N30.7a6y5Gj9dHXbmmTslar9B-CtTVdMnkE5RcJnUzHQlOg'
        const token = await getToken(); 
        //const token = await AsyncStorage.getItem('userToken')
        const response = await fetch('http://54.254.164.127/api/v1/users/me', {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`, // Tambahkan Bearer Token di sini
                'Content-Type': 'application/json',
            }
         });
         console.log('Response status:', response.status);
         const data = await response.json();
         console.log('Data fetched from server:', data);
         return data;
     } catch (error) {
         console.error('Error fetching data:', error.message);
     }
 };

 fetchData();

//  const createTransaction = async (token, sender, receiver, amount) => {
//     try {
//       const response = await fetch('http://54.254.164.127/api/v1/transactions/', {
//         method: 'POST',
//         headers: {
//           'Authorization': `Bearer ${token}`,
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           sender,
//           receiver,
//           amount,
//         }),
//       });
//       const data = await response.json();
//       console.log('Transaction created:', data);
//     } catch (error) {
//       console.error('Error creating transaction:', error.message);
//     }
//   };


//   const completeTransaction = async (token, transactionId) => {
//     try {
//       const response = await fetch(`http://54.254.164.127/api/v1/transactions/${transactionId}/complete`, {
//         method: 'PUT',
//         headers: {
//           'Authorization': `Bearer ${token}`,
//           'Content-Type': 'application/json',
//         },
//       });
  
//       const data = await response.json();
//       console.log('Transaction completed:', data);
//     } catch (error) {
//       console.error('Error completing transaction:', error.message);
//     }
//   };
  
//   // Fungsi untuk mendapatkan histori transaksi
//   const getTransactionHistory = async (token) => {
//     try {
//       const response = await fetch('http://54.254.164.127/api/v1/transactions/', {
//         method: 'GET',
//         headers: {
//           'Authorization': `Bearer ${token}`,
//           'Content-Type': 'application/json',
//         },
//       });
  
//       const data = await response.json();
//       console.log('Transaction history:', data);
//     } catch (error) {
//       console.error('Error fetching transaction history:', error.message);
//     }
//   };

//   const main = async () => {
//     const token = await getToken();
//     await createTransaction(token, 'user1', 'user2', 100);
//     await completeTransaction(token, 1);
//     await getTransactionHistory(token);
//   };
  
//   main();
// export const getUserData = async (token) => {
//     try {
//         console.log('Token yang digunakan:', token); // Menampilkan token
//         const response = await axios.get('http://54.254.164.127/api/v1/users/me', {
//             headers: { Authorization: `Bearer ${token}` },
//         });
//         return response.data; // Hanya mengembalikan data
//     } catch (error) {
//         console.error('Error fetching user data:', error.response?.data || error.message);
//         throw error; // Propagasi error ke pemanggil
//     }
// };

//module.exports = { getUserData };
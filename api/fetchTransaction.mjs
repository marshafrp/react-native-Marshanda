import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

export const getToken = async () => {
  try {
    const response = await fetch("http://54.254.164.127/api/v1/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: "marshatest@gmail.com", // Ganti dengan email Anda
        password: "123456789", // Ganti dengan password Anda
      }),
    });
    const data = await response.json();
    console.log("Login Response:", data); // Menampilkan seluruh respons login

    if (data.data && data.data.token) {
      // Mengakses token yang ada dalam data.data.token
      console.log("Token:", data.data.token);
      return data.data.token;
    } else {
      console.error("Token not found in response.");
      return null; // Mengembalikan null jika token tidak ditemukan
    }
  } catch (error) {
    console.error("Error fetching token:", error.message);
  }
};

export const fetchTransaction = async () => {
  try {
    // const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTE5LCJpYXQiOjE3MzQ0NDk1NjcsImV4cCI6MTczNDQ1MzE2N30.7a6y5Gj9dHXbmmTslar9B-CtTVdMnkE5RcJnUzHQlOg'
    const token = await getToken();
    console.log("Token fetch", token)
    //const token = await AsyncStorage.getItem('userToken')
    const response = await fetch("http://54.254.164.127/api/v1/transactions/", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`, // Tambahkan Bearer Token di sini
        "Content-Type": "application/json",
      },
    });
    console.log("Response status:", response.status);
    const data = await response.json();
    console.log("Transactions fetched from server:", data);
    return data;
  } catch (error) {
    console.error("Error fetching data:", error.message);
  }
};

fetchTransaction();

// const token = AsyncStorage.getItem('userToken')
// const api = axios.create({
//     baseURL: 'http://54.254.164.127/api/v1',
//     headers: {
//         'Content-Type' : 'application/json',
//         Authorization: 'Bearer' + token
//     }
// });

// export const createTransaction = async (type, from_to, amount, description) => {
//     try {
//       const response = await api.post('/transactions', {type, from_to, amount, description});
//       return response.data;
//     } catch (error) {
//       throw new Error('Failed to create post: ' + error.message);
//     }
//   };

  const api = axios.create({
    baseURL: 'http://54.254.164.127/api/v1',
    headers: {
        'Content-Type': 'application/json',
    }
});

// AsyncStorage.getItem('userToken').then((token) => {
//     if (token) {
//         api.defaults.headers.Authorization = `Bearer ${token}`;
//     }
// });

export const createTransaction = async (type, from_to, amount, description) => {
  try {
      //const token = await AsyncStorage.getItem('userToken');
      const token = await getToken();
      console.log("Coba token", token)
      const response = await api.post('/transactions',{ type, from_to, amount, description },
          {
              headers: {
                  'Content-Type': 'application/json',
                  Authorization: `Bearer ${token}`
              }
          }
      );

      console.log("Coba lagi hehe")

      console.log("response data:",response.data)
      return response.data;
  } catch (error) {
      throw new Error('Failed to create post: ' + error.message);
  }
};




// export const createTransaction = async (type, from_to, amount, description) => {
//   const token = await getToken();
//   console.log("Ini token " +token)

//   try {
//     // Mengirim permintaan POST ke endpoint transaksi
//     const response = await fetch(
//       "http://54.254.164.127/api/v1/transactions/",
//       { type, from_to, amount, description },
//       {
//         method: "POST",
//         headers: {
//           Authorization: `Bearer ${token}`,
//           "Content-Type": "application/json",
//         },
//       }
//     );
//     // Mengembalikan data respons dari server
//     console.log("ini datanya")
//     console.log(response);
//     return response.data;
//   } catch (error) {
//     console.log(error.response.data);
//     console.error(
//       "Error creating transaction:",
//       error.response.data || error.message
//     );
//     throw new Error(
//       error.response?.data?.message || "Failed to create transaction"
//     );
//   }
// };

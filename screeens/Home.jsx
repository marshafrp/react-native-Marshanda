import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  ImageBackground,
  Button,
  TouchableOpacity,
  SafeAreaView,
  ActivityIndicator,
  FlatList,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Login from "./Login";
import { useEffect, useState } from "react";
import { fetchData } from "../api/fetchData.mjs";
import { fetchTransaction } from "../api/fetchTransaction.mjs";

export default function Home({ navigation }) {
  const [loading, setLoading] = useState(true);
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null); // Untuk menyimpan error jika ada
  const [token, setToken] = useState("");
  const [transactions, setTransactions] = useState([]); // Menyimpan data transaksi

  useEffect(() => {
    // Memanggil fetchData saat komponen pertama kali di-render
    const fetchUserData = async () => {
      try {
        const data = await fetchData(); // Memanggil fungsi fetchData
        console.log("Fetched data:", data);
        setUserData(data); // Menyimpan data ke state
        setLoading(false); // Mengatur loading selesai
      } catch (err) {
        setError(err.message); // Menyimpan pesan error
        setLoading(false); // Mengatur loading selesai meskipun terjadi error
      }
    };

    // Fetch transaction history
    // Fetch transaction history
    const loadTransactions = async () => {
      try {
        const response = await fetchTransaction(); // Fetch transaction data
        console.log("Fetched transactions:", response.data);
        setTransactions(response.data);
      } catch (err) {
        console.error("Error fetching transactions:", err);
        setTransactions([]); // Handle error gracefully
      }
    };

    fetchUserData();
    loadTransactions();
  }, []);

  if (loading) {
    return (
      <View style={styles.loader}>
        <ActivityIndicator size="large" color="#009B97" />
        <Text>Loading...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>Error: {error}</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <Text style={{ color: "#009B97", marginTop: 20 }}>Go to Login</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <SafeAreaView style={{ backgroundColor: "#f9f6f2" }}>
      <TouchableOpacity
        style={{
          backgroundColor: "#009B97",
          width: 80,
          height: 30,
          borderRadius: 7,
          justifyContent: "center",
          alignSelf: "flex-end",
        }}
        onPress={() => navigation.navigate("Login")}
      >
        <Text
          style={{ color: "white", fontWeight: "bold", textAlign: "center" }}
        >
          Sign Out
        </Text>
      </TouchableOpacity>

      <View style={styles.container}>
        <View
          style={{
            flexDirection: "row",
            elevation: 3,
            paddingHorizontal: 20,
            display: "flex",
            alignItems: "center",
            height: 80,
            width: "100%",
            backgroundColor: "white",
          }}
        >
          <Image
            source={require("../assets/photo2.png")}
            style={{ width: 46, height: 46, backgroundColor: "white" }}
          ></Image>
          <View style={{ marginLeft: 20, backgroundColor: "white" }}>
            <Text style={{ fontWeight: 700, color: "black" }}>
              {userData.data.full_name}
            </Text>
            <Text>Personal Account</Text>
          </View>

          <View style={{ flex: 1, backgroundColor: "white" }}></View>
          <Image
            source={require("../assets/image.png")}
            style={{ width: 46, height: 46 }}
          ></Image>
        </View>
      </View>

      <View style={{ flexDirectionn: "row", display: "flex" }}>
        <View style={{ marginLeft: 20, paddingTop: 60 }}>
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>
            Good Morning, Marsha
          </Text>
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              paddingLeft: 270,
              paddingTop: 30,
            }}
          >
            <Image
              source={require("../assets/sun.png")}
              style={{ width: 100, height: 100 }}
            ></Image>
          </View>
        </View>

        <Text style={{ marginLeft: 20 }}>Check all your incoming and </Text>
        <Text style={{ marginLeft: 20 }}>outgoing transactions here</Text>
      </View>

      {/* */}
      <View
        style={{
          marginLeft: 20,
          marginTop: 40,
          marginRight: 30,
          backgroundColor: "#009B97",
          flexDirection: "row",
          display: "flex",
          borderRadius: 7,
          height: 35,
          alignItems: "center",
        }}
      >
        <View style={{width:200}}>
          <Text style={{ paddingLeft: 20, color: "white", fontSize: 15 }}>
            Account No.
            {/* <Text style={{ fontWeight: 'bold'}}>{userData.account_no}</Text> */}
            <Text style={{ fontWeight: "bold", textAlign:'right'}}>
              {" "}
              {userData.data.account_no}
            </Text>
          </Text>
        </View>
      </View>

      {/* */}
      <View
        style={{
          marginLeft: 20,
          marginRight: 30,
          paddingTop: 30,
          marginBottom: 30,
        }}
      >
        <View
          style={{
            backgroundColor: "white",
            flexDirection: "row",
            borderRadius: 10,
          }}
        >
          <View style={{ width: 170 }}>
            <Text style={{ paddingLeft: 20, paddingTop: 30 }}>Balance</Text>
            <View style={{ flexDirection: "row", paddingLeft: 20 }}>
              <Text style={{ fontSize: 25, fontWeight: "bold" }}>
                Rp {userData.data.balance}
              </Text>
              <View style={{ paddingTop: 15, paddingLeft: 10 }}>
                <Image
                  source={require("../assets/eye.png")}
                  style={{ height: 11, width: 19 }}
                ></Image>
              </View>
            </View>
          </View>

          <View style={{ paddingLeft: 130 }}>
            <TouchableOpacity onPress={() => navigation.navigate("TopUp")}>
              <Image
                source={require("../assets/plus.png")}
                style={{ height: 60, width: 60, marginTop: 10 }}
              ></Image>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("Transfer")}>
              <Image
                source={require("../assets/send.png")}
                style={{ height: 60, width: 60, paddingTop: 10 }}
              ></Image>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* */}
      <View
        style={{
          marginLeft: 20,
          marginRight: 30,
          marginBottom: 40,
          height: 350,
        }}
      >
        <View style={{ backgroundColor: "white", borderRadius: 7 }}>
          <View style={{ marginLeft: 20, marginBottom: 20 }}>
            <Text style={{ fontWeight: "bold", fontSize: 16 }}>
              Transaction History
            </Text>
          </View>

          <ScrollView
            style={{
              marginLeft: 20,
              marginTop: 10,
              marginBottom: 40,
              height: 180,
            }}
          >
            <View>
              {transactions.length === 0 ? (
                <Text>No transactions available</Text>
              ) : (
                transactions.map((transaction, index) => (
                  <View
                    key={index}
                    style={{ flexDirection: "row", paddingBottom: 10 }}
                  >
                    <Image
                      source={require("../assets/icon.png")}
                      style={{ height: 30, width: 30 }}
                    />
                    <View style={{ flexDirection: "column", width: 190 }}>
                      <Text style={{ paddingLeft: 10 }}>
                        {transaction.description}
                      </Text>
                      <Text
                        style={{ paddingLeft: 10, fontSize: 10, color: "gray" }}
                      >
                        {new Date(transaction.created_at).toLocaleDateString()}
                      </Text>
                    </View>
                    <Text style={{ paddingLeft: 20 }}>
                      {transaction.type === "c"
                        ? `+${transaction.amount}`
                        : `-${transaction.amount}`}
                    </Text>
                  </View>
                ))
              )}
            </View>
          </ScrollView>
        </View>
      </View>

      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 50,
  },
  loader: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  errorContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  errorText: {
    color: "red",
    fontSize: 16,
  },
  postContainer: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  body: {
    fontSize: 14,
    color: "#555",
  },
});

// transactions.js
const fs = require('fs');
const path = require('path');

// File JSON tempat kita menyimpan transaksi dan log transaksi
const transactionsFilePath = path.join(__dirname, 'transactions.json');
const transactionLogsFilePath = path.join(__dirname, 'transactionLogs.json');

// Helper function untuk membaca data dari file JSON
const readDataFromFile = (filePath) => {
  const rawData = fs.readFileSync(filePath);
  return JSON.parse(rawData);
};

// Helper function untuk menulis data ke file JSON
const writeDataToFile = (filePath, data) => {
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
};

// Fungsi untuk melakukan transaksi
const createTransaction = (sender, receiver, amount) => {
  const transactions = readDataFromFile(transactionsFilePath);
  const newTransaction = {
    id: transactions.length + 1,
    sender,
    receiver,
    amount,
    status: 'pending',
    createdAt: new Date(),
  };
  
  transactions.push(newTransaction);
  writeDataToFile(transactionsFilePath, transactions);

  // Log transaksi
  const transactionLogs = readDataFromFile(transactionLogsFilePath);
  const log = {
    transactionId: newTransaction.id,
    action: 'Transaction created',
    timestamp: new Date(),
  };
  
  transactionLogs.push(log);
  writeDataToFile(transactionLogsFilePath, transactionLogs);

  return newTransaction;
};

// Fungsi untuk menyelesaikan transaksi
const completeTransaction = (transactionId) => {
  const transactions = readDataFromFile(transactionsFilePath);
  const transaction = transactions.find(t => t.id === transactionId);

  if (!transaction) {
    return null;
  }

  transaction.status = 'completed';
  writeDataToFile(transactionsFilePath, transactions);

  // Log transaksi
  const transactionLogs = readDataFromFile(transactionLogsFilePath);
  const log = {
    transactionId,
    action: 'Transaction completed',
    timestamp: new Date(),
  };
  
  transactionLogs.push(log);
  writeDataToFile(transactionLogsFilePath, transactionLogs);

  return transaction;
};

// Fungsi untuk mendapatkan histori transaksi
const getTransactionHistory = () => {
  const transactionLogs = readDataFromFile(transactionLogsFilePath);
  return transactionLogs;
};

// Export fungsi untuk digunakan di API
module.exports = {
  createTransaction,
  completeTransaction,
  getTransactionHistory,
};

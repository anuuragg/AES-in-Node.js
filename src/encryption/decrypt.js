const crypto = require('crypto');
const path = require('path');
const fs = require('fs');

// Function to decrypt the file
function decryptFile(encryptedFilePath, key, outputFilePath) {
  const encryptedData = fs.readFileSync(encryptedFilePath);

  const iv = encryptedData.slice(0, 16); // Extract the IV
  const encryptedText = encryptedData.slice(16); // Extract the encrypted data

  const decipher = crypto.createDecipheriv('aes-256-cbc', key, iv);
  let decryptedData = decipher.update(encryptedText);
  decryptedData = Buffer.concat([decryptedData, decipher.final()]);

  fs.writeFileSync(outputFilePath, decryptedData);
  console.log('File decrypted successfully.');
}

// Load the key from the saved file
const key = fs.readFileSync('./keys/secret.key');

const encryptedFilePath = path.join(__dirname, '../../encrypted_files/encrypted_file.enc');
const outputFilePath = path.join(__dirname, '../../decrypted_files/decrypted_file.jpg');
decryptFile(encryptedFilePath, key, outputFilePath);

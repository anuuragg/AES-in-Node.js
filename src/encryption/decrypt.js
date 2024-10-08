const crypto = require('crypto');
const path = require('path');
const fs = require('fs');

const file_name = 'img.jpg';

// Function to decrypt the file
function decryptFile(encryptedFilePath, key, outputFilePath) {
  const encryptedData = fs.readFileSync(encryptedFilePath);

  const iv = encryptedData.slice(0, 16);
  const encryptedText = encryptedData.slice(16);

  const decipher = crypto.createDecipheriv('aes-256-cbc', key, iv);
  let decryptedData = decipher.update(encryptedText);
  decryptedData = Buffer.concat([decryptedData, decipher.final()]);

  fs.writeFileSync(outputFilePath, decryptedData);
  console.log('File decrypted successfully.');
}

// const key = fs.readFileSync('./keys/secret.key');
const key = fs.readFileSync(`./keys/${file_name}.key`);

const encryptedFilePath = path.join(__dirname, `../../encrypted_files/encrypted_file(${file_name}).enc`);
const outputFilePath = path.join(__dirname, `../../decrypted_files/decrypted_file(${file_name}).jpg`);
decryptFile(encryptedFilePath, key, outputFilePath);

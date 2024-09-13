const crypto = require('crypto');
const fs = require('fs');

const file_name = 'img.jpg';

// Function to encrypt the file
function encryptFile(filePath, key, outputFilePath) {
  const fileData = fs.readFileSync(filePath);
  const iv = crypto.randomBytes(16);
  const cipher = crypto.createCipheriv('aes-256-cbc', key, iv);

  let encryptedData = cipher.update(fileData);
  encryptedData = Buffer.concat([encryptedData, cipher.final()]);

  const finalData = Buffer.concat([iv, encryptedData]);
  fs.writeFileSync(outputFilePath, finalData);

  console.log('File encrypted successfully.');
}

const key = crypto.randomBytes(32); // (AES-256 requires a 32-byte key)
// fs.writeFileSync('./keys/secret.key', key);
fs.writeFileSync(`./keys/${file_name}.key`, key);

const filePath = `${file_name}`;
const outputFilePath = `./encrypted_files/encrypted_file(${file_name}).enc`;
encryptFile(filePath, key, outputFilePath);

# AES-in-Node.js

This project demonstrates how to implement Advanced Encryption Standard (AES) encryption and decryption in Node.js using the `crypto` module. It allows encrypting and decrypting files, such as images, using AES-256-CBC mode.

## Features

- **AES-256 Encryption**: Uses 256-bit keys for robust encryption.
- **File Encryption & Decryption**: Can encrypt and decrypt files like `.jpg`, `.jpeg`, `.png`, or any other file type.
- **Dynamic Key Generation**: Generates a new random key for each encryption.

## Prerequisites

- **Node.js**
- **npm** (or yarn)

## Setup and Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/your-username/AES-in-Node.js.git
    cd AES-in-Node.js
    ```

2. Install the necessary dependencies:

    ```bash
    npm install
    ```

## Usage

### Encrypt a File

Run the encryption script to encrypt a file. The encrypted file will be stored in the `encrypted_files` folder.

```bash
node src/encryption/encrypt.js
```

### Decrypt a File

Run the decryption script to decrypt an encrypted file. The decrypted file will be stored in the `decrypted_files` folder.

```bash
node src/encryption/decrypt.js
```

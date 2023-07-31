<div align="center">

# Node.js Billing System

A Node.js server for a user-friendly billing system that handles invoicing, payments, and financial transactions efficiently.

</div>

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Logging](#logging)
- [Security](#security)


## Introduction

An online billing system is essential for businesses to manage their invoicing, payments, and financial transactions efficiently. This project sets up a Node.js server to handle billing operations for a company. The server exposes APIs based on REST principles and handles different scenarios that may arise during billing processes.

## Features

- User Registration
- Fetch Products and Services Information
- Cart Management (Add/Remove Items)
- View Total Bill (Detailed breakdown of price, quantity, and tax on each item)
- Confirm Order

## Prerequisites

Before running the server, make sure you have the following installed:

- Node.js (v14.x or higher)
- MongoDB (v4.x or higher)

## Installation

1. Clone the repository.
    ```
    git clone https://github.com/Abhishekydv097/Plotline_EcommerceBackend_Abhishek
    ```

2. Install dependencies.
    ```
    npm i
    ```

3. Run the server
   ```
   npm run dev
   ```
## Usage

1. Start the MongoDB server.


2. Start the Node.js server.

npm run dev

The server will run at by default and reflects server and mongoDB is connected at terminal.

## API Endpoints

- POST /api/products - Create a Product (Admin)
- GET /api/products - Get all products
- PUT /api/products/:productId - Update Product (Admin)
- DELETE /api/products/:productId - Delete Product (Admin)
- GET /api/products/:productId - Get Product Details

- POST /api/users/register - Register User
- POST /api/users/login - Login User
- GET /api/users/logout - Logout User

- GET /api/users - Get all users (Admin)

- POST /api/orders - Create New Order
- GET /api/orders - Get logged-in user order
- GET /api/orders/:orderId - Get Single Order (Admin)
- DELETE /api/orders/:orderId - Delete Order



## Contributions

https://github.com/Abhishekydv097

## Logging

Logging is implemented to record server activities and monitor system performance. Logs are stored in logs/server.log.

## Security

- Secure Password Storage(using SHA-25)
- Bycrypt for encrypting passwords

## Error Logging

Error logging is set up to capture and analyze server errors for troubleshooting and improvements. Errors are handled efficientlly.



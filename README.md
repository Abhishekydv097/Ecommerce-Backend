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
- [Testing](#testing)
- [Contribution](#contribution)
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

## Demo

![Project Demo](project-demo.gif)

## Prerequisites

Before running the server, make sure you have the following installed:

- Node.js (v14.x or higher)
- MongoDB (v4.x or higher)

## Installation

1. Clone the repository.

    git clone https://github.com/Abhishekydv097/Plotline_EcommerceBackend_Abhishek


2. Install dependencies.

    npm i


## Usage

1. Start the MongoDB server.


2. Start the Node.js server.

npm run dev

The server will run at by default and reflects server and mongoDB is connected at terminal.

## API Endpoints

- POST /api/users/register - User Registration
- GET /api/products - Fetch Products and Services Information
- POST /api/cart/addToCart - Add a Product or Service to the Cart
- POST /api/cart/removeFromCart - Remove a Product or Service from the Cart
- GET /api/cart/viewTotalBill - View Total Bill (Detailed breakdown of price, quantity, and tax on each item)
- POST /api/orders/confirmOrder - Confirm Order


## Contributions

https://github.com/Abhishekydv097

## Logging

Logging is implemented to record server activities and monitor system performance. Logs are stored in logs/server.log.

## Security

- Input Sanitization
- Secure Password Storage
- SSL Encryption for Data Transfer

## Error Logging

Error logging is set up to capture and analyze server errors for troubleshooting and improvements. Errors are stored in logs/error.log.



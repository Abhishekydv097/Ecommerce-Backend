const User = require('../models/userModels');
const Cart = require("../models/cartModel");
const Product = require('../models/productModel');

const getAllCartItems = async (req, res) => {
  try {
    const { userId } = req.params;

    
    const cart = await Cart.findOne({ user: userId });

    if (!cart) {
      return res.status(404).json({ error: 'Cart not found' });
    }

    res.status(200).json({ items: cart.items });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};


const addProductToCart = async (req, res) => {
  try {
    const { userId, productId } = req.body;

   
    let cart = await Cart.findOne({ user: userId });
    if (!cart) {
      cart = new Cart({ user: userId });
    }

    
    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }

    
    cart.items.push(product);
    await cart.save();

    return res.status(200).json({ message: 'Product added to cart successfully' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal server error' });
  }
};


const addServiceToCart = async (req, res) => {
  try {
    const { userId, serviceId } = req.body;

    
    let cart = await Cart.findOne({ user: userId });
    if (!cart) {
      cart = new Cart({ user: userId });
    }

    
    const service = await Service.findById(serviceId);
    if (!service) {
      return res.status(404).json({ error: 'Service not found' });
    }

   
    cart.items.push(service);
    await cart.save();

    return res.status(200).json({ message: 'Service added to cart successfully' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal server error' });
  }
};


const deleteProductFromCart = async (req, res) => {
  try {
    const { userId, productId } = req.params;

    
    const cart = await Cart.findOne({ user: userId });

    if (!cart) {
      return res.status(404).json({ error: 'Cart not found' });
    }

    
    const productIndex = cart.items.findIndex((item) => item._id.equals(productId));

    if (productIndex === -1) {
      return res.status(404).json({ error: 'Product not found in cart' });
    }

    cart.items.splice(productIndex, 1);
    await cart.save();

    return res.status(200).json({ message: 'Product removed from cart successfully' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal server error' });
  }
};


const deleteServiceFromCart = async (req, res) => {
  try {
    const { userId, serviceId } = req.params;

    
    const cart = await Cart.findOne({ user: userId });

    if (!cart) {
      return res.status(404).json({ error: 'Cart not found' });
    }

    const serviceIndex = cart.items.findIndex((item) => item._id.equals(serviceId));

    if (serviceIndex === -1) {
      return res.status(404).json({ error: 'Service not found in cart' });
    }

    
    cart.items.splice(serviceIndex, 1);
    await cart.save();

    return res.status(200).json({ message: 'Service removed from cart successfully' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal server error' });
  }
};


const clearCart = async (req, res) => {
  try {
    const { userId } = req.params;

    
    const cart = await Cart.findOne({ user: userId });

    if (!cart) {
      return res.status(404).json({ error: 'Cart not found' });
    }

   
    cart.items = [];
    await cart.save();

    res.status(200).json({ message: 'Cart cleared successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};


const viewTotalBill = async (req, res) => {
  try {
    const { userId } = req.params;

    
    const cart = await Cart.findOne({ user: userId });

    if (!cart) {
      return res.status(404).json({ error: 'Cart not found' });
    }

    let cartPrice = 0;

    
    const itemsWithBillDetails = cart.items.map((item) => {
      let taxPercentage = 0;
      let flatTax = 0;
      
      if (item.itemType === 'Product') {
        flatTax = 200;
        if (item.price > 1000 && item.price <= 5000) {
          taxPercentage = 0.12;
        } else if (item.price > 5000) {
          taxPercentage = 0.18;
        }
      } else if (item.itemType === 'Service') {
        flatTax = 100;
        if (item.price > 1000 && item.price <= 8000) {
          taxPercentage = 0.1;
        } else if (item.price > 8000) {
          taxPercentage = 0.15;
        }
      }

      const taxAmount = item.price * taxPercentage;
      const totalValue = item.price + taxAmount + flatTax;
      cartPrice += totalValue;

      return {
        item: item,
        price: item.price,
        quantity: 1,
        taxAmount: taxAmount,
        flatTax: flatTax,
        totalValue: totalValue,
      };
    });

    return res.status(200).json({
      items: itemsWithBillDetails,
      cartPrice: cartPrice,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = {
  getAllCartItems,
  addProductToCart,
  addServiceToCart,
  deleteProductFromCart,
  deleteServiceFromCart,
  clearCart,
  viewTotalBill,
};

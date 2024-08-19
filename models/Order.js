const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
  total_price_set: {
    shop_money: {
      amount: Number
    }
  },
  created_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Order', OrderSchema);

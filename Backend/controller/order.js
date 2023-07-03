const Order = require("../model/order");

const orderController = {
  getAllOrders: async (req, res) => {
    try {
      const orders = await Order.find();
      res.json(orders);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Đã xảy ra lỗi" });
    }
  },

  getOrderById: async (req, res) => {
    const { orderId } = req.params;
    try {
      const order = await Order.findById(orderId);
      if (!order) {
        res.status(404).json({ message: "Không tìm thấy đơn hàng" });
        return;
      }
      res.json(order);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Đã xảy ra lỗi" });
    }
  },

  createOrder: async (req, res) => {
    const {
      customerName,
      customerEmail,
      customerAddress,
      products,
      totalPrice,
    } = req.body;
    try {
      const order = await Order.create({
        customerName,
        customerEmail,
        customerAddress,
        products,
        totalPrice,
      });
      res.json(order);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Đã xảy ra lỗi" });
    }
  },

  updateOrderStatus: async (req, res) => {
    const { orderId } = req.params;
    const { status } = req.body;
    try {
      const order = await Order.findByIdAndUpdate(
        orderId,
        { status },
        { new: true }
      );
      if (!order) {
        res.status(404).json({ message: "Không tìm thấy đơn hàng" });
        return;
      }
      res.json(order);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Đã xảy ra lỗi" });
    }
  },
};

module.exports = orderController;

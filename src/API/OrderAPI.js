import { axiosClient } from "./axiosConfig";

// Use shared axios client with 60s timeout for order operations
const client = axiosClient;

// Tạo đơn hàng
export const createOrder = async (orderData) => {
  try {
    const response = await client.post("/orders", orderData);
    return response.data;
  } catch (error) {
    console.error("Error creating order:", error);
    throw error;
  }
};

// Lấy danh sách đơn hàng của user
export const getUserOrders = async () => {
  try {
    const response = await client.get("/orders");
    return response.data;
  } catch (error) {
    console.error("Error fetching orders:", error);
    throw error;
  }
};

// Lấy chi tiết đơn hàng
export const getOrderById = async (orderId) => {
  try {
    const response = await client.get(`/orders/${orderId}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching order:", error);
    throw error;
  }
};

// Hủy đơn hàng
export const cancelOrder = async (orderId) => {
  try {
    const response = await client.put(`/orders/${orderId}/cancel`, {});
    return response.data;
  } catch (error) {
    console.error("Error cancelling order:", error);
    throw error;
  }
};

// Lấy danh sách phương thức thanh toán
export const getPaymentMethods = async () => {
  try {
    const response = await client.get("/payment-methods");
    return response.data;
  } catch (error) {
    console.error("Error fetching payment methods:", error);
    throw error;
  }
};

// Admin: Lấy tất cả đơn hàng
export const getAllOrders = async () => {
  try {
    const response = await client.get("/admin/orders");
    return response.data;
  } catch (error) {
    console.error("Error fetching all orders:", error);
    throw error;
  }
};

// Admin: Cập nhật trạng thái đơn hàng
export const updateOrderStatus = async (orderId, status) => {
  try {
    const response = await client.put(`/admin/orders/${orderId}/status`, { status });
    return response.data;
  } catch (error) {
    console.error("Error updating order status:", error);
    throw error;
  }
};


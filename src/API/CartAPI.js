import { axiosClient } from "./axiosConfig";

// Use shared axios client with 60s timeout for cart operations
const client = axiosClient;

// Khởi tạo hoặc lấy cart của user (gọi khi login)
export const initCart = async () => {
  try {
    const response = await client.post("/cart/init", {
      user_id: localStorage.getItem("userId"),
    });
    return response.data;
  } catch (error) {
    console.error("Error initializing cart:", error.response?.data?.message || error.message);
    throw error;
  }
};

// Lấy giỏ hàng của user
export const getCart = async () => {
  try {
    const response = await client.get("/cart");
    return response.data;
  } catch (error) {
    console.error("Error fetching cart:", error);
    throw error;
  }
};

// Thêm sản phẩm vào giỏ hàng
export const addToCart = async (productId, quantity = 1) => {
  try {
    const response = await client.post("/cart/add-item", {
      product_id: productId,
      quantity: quantity,
    });
    return response.data;
  } catch (error) {
    console.error("Error adding to cart:", error);
    throw error;
  }
};

// Cập nhật số lượng sản phẩm trong giỏ hàng
export const updateCartItem = async (cartItemId, quantity) => {
  try {
    const response = await client.put("/cart/update-item", {
      cart_item_id: cartItemId,
      quantity: quantity,
    });
    return response.data;
  } catch (error) {
    console.error("Error updating cart item:", error);
    throw error;
  }
};

// Xóa sản phẩm khỏi giỏ hàng
export const removeFromCart = async (cartItemId) => {
  try {
    const response = await client.delete(`/cart/remove-item/${cartItemId}`);
    return response.data;
  } catch (error) {
    console.error("Error removing from cart:", error);
    throw error;
  }
};

// Lấy số lượng sản phẩm trong giỏ hàng
export const getCartCount = async () => {
  try {
    const response = await client.get("/cart");
    return response.data?.data?.length || 0;
  } catch (error) {
    console.error("Error fetching cart count:", error);
    return 0;
  }
};

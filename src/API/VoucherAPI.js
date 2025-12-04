import { axiosClient } from "./axiosConfig";

// Use shared axios client with 60s timeout
const client = axiosClient;

// Lấy tất cả voucher (public)
export const getAllVouchers = async () => {
  try {
    const response = await client.get("/vouchers");
    return response.data;
  } catch (error) {
    console.error("Error fetching vouchers:", error);
    throw error;
  }
};

// Lấy voucher của user đã lưu
export const getUserVouchers = async () => {
  try {
    const response = await client.get("/user/vouchers");
    return response.data;
  } catch (error) {
    console.error("Error fetching user vouchers:", error);
    throw error;
  }
};

// User lưu voucher
export const saveVoucher = async (voucherCode) => {
  try {
    const response = await client.post("/vouchers/assign", {
      voucher_code: voucherCode,
    });
    return response.data;
  } catch (error) {
    console.error("Error saving voucher:", error);
    throw error;
  }
};

// Admin: Tạo voucher mới
export const createVoucher = async (voucherData) => {
  try {
    // Đảm bảo đúng kiểu dữ liệu
    const data = {
      code: String(voucherData.code || ""),
      description: String(voucherData.description || ""),
      image: String(voucherData.image || ""),
      discount_type: String(voucherData.discount_type || "percent"),
      discount_value: Number(voucherData.discount_value) || 0,
      min_order: Number(voucherData.min_order) || 0,
      max_discount: Number(voucherData.max_discount) || 0,
      start_date: voucherData.start_date,
      end_date: voucherData.end_date,
      usage_limit_per_user: Number(voucherData.usage_limit_per_user) || 1,
      usage_limit_global: Number(voucherData.usage_limit_global) || 100,
    };
    const response = await client.post("/vouchers", data);
    return response.data;
  } catch (error) {
    console.error("Error creating voucher:", error);
    throw error;
  }
};

// Admin: Cập nhật voucher
export const updateVoucher = async (voucherId, voucherData) => {
  try {
    // Đảm bảo đúng kiểu dữ liệu
    const data = {
      id: Number(voucherId),
      code: String(voucherData.code || ""),
      description: String(voucherData.description || ""),
      image: String(voucherData.image || ""),
      discount_type: String(voucherData.discount_type || "percent"),
      discount_value: Number(voucherData.discount_value) || 0,
      min_order: Number(voucherData.min_order) || 0,
      max_discount: Number(voucherData.max_discount) || 0,
      start_date: voucherData.start_date,
      end_date: voucherData.end_date,
      usage_limit_per_user: Number(voucherData.usage_limit_per_user) || 1,
      usage_limit_global: Number(voucherData.usage_limit_global) || 100,
    };
    const response = await client.put(`/vouchers/${voucherId}`, data);
    return response.data;
  } catch (error) {
    console.error("Error updating voucher:", error);
    throw error;
  }
};

// Lấy voucher theo ID
export const getVoucherById = async (voucherId) => {
  try {
    const response = await client.get(`/vouchers/${voucherId}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching voucher:", error);
    throw error;
  }
};

// Admin: Xóa voucher
export const deleteVoucher = async (voucherId) => {
  try {
    const response = await client.delete(`/vouchers/${voucherId}`);
    return response.data;
  } catch (error) {
    console.error("Error deleting voucher:", error);
    throw error;
  }
};


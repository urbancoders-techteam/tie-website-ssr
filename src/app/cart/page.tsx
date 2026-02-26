/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import ContainerWrapper from "@/components/ContainerWrapper";
import { baseUrl, navURL } from "@/utils/config";
import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";




const Cart = () => {
  const router = useRouter();
  const [cartList, setCartList] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [fetchLoading, setFetchLoading] = useState(true);
  const [openDialog, setOpenDialog] = useState(false);
  const [deleteIndex, setDeleteIndex] = useState<number | null>(null);

  useEffect(() => {
    const fetchCartData = async () => {
      const token = sessionStorage.getItem("authToken");
      setFetchLoading(true);
      if (token) {
        try {
          const response = await axios.get(`${baseUrl}order/get-cart`, {
            headers: { Authorization: token },
          });
          const apiCartList = response.data.data.flatMap((order: any) =>
            order.items.map((item: any) => ({
              id: item._id,
              title: item.planName,
              packagePrice: item.amount,
              planId: item.planId,
            }))
          );
          setCartList(apiCartList);
          // setItemUpdate(!itemupdate);
        } catch (err) {
          console.error("Error fetching cart:", err);
        }
      } else {
        const localCart = JSON.parse(sessionStorage.getItem("cart") || "[]");
        setCartList(localCart);
        // setItemUpdate(!itemupdate);
      }
      setFetchLoading(false);
    };

    fetchCartData();
  }, []);

  useEffect(() => {
    sessionStorage.setItem("itemsCount", String(cartList.length));
  }, [cartList]);

  const totalPrice = cartList.reduce(
    (total, item) => total + parseInt(item.packagePrice),
    0
  );

  const confirmDelete = async () => {
    const token = sessionStorage.getItem("authToken");
    const index = deleteIndex;
    if (index === null) return;
    const item = cartList[index];

    if (token) {
      try {
        await axios.delete(`${baseUrl}order/delete-cart-item/${item.id}`, {
          headers: { Authorization: token },
        });
      } catch (err) {
        console.error("Error deleting cart item:", err);
      }
    } else {
      const updatedCart = [...cartList];
      updatedCart.splice(index, 1);
      sessionStorage.setItem("cart", JSON.stringify(updatedCart));
    }

    const updated = cartList.filter((_, i) => i !== index);
    setCartList(updated);
    // setItemUpdate(!itemupdate);
    setOpenDialog(false);
  };

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  const handleCheckout = async () => {
    const token = sessionStorage.getItem("authToken");
    if (!token) {
      router.push(`${navURL}login`, {
        state: { path: "/cart" },
      } as any);

      return;
    }

    setLoading(true);

    try {
      const orderData = {
        items: cartList.map((item) => ({
          planName: item.title,
          amount: item.packagePrice,
          planId: item.planId,
        })),
      };

      const res = await axios.post(`${baseUrl}order/add-order`, orderData, {
        headers: {
          Authorization: token,
          "Content-Type": "application/json",
        },
      });

      const order = res.data;

      if (order.success) {
        const rzp = new (window as any).Razorpay({
          key: process.env.NEXT_PUBLIC_RAZORPAY_KEY,
          amount: totalPrice * 100,
          currency: "INR",
          name: "TIE",
          image: "/images/TIE_LOGO.png",
          order_id: order.data.razorpayOrderId,
          handler: async (response: any) => {
            const verifyData = {
              razorpay_order_id: response.razorpay_order_id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature,
            };

            const verifyRes = await axios.post(
              `${baseUrl}payment/verify-payment`,
              verifyData,
              {
                headers: {
                  Authorization: token,
                  "Content-Type": "application/json",
                },
              }
            );

            if (verifyRes.data.success) {
              router.push("/order-success");
            }
          },
          theme: { color: "#00999E" },
        });

        rzp.open();
      }
    } catch (err) {
      console.error("Checkout error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <ContainerWrapper>
      <BreadcrumbSchema />
      <div className="flex flex-col min-h-screen">
        {openDialog && (
          <div className="fixed inset-0 flex items-center justify-center bg-black/50 bg-opacity-30 z-50">
            <div className="bg-white p-6 rounded-md shadow-md max-w-sm w-full">
              <h2 className="text-xl font-semibold mb-2">Confirm Delete</h2>
              <p className="mb-4">Are you sure you want to delete this item?</p>
              <div className="flex justify-end gap-3">
                <button
                  onClick={() => setOpenDialog(false)}
                  className="px-4 py-2 bg-gray-300 rounded cursor-pointer hover:bg-gray-400"
                >
                  Cancel
                </button>
                <button
                  onClick={confirmDelete}
                  className="px-4 py-2 bg-red-600 text-white rounded cursor-pointer hover:bg-red-700"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        )}

        <main className="flex-1 px-4 py-10">
          {fetchLoading ? (
            <div className="flex justify-center items-center h-80">
              <div className="animate-spin h-8 w-8 border-4 border-t-transparent border-[#00999e] rounded-full"></div>
            </div>
          ) : cartList.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-12 border rounded-xl  text-center">
              <Image
                src={"/images/emptycart.svg"}
                alt="Empty cart"
                width={100}
                height={100}
                className="w-52 sm:w-64 mb-4"
              />
              <h2 className="text-2xl sm:text-4xl font-semibold text-gray-500 mb-4">
                Your Cart is empty
              </h2>
              <button
                onClick={() => router.push("/")}
                className="mt-4 bg-[#00999e] hover:bg-[#00999e] text-white px-6 py-2 rounded-lg cursor-pointer"
              >
                Back To Home
              </button>
            </div>
          ) : (
            <div className=" grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-xl font-semibold mb-4">
                  Cart ({cartList.length} item
                  {cartList.length > 1 ? "s" : ""})
                </h2>
                <div className="border rounded-md p-4">
                  <table className="w-full text-left">
                    <thead className="border-b">
                      <tr>
                        <th className="py-2">Course</th>
                        <th className="py-2 text-right">Price</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      {cartList.map((item, index) => (
                        <tr key={index} className="border-b">
                          <td className="py-2">{item.title}</td>
                          <td className="py-2 text-right">
                            ₹ {item.packagePrice}
                          </td>
                          <td className="py-2 text-right">
                            <button
                              onClick={() => {
                                setDeleteIndex(index);
                                setOpenDialog(true);
                              }}
                              className="text-red-600 hover:underline"
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="border rounded-md p-4">
                <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
                <div className="flex justify-between mb-4">
                  <span>Total Items:</span>
                  <span>{cartList.length}</span>
                </div>
                <div className="flex justify-between mb-4">
                  <span>Total Amount:</span>
                  <span>₹ {totalPrice}</span>
                </div>
                <button
                  onClick={handleCheckout}
                  disabled={loading}
                  className="cursor-pointer w-full py-3 bg-[#00999e] text-white rounded-lg font-medium text-lg mt-2"
                >
                  {loading ? "Processing..." : "Check Out"}
                </button>
              </div>
            </div>
          )}
        </main>
      </div>
    </ContainerWrapper>
  );
};

export default Cart;

/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Icon } from "@iconify/react";
import { baseUrl } from "@/utils/config";
import { toast } from "react-toastify";

export interface PackageType {
  scholarshipContent?: string[];
  scholarshipName?: string;
  id: number;
  title: string;
  packagePrice: number;
  items: string[];
  topColor?: string;
}

interface PackageCardProps {
  data: PackageType;
  setItemUpdate: React.Dispatch<React.SetStateAction<boolean>>;
  itemupdate: boolean;
}

const PackageCard: React.FC<PackageCardProps> = ({
  data,
  setItemUpdate,
  itemupdate,
}) => {
  const router = useRouter();
  const [status, setStatus] = useState(false);
  const [isInCart, setIsInCart] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;

    const fetchCartData = async () => {
      setLoading(true);
      const token =
        typeof window !== "undefined"
          ? sessionStorage.getItem("authToken")
          : null;

      try {
        if (token) {
          const res = await fetch(`${baseUrl}order/get-cart`, {
            headers: { Authorization: token },
          });
          const json = await res.json();
          if (json.success) {
            const apiCartList = json.data.flatMap((order: any) =>
              order.items.map((item: any) => ({
                id: Number(item.planId),
              }))
            );
            setIsInCart(apiCartList.some((item: any) => item.id === data?.id));
          }
        } else {
          const localCart = JSON.parse(sessionStorage.getItem("cart") || "[]");
          setIsInCart(
            localCart.some((item: any) => item.title === data?.title)
          );
        }
      } catch (err) {
        console.error("Error fetching cart:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchCartData();
  }, [status, isMounted, data?.id, data?.title]);

  const addToCart = async () => {
    setLoading(true);

    try {
      const token =
        typeof window !== "undefined"
          ? sessionStorage.getItem("authToken")
          : null;

      if (token) {
        const userId = JSON.parse(atob(token.split(".")[1])).id;
        const payload = {
          userId,
          items: [
            {
              planName: data?.title,
              amount: data?.packagePrice,
              planId: data?.id,
            },
          ],
        };
        const res = await fetch(`${baseUrl}order/add-cart`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: token,
          },
          body: JSON.stringify(payload),
        });
        const json = await res.json();
        if (json.success) {
          setItemUpdate(!itemupdate);
          setStatus(!status);
          toast.success("Item added to cart!");
        } else {
          toast.error(json.message || "Failed to add item to cart.");
        }
      } else {
        const cart = JSON.parse(sessionStorage.getItem("cart") || "[]");
        cart.push(data);
        sessionStorage.setItem("cart", JSON.stringify(cart));
        setItemUpdate(!itemupdate);
        setStatus(!status);
        toast.success("Item added to cart (guest mode)!");
      }
    } catch (err) {
      console.error("Error adding to cart:", err);
      toast.error("Something went wrong. Please try again!");
    } finally {
      setLoading(false);
    }
  };

  if (!isMounted) return null;

  return (
    <div
      className={`w-[300px] ${
        data?.scholarshipContent ? "h-[350px]" : "h-[450px]"
      } border-t-4 rounded-lg shadow-md p-5 flex flex-col justify-between items-center text-center`}
      style={{ borderTopColor: data.topColor || "#00999E" }}
    >
      <h3 className="text-xl font-semibold text-teal-700">
        {data.title || data?.scholarshipName}
      </h3>

      {data.packagePrice && (
        <p className="text-3xl font-bold text-black mt-2">
          ₹{data.packagePrice}
          <sub className="text-xs font-normal align-sub ml-1">(INR)</sub>
        </p>
      )}

      <div className="my-4 flex-1 flex flex-col justify-start gap-5">
        {(data?.scholarshipContent || data?.items || []).map(
          (item: any, idx: number) => (
            <div key={idx} className="flex items-start gap-2">
              <Icon
                icon="iconamoon:check-bold"
                className="text-teal-600 text-xl mt-1"
              />
              <p className="text-sm text-gray-700 text-left capitalize">
                {item}
              </p>
            </div>
          )
        )}
      </div>

      {data.packagePrice && (
        <button
          onClick={() => {
            if (!isInCart) {
              addToCart();
            } else {
              router.push("/cart");
            }
          }}
          disabled={loading}
          className={`cursor-pointer w-full py-2 rounded-md text-sm font-semibold capitalize transition-all flex items-center justify-center
      ${
        loading
          ? "bg-gray-400 cursor-not-allowed"
          : "bg-[#00999e] hover:bg-[#007a7f] text-white"
      }`}
        >
          {loading ? (
            <div className="flex items-center gap-2">
              <svg
                className="animate-spin h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v8z"
                />
              </svg>
              Loading...
            </div>
          ) : isInCart ? (
            "Go To Cart"
          ) : (
            "Add To Cart"
          )}
        </button>
      )}
    </div>
  );
};

export default PackageCard;

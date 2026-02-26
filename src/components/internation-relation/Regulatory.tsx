/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { baseUrl } from "@/utils/config";
import { useEffect, useState } from "react";
import ContainerWrapper from "../ContainerWrapper";
import HeadingTypography from "../Heading";
import RegulatoryCard from "../RegulatoryCard";
import { CircularProgress } from "@mui/material";

interface RegulatoryItem {
  title: string;
  image: string;
  content?: string;
  link: string;
}

export default function Regulatory() {
  const [regulatory, setRegulatory] = useState<RegulatoryItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(`${baseUrl}regulatory-bodies/public`);
        if (!res.ok) {
          throw new Error("Failed to fetch regulatory data");
        }
        const data = await res.json();
        setRegulatory(data?.data || []);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  return (
    <section id="colleges" className="bg-[#effdff] py-12 my-12">
      <ContainerWrapper>
        <HeadingTypography
          content="Regulatory bodies for Internationalization"
          textAlign="center"
        />

        {loading && (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
              marginTop: 10,
            }}
          >
            <CircularProgress sx={{ color: "#0A9DA2" }} />
          </div>
        )}

        {error && <p className="text-center text-red-500">{error}</p>}

        {!loading && !error && regulatory.length === 0 && (
          <div className="flex justify-center pt-10">
            <div className="bg-white shadow-md rounded-lg p-6 max-w-md text-center">
              <p className="text-lg font-semibold text-gray-800">
                No Regulatory Bodies Found
              </p>
              <p className="text-sm text-gray-500 mt-2">
                We couldn’t find any regulatory data right now. Please try again
                later.
              </p>
            </div>
          </div>
        )}

        {!loading && !error && regulatory.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center pt-10">
            {regulatory.map((college, index) => (
              <RegulatoryCard
                key={index}
                data={{
                  image: `${college?.image}`,
                  title: college?.title,
                  content: college?.content,
                  link: college?.link,
                }}
                cardWidth="260px"
                cardHeight="280px"
                hoverHeight="100%"
                initialheight="26%"
              />
            ))}
          </div>
        )}
      </ContainerWrapper>
    </section>
  );
}

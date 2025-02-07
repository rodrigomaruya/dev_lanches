"use client";

import Image from "next/image";
import { formatPrice } from "../../../../function/price";

import { useCardapioStore } from "@/app/_store/index";

export function Card({
  product_title,
  url,
  price,
  description,
  takeout,
}: {
  product_title: string;
  url: string;
  price: number;
  description: string | null | undefined;
  takeout: boolean;
}) {
  const { addProduct } = useCardapioStore();

  function handleGetProduct(product_title: string, url: string, price: number) {
    addProduct({
      product_title: product_title,
      url: url,
      price: price,
    });
  }

  return (
    <article className="flex w-full flex-col lg:flex-row items-center border p-2 rounded-md ">
      <div className="relative w-full  h-44">
        <Image
          src={url}
          alt={product_title}
          quality={100}
          priority={true}
          fill={true}
          className="rounded-md w-auto h-40 object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="flex flex-col w-11/12 px-2 justify-center mt-4">
        <p className="text-base md:text-lg font-bold">{product_title}</p>
        <p className="text-sm md:text-base md:leading-normal">{description}</p>
        <div className="flex items center pt-3">
          <p className="w-full">
            Preço: <strong>{formatPrice(price)}</strong>
          </p>
          {takeout && (
            <button
              className="bg-red-700 px-1 py-1 rounded-md text-white text-sm"
              onClick={() => handleGetProduct(product_title, url, price)}
            >
              TAKEOUT
            </button>
          )}
        </div>
      </div>
    </article>
  );
}

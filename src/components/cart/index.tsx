"use client";

import Link from "next/link";
import { BsFillCartFill } from "react-icons/bs";
import { useCardapioStore } from "@/app/_store/index";

export function Cart() {
  const { product } = useCardapioStore();
  return (
    <Link
      href={"/cardapio/carrinho"}
      className="m bg-green-500 py-1 flex justify-center items-center w-10 h-10 rounded-full relative"
    >
      <BsFillCartFill size={20} color="#fff" />
      <span className="absolute -top-1 -right-1 bg-red-500 text-white w-5 h-5 flex justify-center items-center rounded-full">
        {product.length}
      </span>
    </Link>
  );
}

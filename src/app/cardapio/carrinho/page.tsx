"use client";
import { Container } from "@/components/container";
import { useCardapioStore } from "../../_store/index";
import Image from "next/image";
import { formatPrice } from "@/function/price";
import { FiTrash } from "react-icons/fi";
import Link from "next/link";
import { orderMessage } from "@/function/order";
import { BsWhatsapp } from "react-icons/bs";

export default function Carrinho() {
  const { product, setProduct } = useCardapioStore();

  function handleRemoveProduct(index: number) {
    product.splice(index, 1);
    setProduct([...product]);
  }

  const totalAmount = product.reduce((total, item) => {
    return total + item.price;
  }, 0);

  return (
    <>
      <main className="pt-40 w-full bg-gray-50 min-h-screen">
        <Container>
          <div className="text-2xl font-bold text-center  mb-4">
            <h1 className="text-black">Carrinho</h1>
          </div>
          {product.length === 0 && (
            <div className=" text-2xl font-bold">Seu carrinho está vazio!!</div>
          )}
          <section className=" grid grid-cols-1 md:grid-cols-2 gap-3 ">
            {product.map((item, index) => (
              <div className="flex w-full gap-2 items-center" key={index}>
                <div className="relative w-full h-28">
                  <Image
                    src={item.url}
                    alt={item.product_title}
                    fill={true}
                    priority={true}
                    className="rounded-md w-auto h-auto object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="flex flex-col w-full p-2">
                  <div>
                    <p className="font-bold">{item.product_title}</p>
                    <p>
                      Price:{" "}
                      <span className="font-bold">
                        {formatPrice(item.price)}
                      </span>
                    </p>
                  </div>
                  <div className="flex justify-between items-end mt-1">
                    <button
                      onClick={() => handleRemoveProduct(index)}
                      className="bg-slate-500 p-2 rounded-md"
                    >
                      <FiTrash size={20} color="#fff" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </section>
        </Container>
      </main>
      <div className=" sticky bottom-0 w-full bg-slate-50 py-1">
        <Link
          href={orderMessage(product, totalAmount)}
          className="flex justify-center gap-2 bg-green-500 py-3 rounded-md text-white font-bold max-w-7xl mx-auto"
        >
          <BsWhatsapp size={20} color={"#fff"} />
          Faça seu pedido Total:
          <span className="font-bold text-white">
            {formatPrice(totalAmount)}
          </span>
        </Link>
      </div>
    </>
  );
}

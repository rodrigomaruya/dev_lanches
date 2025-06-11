import { formatPrice } from "./price";

interface CardTextProps {
  url: string;
  product_title: string;
  description?: string | null;
  price: number;
}
export function orderMessage(message: CardTextProps[], price: number) {
  const messageProduct = message.map((item) => ` ${item.product_title}  `);
  const messageOrder = `Meu pedido: ${messageProduct}  ==>  Total: ${formatPrice(
    price
  )} ||=>  POR FAVOR CONFIRME O SEU PEDIDO E DIGITE O SEU NOME:`;
  const link = `https://api.whatsapp.com/send?phone=&text=${messageOrder}`;
  return link;
}

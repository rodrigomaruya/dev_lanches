import { create } from "zustand";

export interface CardProps {
  url: string;
  product_title: string;
  description?: string | null;
  price: number;

  takeout?: boolean;
}
interface CardapioState {
  product: CardProps[];
  setProduct: (product: CardProps[]) => void;
  addProduct: (product: CardProps) => void;
}

export const useCardapioStore = create<CardapioState>((set) => ({
  product: [] as CardProps[],
  setProduct: (product) => set({ product }),
  addProduct: (newProduct) =>
    set((state) => ({
      product: [...state.product, newProduct],
    })),
}));

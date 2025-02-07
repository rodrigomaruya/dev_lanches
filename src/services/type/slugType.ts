export interface SlugProps {
  objects: ObjectProps[];
}

interface ObjectProps {
  slug: string;
  title: string;
  content: string;
  metadata: {
    products: ProductProps[];
  };
}

interface ProductProps {
  productbanner: {
    url: string;
  };
  product_title: string;
  description?: string | null | undefined;
  price: number;
  takeout: boolean;
  quantity: number;
}

import { createContext } from 'react';

interface ProductsContextType {
  showDetailProduct: boolean;
  setShowDetailProduct: (value: boolean) => void;
  voucher: string;
  setVoucher: (value: string) => void;
  listProduct: Product[];
}

const ProductsContext = createContext<ProductsContextType>({
  showDetailProduct: false,
  setShowDetailProduct: () => {},
  voucher: '',
  setVoucher: () => {},
  listProduct: [],
});

export default ProductsContext;

'use client';

import { getListProduct } from '@/api-client/get-data';
import {
  ProductsContent,
  ProductsHeader,
  ProductsSidebar,
} from '@/components/layout';
import { Layout } from 'antd';
import { createContext, useEffect, useState } from 'react';

interface ProductsContextType {
  showDetailProduct: boolean;
  setShowDetailProduct: (value: boolean) => void;
  voucher: string;
  setVoucher: (value: string) => void;
  listProduct: Product[];
}

export const ProductsContext = createContext<ProductsContextType>({
  showDetailProduct: false,
  setShowDetailProduct: () => {},
  voucher: '',
  setVoucher: () => {},
  listProduct: [],
});

export default function ProductsPage() {
  const [showDetailProduct, setShowDetailProduct] = useState(false);
  const [voucher, setVoucher] = useState('');
  const [listProduct, setListProduct] = useState<Product[]>([]);

  useEffect(() => {
    (async () => {
      const data = await getListProduct();
      setListProduct(data);
    })();
  }, []);

  return (
    <ProductsContext.Provider
      value={{
        showDetailProduct,
        setShowDetailProduct,
        voucher,
        setVoucher,
        listProduct,
      }}
    >
      <Layout className="flex flex-col h-screen">
        <ProductsHeader />
        <Layout className="flex-1 gap-5 bg-blue-100 ">
          <ProductsContent />
          <ProductsSidebar />
        </Layout>
      </Layout>
    </ProductsContext.Provider>
  );
}

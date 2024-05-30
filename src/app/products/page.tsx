'use client';

import { getListProduct } from '@/api-client/get-data';
import {
  ProductsContent,
  ProductsHeader,
  ProductsSidebar,
} from '@/components/layout';
import ProductsContext from '@/utils/product-context';
import { Layout } from 'antd';
import { useEffect, useState } from 'react';

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

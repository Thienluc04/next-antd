import { InfoCircleOutlined, SearchOutlined } from '@ant-design/icons';
import { Flex } from 'antd';
import Image from 'next/image';
import { useState } from 'react';

interface ProductItemProps {
  product: Product;
}

export function ProductItem({ product }: ProductItemProps) {
  const [showCardInfo, setShowCardInfo] = useState(false);

  return (
    <div className="max-w-full p-2 border border-slate-300">
      <Flex align="center" justify="flex-end" gap={8} className="relative">
        <InfoCircleOutlined
          size={10}
          className="text-[#1677ff] transition"
          onMouseEnter={() => setShowCardInfo(true)}
          onMouseLeave={() => setShowCardInfo(false)}
        />
        <SearchOutlined size={10} className="text-[#1677ff]" />
        {showCardInfo && (
          <div
            onMouseEnter={() => setShowCardInfo(true)}
            onMouseLeave={() => setShowCardInfo(false)}
            className="absolute left-[20%] rounded-lg shadow-md p-2 w-[230px] bg-white top-full"
          >
            <h3 className="pb-1 mb-1 text-sm border-b border-b-gray-300">
              Baltimore 4 Piece Queen Bedroom
            </h3>
            <Flex
              align="center"
              justify="space-between"
              className="mb-1 text-xs"
            >
              <p>Giá bán lẻ</p>
              <p>$ 100.00</p>
            </Flex>
            <Flex
              align="center"
              justify="space-between"
              className="mb-1 text-xs"
            >
              <p>Giá bán sỉ</p>
              <p>$ 80.00</p>
            </Flex>
            <Flex
              align="center"
              justify="space-between"
              className="mb-1 text-xs"
            >
              <p>Số lượng tồn</p>
              <p>100</p>
            </Flex>
            <Flex
              align="center"
              justify="space-between"
              className="mb-1 text-xs"
            >
              <p>Áp dụng thuế</p>
              <p>VAT</p>
            </Flex>
          </div>
        )}
      </Flex>
      <Image
        src={'/box.png'}
        alt="product"
        width={100}
        height={100}
        className="mx-auto my-2"
      />
      <p className="mb-1 text-xs">{product.name}</p>
      <Flex align="center" justify="space-between">
        <p className="text-sm font-bold">$ {product.price}</p>
        <div className="text-xs">
          <span className="text-green-500">Tồn kho: </span>
          <span>{product.stock}</span>
        </div>
      </Flex>
    </div>
  );
}

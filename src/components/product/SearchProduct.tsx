'use client';

import {
  ClearOutlined,
  PlusSquareOutlined,
  SearchOutlined,
} from '@ant-design/icons';
import { Flex, Input } from 'antd';
import Image from 'next/image';
import { useContext, useState } from 'react';
import { AddProductPopup } from '../popup';
import ProductsContext from '@/utils/product-context';

interface SearchProductProps {}

export function SearchProduct(props: SearchProductProps) {
  const [showSearchData, setShowSearchData] = useState(false);
  const [showAddProduct, setShowAddProduct] = useState(false);

  const { listProduct } = useContext(ProductsContext);

  return (
    <Flex align="center" className="relative">
      <div>
        <Input
          size="large"
          placeholder="Tìm kiếm sản phẩm"
          prefix={<SearchOutlined />}
          className="w-[400px]"
          onFocus={(e) => setShowSearchData(!showSearchData)}
        />
      </div>

      <Flex align="center" justify="center" className="mx-5">
        <ClearOutlined className="text-2xl text-white" />
      </Flex>
      {showSearchData && (
        <div className="absolute z-10 max-h-[250px] left-0 flex flex-col w-full p-1 bg-white rounded-md shadow-md top-[82%]">
          <Flex
            align="center"
            flex={1}
            className="w-full cursor-pointer"
            onClick={() => setShowAddProduct(true)}
          >
            <Flex
              align="center"
              justify="center"
              className="w-12 h-12 p-2 leading-none border-b border-r border-gray-300"
            >
              <PlusSquareOutlined className="h-auto text-xl" />
            </Flex>
            <Flex
              align="center"
              className="h-12 p-2 border-b border-gray-300"
              flex={1}
            >
              <p className="text-base font-medium">Thêm mới sản phẩm</p>
            </Flex>
          </Flex>
          <Flex flex={1} vertical className="overflow-y-auto">
            {listProduct.map((product) => (
              <Flex
                key={product.id}
                align="center"
                className="w-full cursor-pointer"
                flex={1}
              >
                <Flex
                  align="center"
                  justify="center"
                  className="w-12 h-12 p-2 leading-none border-b border-r border-gray-300"
                >
                  <Image
                    src={'/box.png'}
                    alt="search-item"
                    width={30}
                    height={30}
                  />
                </Flex>
                <Flex
                  align="center"
                  justify="space-between"
                  className="h-12 p-2 border-b border-gray-300"
                  flex={1}
                >
                  <div>
                    <p className="text-sm font-medium">{product.name}</p>
                    <p className="text-xs text-gray-500">
                      RXS56 - {product.color}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium">$ {product.price}</p>
                    <p className="text-xs text-gray-500">
                      Có thể bán {product.stock}
                    </p>
                  </div>
                </Flex>
              </Flex>
            ))}
          </Flex>
        </div>
      )}
      <AddProductPopup
        isOpen={showAddProduct}
        onOk={() => {}}
        onCancel={() => setShowAddProduct(false)}
      ></AddProductPopup>
    </Flex>
  );
}

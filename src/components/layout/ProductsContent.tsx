import { ProductsContext } from '@/app/products/page';
import {
  FilterFilled,
  LeftOutlined,
  RightOutlined,
  UnorderedListOutlined,
} from '@ant-design/icons';
import { Button, Flex } from 'antd';
import { Content } from 'antd/es/layout/layout';
import Image from 'next/image';
import { useContext, useState } from 'react';
import { ProductChoosedItem, ProductItem } from '../product';
import { FilterByCategory, FilterByProperty } from '../drawer';

interface ProductsContentProps {}

export function ProductsContent(props: ProductsContentProps) {
  const { showDetailProduct, listProduct } = useContext(ProductsContext);
  const [openFilterCategory, setOpenFilterCategory] = useState(false);
  const [openFilterProperty, setOpenFilterProperty] = useState(false);
  const [listCategory, setListCategory] = useState<string[]>([]);

  return (
    <Content className="flex flex-col gap-5">
      <Flex vertical flex={1} className="bg-white">
        {!showDetailProduct && (
          <Flex vertical align="center" justify="center" className="h-full">
            <Image src={'/box.png'} alt="box" width={100} height={100} />
            <p>Hiện chưa có sản phẩm</p>
          </Flex>
        )}
        {showDetailProduct && (
          <div className="m-1 rounded-lg shadow-sm">
            {new Array(3).fill(0).map((item, index) => (
              <ProductChoosedItem
                index={index}
                key={index}
              ></ProductChoosedItem>
            ))}
          </div>
        )}
      </Flex>
      <div className="flex-1 px-6 py-4 overflow-y-auto bg-white">
        <Flex align="center" justify="space-between" className="mb-5">
          <Flex align="center" gap={12}>
            <Button
              icon={<UnorderedListOutlined />}
              className="border border-slate-500 rounded-none !w-6 !h-6"
              onClick={() => setOpenFilterCategory(true)}
            />
            <Button
              icon={<FilterFilled />}
              className="border border-slate-500 rounded-none !w-6 !h-6"
              onClick={() => setOpenFilterProperty(true)}
            />
          </Flex>
          <Flex
            align="center"
            flex={1}
            gap={40}
            className="pb-1 mx-10 border-b border-b-gray-300"
          >
            {listCategory.map((item, index) => (
              <p
                key={index}
                className="px-2 font-medium cursor-pointer hover:text-blue-500 hover:font-medium"
              >
                {item}
              </p>
            ))}
          </Flex>
          <Flex align="center" gap={12}>
            <p className="text-base font-medium">1/2</p>
            <Flex align="center" gap={12}>
              <LeftOutlined />
              <RightOutlined />
            </Flex>
          </Flex>
        </Flex>
        <div className="grid grid-cols-6 gap-3">
          {listProduct.map((product) => (
            <ProductItem key={product.id} product={product} />
          ))}
        </div>
      </div>

      <FilterByCategory
        open={openFilterCategory}
        onClose={() => setOpenFilterCategory(false)}
        setListCategory={setListCategory}
      ></FilterByCategory>
      <FilterByProperty
        open={openFilterProperty}
        onClose={() => setOpenFilterProperty(false)}
      ></FilterByProperty>
    </Content>
  );
}

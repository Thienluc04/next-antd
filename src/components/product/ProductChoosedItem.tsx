import { Flex } from 'antd';
import { useState } from 'react';
import { PencilIcon, TrashIcon } from '../icons';
import {
  InfoCircleOutlined,
  MinusOutlined,
  PlusOutlined,
} from '@ant-design/icons';

interface ProductChoosedItemProps {
  index: number;
}

export function ProductChoosedItem({ index }: ProductChoosedItemProps) {
  const [showCardInfo, setShowCardInfo] = useState(false);
  return (
    <Flex align="center" justify="space-between" className="p-2">
      <Flex align="center" gap={20}>
        <p className="text-base font-medium">{index + 1}</p>
        <TrashIcon className="w-4 h-4 text-red-500" />
        <p>PVN02</p>
        <div>
          <Flex align="center" gap={4}>
            <p className="text-sm">Product name item</p>
            <div className="relative">
              <InfoCircleOutlined
                className="text-xs text-blue-400"
                onMouseEnter={() => setShowCardInfo(true)}
                onMouseLeave={() => setShowCardInfo(false)}
              />
              {showCardInfo && (
                <div
                  onMouseEnter={() => setShowCardInfo(true)}
                  onMouseLeave={() => setShowCardInfo(false)}
                  className="absolute left-0 -translate-x-2/4 z-[5] rounded-lg shadow-md p-2 w-[230px] bg-white top-full"
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
            </div>
          </Flex>
          <Flex align="center" gap={4}>
            <span className="text-xs">abc</span>
            <PencilIcon className="w-3 h-3" />
          </Flex>
        </div>
      </Flex>
      <Flex align="center" gap={30}>
        <p className="px-5 text-base border-b border-b-gray-300">cái</p>
        <Flex align="center" className="h-5">
          <Flex
            align="center"
            justify="center"
            className="w-5 h-full border border-gray-300"
          >
            <MinusOutlined className="text-xs" />
          </Flex>
          <Flex
            align="center"
            justify="center"
            className="w-10 h-full text-xs border-t border-b border-gray-300"
          >
            1
          </Flex>
          <Flex
            align="center"
            justify="center"
            className="w-5 h-full border border-gray-300"
          >
            <PlusOutlined className="text-xs" />
          </Flex>
        </Flex>
        <p className="px-5 text-base border-b border-b-gray-300">$ 10.00</p>
        <p className="px-5 text-base font-medium border-b border-b-gray-300">
          $ 10.00
        </p>
      </Flex>
    </Flex>
  );
}

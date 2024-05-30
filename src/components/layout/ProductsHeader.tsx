'use client';

import {
  CloseCircleOutlined,
  FormOutlined,
  HistoryOutlined,
  HomeOutlined,
  PlusOutlined,
  SnippetsOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Flex, Switch } from 'antd';
import { Header } from 'antd/es/layout/layout';
import Paragraph from 'antd/es/typography/Paragraph';
import { LocationIcon } from '../icons';
import { SearchProduct } from '../product';
import { useContext, useState } from 'react';
import { ShortcutPopup } from '../popup';
import ProductsContext from '@/utils/product-context';

interface ProductsHeaderProps {}

export function ProductsHeader(props: ProductsHeaderProps) {
  const { showDetailProduct } = useContext(ProductsContext);
  const [showShortcutPopup, setShowShortcutPopup] = useState(false);

  return (
    <Header className="bg-blue-600 h-[54px]">
      <Flex align="center" justify="space-between" className="h-full">
        <Flex align="center" className="h-full">
          <SearchProduct />
          {showDetailProduct && (
            <Flex
              align="center"
              gap={30}
              className="px-5 py-3 mr-2 text-white bg-blue-400 rounded-lg "
            >
              <Paragraph className="!mb-0 text-base text-white">
                Đơn 1
              </Paragraph>
              <CloseCircleOutlined className="text-lg" />
            </Flex>
          )}
          <Flex align="center" gap={30} className="h-full px-5 mr-5 bg-white">
            <Paragraph className="!mb-0 text-base">
              {showDetailProduct ? 'Thu (0967 ...' : 'Đơn 1'}
            </Paragraph>
            <CloseCircleOutlined className="text-lg" />
          </Flex>
          <Flex align="center" justify="center">
            <PlusOutlined className="text-3xl text-white" />
          </Flex>
        </Flex>
        <Flex align="center" gap={100}>
          <div>
            <div className="flex items-center gap-1 text-white">
              <LocationIcon className="w-4 h-4" />
              <p className="text-sm">Store A</p>
            </div>
            <div className="flex items-center gap-1 text-white">
              <UserOutlined className="w-4 h-4" />
              <p className="text-sm">Staff A</p>
            </div>
          </div>
          <Flex align="center" gap={20}>
            <Flex vertical justify="center" align="center">
              <Switch className="checked:bg-[#1677ff] bg-slate-300" />
              <p className="text-xs text-white">Đặt hàng trước</p>
            </Flex>
            <Flex align="center" justify="center">
              <HistoryOutlined className="text-2xl text-white" />
            </Flex>
            <Flex align="center" justify="center">
              <FormOutlined
                className="text-2xl text-white"
                onClick={() => setShowShortcutPopup(true)}
              />
            </Flex>
            <Flex align="center" justify="center">
              <SnippetsOutlined className="text-2xl text-white" />
            </Flex>
            <Flex align="center" justify="center">
              <HomeOutlined className="text-2xl text-white" />
            </Flex>
          </Flex>
        </Flex>
      </Flex>

      <ShortcutPopup
        isOpen={showShortcutPopup}
        onCancel={() => setShowShortcutPopup(false)}
      ></ShortcutPopup>
    </Header>
  );
}

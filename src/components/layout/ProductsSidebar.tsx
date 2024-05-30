'use client';

import { DownOutlined, GiftFilled } from '@ant-design/icons';
import { Button, Dropdown, Flex, Radio, Space, Switch } from 'antd';
import Sider from 'antd/es/layout/Sider';
import { useContext, useState } from 'react';
import { CustomerDetail, SearchCustomer } from '../customer';
import {
  ChooseAddress,
  ChoosePayments,
  ChoosePrice,
  ChooseVoucher,
  NoteInfo,
} from '../product';
import ProductsContext from '@/utils/product-context';

interface ProductsSidebarProps {}

const listMenu = [
  { key: '1', label: 'Bán trực tiếp' },
  { key: '2', label: 'Facebook' },
  { key: '3', label: 'Google' },
  { key: '4', label: 'Thương mại điện tử' },
];

export function ProductsSidebar(props: ProductsSidebarProps) {
  const { showDetailProduct, voucher } = useContext(ProductsContext);
  const [isDelivery, setIsDelivery] = useState(false);
  const [currentUser, setCurrentUser] = useState<User>();

  return (
    <Sider width="35%" className=" max-w-full flex flex-col  p-5 !bg-white">
      <Flex vertical className="h-full">
        <div>
          <SearchCustomer setCurrentUser={setCurrentUser}></SearchCustomer>
          <CustomerDetail currentUser={currentUser}></CustomerDetail>
          <Flex
            align="center"
            justify="space-between"
            className="w-full py-1 mb-2 border-t border-b border-slate-300"
          >
            <Flex align="center" gap={20}>
              <Switch
                size="small"
                onChange={(checked) => setIsDelivery(checked)}
              ></Switch>
              <p className="text-base">Giao hàng</p>
            </Flex>
            {showDetailProduct && isDelivery && (
              <Flex align="center" gap={10}>
                <p className="text-base">Kênh:</p>
                <Dropdown menu={{ items: listMenu }}>
                  <p className="text-blue-500 cursor-pointer">
                    Bán trực tiếp
                    <span>
                      <DownOutlined className="ml-2 text-xs text-gray-500" />
                    </span>
                  </p>
                </Dropdown>
              </Flex>
            )}
          </Flex>
          <ChooseAddress></ChooseAddress>
          <Flex align="center" justify="space-between" className="mb-2">
            <Radio.Group defaultValue={1}>
              <Radio value={1}>Tạo hóa đơn</Radio>
              <Radio value={2}>Đặt trực tuyến</Radio>
              <Radio value={3}>Trả hàng</Radio>
            </Radio.Group>
          </Flex>
          <Space direction="vertical" size={'small'} className="w-full">
            <Flex
              align="center"
              justify="space-between"
              className="w-full text-base"
            >
              <p>
                {showDetailProduct
                  ? 'Tổng tiền (3 sản phẩm)'
                  : 'Tổng tiền (0 sản phẩm)'}
                {showDetailProduct && (
                  <GiftFilled className="ml-1 text-blue-500" />
                )}
              </p>
              <p>{showDetailProduct ? '$ 50.00' : '$ 0.00'}</p>
            </Flex>
            {showDetailProduct && voucher && (
              <Flex
                align="center"
                justify="space-between"
                className="w-full text-base"
              >
                <p>CTKM</p>
                <p>{voucher}</p>
              </Flex>
            )}
            <Flex
              align="center"
              justify="space-between"
              className="w-full text-base"
            >
              <p>VAT</p>
              <p>$ 0.00</p>
            </Flex>
            <Flex
              align="center"
              justify="space-between"
              className="w-full text-base"
            >
              <p>Chiết khấu</p>
              <p>$ 0.00</p>
            </Flex>
            <Flex
              align="center"
              justify="space-between"
              className={`w-full text-base ${
                showDetailProduct && 'font-medium'
              }`}
            >
              <p>Khách phải trả</p>
              <p>{showDetailProduct ? '$ 50.00' : '$ 0.00'}</p>
            </Flex>
            <Flex
              align="center"
              justify="space-between"
              className="w-full text-base"
            >
              <p>Tiền khách đưa</p>
              <p></p>
            </Flex>
            <ChoosePayments></ChoosePayments>
            <ChoosePrice></ChoosePrice>
            <Flex
              align="center"
              justify="space-between"
              className="w-full text-base"
            >
              <p>Tiền thừa</p>
              <p
                className={`${showDetailProduct && 'text-red-500 font-medium'}`}
              >
                {showDetailProduct ? '$ 10.00' : '$ 0.00'}
              </p>
            </Flex>
            <NoteInfo></NoteInfo>
            {showDetailProduct && <ChooseVoucher></ChooseVoucher>}
          </Space>
        </div>
        <Flex align="flex-end" flex={1} justify="center" gap={40} className="">
          <Button
            className="text-white bg-orange-500 hover:!bg-orange-500 text-xl font-bold w-[200px] h-auto py-2"
            type="primary"
          >
            In hóa đơn
          </Button>
          <Button
            className="text-white text-xl font-bold w-[200px] h-auto py-2"
            type="primary"
          >
            Thanh toán
          </Button>
        </Flex>
      </Flex>
    </Sider>
  );
}

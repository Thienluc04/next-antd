'use client';

import {
  PlusOutlined,
  PlusSquareOutlined,
  SearchOutlined,
} from '@ant-design/icons';
import { Button, Flex, Input } from 'antd';
import { useContext, useEffect, useState } from 'react';
import { AddCustomerPopup } from '../popup';
import { getListUser } from '@/api-client/get-data';
import ProductsContext from '@/utils/product-context';

interface SearchCustomerProps {
  setCurrentUser: (user: User) => void;
}

export function SearchCustomer({ setCurrentUser }: SearchCustomerProps) {
  const [showSearchData, setShowSearchData] = useState(false);
  const [showAddCustomerPopup, setShowAddCustomerPopup] = useState(false);
  const [listUser, setListUser] = useState<User[]>([]);

  const { setShowDetailProduct } = useContext(ProductsContext);

  useEffect(() => {
    (async () => {
      const data = await getListUser();
      setListUser(data);
    })();
  }, []);

  return (
    <Flex align="center" gap={10} className="relative mb-2">
      <Input
        size="middle"
        placeholder="Tìm kiếm khách hàng"
        prefix={<SearchOutlined />}
        className="w-full h-8"
        onFocus={() => setShowSearchData(!showSearchData)}
      />
      <Button
        type="primary"
        icon={<PlusOutlined className="!text-xl" />}
        className="!w-10"
      />
      {showSearchData && (
        <div className="absolute z-10 max-h-[250px] left-0 flex flex-col w-full p-1 bg-white rounded-md shadow-md top-full">
          <Flex
            align="center"
            flex={1}
            className="w-full border-b border-gray-200 cursor-pointer"
            onClick={() => setShowAddCustomerPopup(true)}
          >
            <Flex
              align="center"
              justify="center"
              className="px-5 py-3 leading-none "
            >
              <PlusSquareOutlined className="h-auto text-xl" />
            </Flex>
            <Flex align="center" className="" flex={1}>
              <p className="text-base font-medium">Thêm mới khách hàng</p>
            </Flex>
          </Flex>
          <Flex flex={1} vertical className="overflow-y-auto">
            {listUser.map((user) => (
              <div
                key={user.id}
                className="px-5 py-2 cursor-pointer hover:bg-blue-100 group"
                onClick={() => {
                  setShowDetailProduct(true);
                  setCurrentUser(user);
                }}
              >
                <p className="font-medium group-hover:text-blue-400">
                  {user.name}
                </p>
                <p>{user.phone_number}</p>
              </div>
            ))}
          </Flex>
        </div>
      )}

      <AddCustomerPopup
        isOpen={showAddCustomerPopup}
        onCancel={() => setShowAddCustomerPopup(false)}
        onOk={() => {}}
      />
    </Flex>
  );
}

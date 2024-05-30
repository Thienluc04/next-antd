import { useContext, useState } from 'react';
import { UserIcon } from '../icons';
import { Flex } from 'antd';
import { CloseCircleOutlined } from '@ant-design/icons';
import { CustomerDetailPopup } from '../popup';
import ProductsContext from '@/utils/product-context';

interface CustomerDetailProps {
  currentUser?: User;
}

export function CustomerDetail({ currentUser }: CustomerDetailProps) {
  const { showDetailProduct } = useContext(ProductsContext);

  const [showCustomerDetail, setShowCustomerDetail] = useState(false);

  return (
    <>
      {showDetailProduct && (
        <>
          <Flex justify="space-between" className="mb-2">
            <Flex align="center" gap={20}>
              <UserIcon className="w-8 h-8" />
              <div>
                <p className="mb-1 text-base">
                  <span
                    className="font-medium text-blue-500 cursor-pointer"
                    onClick={() => setShowCustomerDetail(true)}
                  >
                    {currentUser?.name}
                  </span>{' '}
                  - {currentUser?.phone_number}
                </p>
                <Flex align="center" gap={40}>
                  <p className="text-base">
                    <span className="font-medium">Công nợ:</span> 0
                  </p>
                  <p className="text-base">
                    <span className="font-medium">Điểm hiện tại:</span>1000
                  </p>
                </Flex>
              </div>
            </Flex>
            <CloseCircleOutlined className="text-lg text-blue-500" />
          </Flex>

          <CustomerDetailPopup
            isOpen={showCustomerDetail}
            onCancel={() => setShowCustomerDetail(false)}
            onOk={() => {}}
            currentUser={currentUser}
          />
        </>
      )}
    </>
  );
}

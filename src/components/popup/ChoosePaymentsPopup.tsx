import { AccountBookOutlined, DownOutlined } from '@ant-design/icons';
import { Button, Flex, Modal } from 'antd';
import * as React from 'react';
import { TrashIcon } from '../icons';

interface ChoosePaymentsPopupProps {
  isOpen: boolean;
  onOk: () => void;
  onCancel?: () => void;
}

const listMethod = [
  'Paypal',
  'COD',
  'Visa',
  'Tiền mặt',
  'AfterPay',
  'Mastercard',
  'American Express',
];

export function ChoosePaymentsPopup({
  isOpen,
  onOk,
  onCancel,
}: ChoosePaymentsPopupProps) {
  return (
    <Modal
      open={isOpen}
      onOk={onOk}
      onCancel={onCancel}
      cancelButtonProps={{ className: 'hidden invisible w-0 h-0' }}
      okButtonProps={{
        className: 'w-[100px]',
      }}
      okText="Lưu"
      title="Hình thức thanh toán"
      className="add-customer-popup"
      width={700}
    >
      <div className="pt-3">
        <Flex align="center" justify="space-between" className="mb-2">
          <p>Khách phải trả</p>
          <p>$ 31.09</p>
        </Flex>
        <Flex align="center" gap={20} wrap className="mb-5">
          {listMethod.map((item, index) => (
            <Button
              key={index}
              className="text-blue-500 font-medium border-blue-500 hover:!text-white hover:!bg-blue-500 w-auto min-w-[120px]"
              icon={<AccountBookOutlined />}
            >
              {item}
            </Button>
          ))}
        </Flex>
        <Flex align="center" justify="space-between" gap={30} className="mb-4">
          <Flex vertical flex={1} gap={20}>
            <Flex
              align="center"
              justify="space-between"
              className="px-2 pb-1 border-b border-b-gray-300"
            >
              <p>COD</p>
              <DownOutlined />
            </Flex>
            <Flex
              align="center"
              justify="space-between"
              className="px-2 pb-1 border-b border-b-gray-300"
            >
              <p>Mastercard</p>
              <DownOutlined />
            </Flex>
          </Flex>
          <Flex vertical flex={1} gap={20}>
            <Flex align="center" gap={20}>
              <Flex
                align="center"
                justify="flex-end"
                className="px-2 pb-1 border-b border-b-gray-300"
                flex={1}
              >
                <p>$ 20.00</p>
              </Flex>
              <TrashIcon className="w-5 h-5 text-red-500"></TrashIcon>
            </Flex>
            <Flex align="center" gap={20}>
              <Flex
                align="center"
                justify="flex-end"
                className="px-2 pb-1 border-b border-b-gray-300"
                flex={1}
              >
                <p>$ 1.09</p>
              </Flex>
              <TrashIcon className="w-5 h-5 text-red-500"></TrashIcon>
            </Flex>
          </Flex>
        </Flex>
        <Flex align="center" justify="space-between" className="mb-4 mr-10">
          <p>Tổng tiền khách trả</p>
          <p>$ 31.09</p>
        </Flex>
        <Flex align="center" justify="space-between" className="mb-4 mr-10">
          <p>Tổng thừa</p>
          <p>0</p>
        </Flex>
      </div>
      <div className="h-[1px] bg-gray-300 mb-2"></div>
    </Modal>
  );
}

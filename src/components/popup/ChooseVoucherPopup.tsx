import { ProductsContext } from '@/app/products/page';
import { Button, Flex, Input, Modal, Radio } from 'antd';
import { useContext, useState } from 'react';

interface ChooseVoucherPopupProps {
  isOpen: boolean;
  onOk: () => void;
  onCancel?: () => void;
}

export function ChooseVoucherPopup({
  isOpen,
  onOk,
  onCancel,
}: ChooseVoucherPopupProps) {
  const { setVoucher } = useContext(ProductsContext);
  const [currentVoucher, setCurrentVoucher] = useState('');

  const handleSubmitVoucher = () => {
    if (currentVoucher.length > 0) {
      setVoucher(currentVoucher);
      onOk();
    }
  };

  return (
    <Modal
      open={isOpen}
      onOk={handleSubmitVoucher}
      onCancel={onCancel}
      cancelButtonProps={{ className: 'hidden invisible w-0 h-0' }}
      okButtonProps={{
        className: 'w-[100px]',
      }}
      okText="Áp dụng"
      title="Khuyến mãi áp dụng"
      className="add-customer-popup"
      width={800}
    >
      <div className="px-3">
        <div className="grid justify-between grid-cols-3 pt-1">
          <Radio.Group
            className="flex flex-col gap-[10px]"
            onChange={(e) => setCurrentVoucher(e.target.value)}
          >
            <Flex align="center" gap={20}>
              <div className="w-5"></div>
              <h3 className="text-sm font-medium">Chương trình khuyến mãi</h3>
            </Flex>
            <Flex align="center" gap={20}>
              <div>
                <Radio value={'Khuyến mãi hè 2021'} className="gap-4">
                  Khuyến mãi hè 2021
                </Radio>
              </div>
            </Flex>
            <Flex align="center" gap={20}>
              <div>
                <Radio value={'Khuyến mãi trung thu 2021'} className="gap-4">
                  Khuyến mãi trung thu 2021
                </Radio>
              </div>
            </Flex>
            <Flex align="center" gap={20}>
              <div>
                <Radio value={'Khuyến mãi xuân 2022'} className="gap-4">
                  Khuyến mãi xuân 2022
                </Radio>
              </div>
            </Flex>
          </Radio.Group>
          <Flex vertical gap={10} align="center">
            <h3 className="text-sm font-medium">Giá trị</h3>
            <p className="text-sm">$ 100.00</p>
            <p className="text-sm">$ 100.00</p>
            <p className="text-sm">$ 20.00</p>
          </Flex>
          <Flex vertical gap={10} align="flex-end">
            <h3 className="text-sm font-medium">Hạn mức áp dụng</h3>
            <p className="text-sm">$ 200.00</p>
            <p className="text-sm">$ 150.00</p>
            <p className="text-sm">$ 100.00</p>
          </Flex>
        </div>
        <div className="mt-3 ml-10">
          <p className="mb-2 text-sm">Voucher</p>
          <Flex gap={10}>
            <Input
              size="middle"
              placeholder="Nhập voucher"
              className="w-[300px]"
            ></Input>
            <Button className="text-white bg-orange-500 hover:!text-white hover:!bg-orange-500">
              Kiểm tra
            </Button>
          </Flex>
        </div>
      </div>
      <div className="h-[1px] bg-gray-300 mt-4"></div>
    </Modal>
  );
}

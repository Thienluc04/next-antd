import { MinusOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, Flex, Modal } from 'antd';
import Image from 'next/image';

interface AddProductPopupProps {
  isOpen: boolean;
  onOk: () => void;
  onCancel?: () => void;
}

export function AddProductPopup({
  isOpen,
  onOk,
  onCancel,
}: AddProductPopupProps) {
  return (
    <Modal
      open={isOpen}
      onOk={onOk}
      onCancel={onCancel}
      cancelButtonProps={{ className: 'hidden invisible w-0 h-0' }}
      okButtonProps={{
        className: 'w-[140px] mx-auto',
      }}
      okText="Thêm sản phẩm"
      title="Hiệu chỉnh sản phẩm"
      className="add-customer-popup"
      width={700}
    >
      <Flex gap={30} className="pt-4">
        <div>
          <Image
            src={'/box.png'}
            alt="add-product"
            width={150}
            height={150}
          ></Image>
        </div>
        <div>
          <h3 className="mb-2 text-base font-medium">
            CBaltimore 4 Piece Queen Bedroom Package
          </h3>
          <Flex align="center" gap={20} className="mb-2">
            <p className="text-sm font-semibold">$ 1.000</p>
            <p className="text-xs text-green-500">In stock: 100</p>
          </Flex>
          <div className="mb-3">
            <p className="mb-2 text-sm">Kích thước</p>
            <Flex align="center" gap={10}>
              <Button
                type="default"
                className="border-gray-400 text-black hover:!text-white hover:!bg-blue-500 w-[100px]"
              >
                100 x 200
              </Button>
              <Button
                type="default"
                className="border-gray-400 text-black hover:!text-white hover:!bg-blue-500 w-[100px]"
              >
                120 x 200
              </Button>
              <Button
                type="default"
                className="border-gray-400 text-black hover:!text-white hover:!bg-blue-500 w-[100px]"
              >
                140 x 200
              </Button>
              <Button
                type="default"
                className="border-gray-400 text-black hover:!text-white hover:!bg-blue-500 w-[100px]"
              >
                160 x 200
              </Button>
            </Flex>
          </div>
          <div className="mb-3">
            <p className="mb-2 text-sm">Màu sắc</p>
            <Flex align="center" gap={10}>
              <Button
                type="default"
                className="border-gray-400 text-black hover:!text-white hover:!bg-blue-500 w-[100px]"
              >
                Green
              </Button>
              <Button
                type="default"
                className="border-gray-400 text-black hover:!text-white hover:!bg-blue-500 w-[100px]"
              >
                Brown
              </Button>
              <Button
                type="default"
                className="border-gray-400 text-black hover:!text-white hover:!bg-blue-500 w-[100px]"
              >
                White
              </Button>
            </Flex>
          </div>
          <div className="mb-6">
            <p className="mb-2 text-sm">Số lượng</p>
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
          </div>
        </div>
      </Flex>
      <div className="h-[1px] bg-gray-300"></div>
    </Modal>
  );
}

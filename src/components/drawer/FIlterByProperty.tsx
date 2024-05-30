import { Button, Drawer, Flex } from 'antd';

interface FilterByPropertyProps {
  open: boolean;
  onClose: () => void;
}

export function FilterByProperty({ onClose, open }: FilterByPropertyProps) {
  return (
    <Drawer
      title="Thuộc tính sản phẩm"
      onClose={onClose}
      open={open}
      placement="left"
      width={500}
    >
      <Flex vertical className="h-full">
        <div className="mb-5">
          <h3 className="mb-2 font-medium">Kích thước</h3>
          <Flex gap={10} align="center">
            <Button
              type="default"
              className="text-black border-gray-400 hover:!text-white hover:!bg-blue-500 w-[100px] rounded-none"
            >
              100 x 200
            </Button>
            <Button
              type="default"
              className="text-black border-gray-400 hover:!text-white hover:!bg-blue-500 w-[100px] rounded-none"
            >
              120 x 200
            </Button>
            <Button
              type="default"
              className="text-black border-gray-400 hover:!text-white hover:!bg-blue-500 w-[100px] rounded-none"
            >
              140 x 200
            </Button>
            <Button
              type="default"
              className="text-black border-gray-400 hover:!text-white hover:!bg-blue-500 w-[100px] rounded-none"
            >
              160 x 200
            </Button>
          </Flex>
        </div>
        <div className="mb-5">
          <h3 className="mb-2 font-medium">Độ dày</h3>
          <Flex gap={10} align="center">
            <Button
              type="default"
              className="text-black border-gray-400 hover:!text-white hover:!bg-blue-500 w-[100px] rounded-none"
            >
              10
            </Button>
            <Button
              type="default"
              className="text-black border-gray-400 hover:!text-white hover:!bg-blue-500 w-[100px] rounded-none"
            >
              15
            </Button>
            <Button
              type="default"
              className="text-black border-gray-400 hover:!text-white hover:!bg-blue-500 w-[100px] rounded-none"
            >
              20
            </Button>
          </Flex>
        </div>
        <div>
          <h3 className="mb-2 font-medium">Màu sắc</h3>
          <Flex gap={10} align="center">
            <Button
              type="default"
              className="text-black border-gray-400 hover:!text-white hover:!bg-blue-500 w-[100px] rounded-none"
            >
              Green
            </Button>
            <Button
              type="default"
              className="text-black border-gray-400 hover:!text-white hover:!bg-blue-500 w-[100px] rounded-none"
            >
              Brown
            </Button>
            <Button
              type="default"
              className="text-black border-gray-400 hover:!text-white hover:!bg-blue-500 w-[100px] rounded-none"
            >
              White
            </Button>
          </Flex>
        </div>
        <Flex align="end" justify="center" flex={1}>
          <Button
            type="primary"
            className="h-10 text-xl rounded-md font-medium w-[160px]"
          >
            Xác nhận
          </Button>
        </Flex>
      </Flex>
    </Drawer>
  );
}

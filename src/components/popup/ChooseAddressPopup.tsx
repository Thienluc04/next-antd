import { Flex, Input, Modal, Select } from 'antd';

interface ChooseAddressPopupProps {
  isOpen: boolean;
  onOk: () => void;
  onCancel?: () => void;
}

export function ChooseAddressPopup({
  isOpen,
  onOk,
  onCancel,
}: ChooseAddressPopupProps) {
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
      title="Địa chỉ giao hàng"
      className="add-customer-popup"
      width={700}
    >
      <div className="px-4 pt-2">
        <div className="grid grid-cols-2 gap-x-8 gap-y-5">
          <Flex flex={1} vertical>
            <label className="mb-1 text-sm font-medium">Tên khách hàng</label>
            <Input
              size="middle"
              className="w-full"
              placeholder="Nhập tên khách hàng"
            />
          </Flex>
          <Flex flex={1} vertical>
            <label className="mb-1 text-sm font-medium">Địa chỉ</label>
            <Input
              size="middle"
              className="w-full"
              placeholder="Nhập địa chỉ"
            />
          </Flex>
          <Flex flex={1} vertical>
            <label className="mb-1 text-sm font-medium">Số điện thoại</label>
            <Input
              size="middle"
              className="w-full"
              placeholder="Nhập số điện thoại"
            />
          </Flex>
          <Flex flex={1} vertical>
            <label className="mb-1 text-sm font-medium">Công ty</label>
            <Input
              size="middle"
              className="w-full"
              placeholder="Nhập tên công ty"
            />
          </Flex>
          <Flex flex={1} vertical>
            <label className="mb-1 text-sm font-medium">
              Quốc gia/ Khu vực
            </label>
            <Select placeholder="Chọn quốc gia">
              <Select.Option value="vn">Việt Nam</Select.Option>
              <Select.Option value="usa">Hoa Kỳ</Select.Option>
              <Select.Option value="sig">Singapore</Select.Option>
              <Select.Option value="jp">Nhật Bản</Select.Option>
            </Select>
          </Flex>
          <Flex flex={1} vertical>
            <label className="mb-1 text-sm font-medium">Tỉnh/ thành phố</label>
            <Select placeholder="Chọn tỉnh/ thành phố">
              <Select.Option value="hn">Hà Nội</Select.Option>
              <Select.Option value="hcm">Hồ Chí Minh</Select.Option>
              <Select.Option value="hp">Hải Phòng</Select.Option>
              <Select.Option value="dn">Đà Nẵng</Select.Option>
            </Select>
          </Flex>
          <Flex flex={1} vertical>
            <label className="mb-1 text-sm font-medium">Mã bưu điện</label>
            <Input
              size="middle"
              className="w-full"
              placeholder="Nhập mã bưu điện"
            />
          </Flex>
        </div>
      </div>
      <div className="h-[1px] bg-gray-300 my-4"></div>
    </Modal>
  );
}

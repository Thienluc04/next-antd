import { DatePicker, Flex, Input, Modal, Radio, Select } from 'antd';

interface AddCustomerPopupProps {
  isOpen: boolean;
  onOk: () => void;
  onCancel?: () => void;
}

export function AddCustomerPopup({
  isOpen,
  onCancel,
  onOk,
}: AddCustomerPopupProps) {
  return (
    <Modal
      open={isOpen}
      onOk={onOk}
      onCancel={onCancel}
      cancelButtonProps={{ className: 'hidden' }}
      okButtonProps={{ className: 'w-[100px]' }}
      okText="Thêm"
      title="Thêm mới khách hàng"
      className="add-customer-popup"
      width={800}
    >
      <div className="px-4">
        <div className="grid grid-cols-2 gap-x-8 gap-y-5">
          <Flex flex={1} vertical>
            <label className="mb-1 text-sm font-medium">
              Tên khách hàng
              <span className="text-red-500">*</span>
            </label>
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
            <label className="mb-1 text-sm font-medium">
              Số điện thoại
              <span className="text-red-500">*</span>
            </label>
            <Input
              size="middle"
              className="w-full"
              placeholder="Nhập số điện thoại"
            />
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
            <label className="mb-1 text-sm font-medium">Email</label>
            <Input size="middle" className="w-full" placeholder="Nhập email" />
          </Flex>
          <Flex flex={1} vertical>
            <label className="mb-1 text-sm font-medium">Quận/ huyện</label>
            <Select placeholder="Chọn quận/ huyện">
              <Select.Option value="tx">Thanh Xuân</Select.Option>
              <Select.Option value="cg">Cầu Giấy</Select.Option>
              <Select.Option value="md">Mỹ Đình</Select.Option>
              <Select.Option value="hm">Hoàng Mai</Select.Option>
            </Select>
          </Flex>
          <Flex flex={1} vertical>
            <label className="mb-1 text-sm font-medium">Ngày sinh</label>
            <DatePicker placeholder="01-01-1999" />
          </Flex>
        </div>
        <div className="mt-5">
          <p className="mb-3 text-sm font-medium">Giới tính</p>
          <Radio.Group defaultValue={1}>
            <Radio value={1}>Nam</Radio>
            <Radio value={2}>Nữ</Radio>
            <Radio value={3}>Khác</Radio>
          </Radio.Group>
        </div>
      </div>
      <div className="h-[1px] bg-gray-400 my-4"></div>
    </Modal>
  );
}

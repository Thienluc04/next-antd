import { DatePicker, Flex, Input, Modal, Radio, Select } from 'antd';
import dayjs from 'dayjs';

interface CustomerDetailPopupProps {
  isOpen: boolean;
  onOk: () => void;
  onCancel?: () => void;
  currentUser?: User;
}

export function CustomerDetailPopup({
  isOpen,
  onCancel,
  onOk,
  currentUser,
}: CustomerDetailPopupProps) {
  console.log('currentUser:', currentUser);
  return (
    <Modal
      open={isOpen}
      onOk={onOk}
      onCancel={onCancel}
      cancelButtonProps={{ className: 'hidden' }}
      okButtonProps={{ className: 'w-[100px]' }}
      okText="Cập nhật"
      title="Thông tin khách hàng"
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
              value={currentUser?.name}
            />
          </Flex>
          <Flex flex={1} vertical>
            <label className="mb-1 text-sm font-medium">Địa chỉ</label>
            <Input
              size="middle"
              className="w-full"
              placeholder="Nhập địa chỉ"
              value={currentUser?.address}
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
              value={currentUser?.phone_number}
            />
          </Flex>
          <Flex flex={1} vertical>
            <label className="mb-1 text-sm font-medium">Tỉnh/ thành phố</label>
            <Select
              placeholder="Chọn tỉnh/ thành phố"
              value={currentUser?.city}
            >
              <Select.Option value="Hà Nội">Hà Nội</Select.Option>
              <Select.Option value="Hồ Chí Minh">Hồ Chí Minh</Select.Option>
              <Select.Option value="Hải Phòng">Hải Phòng</Select.Option>
              <Select.Option value="Đà Nẵng">Đà Nẵng</Select.Option>
            </Select>
          </Flex>
          <Flex flex={1} vertical>
            <label className="mb-1 text-sm font-medium">Email</label>
            <Input
              size="middle"
              className="w-full"
              placeholder="Nhập email"
              value={currentUser?.email}
            />
          </Flex>
          <Flex flex={1} vertical>
            <label className="mb-1 text-sm font-medium">Quận/ huyện</label>
            <Select
              placeholder="Chọn quận/ huyện"
              value={currentUser?.district}
            >
              <Select.Option value="Thanh Xuân">Thanh Xuân</Select.Option>
              <Select.Option value="Cầu Giấy">Cầu Giấy</Select.Option>
              <Select.Option value="Mỹ Đình">Mỹ Đình</Select.Option>
              <Select.Option value="Hoàng Mai">Hoàng Mai</Select.Option>
            </Select>
          </Flex>
          <Flex flex={1} vertical>
            <label className="mb-1 text-sm font-medium">Ngày sinh</label>
            <DatePicker
              placeholder="01-01-1999"
              format={'DD-MM-YYYY'}
              value={dayjs(currentUser?.birthday, 'DD-MM-YYYY')}
            />
          </Flex>
        </div>
        <div className="mt-5">
          <p className="mb-3 text-sm font-medium">Giới tính</p>
          <Radio.Group value={currentUser?.gender}>
            <Radio value={'Male'}>Nam</Radio>
            <Radio value={'Female'}>Nữ</Radio>
            <Radio value={'Other'}>Khác</Radio>
          </Radio.Group>
        </div>
      </div>
      <div className="h-[1px] bg-gray-400 my-4"></div>
    </Modal>
  );
}

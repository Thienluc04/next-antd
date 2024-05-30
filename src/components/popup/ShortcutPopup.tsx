import { ArrowDownOutlined, ArrowUpOutlined } from '@ant-design/icons';
import { Flex, Modal } from 'antd';
import { ReactNode } from 'react';

interface ShortcutPopupProps {
  isOpen: boolean;
  onCancel?: () => void;
}

interface Shortcut {
  name: string;
  key: string | ReactNode;
}

const listShortcut: Shortcut[] = [
  {
    name: 'Thanh toán',
    key: '(F1)',
  },
  {
    name: 'Thêm sản phẩm vào hóa đơn',
    key: '(F3)',
  },
  {
    name: 'Nhập khách hàng',
    key: '(F4)',
  },
  {
    name: 'Nhập khách hàng mới',
    key: '(F6)',
  },
  {
    name: 'Điều chỉnh phương thức thanh toán (F8)',
    key: '',
  },
  {
    name: 'Tạo đơn khác',
    key: '(F9)',
  },
  {
    name: 'Thay đổi số lượng sản phẩm đầu tiên (Home)',
    key: '',
  },
  {
    name: 'Tăng số lượng lên 1 đơn vị',
    key: <ArrowUpOutlined />,
  },
  {
    name: 'Giảm số lượng xuống 1 đơn vị',
    key: <ArrowDownOutlined />,
  },
  {
    name: 'Di chuyển xuống số lượng sản phẩm tiếp theo (Enter)',
    key: '',
  },
  {
    name: 'Di chuyển lên số lượng sản phẩm tiếp theo (Shift)',
    key: '',
  },
];

export function ShortcutPopup({ isOpen, onCancel }: ShortcutPopupProps) {
  return (
    <Modal
      open={isOpen}
      onCancel={onCancel}
      okButtonProps={{ className: 'hidden' }}
      cancelButtonProps={{ className: 'hidden invisible w-0 h-0' }}
      title="Danh sách tất cả các phím tắt"
      className="add-customer-popup"
      width={800}
    >
      <div className="grid grid-cols-3 gap-5 pt-2">
        {listShortcut.map((item, index) => (
          <div key={index} className="p-2 text-center bg-blue-100 rounded-lg">
            <p className="mb-1 text-base">{item.name}</p>
            <p className="text-base">{item.key}</p>
          </div>
        ))}
      </div>
    </Modal>
  );
}

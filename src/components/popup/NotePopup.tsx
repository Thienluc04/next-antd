import { Modal } from 'antd';

interface NotePopupProps {
  isOpen: boolean;
  onOk: () => void;
  onCancel?: () => void;
}

export function NotePopup({ isOpen, onOk, onCancel }: NotePopupProps) {
  return (
    <Modal
      open={isOpen}
      onOk={onOk}
      onCancel={onCancel}
      cancelButtonProps={{ className: 'hidden invisible w-0 h-0' }}
      okButtonProps={{
        className: 'w-[100px] mx-auto absolute left-2/4 -translate-x-2/4',
      }}
      okText="Xác nhận"
      title="Ghi chú sản phẩm"
      className="add-customer-popup note-popup"
      width={500}
      centered
      wrapClassName="mb-[100px]"
    >
      <label className="block mb-1 text-base">Ghi chú</label>
      <textarea
        placeholder="Nhập ghi chú..."
        className="w-full p-2 h-[100px] mb-2 border border-gray-300 rounded-lg resize-none outline-none"
      ></textarea>
    </Modal>
  );
}

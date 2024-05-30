import { FormOutlined } from '@ant-design/icons';
import { Input } from 'antd';
import { useState } from 'react';
import { NotePopup } from '../popup';

interface NoteInfoProps {}

export function NoteInfo(props: NoteInfoProps) {
  const [showNotePopup, setShowNotePopup] = useState(false);

  return (
    <div>
      <p className="mb-1 text-base">Ghi chú</p>
      <Input
        size="middle"
        prefix={<FormOutlined />}
        placeholder="Nhập ghi chú đơn hàng"
        className="h-8"
        onClick={() => setShowNotePopup(true)}
      />

      <NotePopup
        isOpen={showNotePopup}
        onOk={() => {}}
        onCancel={() => setShowNotePopup(false)}
      ></NotePopup>
    </div>
  );
}

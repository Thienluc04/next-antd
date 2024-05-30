import { useState } from 'react';
import { ChooseAddressPopup } from '../popup';

interface ChooseAddressProps {}

export function ChooseAddress(props: ChooseAddressProps) {
  const [showChooseAddress, setShowChooseAddress] = useState(false);

  return (
    <div className="my-2">
      <p>
        Địa chỉ giao hàng:{' '}
        <span
          className="text-blue-500 cursor-pointer"
          onClick={() => setShowChooseAddress(true)}
        >
          Chọn...
        </span>
      </p>

      <ChooseAddressPopup
        isOpen={showChooseAddress}
        onOk={() => {}}
        onCancel={() => setShowChooseAddress(false)}
      ></ChooseAddressPopup>
    </div>
  );
}

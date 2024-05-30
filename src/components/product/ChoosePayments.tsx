import { useState } from 'react';
import { ChoosePaymentsPopup } from '../popup';

interface ChoosePaymentsProps {}

export function ChoosePayments(props: ChoosePaymentsProps) {
  const [showChoosePayment, setShowChoosePayment] = useState(false);

  return (
    <div>
      <p
        className="text-base text-[#1677ff] cursor-pointer"
        onClick={() => setShowChoosePayment(true)}
      >
        Tiền mặt{' '}
        <span className="italic">(chọn nhiều hình thức thanh toán)</span>
      </p>

      <ChoosePaymentsPopup
        isOpen={showChoosePayment}
        onOk={() => {}}
        onCancel={() => setShowChoosePayment(false)}
      ></ChoosePaymentsPopup>
    </div>
  );
}

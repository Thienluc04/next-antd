import { Button } from 'antd';
import { useContext, useState } from 'react';
import { ChooseVoucherPopup } from '../popup';
import ProductsContext from '@/utils/product-context';

interface ChooseVoucherProps {}

export function ChooseVoucher(props: ChooseVoucherProps) {
  const [showChooseVoucherPopup, setShowChooseVoucherPopup] = useState(false);

  const { voucher } = useContext(ProductsContext);

  return (
    <div>
      {!voucher && (
        <Button type="link" onClick={() => setShowChooseVoucherPopup(true)}>
          Chọn khuyến mãi
        </Button>
      )}
      <ChooseVoucherPopup
        isOpen={showChooseVoucherPopup}
        onCancel={() => setShowChooseVoucherPopup(false)}
        onOk={() => setShowChooseVoucherPopup(false)}
      ></ChooseVoucherPopup>
    </div>
  );
}

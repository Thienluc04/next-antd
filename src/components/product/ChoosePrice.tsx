import { ProductsContext } from '@/app/products/page';
import { Button, Flex } from 'antd';
import { useContext } from 'react';

interface ChoosePriceProps {}

export function ChoosePrice(props: ChoosePriceProps) {
  const { showDetailProduct } = useContext(ProductsContext);

  return (
    <>
      {showDetailProduct && (
        <Flex align="center" className="gap-y-5 gap-x-10" wrap>
          <Button
            type="default"
            className="text-blue-500 font-medium border-blue-500 hover:!text-white hover:!bg-blue-500 w-[120px]"
          >
            $ 50.00
          </Button>
          <Button
            type="default"
            className="text-blue-500 font-medium border-blue-500 hover:!text-white hover:!bg-blue-500 w-[120px]"
          >
            $ 60.00
          </Button>
          <Button
            type="default"
            className="text-blue-500 font-medium border-blue-500 hover:!text-white hover:!bg-blue-500 w-[120px]"
          >
            $ 100.00
          </Button>
          <Button
            type="default"
            className="text-blue-500 font-medium border-blue-500 hover:!text-white hover:!bg-blue-500 w-[120px]"
          >
            $ 120.00
          </Button>
          <Button
            type="default"
            className="text-blue-500 font-medium border-blue-500 hover:!text-white hover:!bg-blue-500 w-[120px]"
          >
            $ 150.00
          </Button>
        </Flex>
      )}
    </>
  );
}

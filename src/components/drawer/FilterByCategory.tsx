import { SearchOutlined } from '@ant-design/icons';
import { Button, Checkbox, Drawer, Flex, Input } from 'antd';
import { useState } from 'react';

interface FilterByCategoryProps {
  open: boolean;
  onClose: () => void;
  setListCategory: (list: string[]) => void;
}

const listFilter = [
  'Tất cả',
  'Living room',
  'Dinning room',
  'Bedroom',
  'Office',
  'Storage',
  'Outdoor',
];

export function FilterByCategory({
  onClose,
  open,
  setListCategory,
}: FilterByCategoryProps) {
  const [listCurrentCategory, setListCurrentCategory] = useState<string[]>([]);

  const handleCheckCategory = (checked: boolean, value: string) => {
    if (checked) {
      setListCurrentCategory([...listCurrentCategory, value]);
    } else {
      setListCurrentCategory(
        listCurrentCategory.filter((item) => item !== value)
      );
    }
  };

  return (
    <Drawer
      title="Lọc theo danh mục"
      onClose={onClose}
      open={open}
      placement="left"
      width={400}
    >
      <Flex vertical className="h-full">
        <Flex vertical gap={12}>
          <Input
            size="middle"
            placeholder="Tìm kiếm theo danh mục"
            prefix={<SearchOutlined />}
          ></Input>
          {listFilter.map((item, index) => (
            <Checkbox
              key={index}
              onChange={(e) => handleCheckCategory(e.target.checked, item)}
            >
              {item}
            </Checkbox>
          ))}
        </Flex>
        <Flex align="end" justify="center" flex={1}>
          <Button
            type="primary"
            className="h-10 text-xl rounded-md font-medium w-[160px]"
            onClick={() => {
              setListCategory(listCurrentCategory);
              onClose();
            }}
          >
            Xác nhận
          </Button>
        </Flex>
      </Flex>
    </Drawer>
  );
}

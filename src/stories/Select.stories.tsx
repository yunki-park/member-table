import type { Meta, StoryObj } from '@storybook/react';
import { useArgs } from '@storybook/preview-api';

import { Field } from '@/models/field';
import { Select } from '@/components/Select';

const meta: Meta<typeof Select> = {
  title: 'Components/Select',
  component: Select,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          '옵션 중에 한 가지를 선택할 수 있는 드롭다운 컴포넌트입니다.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Select>;

// 테스트용 item
const item: Field = {
  key: 'job',
  label: '직업',
  type: 'select',
  required: false,

  options: [
    { label: '개발자', value: '개발자' },
    { label: 'PO', value: 'PO' },
    { label: '디자이너', value: '디자이너' },
  ],
};

export const Default: Story = {
  name: 'Default',
  render: function SelectDefault(args) {
    const [{ value }, updateArgs] = useArgs();

    const handleChange = (value: string) => {
      updateArgs({ value });
    };

    return <Select {...args} value={value} onChange={handleChange} />;
  },
  args: {
    item,
    value: '',
  },
};

export const OptionSelected: Story = {
  name: 'Filled',
  render: function SelectOptionSelected(args) {
    const [{ value }, updateArgs] = useArgs();
    return (
      <Select
        {...args}
        value={value}
        onChange={(value) => updateArgs({ value })}
      />
    );
  },
  args: {
    item,
    value: '개발자',
  },
  parameters: {
    docs: {
      description: {
        story: '"개발자" 옵션이 선택된 상태입니다.',
      },
    },
  },
};

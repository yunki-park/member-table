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

  options: ['개발자', 'PO', '디자이너'],
};

export const Default: Story = {
  name: 'Default',
  render: function SelectDefault(args) {
    const [{ current }, updateArgs] = useArgs();

    const handleChange = (value: string) => {
      updateArgs({ current: value });
    };

    return <Select {...args} current={current} onChange={handleChange} />;
  },
  args: {
    item,
    current: '',
  },
};

export const OptionSelected: Story = {
  name: 'Filled',
  render: function SelectOptionSelected(args) {
    const [{ current }, updateArgs] = useArgs();
    return (
      <Select
        {...args}
        current={current}
        onChange={(value) => updateArgs({ current: value })}
      />
    );
  },
  args: {
    item,
    current: '개발자',
  },
  parameters: {
    docs: {
      description: {
        story: '"개발자" 옵션이 선택된 상태입니다.',
      },
    },
  },
};

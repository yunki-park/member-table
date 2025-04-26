import type { Meta, StoryObj } from '@storybook/react';
import { useArgs } from '@storybook/preview-api';

import { Filter } from '@/components/Filter/Filter';

const meta: Meta<typeof Filter> = {
  title: 'Components/Filter/Filter',
  component: Filter,
  tags: ['autodocs'],
  args: {
    options: ['개발자', 'PO', '디자이너'],
    selected: [],
  },
  parameters: {
    docs: {
      description: {
        component: '필터 옵션 목록을 체크박스 형태로 제공하는 컴포넌트입니다.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Filter>;

export const Default: Story = {
  render: function FilterDefault(args) {
    const [{ selected }, updateArgs] = useArgs();

    const handleChange = (newSelected: string[]) => {
      updateArgs({ selected: newSelected });
    };

    return <Filter {...args} selected={selected} onChange={handleChange} />;
  },
};

import type { Meta, StoryObj } from '@storybook/react';
import { FilterMenuItem } from '@/components/Filter/FilterMenuItem';

const meta: Meta<typeof FilterMenuItem> = {
  title: 'Components/Filter/FilterMenuItem',
  component: FilterMenuItem,
  tags: ['autodocs'],
  args: {
    label: 'Checkbox',
    checked: false,
    disabled: false,
  },
  parameters: {
    docs: {
      description: {
        component: '체크박스 형태의 FilterMenuItem 컴포넌트입니다.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof FilterMenuItem>;

export const Default: Story = {
  parameters: {
    docs: {
      description: {
        story: '기본 상태의 FilterMenuItem입니다.',
      },
    },
  },
};

export const Selected: Story = {
  args: {
    checked: true,
  },
  parameters: {
    docs: {
      description: {
        story: '선택된 상태의 FilterMenuItem입니다.',
      },
    },
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
  parameters: {
    docs: {
      description: {
        story: '비활성화 상태의 FilterMenuItem입니다.',
      },
    },
  },
};

export const SelectedAndDisabled: Story = {
  args: {
    checked: true,
    disabled: true,
  },
  parameters: {
    docs: {
      description: {
        story: '선택되었으나 비활성화 상태의 FilterMenuItem입니다.',
      },
    },
  },
};

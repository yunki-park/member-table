import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from '@/components/Checkbox';

const meta: Meta<typeof Checkbox> = {
  title: 'Components/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  args: {
    status: 'inactive',
    label: true,
    text: 'Checkbox',
  },
  argTypes: {
    text: {
      if: { arg: 'label', truthy: true },
      control: 'text',
      description: 'Checkbox 우측에 표시될 텍스트',
    },
  },
  parameters: {
    docs: {
      description: {
        component: 'Checkbox 컴포넌트입니다.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Inactive: Story = {
  args: {
    status: 'inactive',
    label: true,
    text: 'Checkbox',
  },
  parameters: {
    docs: {
      description: {
        story: '선택되지 않은 상태의 Checkbox입니다.',
      },
    },
  },
};

export const Active: Story = {
  args: {
    status: 'active',
    label: true,
    text: 'Checkbox',
  },
  parameters: {
    docs: {
      description: {
        story: '선택된 상태의 Checkbox입니다.',
      },
    },
  },
};

export const Indeterminate: Story = {
  args: {
    status: 'indeterminate',
    label: true,
    text: 'Checkbox',
  },
  parameters: {
    docs: {
      description: {
        story: '결정되지 않은 상태의 Checkbox입니다.',
      },
    },
  },
};

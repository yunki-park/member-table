import type { Meta, StoryObj } from '@storybook/react';

import { Label } from '../components/Label';

const meta: Meta<typeof Label> = {
  title: 'Components/Label',
  component: Label,
  tags: ['autodocs'],
  args: {
    label: 'Input Label',
  },
  parameters: {
    docs: {
      description: {
        component:
          'Label 컴포넌트는 입력 필드 위에 텍스트를 표시하며, required 옵션에 따라 빨간색 * 마크를 표시합니다.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Label>;

export const Default: Story = {
  parameters: {
    docs: {
      description: {
        story: '기본 형태의 Label입니다. 텍스트만 표시됩니다.',
      },
    },
  },
};

export const Required: Story = {
  args: {
    required: true,
  },
  parameters: {
    docs: {
      description: {
        story: '필수 입력 항목임을 나타내는 빨간 * 마크가 표시됩니다.',
      },
    },
  },
};

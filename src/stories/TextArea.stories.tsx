import type { Meta, StoryObj } from '@storybook/react';
import { TextArea } from '../components/TextArea';

const meta: Meta<typeof TextArea> = {
  title: 'Components/TextArea',
  component: TextArea,
  tags: ['autodocs'],
  args: {
    placeholder: 'Textarea',
  },
  parameters: {
    docs: {
      description: {
        component:
          'TextArea 컴포넌트는 여러 줄의 텍스트 입력이 필요한 경우 사용됩니다.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof TextArea>;

export const Default: Story = {
  parameters: {
    docs: {
      description: {
        story: '기본 TextArea입니다.',
      },
    },
  },
};

export const WithPlaceholder: Story = {
  args: {
    placeholder: '내용을 입력하세요',
  },
  parameters: {
    docs: {
      description: {
        story: 'Placeholder가 추가된 TextArea입니다.',
      },
    },
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    value: '입력 불가',
  },
  parameters: {
    docs: {
      description: {
        story: '비활성화 상태의 TextArea입니다.',
      },
    },
  },
};

export const Filled: Story = {
  args: {
    value: '입력된 텍스트',
  },
  parameters: {
    docs: {
      description: {
        story: '텍스트가 이미 입력된 상태의 TextArea입니다.',
      },
    },
  },
};

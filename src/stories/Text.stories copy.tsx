import type { Meta, StoryObj } from '@storybook/react';

import { Text } from '../components/Text';

const meta: Meta<typeof Text> = {
  title: 'Components/Text',
  component: Text,
  tags: ['autodocs'],
  args: {
    placeholder: 'Input',
  },
  parameters: {
    docs: {
      description: {
        component: 'Text 컴포넌트는 단일 라인의 텍스트 입력 필드입니다.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Text>;

export const Default: Story = {
  parameters: {
    docs: {
      description: {
        story: '기본 텍스트 입력 필드입니다.',
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
        story: 'Placeholder가 추가된 입력 필드입니다.',
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
        story: '비활성화 상태의 입력 필드입니다.',
      },
    },
  },
};

export const Filled: Story = {
  args: {
    value: '입력된 값',
  },
  parameters: {
    docs: {
      description: {
        story: '값이 이미 입력된 상태의 입력 필드입니다.',
      },
    },
  },
};

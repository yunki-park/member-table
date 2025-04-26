import type { Meta, StoryObj } from '@storybook/react';
import { PlusOutlined } from '@ant-design/icons';

import { Button } from '@/components/Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  args: {
    children: '추가',
    type: 'primary',
  },
  parameters: {
    docs: {
      description: {
        component: 'Button은 기본 버튼 컴포넌트입니다.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  parameters: {
    docs: {
      description: {
        story: '기본 형태의 Button입니다.',
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
        story: '비활성화 상태의 Button입니다. 클릭할 수 없습니다.',
      },
    },
  },
};

export const WithClickHandler: Story = {
  args: {
    onClick: () => alert('버튼이 클릭되었습니다.'),
  },
  parameters: {
    docs: {
      description: {
        story:
          'Button에 클릭 핸들러를 추가한 예시입니다. 버튼 클릭 시 alert 창이 호출됩니다.',
      },
    },
  },
};

export const IconButton: Story = {
  args: {
    icon: <PlusOutlined />,
  },
  parameters: {
    docs: {
      description: {
        story:
          'Button에 아이콘을 추가한 예시입니다. 텍스트 왼쪽에 아이콘이 표시됩니다.',
      },
    },
  },
};

export const LoadingButton: Story = {
  args: {
    loading: true,
  },
  parameters: {
    docs: {
      description: {
        story: '로딩 상태의 Button 예시입니다. 버튼 안에 스피너가 표시됩니다.',
      },
    },
  },
};

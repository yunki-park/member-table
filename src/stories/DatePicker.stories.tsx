import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { DatePicker } from '../components/DatePicker/DatePicker';
import dayjs from 'dayjs';

const meta: Meta<typeof DatePicker> = {
  title: 'Components/DatePicker',
  component: DatePicker,
  tags: ['autodocs'],
  args: {
    placeholder: '날짜를 선택하세요',
  },
  parameters: {
    docs: {
      description: {
        component: '날짜를 선택할 수 있는 DatePicker 컴포넌트입니다.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof DatePicker>;

export const Default: Story = {
  parameters: {
    docs: {
      description: {
        story: '기본 상태의 DatePicker입니다.',
      },
    },
  },
};

export const WithPlaceholder: Story = {
  args: {
    placeholder: '가입일을 선택하세요',
  },
  parameters: {
    docs: {
      description: {
        story: 'Placeholder가 설정된 DatePicker입니다.',
      },
    },
  },
};

const FilledTemplate = (args: React.ComponentProps<typeof DatePicker>) => {
  const [value, setValue] = useState<dayjs.Dayjs | null>(dayjs('2025-04-25'));

  return (
    <DatePicker
      {...args}
      value={value}
      onChange={(newDate) => {
        setValue(newDate);
      }}
    />
  );
};

export const Filled: Story = {
  render: (args) => <FilledTemplate {...args} />,
  parameters: {
    docs: {
      description: {
        story: '날짜가 선택된 상태입니다.',
      },
    },
  },
};

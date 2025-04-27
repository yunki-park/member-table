import type { Meta, StoryObj } from '@storybook/react';
import { MemberTable } from '@/components/MemberTable/MemberTable';
import { initialMembers } from '@/constans/initialMembers';

const meta: Meta<typeof MemberTable> = {
  title: 'Components/MemberTable',
  component: MemberTable,
  parameters: {
    docs: {
      description: {
        component: '회원 목록 테이블 컴포넌트입니다.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof MemberTable>;

export const Default: Story = {
  args: {
    records: initialMembers,
  },
};

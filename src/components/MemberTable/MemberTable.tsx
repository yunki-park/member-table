import React from 'react';
import { Checkbox, Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';

export interface Member {
  name: string;
  address: string;
  memo: string;
  joinDate: string;
  job: string;
  agreeToEmail: boolean;
}

const columns: ColumnsType<Member> = [
  {
    title: '이름',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '주소',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: '메모',
    dataIndex: 'memo',
    key: 'memo',
  },
  {
    title: '가입일',
    dataIndex: 'joinDate',
    key: 'joinDate',
  },
  {
    title: '직업',
    dataIndex: 'job',
    key: 'job',
  },
  {
    title: '이메일 수신 동의',
    dataIndex: 'agreeToEmail',
    key: 'agreeToEmail',
    render: (agree: boolean) => <Checkbox checked={agree} disabled />,
  },
];

export const MemberTable: React.FC = () => {
  return (
    <Table<Member>
      columns={columns}
      dataSource={[]}
      rowKey="name"
      pagination={false}
    />
  );
};

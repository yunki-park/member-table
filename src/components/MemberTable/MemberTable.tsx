import { useMemo } from 'react';

import { Checkbox, Dropdown, Table, theme } from 'antd';
import type { TableColumnsType } from 'antd';
import { MoreOutlined } from '@ant-design/icons';

import { MemberRecord } from '@/models/member';

interface MemberTableProps {
  records: MemberRecord[];
  onEdit: (member: MemberRecord) => void;
  onDelete: (key: React.Key) => void;
}

export const MemberTable: React.FC<MemberTableProps> = ({
  records,
  onEdit,
  onDelete,
}) => {
  const { token } = theme.useToken();

  const columns = useMemo<TableColumnsType<MemberRecord>>(
    () => [
      {
        title: '이름',
        dataIndex: 'name',
        filters: Array.from(new Set(records.map((r) => r.name))).map(
          (name) => ({
            text: name,
            value: name,
          }),
        ),
        onFilter: (value, record) => record.name.includes(value as string),
      },
      {
        title: '주소',
        dataIndex: 'address',
        filters: Array.from(new Set(records.map((r) => r.address))).map(
          (address) => ({
            text: address,
            value: address,
          }),
        ),
        onFilter: (value, record) =>
          record.address?.includes(value as string) ?? false,
      },
      {
        title: '메모',
        dataIndex: 'memo',
        filters: Array.from(new Set(records.map((r) => r.memo))).map(
          (memo) => ({
            text: memo,
            value: memo,
          }),
        ),
        onFilter: (value, record) =>
          record.memo?.includes(value as string) ?? false,
      },
      {
        title: '가입일',
        dataIndex: 'joinDate',
        filters: Array.from(new Set(records.map((r) => r.joinDate))).map(
          (date) => ({
            text: date,
            value: date,
          }),
        ),
        onFilter: (value, record) => record.joinDate.includes(value as string),
      },
      {
        title: '직업',
        dataIndex: 'job',
        filters: Array.from(new Set(records.map((r) => r.job))).map((job) => ({
          text: job,
          value: job,
        })),
        onFilter: (value, record) => record.job === value,
      },
      {
        title: '이메일 수신 동의',
        dataIndex: 'agreeToEmail',
        filters: [
          { text: '선택됨', value: true },
          { text: '선택 안함', value: false },
        ],
        onFilter: (value, record) => record.agreeToEmail === value,
        render: (agree: boolean) => (
          <div style={{ cursor: 'not-allowed' }}>
            <Checkbox checked={agree} style={{ pointerEvents: 'none' }} />
          </div>
        ),
      },
      {
        key: 'actions',
        render: (_, record) => (
          <Dropdown
            trigger={['click']}
            menu={{
              items: [
                {
                  key: 'edit',
                  label: '수정',
                  onClick: () => {
                    onEdit(record);
                  },
                },
                {
                  key: 'delete',
                  label: (
                    <span style={{ color: `${token.colorError}` }}>삭제</span>
                  ),
                  onClick: () => {
                    onDelete(record.key);
                  },
                },
              ],
            }}
          >
            <MoreOutlined style={{ cursor: 'pointer' }} />
          </Dropdown>
        ),
      },
    ],
    [records, onEdit, onDelete, token.colorError],
  );

  return (
    <Table<MemberRecord>
      columns={columns}
      dataSource={records}
      rowKey="name"
      pagination={{
        pageSize: 10,
        showSizeChanger: false,
        position: ['bottomCenter'],
      }}
      rowSelection={{
        type: 'checkbox',
      }}
    />
  );
};

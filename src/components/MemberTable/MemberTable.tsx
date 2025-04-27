import { Checkbox, Dropdown, Table } from 'antd';
import type { TableColumnsType } from 'antd';
import { MoreOutlined } from '@ant-design/icons';

import { MemberRecord } from '@/models/member';

interface MemberTableProps {
  records: MemberRecord[];
  onDelete: (key: React.Key) => void;
}

export const MemberTable: React.FC<MemberTableProps> = ({
  records,
  onDelete,
}) => {
  const columns: TableColumnsType<MemberRecord> = [
    {
      title: '이름',
      dataIndex: 'name',
      filters: [
        { text: 'John Doe', value: 'John Doe' },
        { text: 'Foo Bar', value: 'Foo Bar' },
      ],
      onFilter: (value, record) => record.name.includes(value as string),
    },
    {
      title: '주소',
      dataIndex: 'address',
      filters: [
        { text: '서울 강남구', value: '서울 강남구' },
        { text: '서울 서초구', value: '서울 서초구' },
      ],
      onFilter: (value, record) =>
        record.address?.includes(value as string) ?? false,
    },
    {
      title: '메모',
      dataIndex: 'memo',
      filters: [
        { text: '외국인', value: '외국인' },
        { text: '한국인', value: '한국인' },
      ],
      onFilter: (value, record) =>
        record.memo?.includes(value as string) ?? false,
    },
    {
      title: '가입일',
      dataIndex: 'joinDate',
      filters: [
        { text: '2024-10-01', value: '2024-10-01' },
        { text: '2024-10-02', value: '2024-10-02' },
      ],
      onFilter: (value, record) => record.joinDate.includes(value as string),
    },
    {
      title: '직업',
      dataIndex: 'job',
      filters: [
        { text: '개발자', value: '개발자' },
        { text: 'PO', value: 'PO' },
      ],
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
                onClick: () => {},
              },
              {
                key: 'delete',
                label: <span style={{ color: 'red' }}>삭제</span>,
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
  ];

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

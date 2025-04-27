import { useState } from 'react';
import { Button, theme } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

import { MemberRecord, MemberWithoutKey } from '@/models/member';
import { MemberTable } from '@/components/MemberTable/MemberTable';
import { MemberFormModal } from '@/components/MemberFormModal/MemberFormModal';
import { useRecordStorage } from '@/hooks/useRecordStorage';
import { generateKey } from '@/utils/keyUtil';

function App() {
  const { token } = theme.useToken();
  const { records, save } = useRecordStorage();
  const [open, setOpen] = useState(false);

  const handleAddRecord = () => {
    setOpen(true);
  };

  // 회원 생성 및 모달 닫기
  const handleSubmit = (member: MemberWithoutKey) => {
    const record: MemberRecord = {
      ...member,
      key: generateKey(),
    };
    save([...records, record]);

    setOpen(false);
  };

  // 모달 닫기
  const handleCancel = () => {
    setOpen(false);
  };

  // 회원 삭제
  const handleDelete = (key: React.Key) => {
    const updated = records.filter((record) => record.key !== key);
    save(updated);
  };

  // const handleAddRecord = () => {
  //   const newRecord = [
  //     ...records,
  //     {
  //       name: '박윤기',
  //       address: '서울시 용산구',
  //       memo: '프론트엔드 지원자',
  //       joinDate: '2025-04-25',
  //       job: '개발자',
  //       agreeToEmail: false,
  //     },
  //   ];
  //   save(newRecord);
  // };

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: token.colorBgContainer,
      }}
    >
      {/* 헤더 */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          position: 'sticky',
          top: 0,
          zIndex: 10,
          padding: '8px 14px',
          backgroundColor: token.colorBgContainer,
        }}
      >
        {/* 타이틀 */}
        <div style={{ fontSize: '16px', fontWeight: '600' }}>회원 목록</div>

        {/* 우측 상단 추가 버튼 */}
        <Button
          type="primary"
          icon={<PlusOutlined />}
          style={{ padding: '0px 12px' }}
          onClick={handleAddRecord}
        >
          추가
        </Button>
      </div>

      {/* 회원 목록 테이블 */}
      <div
        style={{
          flex: 1,
          width: '100%',
          padding: '12px',
          boxSizing: 'border-box',
        }}
      >
        <MemberTable records={records} onDelete={handleDelete} />
      </div>

      {/* 모달 */}
      <MemberFormModal
        open={open}
        onCancel={handleCancel}
        onSubmit={handleSubmit}
      />
    </div>
  );
}

export default App;

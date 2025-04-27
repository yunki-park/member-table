import { useState } from 'react';
import { Button, theme } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import dayjs from 'dayjs';

import { MemberRecord, MemberWithoutKey } from '@/models/member';
import { MemberTable } from '@/components/MemberTable/MemberTable';
import { MemberFormModal } from '@/components/MemberFormModal/MemberFormModal';
import { useRecordStorage } from '@/hooks/useRecordStorage';
import { generateKey, omitKey } from '@/utils/keyUtil';

function App() {
  const { token } = theme.useToken();
  const { records, save } = useRecordStorage();

  const [open, setOpen] = useState(false);
  const [editingMember, setEditingMember] = useState<MemberRecord | null>(null);

  // 모달 열기
  const handleOpenModal = () => {
    setOpen(true);
  };

  // 회원 수정 버튼 클릭 시
  const handleEdit = (member: MemberRecord) => {
    setEditingMember(member);

    handleOpenModal();
  };

  // 회원 생성 및 모달 닫기
  const handleSubmit = (member: MemberWithoutKey) => {
    if (editingMember) {
      // 1. 수정 모드
      const updatedRecords = records.map((record) =>
        record.key === editingMember.key
          ? { ...member, key: editingMember.key }
          : record,
      );

      save(updatedRecords);
    } else {
      // 2. 추가 모드
      const newMember: MemberRecord = {
        ...member,
        key: generateKey(),
      };

      save([...records, newMember]);
    }

    resetModal();
  };

  // 모달 닫기
  const handleCancel = () => {
    resetModal();
  };

  // 모달 초기화
  const resetModal = () => {
    setOpen(false);
    setEditingMember(null);
  };

  // 회원 삭제
  const handleDelete = (key: React.Key) => {
    const updated = records.filter((record) => record.key !== key);
    save(updated);
  };

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
          onClick={handleOpenModal}
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
        <MemberTable
          records={records}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      </div>

      {/* 모달 */}
      <MemberFormModal
        open={open}
        onCancel={handleCancel}
        onSubmit={handleSubmit}
        initialValues={
          editingMember
            ? {
                ...omitKey(editingMember),
                joinDate: dayjs(editingMember.joinDate),
              }
            : undefined
        }
      />
    </div>
  );
}

export default App;

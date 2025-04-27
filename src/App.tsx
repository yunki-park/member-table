import { Button, theme } from 'antd';
import { useRecordStorage } from '@/hooks/useRecordStorage';
import { PlusOutlined } from '@ant-design/icons';

import { MemberTable } from '@/components/MemberTable/MemberTable';
import { convertRecordDatasToMembers } from './utils/convertUtil';

function App() {
  const { records, save } = useRecordStorage();
  const { token } = theme.useToken();

  const handleAddRecord = () => {
    const newRecord = [
      ...records,
      {
        name: '박윤기',
        address: '서울시 용산구',
        memo: '프론트엔드 지원자',
        joinDate: '2025-04-25',
        job: '개발자',
        agreeToEmail: false,
      },
    ];
    save(newRecord);
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
          onClick={handleAddRecord}
        >
          추가
        </Button>
      </div>
      {/* 회원 목록 테이블 */}
      <div style={{ flex: 1, width: '100%', padding: '12px' }}>
        <MemberTable records={convertRecordDatasToMembers(records)} />
      </div>
    </div>
  );
}

export default App;

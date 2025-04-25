import { useRecordStorage } from './hooks/useRecordStorage';

function App() {
  const { records, save } = useRecordStorage();

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
    <div>
      <button onClick={handleAddRecord}>레코드 추가</button>

      <ul>
        {records.map((record, idx) => (
          <li key={idx}>{record.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;

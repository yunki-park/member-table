import { Member } from '@/models/member';

export const initialMembers: Member[] = [
  {
    name: 'John Doe',
    address: '서울 강남구',
    memo: '외국인',
    joinDate: '2024-10-02',
    job: '개발자',
    agreeToEmail: true,
  },
  {
    name: 'Foo Bar',
    address: '서울 서초구',
    memo: '한국인',
    joinDate: '2024-10-01',
    job: 'PO',
    agreeToEmail: false,
  },
];

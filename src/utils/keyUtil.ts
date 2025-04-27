import { MemberRecord, MemberWithoutKey } from '@/models/member';

export const generateKey = () => `${Date.now()}-${Math.random()}`;

export const omitKey = (member: MemberRecord): MemberWithoutKey => {
  // key를 제거하기 위해 명시적으로 구조분해 할당한 코드로, 경고 무시
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { key, ...withoutKey } = member;
  return withoutKey;
};

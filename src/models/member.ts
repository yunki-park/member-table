import { Dayjs } from 'dayjs';

export interface MemberRecord {
  key: string;

  name: string;
  joinDate: string;
  address: string;
  memo: string;
  job: string;
  agreeToEmail: boolean;
}

export type MemberWithoutKey = Omit<MemberRecord, 'key'>;

export type MemberFormValues = Omit<MemberWithoutKey, 'joinDate'> & {
  joinDate: string | Dayjs;
};

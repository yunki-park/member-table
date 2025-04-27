import { Member } from '@/models/member';
import type { RecordData } from '@/models/record';
import { DEFAULT_MEMBER_VALUES } from '@/constants/defaults';

export function convertRecordDataToMember(record: RecordData): Member {
  return {
    name: record.name as string,
    address: record.address as string,
    memo: record.memo as string,
    joinDate: record.joinDate as string,
    job: record.job as string,
    agreeToEmail: record.agreeToEmail as boolean,
  };
}

export function convertMemberToRecordData(member: Member): RecordData {
  return {
    ...DEFAULT_MEMBER_VALUES,
    ...member,
  };
}

export function convertRecordDatasToMembers(records: RecordData[]): Member[] {
  return records.map(convertRecordDataToMember);
}

export function convertMembersToRecordDatas(members: Member[]): RecordData[] {
  return members.map(convertMemberToRecordData);
}

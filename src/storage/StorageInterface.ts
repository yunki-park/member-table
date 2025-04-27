/**
 * 레코드 저장소 인터페이스
 */
import { MemberRecord } from '@/models/member';

export interface StorageInterface {
  getRecords(): MemberRecord[];
  saveRecords(records: MemberRecord[]): void;
}

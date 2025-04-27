/**
 * 메모리 기반 레코드 저장소입니다.
 * - 브라우저를 새로고침하면 데이터가 사라집니다.
 */
import { MemberRecord } from '@/models/member';
import { StorageInterface } from './StorageInterface';

export class InMemoryProvider implements StorageInterface {
  private records: MemberRecord[] = [];

  getRecords(): MemberRecord[] {
    return this.records;
  }

  saveRecords(records: MemberRecord[]): void {
    this.records = records;
  }
}

/**
 * 메모리 기반 레코드 저장소입니다.
 * - 브라우저를 새로고침하면 데이터가 사라집니다.
 */
import { StorageInterface } from './StorageInterface';
import { RecordData } from '../models/record';

export class InMemoryProvider implements StorageInterface {
  private records: RecordData[] = [];

  getRecords(): RecordData[] {
    return this.records;
  }

  saveRecords(records: RecordData[]): void {
    this.records = records;
  }
}

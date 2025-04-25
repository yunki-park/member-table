/**
 * 레코드 저장소 인터페이스
 */
import { RecordData } from '../models/record';

export interface StorageInterface {
  getRecords(): RecordData[];
  saveRecords(records: RecordData[]): void;
}

/**
 * 로컬 스토리지 기반 레코드 저장소입니다.
 *
 * - 브라우저의 로컬 스토리지에 데이터를 저장하여 새로고침 후에도 데이터가 유지됩니다.
 */

import { StorageInterface } from './StorageInterface';
import { MemberRecord } from '@/models/member';

const STORAGE_KEY = 'records';

export class LocalStorageProvider implements StorageInterface {
  getRecords(): MemberRecord[] {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : [];
    } catch (e) {
      console.error('Failed to load records from localStorage', e);
      return [];
    }
  }

  saveRecords(records: MemberRecord[]): void {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(records));
    } catch (e) {
      console.error('Failed to save records to localStorage', e);
    }
  }
}

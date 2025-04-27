import { useEffect, useState } from 'react';

import { MemberRecord } from '@/models/member';
import { StorageInterface } from '@/storage/StorageInterface';
import { LocalStorageProvider } from '@/storage/LocalStorageProvider';
import { InMemoryProvider } from '@/storage/InMemoryProvider';
import { STORAGE_MODE } from '@/constans/storageMode';
import { initialMembers } from '@/constans/initialMembers';

const storageMode = import.meta.env.VITE_STORAGE ?? STORAGE_MODE.LOCAL_STORAGE;
const isLocalStorageMode = storageMode === STORAGE_MODE.LOCAL_STORAGE;

function getStorage(): StorageInterface {
  return isLocalStorageMode
    ? new LocalStorageProvider()
    : new InMemoryProvider();
}

const storage = getStorage();

export function useRecordStorage() {
  const [records, setRecords] = useState<MemberRecord[]>([]);

  useEffect(() => {
    const loaded = storage.getRecords();

    if (loaded.length > 0) {
      setRecords(loaded);
    } else if (!isLocalStorageMode) {
      setRecords(initialMembers);
    }
  }, []);

  const save = (newRecords: MemberRecord[]) => {
    storage.saveRecords(newRecords);
    setRecords(newRecords);
  };

  return {
    records,
    save,
  };
}

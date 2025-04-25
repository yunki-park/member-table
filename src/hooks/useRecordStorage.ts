import { useEffect, useState } from 'react';
import { RecordData } from '../models/record';
import { StorageInterface } from '../storage/StorageInterface';
import { LocalStorageProvider } from '../storage/LocalStorageProvider';
import { InMemoryProvider } from '../storage/InMemoryProvider';
import { STORAGE_MODE } from '../constans/storageMode';

function getStorage(): StorageInterface {
  const storageMode =
    import.meta.env.VITE_STORAGE ?? STORAGE_MODE.LOCAL_STORAGE;

  const isLocalStorageMode = storageMode === STORAGE_MODE.LOCAL_STORAGE;

  return isLocalStorageMode
    ? new LocalStorageProvider()
    : new InMemoryProvider();
}

const storage = getStorage();

export function useRecordStorage() {
  const [records, setRecords] = useState<RecordData[]>([]);

  useEffect(() => {
    const loaded = storage.getRecords();
    setRecords(loaded);
  }, []);

  const save = (newRecords: RecordData[]) => {
    storage.saveRecords(newRecords);
    setRecords(newRecords);
  };

  return {
    records,
    save,
  };
}

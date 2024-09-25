import {readFileSync, writeFileSync} from 'node:fs';

export function createStore(path) {
  return {
    get: () => {
      const textContent = readFileSync(path, 'utf-8');
      return JSON.parse(textContent);
    },
    set: (newData) => {
      writeFileSync(path, JSON.stringify(newData, null, 2), 'utf-8');
    }
  }
}
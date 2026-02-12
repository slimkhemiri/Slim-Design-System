let __id = 0;

export function createId(prefix: string) {
  __id += 1;
  return `${prefix}-${__id}`;
}


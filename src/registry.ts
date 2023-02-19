export const MOCKS_REGISTRY = new Map<string, any[]>();

type Constructable = { new (...args: unknown[]): unknown };

function get<T extends Constructable>(item: T): InstanceType<T>[] {
  return MOCKS_REGISTRY.get(item.name) || [];
}

function clearAll(): void {
  MOCKS_REGISTRY.clear();
}

// Signature to require at least one item
function clear<T extends Constructable, K extends Constructable[]>(
  item: T,
  ...rest: K
): void {
  for (const ctr of [item, ...rest]) {
    MOCKS_REGISTRY.delete(ctr.name);
  }
}

export const mockInstances = {
  get,
  clear,
  clearAll,
};

/* Internal */
export function __registerMockInstance(
  ctr: (...args) => unknown,
  instance: any
): void {
  const existing = MOCKS_REGISTRY.get(ctr.name) || [];
  MOCKS_REGISTRY.set(ctr.name, [...existing, instance]);
}

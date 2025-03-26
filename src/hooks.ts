
export const useMultiRefs = (initialValue?: unknown[]) => {
  const currentRefs: unknown[] = [];
  const refs = new Set(currentRefs);

  const getRefs = () => {
    if (initialValue && refs.size === 0) {
      return initialValue;
    }
    if (typeof document === 'undefined') {
      console.error("Do not run this on server !");
      return Array.from(refs);
    } else {
      return Array.from(refs).filter((ref) => {
        return document.contains(ref as Node)
      });
    }
  }

  const addRef = (ref: unknown) => {
    if (ref !== null) {
      refs.add(ref);
    }
  }

  return { getRefs, addRef };
}

import { useState, useCallback } from 'react';

export function useFAQ(initialOpenId = 'faq-1') {
  const [openItems, setOpenItems] = useState(new Set([initialOpenId]));

  const toggleItem = useCallback((id) => {
    setOpenItems((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  }, []);

  const isOpen = useCallback((id) => openItems.has(id), [openItems]);

  return { toggleItem, isOpen };
}

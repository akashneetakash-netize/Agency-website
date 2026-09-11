import { useEffect } from 'react';

export function useKeyboardNavigation(keyMap = {}) {
  useEffect(() => {
    const handleKeyDown = (event) => {
      const handler = keyMap[event.key];
      if (handler && typeof handler === 'function') {
        handler(event);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [keyMap]);
}

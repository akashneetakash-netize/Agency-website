import { useState, useCallback } from 'react';

let toastListener = null;

export function showToast(message, type = 'info', duration = 3000) {
  if (toastListener) {
    toastListener({ id: Date.now(), message, type, duration });
  }
}

export function useToast() {
  const [toasts, setToasts] = useState([]);

  const removeToast = useCallback((id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  const addToast = useCallback((toast) => {
    setToasts((prev) => [...prev, toast]);
    setTimeout(() => {
      removeToast(toast.id);
    }, toast.duration || 3000);
  }, [removeToast]);

  toastListener = addToast;

  return { toasts, removeToast };
}

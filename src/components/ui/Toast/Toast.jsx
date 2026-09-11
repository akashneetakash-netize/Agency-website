import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, AlertCircle, Info } from 'lucide-react';
import { useToast } from './useToast';
import styles from './Toast.module.css';

export function ToastContainer() {
  const { toasts } = useToast();

  const getIcon = (type) => {
    switch (type) {
      case 'success':
        return <CheckCircle2 className={styles.icon} />;
      case 'error':
        return <AlertCircle className={styles.icon} />;
      default:
        return <Info className={styles.icon} />;
    }
  };

  return (
    <div className={styles.container}>
      <AnimatePresence>
        {toasts.map((toast) => (
          <motion.div
            key={toast.id}
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9, y: 10 }}
            transition={{ duration: 0.2 }}
            className={`${styles.toast} ${styles[toast.type]}`}
          >
            {getIcon(toast.type)}
            <div className={styles.content}>{toast.message}</div>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}

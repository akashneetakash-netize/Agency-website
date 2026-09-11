import { Navigation } from '../Navigation/Navigation';
import { Footer } from '../Footer/Footer';
import { ScrollProgress } from '../../ui/ScrollProgress/ScrollProgress';
import { ToastContainer } from '../../ui/Toast/Toast';
import { ErrorBoundary } from '../../common/ErrorBoundary/ErrorBoundary';
import styles from './PageLayout.module.css';

export function PageLayout({ children }) {
  return (
    <div className={styles.layout}>
      <ScrollProgress />
      <ToastContainer />
      <Navigation />
      <main className={styles.main}>
        <ErrorBoundary>{children}</ErrorBoundary>
      </main>
      <Footer />
    </div>
  );
}

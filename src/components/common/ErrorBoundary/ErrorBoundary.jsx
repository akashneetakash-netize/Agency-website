import { Component } from 'react';
import { AlertTriangle } from 'lucide-react';
import styles from './ErrorBoundary.module.css';

export class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary caught an unexpected runtime error:', error, errorInfo);
  }

  handleReset = () => {
    this.setState({ hasError: false, error: null });
  };

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }
      return (
        <div className={styles.container}>
          <AlertTriangle className={styles.icon} />
          <h2 className={styles.title}>Something went wrong</h2>
          <p className={styles.message}>
            {this.state.error?.message || 'An unexpected error occurred while rendering this component section.'}
          </p>
          <button onClick={this.handleReset} className={styles.retryBtn}>
            Try Reloading Section
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

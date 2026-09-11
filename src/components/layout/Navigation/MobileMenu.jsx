import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight } from 'lucide-react';
import { useNavigation } from '../../../context/NavigationContext';
import { Button } from '../../common/Button/Button';
import styles from './MobileMenu.module.css';

export function MobileMenu() {
  const { mobileMenuOpen, closeMobileMenu, activeSection, navigateToSection, navLinks } =
    useNavigation();

  return (
    <AnimatePresence>
      {mobileMenuOpen && (
        <motion.div
          className={styles.overlay}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          <button
            onClick={closeMobileMenu}
            className={styles.closeBtn}
            aria-label="Close Mobile Navigation Menu"
          >
            <X size={24} />
          </button>

          <ul className={styles.menuList}>
            {navLinks.map((link) => (
              <li key={link.id}>
                <button
                  onClick={() => navigateToSection(link.id)}
                  className={`${styles.menuLink} ${
                    activeSection === link.id ? styles.activeMenuLink : ''
                  }`}
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>

          <div className={styles.ctaContainer}>
            <Button
              fullWidth
              size="lg"
              onClick={() => navigateToSection('contact')}
              icon={<ArrowRight size={18} />}
            >
              Get Free Consultation
            </Button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

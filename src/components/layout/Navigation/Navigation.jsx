import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, ArrowRight } from 'lucide-react';
import { useNavigation } from '../../../context/NavigationContext';
import { MobileMenu } from './MobileMenu';
import { Button } from '../../common/Button/Button';
import styles from './Navigation.module.css';

export function Navigation() {
  const { activeSection, navigateToSection, toggleMobileMenu, navLinks } = useNavigation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
        <div className={styles.container}>
          {/* Brand - Eleviq */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              navigateToSection('hero');
            }}
            className={styles.brand}
          >
            <div className={styles.logoMark}>
              <img src="/image.img.png" alt="Eleviq Logo" style={{ width: 38, height: 38, objectFit: 'contain' }} />
            </div>
            <span className={styles.brandName}>
              Eleviq
            </span>
          </a>

          {/* Nav Links */}
          <nav>
            <ul className={styles.navLinks}>
              {navLinks.map((link) => (
                <li key={link.id} className={styles.navItem}>
                  <button
                    onClick={() => navigateToSection(link.id)}
                    className={`${styles.navLink} ${
                      activeSection === link.id ? styles.activeLink : ''
                    }`}
                    aria-current={activeSection === link.id ? 'page' : undefined}
                  >
                    {link.label}
                  </button>
                  {activeSection === link.id && (
                    <motion.div
                      className={styles.activeIndicator}
                      layoutId="activeNavIndicator"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </li>
              ))}
            </ul>
          </nav>

          {/* CTA Button */}
          <div className={styles.actions}>
            <Button
              size="sm"
              onClick={() => navigateToSection('contact')}
              icon={<ArrowRight size={16} />}
            >
              Get Free Consultation
            </Button>
            <button
              onClick={toggleMobileMenu}
              className={styles.hamburger}
              aria-label="Toggle Mobile Menu"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </header>

      <MobileMenu />
    </>
  );
}
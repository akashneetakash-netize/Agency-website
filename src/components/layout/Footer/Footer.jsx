import { useState } from 'react';
import { Cpu, Send, Linkedin, Mail, Code } from 'lucide-react';
import { COMPANY_INFO, NAV_LINKS } from '../../../utils/constants';
import { useNavigation } from '../../../context/NavigationContext';
import { showToast } from '../../ui/Toast/useToast';
import styles from './Footer.module.css';

export function Footer() {
  const { navigateToSection } = useNavigation();
  const [email, setEmail] = useState('');

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      showToast('Please enter a valid email address', 'error');
      return;
    }
    showToast('Subscribed to Eleviq Insights!', 'success');
    setEmail('');
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.topGrid}>
          <div className={styles.brandCol}>
            <a href="#hero" onClick={() => navigateToSection('hero')} className={styles.brand}>
              <img src="/Asset 2.png" alt="Eleviq Logo" style={{ width: 38, height: 38, objectFit: 'contain' }} />
              <span className={styles.brandName}>
                Eleviq
              </span>
            </a>
            <p className={styles.description}>{COMPANY_INFO.tagline}</p>
            <div className={styles.socials}>
              <a href="#linkedin" className={styles.socialLink} aria-label="LinkedIn">
                <Linkedin size={18} />
              </a>
              <a href={`mailto:${COMPANY_INFO.email}`} className={styles.socialLink} aria-label="Email">
                <Mail size={18} />
              </a>
              <a href="#github" className={styles.socialLink} aria-label="Github">
                <Code size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className={styles.colTitle}>Explore</h4>
            <ul className={styles.linkList}>
              {NAV_LINKS.slice(0, 4).map((link) => (
                <li key={link.id}>
                  <button onClick={() => navigateToSection(link.id)} className={styles.linkBtn}>
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className={styles.colTitle}>Company</h4>
            <ul className={styles.linkList}>
              {NAV_LINKS.slice(4).map((link) => (
                <li key={link.id}>
                  <button onClick={() => navigateToSection(link.id)} className={styles.linkBtn}>
                    {link.label}
                  </button>
                </li>
              ))}
              <li>
                <a href={`mailto:${COMPANY_INFO.email}`} className={styles.linkBtn}>
                  {COMPANY_INFO.email}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className={styles.colTitle}>Stay Informed</h4>
            <p className={styles.newsletterText}>
              Get our monthly executive report on enterprise multi-agent workflows and LLM safety.
            </p>
            <form onSubmit={handleNewsletterSubmit} className={styles.newsletterForm}>
              <input
                type="email"
                placeholder="Enter work email..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={styles.newsletterInput}
              />
              <button type="submit" className={styles.newsletterBtn} aria-label="Subscribe to newsletter">
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>

        <div className={styles.divider} />

        <div className={styles.bottomBar}>
          <p className={styles.copyright}>
            © {new Date().getFullYear()} Eleviq AI Inc. All rights reserved.
          </p>
          <div className={styles.legalLinks}>
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms of Service</a>
            <a href="#security">SOC2 Governance</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
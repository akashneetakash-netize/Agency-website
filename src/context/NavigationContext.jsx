/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from 'react';
import { useScrollSpy } from '../hooks/useScrollSpy';
import { NAV_LINKS } from '../utils/constants';
import { smoothScrollTo } from '../utils/helpers';

const NavigationContext = createContext(null);

const sectionIds = NAV_LINKS.map(link => link.id);

export function NavigationProvider({ children }) {
  const activeSection = useScrollSpy(sectionIds, 120);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigateToSection = (sectionId) => {
    smoothScrollTo(sectionId);
    setMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(prev => !prev);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <NavigationContext.Provider
      value={{
        activeSection,
        mobileMenuOpen,
        navigateToSection,
        toggleMobileMenu,
        closeMobileMenu,
        navLinks: NAV_LINKS
      }}
    >
      {children}
    </NavigationContext.Provider>
  );
}

export function useNavigation() {
  const context = useContext(NavigationContext);
  if (!context) {
    throw new Error('useNavigation must be used within a NavigationProvider');
  }
  return context;
}

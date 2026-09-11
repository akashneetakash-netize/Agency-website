import { useEffect } from 'react';
import { PageLayout } from './components/layout/PageLayout/PageLayout';
import { Hero } from './components/sections/Hero/Hero';
import { TechMarquee } from './components/sections/Hero/TechMarquee';
import { Services } from './components/sections/Services/Services';
import { Process } from './components/sections/Process/Process';
import { Team } from './components/sections/Team/Team';
import { Portfolio } from './components/sections/Portfolio/Portfolio';
import { Testimonials } from './components/sections/Testimonials/Testimonials';
import { FAQ } from './components/sections/FAQ/FAQ';
import { Contact } from './components/sections/Contact/Contact';
import { NavigationProvider } from './context/NavigationContext';
import { ThemeProvider } from './context/ThemeContext';
import { FormProvider } from './context/FormContext';
import { trackPageView } from './utils/analytics';

export function App() {
  useEffect(() => {
    trackPageView(window.location.pathname);
  }, []);

  return (
    <ThemeProvider>
      <NavigationProvider>
        <FormProvider>
          <PageLayout>
            <Hero />
            <TechMarquee />
            <Services />
            <Process />
            <Team />
            <Portfolio />
            <Testimonials />
            <FAQ />
            <Contact />
          </PageLayout>
        </FormProvider>
      </NavigationProvider>
    </ThemeProvider>
  );
}

export default App;

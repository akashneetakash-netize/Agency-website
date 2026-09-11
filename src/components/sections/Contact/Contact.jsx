import { SectionHeader } from '../../common/SectionHeader/SectionHeader';
import { ContactInfo } from './ContactInfo';
import { ContactForm } from './ContactForm';
import styles from './Contact.module.css';

export function Contact() {
  return (
    <section className={styles.contact} id="contact">
      <div className={styles.container}>
        <SectionHeader
          eyebrow="INITIATE DISCOVERY"
          title="Schedule Your Enterprise"
          titleHighlight="AI Consultation"
          description="Let's analyze your architecture requirements and design a custom AI roadmap."
        />

        <div className={styles.grid}>
          <ContactInfo />
          <ContactForm />
        </div>
      </div>
    </section>
  );
}

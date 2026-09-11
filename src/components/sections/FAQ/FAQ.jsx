import { SectionHeader } from '../../common/SectionHeader/SectionHeader';
import { FAQItem } from './FAQItem';
import { useFAQ } from './useFAQ';
import { faqs } from '../../../data/faq';
import styles from './FAQ.module.css';

export function FAQ() {
  const { toggleItem, isOpen } = useFAQ('faq-1');

  return (
    <section className={styles.faq} id="faq">
      <div className={styles.container}>
        <SectionHeader
          eyebrow="FREQUENTLY ASKED QUESTIONS"
          title="Everything You Need"
          titleHighlight="To Know"
          description="Got questions regarding timeline, SOC2 security compliance, or integration with legacy software stacks?"
        />

        <div className={styles.accordionList}>
          {faqs.map((faq) => (
            <FAQItem
              key={faq.id}
              {...faq}
              isOpen={isOpen(faq.id)}
              onToggle={toggleItem}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

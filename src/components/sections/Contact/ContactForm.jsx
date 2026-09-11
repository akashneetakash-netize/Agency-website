import { Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { useContactForm } from './useContactForm';
import { Input } from '../../common/Input/Input';
import { Select } from '../../common/Select/Select';
import { Textarea } from '../../common/Textarea/Textarea';
import { Button } from '../../common/Button/Button';
import styles from './ContactForm.module.css';

export function ContactForm() {
  const { register, handleSubmit, errors, status, messageLength } = useContactForm();

  return (
    <div className={styles.formCard}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.row}>
          <Input
            label="Full Name"
            placeholder="Sarah Jenkins"
            required
            {...register('fullName')}
            error={errors.fullName?.message}
          />
          <Input
            label="Company Name"
            placeholder="Acme Global Inc."
            {...register('businessName')}
          />
        </div>

        <div className={styles.row}>
          <Input
            label="Work Email"
            type="email"
            placeholder="sarah@acme.com"
            required
            {...register('email')}
            error={errors.email?.message}
          />
          <Input
            label="Phone Number"
            type="tel"
            placeholder="+91 9087654321"
            {...register('phone')}
            error={errors.phone?.message}
          />
        </div>

        <Select
          label="Primary Requirement"
          required
          {...register('service')}
          error={errors.service?.message}
          options={[
            { value: '', label: 'Select a solution area...' },
            { value: 'custom-ai', label: 'Custom AI & LLM Model Systems' },
            { value: 'agentic-workflows', label: 'Autonomous Agent Swarm Workflows' },
            { value: 'predictive-analytics', label: 'Predictive Intelligence & Forecasting' },
            { value: 'conversational-voice', label: 'Conversational Voice & Support Agents' },
            { value: 'computer-vision', label: 'Computer Vision & Document OCR' },
            { value: 'legacy-modernization', label: 'Legacy ERP/CRM Cognitive Modernization' },
          ]}
        />

        <div className={styles.textareaContainer}>
          <Textarea
            label="Project Context & Automation Scope"
            placeholder="Tell us about your operational workflows, current bottlenecks, and target timeline..."
            required
            rows={4}
            maxLength={1000}
            {...register('message')}
            error={errors.message?.message}
          />
          <span className={styles.charCount}>{messageLength} / 1000</span>
        </div>

        <Button
          type="submit"
          fullWidth
          size="lg"
          loading={status === 'loading'}
          disabled={status === 'loading'}
          icon={
            status === 'success' ? (
              <CheckCircle2 size={20} />
            ) : status === 'error' ? (
              <AlertCircle size={20} />
            ) : (
              <Send size={18} />
            )
          }
        >
          {status === 'loading'
            ? 'Submitting Request...'
            : status === 'success'
            ? 'Request Submitted ✓'
            : status === 'error'
            ? 'Error — Please Retry'
            : 'Schedule Strategy Session'}
        </Button>

        <p className={styles.note}>🔒 SOC2 security compliant. Your data is strictly NDA protected.</p>
      </form>
    </div>
  );
}

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { contactSchema } from '../../../utils/validation';
import { showToast } from '../../ui/Toast/useToast';
import { trackFormSubmission } from '../../../utils/analytics';

export function useContactForm() {
  const [status, setStatus] = useState('idle'); // idle | loading | success | error

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      fullName: '',
      businessName: '',
      email: '',
      phone: '',
      service: '',
      message: '',
    },
  });

  const messageLength = watch('message')?.length || 0;

  const onSubmit = async () => {
    setStatus('loading');

    try {
      // Simulate API Submission Delay
      await new Promise((resolve) => setTimeout(resolve, 1500));

      setStatus('success');
      showToast('Request submitted! Our solutions team will contact you within 24h.', 'success');
      trackFormSubmission('contact_form', true);
      reset();

      setTimeout(() => setStatus('idle'), 4000);
    } catch (err) {
      console.error('Contact submission error:', err);
      setStatus('error');
      showToast('Submission error. Please try again or email us directly.', 'error');
      trackFormSubmission('contact_form', false);

      setTimeout(() => setStatus('idle'), 4000);
    }
  };

  return {
    register,
    handleSubmit: handleSubmit(onSubmit),
    errors,
    status,
    messageLength,
  };
}

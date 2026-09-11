import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function formatNumber(num) {
  return new Intl.NumberFormat('en-US').format(num);
}

export function smoothScrollTo(elementId) {
  const element = document.getElementById(elementId);
  if (element) {
    const navHeight = 80; // height of sticky header
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - navHeight;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
}

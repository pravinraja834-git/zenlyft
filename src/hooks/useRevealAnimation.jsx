import { useEffect } from 'react';

/**
 * Hook to apply the reveal animation used in the original static site.
 * It observes elements with the class "reveal" and adds the "revealed"
 * class when they intersect the viewport. If IntersectionObserver is not
 * available, all elements are immediately revealed.
 */
export default function useRevealAnimation() {
  useEffect(() => {
    const revealElements = document.querySelectorAll('.reveal');

    if ('IntersectionObserver' in window && revealElements.length > 0) {
      const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            obs.unobserve(entry.target);
          }
        });
      }, {
        root: null,
        threshold: 0.1,
        rootMargin: '0px 0px -40px 0px',
      });

      revealElements.forEach(el => observer.observe(el));
    } else {
      // Fallback for browsers without IntersectionObserver
      revealElements.forEach(el => el.classList.add('revealed'));
    }
  }, []);
}


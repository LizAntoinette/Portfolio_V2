import { useEffect, useRef } from 'react';

const useIntersectionObserver = (setActiveSection: (sectionId: string) => void): void => {
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observer.current = new IntersectionObserver(
      (entries: IntersectionObserverEntry[]) => {
       
        entries.forEach((entry: IntersectionObserverEntry) => {
          if (entry.isIntersecting) {
            console.log(entry)
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    const sections = document.querySelectorAll('section');
    sections.forEach((section: Element) => observer.current?.observe(section));

    return () => {
      sections.forEach((section: Element) => observer.current?.unobserve(section));
    };
  }, [setActiveSection]);
};

export default useIntersectionObserver;

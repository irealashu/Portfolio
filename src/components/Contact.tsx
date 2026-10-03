import React from 'react';
import { Mail, MapPin } from 'lucide-react';

interface ContactProps {
  onShowToast?: (message: string) => void;
}

export const Contact: React.FC<ContactProps> = () => {
  const emailAddress = 'kshatriya205902@gmail.com';
  const mapsUrl = 'https://maps.app.goo.gl/2b4RYKTrYigT2LWn7?g_st=ac';

  const contactItems = [
    {
      id: 'email',
      title: 'Email: kshatriya205902@gmail.com',
      href: `mailto:${emailAddress}`,
      isExternal: false,
      icon: <Mail className="w-5 h-5" />,
    },
    {
      id: 'linkedin',
      title: 'LinkedIn: in/irealashu',
      href: 'https://www.linkedin.com/in/irealashu/',
      isExternal: true,
      icon: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
        </svg>
      ),
    },
    {
      id: 'github',
      title: 'GitHub: github.com/irealashu',
      href: 'https://github.com/irealashu',
      isExternal: true,
      icon: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z" />
        </svg>
      ),
    },
    {
      id: 'location',
      title: 'Location: Gurugram, Haryana, India',
      href: mapsUrl,
      isExternal: true,
      icon: <MapPin className="w-5 h-5" />,
    },
  ];

  return (
    <section id="contact" className="py-10 sm:py-14 px-4 sm:px-6 max-w-[800px] mx-auto text-center relative">
      <div className="mb-9">
        <span className="text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-sky-400 dark:to-blue-400 bg-clip-text text-transparent mb-1.5 inline-block">
          Let's Connect
        </span>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-2.5 text-balance">
          Get in Touch
        </h2>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 max-w-xl mx-auto leading-relaxed text-balance">
          Feel free to reach out if you would like to connect, discuss a project, or talk about system validation and cyber risk.
        </p>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-3.5 sm:gap-4">
        {contactItems.map((item) => (
          <a
            key={item.id}
            href={item.href}
            target={item.isExternal ? '_blank' : undefined}
            rel={item.isExternal ? 'noopener noreferrer' : undefined}
            aria-label={item.title}
            title={item.title}
            className="interactive-icon-btn w-12 h-12 rounded-full border border-slate-200/80 dark:border-slate-800/90 flex items-center justify-center text-slate-700 dark:text-slate-200 shadow-sm hover:scale-115 active:scale-95 transition-all duration-300 cursor-pointer"
          >
            {item.icon}
          </a>
        ))}
      </div>
    </section>
  );
};

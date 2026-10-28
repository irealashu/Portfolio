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
          <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4.76 0 1.39.63 1.39 1.4v4.93h2.76M7.61 9.15v8.35H4.83V9.15h2.78m-.92-2.4a1.62 1.62 0 1 1 0-3.24 1.62 1.62 0 0 1 0 3.24" />
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
          <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.8 1.4 2.09 1 2.6.8.08-.62.31-1 .57-1.23-2.21-.25-4.54-1.11-4.54-4.95 0-1.09.39-2 1.03-2.69-.1-.25-.45-1.29.1-2.68 0 0 .84-.27 2.75 1.03A9.47 9.47 0 0 1 12 6.8c.85 0 1.7.11 2.5.33 1.9-1.29 2.74-1.03 2.74-1.03.55 1.38.2 2.43.1 2.68.64.7 1.03 1.6 1.03 2.69 0 3.85-2.34 4.69-4.56 4.94.33.29.63.87.63 1.75v2.6c0 .27.16.58.67.5A10 10 0 0 0 22 12 10 10 0 0 0 12 2Z" />
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
    <section id="contact" className="py-10 sm:py-14 px-3 sm:px-5 max-w-[800px] mx-auto text-center relative scroll-mt-24">
      <div className="section-shell rounded-[2rem] p-6 sm:p-8 shadow-[0_20px_36px_-28px_rgba(15,23,42,0.3)]">
        <div className="mb-8">
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
              className="interactive-icon-btn w-12 h-12 rounded-full border border-slate-200/80 dark:border-slate-800/90 flex items-center justify-center text-slate-700 dark:text-slate-200 shadow-sm hover:-translate-y-1"
            >
              {item.icon}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

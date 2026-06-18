import React from 'react';

const LOGO_LINKS = [
  {
    name: 'FinTech Enterprise',
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB82ngSChAE2TMGbkEOmIuOibrXdXoBbJsif5ckBpC7E_6uT-_bRT2fRtOMU5R1W3WyvkEEFoEWnWbbewj5Yf1eQU3HRdkb3vBc4JkvRHm5mj9CiQ2A79I9MTmwtMtdZscnFf9scb1bPjDzLYjJOxwEoh5adY7AVTfrW858tto1fVoAQz6k9Qk_yKjJskfM_FgLHGNepad1NZJbhpRifF3vm6gxRJMyuw_HaeCFUnEz88qi1_jjnlJ4FpBr7O6us72VhQbZzBYtR4Z_',
  },
  {
    name: 'Cloud Services Provider',
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC8bFntQS8EWCdAsMhwwX862Lpo78UcyCoQHSFD68YA86aMzIDUK_UaZt_ISkmE1RlmjNn0efPktmP6AdFo9u6ggT2PVbEez8is5wAed3vedCyl4dsNXoHNXlpzCIFp-cOujgSah9B-XnA6i54syQM988byhoNmnGjC5bnxwVwQOsE8zDx6HAF2NARqLMEWacFGHuUWJ_gVZn55LhGQ1keNISHSML9IO0XPr2-OL4fwiw3w0dTljSmNUFxLA5aieBjxyf6y4S8lWdf7',
  },
  {
    name: 'AI Engineering Corp',
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBrmjfvvrds2apVY4nEps4zFUAzLSG62YVlQgRhGEW6K7pZRzjdtdF4U_2YANVc4ZAZ8cHdp4lS62B66hHCWVXo2YD6YapHw8KULvdCjGUjacNhK-KmNEy2sMNaJ9XKV4qdPO1HNasibnth3mCudIYGGSIMbhJhDGwJ8FhTcIc8slmOctDAHfuDn16yFmWKaia-nVYj46YGyb9iA174q39u3LXS2W_ePE6sqXSu5lNhiovYd7Gl16N5rUlPHQjFkBkMAWp98H9Usk8N',
  },
  {
    name: 'Logistics Chain International',
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAK7gRkAJ00zaGdm6CF1uA3ZaR5MgYhiDhby6-i_EdTgWOOtJWKcHzZuwtsC76YclIVgmdmVgoqL7-3_pZPagMwu0yKARtWBVfD8SaX4_-JwGzZB17NV5iE0OGEfzvWFlQFeDemkL5YYa92J7-CkBp0JaGUYh9gCEJKvWRuk28Vw2R-fra4sg3MZbTCyTAeQK1-AuYHO2uZw5tqmI1z2Frt9anXR4oupnh0atEUnllpXCw05iUQI5Lo4fAd4i_466ngkJxsvJloErbc',
  },
];

export default function ClientLogos() {
  return (
    <section className="py-12 bg-slate-50 border-y border-slate-100 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <p className="text-center text-xs font-semibold uppercase tracking-wider text-slate-400 mb-8 sm:text-sm">
          Trusted by Industry Leaders Worldwide
        </p>
        <div className="flex flex-wrap justify-center items-center gap-10 md:gap-20 opacity-40 hover:opacity-60 transition-opacity duration-300">
          {LOGO_LINKS.map((logo, index) => (
            <img
              key={index}
              src={logo.src}
              alt={logo.name}
              referrerPolicy="no-referrer"
              className="h-10 sm:h-14 w-auto object-contain grayscale brightness-90 hover:grayscale-0 transition-all duration-300 transform hover:scale-105"
            />
          ))}
        </div>
      </div>
    </section>
  );
}

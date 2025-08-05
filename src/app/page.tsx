'use client';

import React, { useState, useEffect } from 'react';

// Komponent pro ikony
const Icon = ({ src, className = 'w-6 h-6' }: { src: string; className?: string }) => (
  <img src={src} alt="" className={className} />
);

// Definice dat pro snazší správu
const navLinks = [
  { href: '#sluzby', label: 'Služby' },
  { href: '#o-nas', label: 'O nás' },
  { href: '#proc-nas', label: 'Proč si vybrat nás' },
  { href: '#kontakt', label: 'Kontakt' },
];

const services = [
  {
    title: 'Občanské právo',
    description: 'Poskytujeme komplexní poradenství v oblasti občanského práva, od smluvní agendy po řešení sporů a zastupování před soudy.',
    image: '/images/service-civil-law-book.jpg',
    icon: 'https://cdn.jsdelivr.net/npm/@tabler/icons@latest/icons/users.svg',
  },
  {
    title: 'Trestní právo',
    description: 'Zajišťujeme profesionální obhajobu v trestním řízení a právní pomoc poškozeným. Chráníme Vaše práva v každé fázi procesu.',
    image: '/images/service-criminal-law-book.jpg',
    icon: 'https://cdn.jsdelivr.net/npm/@tabler/icons@latest/icons/gavel.svg',
  },
  {
    title: 'Obchodní právo',
    description: 'Pomáháme firmám s korporátní agendou, přípravou obchodních smluv a řešením obchodněprávních sporů s důrazem na Váš byznys.',
    image: '/images/service-commercial-law-desk.jpg',
    icon: 'https://cdn.jsdelivr.net/npm/@tabler/icons@latest/icons/briefcase.svg',
  },
  {
    title: 'Správní právo',
    description: 'Zastupujeme klienty ve správních řízeních, včetně problematiky cizineckého práva a komunikace s úřady státní správy.',
    image: '/images/service-administrative-law-passport.jpg',
    icon: 'https://cdn.jsdelivr.net/npm/@tabler/icons@latest/icons/building-government.svg',
  },
];

const teamMembers = [
  {
    name: 'JUDr. Zbyněk Kašpárek, LL.M.',
    image: '/images/team-zbynek-kasparek-portrait.jpg',
  },
  {
    name: 'JUDr. Zdeněk Kašpárek, CSc.',
    image: '/images/team-zdenek-kasparek-portrait.jpg',
  },
  {
    name: 'JUDr. Jan Charuza',
    image: '/images/team-jan-charuza-portrait.jpg',
  },
  {
    name: 'Pavla Nohejlová',
    image: '/images/team-pavla-nohejlova-portrait.jpg',
  },
];

const whyUsItems = [
    {
        icon: 'https://heroicons.com/24/solid/chart-bar-square.svg',
        title: 'Efektivita a rychlost',
        text: 'Váš případ řešíme s maximálním nasazením tak, aby byl úspěšně a rychle vyřešen k vaší plné spokojenosti.'
    },
    {
        icon: 'https://heroicons.com/24/solid/users.svg',
        title: 'Orientace na klienta',
        text: 'Vaše spokojenost je naší absolutní prioritou. Zakládáme si na budování dlouhodobé důvěry a osobním přístupu.'
    },
    {
        icon: 'https://heroicons.com/24/solid/shield-check.svg',
        title: 'Profesionalita a transparentnost',
        text: 'Po ukončení případu vám vracíme veškeré podklady a spis archivujeme v souladu se zákonem. Jednáme vždy eticky a otevřeně.'
    },
];

export default function AdvokatniKancelarPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    document.title = 'Advokátní kancelář Kašpárek | Spolehlivost a efektivita';

    const faviconSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect width="100" height="100" rx="10" fill="#1e3a8a"></rect><text x="50" y="55" dominant-baseline="middle" text-anchor="middle" font-size="60" font-family="sans-serif" fill="#ffffff" font-weight="bold">AK</text></svg>`;
    const faviconUrl = `data:image/svg+xml,${encodeURIComponent(faviconSvg)}`;

    const link = document.createElement('link');
    link.rel = 'icon';
    link.href = faviconUrl;
    document.head.appendChild(link);

    return () => {
      document.head.removeChild(link);
    };
  }, []);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <div className="bg-gray-50 text-gray-800 font-sans">
      {/* --- Header --- */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <a href="#" className="text-2xl font-bold text-blue-900 tracking-tight">AK Kašpárek</a>
            <nav className="hidden md:flex space-x-8">
              {navLinks.map((link) => (
                <a key={link.href} href={link.href} className="text-gray-600 hover:text-blue-800 transition-colors duration-300 font-medium">
                  {link.label}
                </a>
              ))}
            </nav>
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 rounded-md text-gray-600 hover:bg-gray-100 hover:text-blue-800">
                <Icon src="https://cdn.jsdelivr.net/npm/@tabler/icons@latest/icons/menu-2.svg" className="w-7 h-7" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* --- Mobile Menu --- */}
      <div
        className={`fixed inset-0 bg-white z-50 transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out md:hidden`}
      >
        <div className="flex justify-end p-6">
          <button onClick={closeMenu} className="p-2 rounded-md text-gray-600 hover:bg-gray-100">
            <Icon src="https://cdn.jsdelivr.net/npm/@tabler/icons@latest/icons/x.svg" className="w-7 h-7" />
          </button>
        </div>
        <nav className="flex flex-col items-center space-y-8 mt-8">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={closeMenu} className="text-2xl font-semibold text-gray-700 hover:text-blue-800">
              {link.label}
            </a>
          ))}
        </nav>
      </div>

      <main>
        {/* --- Hero Section --- */}
        <section className="relative bg-blue-900 text-white min-h-[60vh] flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8">
          <div className="absolute inset-0 bg-cover bg-center opacity-10" style={{ backgroundImage: `url('/images/legal-justice-symbols.jpg')` }}></div>
          <div className="absolute inset-0 bg-blue-900/80"></div>
          <div className="relative z-10 text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight mb-4">
              Spolehlivá právní opora pro Váš úspěch
            </h1>
            <p className="text-lg md:text-xl text-blue-100 mb-8">
              Poskytujeme efektivní a na klienta orientovaná právní řešení. Vaše spokojenost je naším cílem.
            </p>
            <a href="#kontakt" className="bg-white text-blue-900 font-bold py-3 px-8 rounded-lg shadow-lg hover:bg-blue-50 transition-transform transform hover:scale-105 duration-300">
              Sjednat konzultaci
            </a>
          </div>
        </section>

        {/* --- Services Section --- */}
        <section id="sluzby" className="py-20 sm:py-28 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Oblasti naší specializace</h2>
              <p className="text-lg text-gray-600 mb-12">
                Nabízíme široké spektrum právních služeb s cílem poskytnout vám komplexní a kvalifikovanou pomoc.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service) => (
                <div key={service.title} className="bg-gray-50 border border-gray-200/80 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 flex flex-col">
                  <img src={service.image} alt={service.title} className="w-full h-48 object-cover"/>
                  <div className="p-6 flex-grow flex flex-col">
                    <div className="flex items-center mb-3">
                        <div className="bg-blue-100 p-2 rounded-full mr-3">
                             <Icon src={service.icon} className="w-6 h-6 text-blue-800" />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
                    </div>
                    <p className="text-gray-600 flex-grow">{service.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- Why Us Section --- */}
        <section id="proc-nas" className="py-20 sm:py-28 bg-gray-50">
             <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto">
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Proč si vybrat naši kancelář?</h2>
                    <p className="text-lg text-gray-600 mb-16">
                        Naše principy jsou základem každé spolupráce a zárukou vaší spokojenosti.
                    </p>
                </div>
                <div className="grid md:grid-cols-3 gap-8 text-center">
                    {whyUsItems.map(item => (
                        <div key={item.title} className="p-8 bg-white rounded-lg shadow-sm">
                            <div className="inline-block bg-blue-100 p-4 rounded-full mb-5">
                                <Icon src={item.icon} className="h-8 w-8 text-blue-800 filter-blue"/>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                            <p className="text-gray-600">{item.text}</p>
                        </div>
                    ))}
                </div>
             </div>
        </section>

        {/* --- Team Section --- */}
        <section id="o-nas" className="py-20 sm:py-28 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Náš zkušený tým</h2>
              <p className="text-lg text-gray-600 mb-12">
                Seznamte se s právníky, kteří stojí za úspěchem naší kanceláře a našich klientů.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
              {teamMembers.map((member) => (
                <div key={member.name} className="text-center group">
                  <div className="relative w-full aspect-square rounded-lg overflow-hidden mb-4 shadow-lg transform group-hover:scale-105 transition-transform duration-300">
                    <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-black bg-opacity-10 group-hover:bg-opacity-0 transition-opacity duration-300"></div>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800">{member.name}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- Contact Section --- */}
        <section id="kontakt" className="py-20 sm:py-28 bg-blue-900 text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="text-center md:text-left">
                  <h2 className="text-3xl sm:text-4xl font-bold mb-4">Kontaktujte nás</h2>
                  <p className="text-lg text-blue-200 mb-8">Rádi se s Vámi spojíme a probereme Váš případ. Jsme tu pro Vás.</p>
                  <img src="/images/service-consultation-finance.jpg" alt="Konzultace s klienty" className="rounded-lg shadow-2xl w-full h-auto object-cover"/>
                </div>
                <div className="bg-white/10 p-8 rounded-lg text-lg">
                  <h3 className="text-2xl font-bold mb-6">Advokátní kancelář Kašpárek</h3>
                  <div className="space-y-4 text-blue-50">
                    <p><strong>Adresa:</strong><br/>Sokolovská 49, 186 00 Praha 8</p>
                    <p><strong>Telefon:</strong><br/><a href="tel:+420226258770" className="hover:text-white transition">+420 226 258 770</a></p>
                    <p><strong>E-mail:</strong><br/><a href="mailto:recepce@akkasparek.com" className="hover:text-white transition">recepce@akkasparek.com</a></p>
                    <p><strong>IČO:</strong><br/>713 29 798</p>
                    <p><strong>Datová schránka:</strong><br/>uhwew4d</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* --- Footer --- */}
      <footer className="bg-gray-800 text-gray-400">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center text-center sm:text-left">
            <div className="mb-4 sm:mb-0">
              <p>&copy; {new Date().getFullYear()} Advokátní kancelář Kašpárek. Všechna práva vyhrazena.</p>
            </div>
            <div>
              <a href="https://digitalfusion.cz" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-300">
                Vytvořeno s láskou od DigitalFusion
              </a>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}
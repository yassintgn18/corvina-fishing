function FeaturesSection() {
  const features = [
    {
      icon: (
        <svg className="w-8 h-8 text-[var(--primary)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
          <circle cx="12" cy="7" r="4" />
          <path d="M12 3v8" />
          <path d="M8 7h8" />
        </svg>
      ),
      title: "Skippers certifiés",
      desc: "Capitaines expérimentés et licenciés"
    },
    {
      icon: (
        <svg className="w-8 h-8 text-[var(--primary)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 6v6l4 2" />
          <path d="M16 2l4 4-4 4" />
          <path d="M8 2L4 6l4 4" />
        </svg>
      ),
      title: "Matériel premium",
      desc: "Cannes Shimano, moulinets haut de gamme"
    },
    {
      icon: (
        <svg className="w-8 h-8 text-[var(--primary)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="M12 8v4" />
          <path d="M12 16h.01" />
        </svg>
      ),
      title: "Sécurité garantie",
      desc: "Équipement homologué et briefing sécurité"
    },
    {
      icon: (
        <svg className="w-8 h-8 text-[var(--primary)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
      ),
      title: "Spots exclusifs",
      desc: "Accès aux meilleures zones de pêche"
    }
  ];

  return (
    <div className="py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-[var(--text-primary)]">Pourquoi choisir CORVINA</h2>
        <p className="text-[var(--text-secondary)] mt-2">Une expérience de pêche unique au Maroc</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((f, i) => (
          <div key={i} className="text-center p-6 bg-[var(--surface)] rounded-2xl border border-[var(--border)] hover:shadow-lg transition group">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[var(--primary)]/10 mb-4 group-hover:bg-[var(--primary)]/20 transition">
              {f.icon}
            </div>
            <h3 className="text-xl font-semibold text-[var(--text-primary)]">{f.title}</h3>
            <p className="text-[var(--text-secondary)] text-sm mt-2">{f.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FeaturesSection;
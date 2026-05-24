function FeaturesSection() {
  const features = [
    { icon: "⚓", title: "Skippers certifiés", desc: "Capitaines expérimentés et licenciés" },
    { icon: "🎣", title: "Matériel premium", desc: "Cannes Shimano, moulinets haut de gamme" },
    { icon: "🛡️", title: "Sécurité garantie", desc: "Équipement homologué et briefing sécurité" },
    { icon: "🌊", title: "Spots exclusifs", desc: "Accès aux meilleures zones de pêche" },
  ];

  return (
    <div className="py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-[var(--text-primary)]">Pourquoi choisir CORVINA</h2>
        <p className="text-[var(--text-secondary)] mt-2">Une expérience de pêche unique au Maroc</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((f, i) => (
          <div key={i} className="text-center p-6 bg-[var(--surface)] rounded-2xl border border-[var(--border)] hover:shadow-lg transition">
            <div className="text-4xl mb-3">{f.icon}</div>
            <h3 className="text-xl font-semibold text-[var(--text-primary)]">{f.title}</h3>
            <p className="text-[var(--text-secondary)] text-sm mt-2">{f.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FeaturesSection;
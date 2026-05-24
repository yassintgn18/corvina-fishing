function TestimonialsSection() {
  const testimonials = [
    { name: "Karim B.", role: "Pêcheur expert", text: "Sortie exceptionnelle, capitaine très pro. Je recommande !", stars: 5 },
    { name: "Salma T.", role: "Débutante", text: "Super expérience, tout le matériel fourni. Parfait pour découvrir la pêche.", stars: 5 },
    { name: "Youssef M.", role: "Client régulier", text: "Meilleure plateforme pour réserver des sorties au Maroc.", stars: 4 },
  ];

  return (
    <div className="py-16 bg-[var(--surface)] border-y border-[var(--border)]">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-[var(--text-primary)]">Ce que nos clients disent</h2>
        <p className="text-[var(--text-secondary)] mt-2">Des milliers de pêcheurs satisfaits</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {testimonials.map((t, i) => (
          <div key={i} className="p-6 bg-[var(--background)] rounded-2xl border border-[var(--border)]">
            <div className="flex gap-1 mb-3 text-[var(--secondary)]">
              {"★".repeat(t.stars)}{"☆".repeat(5-t.stars)}
            </div>
            <p className="text-[var(--text-primary)] italic">"{t.text}"</p>
            <div className="mt-4">
              <p className="font-semibold text-[var(--text-primary)]">{t.name}</p>
              <p className="text-sm text-[var(--text-secondary)]">{t.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TestimonialsSection;
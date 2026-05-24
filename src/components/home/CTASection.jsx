import { Link } from 'react-router-dom';

function CTASection() {
  return (
    <div className="py-16 text-center">
      <div className="bg-gradient-to-r from-[var(--primary)] to-[var(--primary-dark)] rounded-3xl p-10 text-white">
        <h2 className="text-3xl font-bold mb-3">Prêt à vivre l'aventure ?</h2>
        <p className="opacity-90 mb-6">Réservez votre sortie dès aujourd'hui</p>
        <Link to="/sorties" className="inline-block bg-[var(--secondary)] text-[var(--primary)] px-8 py-3 rounded-full font-semibold hover:bg-[var(--secondary-dark)] transition">
          Réserver maintenant →
        </Link>
      </div>
    </div>
  );
}

export default CTASection;
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-[var(--surface)] border-t border-[var(--border)] py-8 mt-12">
      <div className="max-w-6xl mx-auto px-5">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src="https://cdn-icons-png.flaticon.com/512/2964/2964847.png" alt="logo" className="h-8 w-auto" />
              <span className="text-xl font-bold text-[var(--primary)]">CORVINA</span>
            </div>
            <p className="text-sm text-[var(--text-secondary)]">Pêche sportive au Maroc</p>
          </div>
          <div>
            <h4 className="font-semibold text-[var(--text-primary)] mb-3">Navigation</h4>
            <ul className="space-y-2 text-sm text-[var(--text-secondary)]">
              <li><Link to="/sorties" className="hover:text-[var(--primary)] transition">Sorties</Link></li>
              <li><Link to="/bateaux" className="hover:text-[var(--primary)] transition">Bateaux</Link></li>
              <li><Link to="/boutique" className="hover:text-[var(--primary)] transition">Boutique</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-[var(--text-primary)] mb-3">Légal</h4>
            <ul className="space-y-2 text-sm text-[var(--text-secondary)]">
              <li><a href="#" className="hover:text-[var(--primary)] transition">CGV</a></li>
              <li><a href="#" className="hover:text-[var(--primary)] transition">Confidentialité</a></li>
              <li><a href="#" className="hover:text-[var(--primary)] transition">Mentions légales</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-[var(--text-primary)] mb-3">Contact</h4>
            <p className="text-sm text-[var(--text-secondary)]">contact@corvina.ma</p>
            <p className="text-sm text-[var(--text-secondary)]">+212 5XX XXX XXX</p>
          </div>
        </div>
        <div className="pt-6 border-t border-[var(--border)] text-center text-xs text-[var(--text-secondary)]">
          © 2026 CORVINA Fishing - Tous droits réservés
        </div>
      </div>
    </footer>
  );
}

export default Footer;
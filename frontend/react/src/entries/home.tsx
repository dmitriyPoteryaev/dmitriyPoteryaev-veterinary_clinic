import { createRoot } from 'react-dom/client';
import Home from '../components/Home';
import '../styles/home.css';

function mount() {
  const el = document.getElementById('react-hello');
  if (!el || (el as any).__reactRoot) return;
  const root = createRoot(el);
  (el as any).__reactRoot = root;

  const clinic = el.getAttribute('data-clinic') || 'Dr.Hug';
  root.render(<Home clinic={clinic} cta="/appointment" />);
}

document.readyState === 'loading'
  ? document.addEventListener('DOMContentLoaded', () => mount(), { once: true })
  : mount();

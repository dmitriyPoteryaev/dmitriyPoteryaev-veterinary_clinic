import { createRoot } from 'react-dom/client';
import Main from '../src/modules/main';
import './styles/styles.css';


function mount() {
  const el = document.getElementById('main');
  if (!el || (el as any).__reactRoot) return;
  const root = createRoot(el);
  (el as any).__reactRoot = root;

  root.render(<Main/>);
}

document.readyState === 'loading'
  ? document.addEventListener('DOMContentLoaded', () => mount(), { once: true })
  : mount();

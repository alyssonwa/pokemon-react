import { createBrowserRouter } from 'react-router-dom';
import Home from './pages/home';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/contact',
    element: <div>Meu contato: alyssonwa</div>,
  },
]);
export default router;

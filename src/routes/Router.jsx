import Home from '@/components/Home';
import StudiesCard from '@/components/StudiesCard';
import Testimonials from '@/components/Testimonials';
import ToolsSection from '@/components/ToolsSection';
import Main from '@/layout/Main';
import {photoLoader} from '@/components/StudiesCard';
import { createBrowserRouter } from 'react-router-dom';
const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children: [
      {
        path: '/',
        element: <Home />,
        loader: photoLoader,
      },
      {
        path: '/blog',
        element: <Testimonials />,
      },
      {
        path: '/about',
        element: <ToolsSection />,
      },
      {
        path: '/contact',
        element: <StudiesCard />,
        loader: photoLoader,
      },
    ],
  },
]);

export default router;

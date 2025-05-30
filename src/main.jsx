import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Root from "./routes/root";
import BlogPage from './pages/BlogPage.jsx';
import AboutPage from './pages/AboutPage.jsx';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <div>Page not found</div>,
  },
  {
    path: "blog",
    element: <BlogPage />,
    errorElement: <div>Page not found</div>,
  },
  {
    path: "about",
    element: <AboutPage />,
    errorElement: <div>Page not found</div>,
  },
]);



createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
)

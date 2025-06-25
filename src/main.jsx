import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router-dom'; // ✅ Corrected this line
import router from './routes/router.jsx';
import { Toaster } from 'react-hot-toast';
import AuthProvider from './provider/AuthProvider'; 

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <Toaster position="top-center" /> {/* ✅ Toast notification */}
      <RouterProvider router={router} /> {/* ✅ Routing */}
    </AuthProvider>
  </StrictMode>
);

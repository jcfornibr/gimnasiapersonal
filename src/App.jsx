import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { NavigateApp } from './components/NavigateApp';
import { FooterComponent } from './components/FooterComponent';
import { AuthProvider } from './auth/AuthProvider';
import Login from './pages/Login';
import Register from './pages/Register';
import ProtectedRoute from './auth/ProtectedRoute';

const HomePage = lazy(() => import('./pages/homePage').then(module => ({ default: module.HomePage })));
const ErrorPage = lazy(() => import('./pages/errorPage').then(module => ({ default: module.ErrorPage })));
const Nosotros = lazy(() => import('./pages/nosotros').then(module => ({ default: module.Nosotros })));
const Contact = lazy(() => import('./pages/contact').then(module => ({ default: module.Contact })));
const GymExercise = lazy(() => import('./pages/gymExercises').then(module => ({ default: module.GymExercise })));
const Admin = lazy(() => import('./pages/admin'));


function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <NavigateApp />
        <Suspense fallback={
          <div className="flex items-center justify-center min-h-screen bg-[#121113]">
            <div className="text-white/80 text-xl">Cargando...</div>
          </div>
        }>
          <Routes>
            <Route path='/' element={<HomePage />} />
            {/* <Route path='/gymexercise' element={<GymExercise />} /> */}
            <Route path='/contacto' element={<Contact />} />
            <Route path='/nosotros' element={<Nosotros />} />
            <Route path='/admin' element={
              <ProtectedRoute>
                <Admin />
              </ProtectedRoute>
            } />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='*' element={<ErrorPage />} />
          </Routes>
        </Suspense>
        <FooterComponent />
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App
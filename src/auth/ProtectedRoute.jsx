import { useAuth } from "./useAuth";
import { Navigate } from 'react-router-dom';

export default function ProtectedRoute({ children }) {
    const { user, loading } = useAuth();

    if (loading) {
        return <div className="flex items-center justify-center min-h-screen bg-[#121113]">
            <div className="text-white/80 text-xl">Cargando...</div>
        </div>;
    }

    if (!user) {
        return <Navigate to='/login' />;
    }

    return children;
}
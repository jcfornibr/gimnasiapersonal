import { useState } from 'react';
import { useAuth } from '../auth/useAuth';
import { useNavigate, Link } from 'react-router-dom';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const { signIn } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');
        try {
            await signIn(email, password);
            navigate('/');
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-[#121113] flex items-center justify-center px-4">
            <div className="max-w-md w-full bg-gray-800 rounded-lg p-8 shadow-lg">
                <h2 className="text-white text-2xl font-bold text-center mb-6">Iniciar Sesión</h2>
                {error && <p className="text-red-500 text-center mb-4">{error}</p>}
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-white/80 text-sm font-medium mb-2">Email</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-3 py-2 bg-gray-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-red-500"
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-white/80 text-sm font-medium mb-2">Contraseña</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-3 py-2 bg-gray-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-red-500"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition-colors disabled:opacity-50"
                    >
                        {loading ? 'Cargando...' : 'Iniciar Sesión'}
                    </button>
                </form>
                <p className="text-white/80 text-center mt-4">
                    ¿No tienes cuenta? <Link to="/register" className="text-red-500 hover:underline">Regístrate</Link>
                </p>
            </div>
        </div>
    );
}

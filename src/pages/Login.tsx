import { useState } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { MainLayout } from '@/components/layout/MainLayout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useAuth } from '@/context/AuthContext';
import { toast } from 'sonner';
import { Eye, EyeOff } from 'lucide-react';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const redirect = searchParams.get('redirect') || '/';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !password) {
      toast.error('Please enter email and password');
      return;
    }

    setIsLoading(true);
    const success = await login(email, password);
    setIsLoading(false);

    if (success) {
      toast.success('Welcome back!');
      navigate(redirect === 'checkout' ? '/checkout' : '/');
    } else {
      toast.error('Invalid credentials. Password must be at least 6 characters.');
    }
  };

  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-md mx-auto">
          <div className="bg-white rounded-sm border border-slate-100 p-8 shadow-xl">
            {/* Updated Branding */}
            <h1 className="text-3xl font-[900] text-center mb-2 tracking-tighter italic text-[#2874f0]">
              THE SOUTH <span className="text-[#ff9f00]">PLATE</span>
            </h1>
            <p className="text-slate-500 font-bold uppercase tracking-widest text-xs text-center mb-8">
              Official Site Login
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <Label htmlFor="email" className="font-bold text-slate-700">Email Address</Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="mt-1 h-11 focus:ring-[#2874f0]"
                />
              </div>

              <div>
                <Label htmlFor="password" title="Password must be at least 6 characters" className="font-bold text-slate-700">Password</Label>
                <div className="relative mt-1">
                  <Input
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                    className="h-11 focus:ring-[#2874f0]"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-[#2874f0]"
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
              </div>

              {/* High Contrast Blue Button */}
              <Button
                type="submit"
                disabled={isLoading}
                className="w-full bg-[#2874f0] hover:bg-[#1a5fcd] h-12 font-black uppercase tracking-widest text-white shadow-lg"
              >
                {isLoading ? 'Signing in...' : 'Sign In'}
              </Button>
            </form>

            <div className="mt-6 text-center border-t border-slate-50 pt-6">
              <p className="text-sm text-slate-500 font-medium">
                Don't have an account?{' '}
                <Link to="/register" className="text-[#2874f0] font-bold hover:underline">
                  Create one
                </Link>
              </p>
            </div>
          </div>

          <p className="text-[10px] uppercase tracking-tighter text-center text-slate-400 mt-6 font-bold">
            © 2026 Evolve Solutions - The South Plate
          </p>
        </div>
      </div>
    </MainLayout>
  );
}

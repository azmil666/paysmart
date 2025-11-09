
import React from 'react';
import { HashRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Schedule from './pages/Schedule';
import Impact from './pages/Impact';

const Header: React.FC = () => {
    const location = useLocation();

    const NavLink: React.FC<{ to: string; children: React.ReactNode }> = ({ to, children }) => {
        const isActive = location.pathname === to;
        return (
            <Link 
                to={to} 
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive 
                        ? 'bg-slate-900 text-white' 
                        : 'text-slate-500 hover:bg-slate-200 hover:text-slate-800'
                }`}
            >
                {children}
            </Link>
        );
    };

    return (
        <header className="bg-white shadow-sm sticky top-0 z-10">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-teal-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path></svg>
                        <span className="ml-3 text-xl font-bold text-slate-800">PaySmart</span>
                    </div>
                    <nav className="hidden md:flex items-center space-x-4">
                        <NavLink to="/">Home</NavLink>
                        <NavLink to="/schedule">Schedule</NavLink>
                        <NavLink to="/impact">Impact</NavLink>
                    </nav>
                </div>
            </div>
        </header>
    );
}

const App: React.FC = () => {
  return (
    <HashRouter>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow container mx-auto p-4 sm:p-6 lg:p-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/schedule" element={<Schedule />} />
            <Route path="/impact" element={<Impact />} />
          </Routes>
        </main>
        <footer className="bg-white mt-8">
            <div className="container mx-auto py-4 px-4 sm:px-6 lg:px-8 text-center text-sm text-slate-500">
                <p>&copy; {new Date().getFullYear()} PaySmart. Financial planning made simple.</p>
            </div>
        </footer>
      </div>
    </HashRouter>
  );
};

export default App;

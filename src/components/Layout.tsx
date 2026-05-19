import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

const Layout = () => {
    return (
        <div className="min-h-screen flex flex-col bg-slate-950 text-slate-50">
            <Navbar />
            <main className="flex-grow w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
                <Outlet />
            </main>
            <footer className="border-t border-slate-800 py-6 mt-auto">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-slate-500 text-sm">
                    © {new Date().getFullYear()} David Baines. Built with React & Vite.
                </div>
            </footer>
        </div>
    );
};

export default Layout;

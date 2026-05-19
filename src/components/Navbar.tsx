import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, BookOpen, Layers, Menu, X } from 'lucide-react';

const Navbar = () => {
    const location = useLocation();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const links = [
        { path: '/', label: 'Home', icon: Home },
        { path: '/projects', label: 'Projects', icon: Layers },
        { path: '/blog', label: 'Blog', icon: BookOpen },
    ];

    const closeMobileMenu = () => setIsMobileMenuOpen(false);

    return (
        <>
            <nav className="sticky top-0 z-50 backdrop-blur-md bg-opacity-80 bg-slate-900 border-b border-slate-800">
                <div className="w-full px-3 sm:px-4 lg:px-5">
                    <div className="flex items-center justify-between h-16">
                        <Link to="/" className="flex items-center space-x-2 text-sky-400 hover:text-sky-300 transition-colors" onClick={closeMobileMenu}>
                            <span className="font-bold text-xl">David Baines</span>
                        </Link>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center space-x-6">
                            {links.map((link) => {
                                const isActive = location.pathname === link.path;
                                const Icon = link.icon;

                                return (
                                    <Link
                                        key={link.path}
                                        to={link.path}
                                        className={`relative px-2 py-2 rounded-md text-sm font-medium transition-colors ${isActive ? 'text-sky-400' : 'text-slate-400 hover:text-slate-200'
                                            }`}
                                    >
                                        <span className="flex items-center space-x-2">
                                            <Icon size={16} />
                                            <span>{link.label}</span>
                                        </span>
                                        {isActive && (
                                            <motion.div
                                                layoutId="navbar-indicator"
                                                className="absolute bottom-0 left-0 right-0 h-0.5 bg-sky-400"
                                                initial={false}
                                                transition={{ type: "spring", stiffness: 500, damping: 30 }}
                                            />
                                        )}
                                    </Link>
                                );
                            })}
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="md:hidden p-2 rounded-md text-slate-400 hover:text-slate-200 hover:bg-slate-800 transition-colors"
                            aria-label="Toggle menu"
                        >
                            <motion.div
                                animate={{ rotate: isMobileMenuOpen ? 90 : 0 }}
                                transition={{ duration: 0.3 }}
                            >
                                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                            </motion.div>
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Navigation Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="md:hidden fixed top-16 left-0 right-0 z-40 overflow-hidden backdrop-blur-md bg-slate-900/95 border-b border-slate-800 shadow-lg"
                    >
                        <div className="px-3 py-4 space-y-2">
                            {links.map((link) => {
                                const isActive = location.pathname === link.path;
                                const Icon = link.icon;

                                return (
                                    <Link
                                        key={link.path}
                                        to={link.path}
                                        onClick={closeMobileMenu}
                                        className={`flex items-center space-x-3 px-4 py-3 rounded-md text-base font-medium transition-colors ${isActive
                                            ? 'text-sky-400 bg-slate-800/50'
                                            : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/30'
                                            }`}
                                    >
                                        <Icon size={20} />
                                        <span>{link.label}</span>
                                    </Link>
                                );
                            })}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;

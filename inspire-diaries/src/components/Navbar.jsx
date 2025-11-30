import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaInstagram, FaBars, FaTimes } from 'react-icons/fa';
import logo from '../assets/logo.png';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <nav className="fixed w-full z-50 bg-primary/90 backdrop-blur-sm border-b border-accent/20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    <div className="flex-shrink-0 flex items-center gap-3">
                        <img src={logo} alt="Inspire Diaries" className="h-15 w-15 rounded-full" />
                        <span className="text-xl font-size-30 font-serif font-bold text-accent tracking-wider">Inspire Diaries</span>
                    </div>

                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-8">
                            <a href="#home" className="text-text hover:text-accent transition-colors duration-300 px-3 py-2 rounded-md text-sm font-medium">Home</a>
                            <a href="#portfolio" className="text-text hover:text-accent transition-colors duration-300 px-3 py-2 rounded-md text-sm font-medium">Portfolio</a>
                            <a href="#about" className="text-text hover:text-accent transition-colors duration-300 px-3 py-2 rounded-md text-sm font-medium">About</a>
                            <a href="#contact" className="text-text hover:text-accent transition-colors duration-300 px-3 py-2 rounded-md text-sm font-medium">Contact</a>
                        </div>
                    </div>

                    <div className="hidden md:flex items-center gap-4">
                        <a href="https://www.instagram.com/inspirediariess_" target="_blank" rel="noopener noreferrer" className="text-xl text-text hover:text-accent transition-colors">
                            <FaInstagram />
                        </a>
                    </div>

                    <div className="-mr-2 flex md:hidden">
                        <button onClick={toggleMenu} className="inline-flex items-center justify-center p-2 rounded-md text-text hover:text-accent hover:bg-secondary focus:outline-none">
                            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="md:hidden bg-primary border-b border-accent/20"
                >
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <a href="#home" onClick={toggleMenu} className="block px-3 py-2 rounded-md text-base font-medium text-text hover:text-accent hover:bg-secondary/50">Home</a>
                        <a href="#portfolio" onClick={toggleMenu} className="block px-3 py-2 rounded-md text-base font-medium text-text hover:text-accent hover:bg-secondary/50">Portfolio</a>
                        <a href="#about" onClick={toggleMenu} className="block px-3 py-2 rounded-md text-base font-medium text-text hover:text-accent hover:bg-secondary/50">About</a>
                        <a href="#contact" onClick={toggleMenu} className="block px-3 py-2 rounded-md text-base font-medium text-text hover:text-accent hover:bg-secondary/50">Contact</a>
                    </div>
                </motion.div>
            )}
        </nav>
    );
};

export default Navbar;

import React from 'react';
import { motion } from 'framer-motion';
import heroBg from '../assets/hero-bg.png';

const Hero = () => {
    return (
        <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <img
                    src={heroBg}
                    alt="Background"
                    className="w-full h-full object-cover opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-primary/30 via-primary/50 to-primary"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-5xl md:text-7xl font-serif font-bold text-text mb-6 tracking-wide"
                >
                    Inspire Diaries
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-xl md:text-2xl text-muted font-light mb-8 italic"
                >
                    "Every picture tells a story, let us tell yours."
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                >
                    <a
                        href="#portfolio"
                        className="inline-block px-8 py-3 border border-accent text-accent hover:bg-accent hover:text-primary transition-all duration-300 text-lg tracking-wider uppercase"
                    >
                        View Portfolio
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;

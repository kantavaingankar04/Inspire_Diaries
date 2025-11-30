import React from 'react';
import { motion } from 'framer-motion';

// Wedding
import w1 from '../assets/IDI_Gallery/Wedding/wed1.jpg';
import w2 from '../assets/IDI_Gallery/Wedding/wed2.jpg';
import w3 from '../assets/IDI_Gallery/Wedding/wed3.jpg';

// Events
import e1 from '../assets/IDI_Gallery/Events/wed1.jpg';
import e2 from '../assets/IDI_Gallery/Events/wed2.jpg';
import e3 from '../assets/IDI_Gallery/Events/wed3.jpg';

// Festive
import f1 from '../assets/IDI_Gallery/Festive/fest1.jpg';
import f2 from '../assets/IDI_Gallery/Festive/fest2.jpg';
import f3 from '../assets/IDI_Gallery/Festive/fest3.jpg';

// Traditional
import t1 from '../assets/IDI_Gallery/Traditional/trad1.jpg';
import t2 from '../assets/IDI_Gallery/Traditional/trad2.jpg';
import t3 from '../assets/IDI_Gallery/Traditional/trad3.jpg';

// Videos
import v1 from '../assets/IDI_Gallery/video1.mp4';
import v2 from '../assets/IDI_Gallery/video2.mp4';
import v3 from '../assets/IDI_Gallery/video3.mp4';

const Portfolio = () => {
    const images = [
        { src: w1, title: "Eternal Love", category: "Wedding" },
        { src: w2, title: "Joyful Moments", category: "Wedding" },
        { src: w3, title: "Celebration", category: "Wedding" },
        { src: e1, title: "Corporate Event", category: "Events" },
        { src: e2, title: "Gala Night", category: "Events" },
        { src: e3, title: "Stage Performance", category: "Events" },
        { src: f1, title: "Festival Lights", category: "Festive" },
        { src: f2, title: "Colors of Joy", category: "Festive" },
        { src: f3, title: "Tradition", category: "Festive" },
        { src: t1, title: "Cultural Heritage", category: "Traditional" },
        { src: t2, title: "Rituals", category: "Traditional" },
        { src: t3, title: "Legacy", category: "Traditional" },
    ];

    return (
        <section id="portfolio" className="py-20 bg-secondary">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-serif font-bold text-text mb-4">Selected Works</h2>
                    <div className="w-24 h-1 bg-accent mx-auto"></div>
                    <p className="mt-4 text-muted">Capturing moments that last a lifetime.</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {images.map((img, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group relative overflow-hidden rounded-lg shadow-xl aspect-[3/4] cursor-pointer"
                        >
                            <img
                                src={img.src}
                                alt={img.title}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-center p-4">
                                <h3 className="text-2xl font-serif text-white mb-2">{img.title}</h3>
                                <p className="text-white/90 uppercase tracking-widest text-sm">{img.category}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center my-16"
                >
                    <h2 className="text-4xl font-serif font-bold text-text mb-4">Cinematic Films</h2>
                    <div className="w-24 h-1 bg-accent mx-auto"></div>
                    <p className="mt-4 text-muted">Relive the emotions through motion.</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[v1, v2, v3].map((video, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group relative overflow-hidden rounded-lg shadow-xl aspect-video cursor-pointer"
                        >
                            <video
                                src={video}
                                controls
                                className="w-full h-full object-cover"
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Portfolio;

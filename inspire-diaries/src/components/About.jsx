import React from 'react';
import { motion } from 'framer-motion';
import logo from '../assets/logo.png'; // Using logo as profile placeholder for now

const About = () => {
    return (
        <section id="about" className="py-20 bg-primary">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row items-center gap-12">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="md:w-1/2"
                    >
                        <img
                            src={logo}
                            alt="Atharva Sambrekar"
                            className="w-full max-w-md mx-auto rounded-lg shadow-2xl border border-accent/20"
                        />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="md:w-1/2 text-center md:text-left"
                    >
                        <h2 className="text-4xl font-serif font-bold text-text mb-6">About The Artist</h2>
                        <h3 className="text-2xl text-accent mb-6">Atharva Sambrekar</h3>
                        <p className="text-muted mb-6 leading-relaxed">
                            Based in the beautiful landscapes of Goa, I am a photographer passionate about storytelling.
                            My journey began with a simple curiosity for capturing moments, which has now evolved into
                            a professional pursuit of freezing time.
                        </p>
                        <p className="text-muted mb-8 leading-relaxed">
                            Whether it's the joy of a wedding, the serenity of nature, or the raw emotion of a portrait,
                            I strive to create images that resonate with the soul. "Every picture tells a story, let us tell yours."
                        </p>
                        <div className="flex justify-center md:justify-start gap-4">
                            <div className="text-center">
                                <span className="block text-3xl font-bold text-accent">5+</span>
                                <span className="text-sm text-muted/80">Years Experience</span>
                            </div>
                            <div className="text-center px-6 border-l border-muted/30">
                                <span className="block text-3xl font-bold text-accent">100+</span>
                                <span className="text-sm text-muted/80">Happy Clients</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;

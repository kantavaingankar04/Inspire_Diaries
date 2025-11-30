import React from 'react';
import { motion } from 'framer-motion';
import { FaInstagram, FaWhatsapp, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
    return (
        <section id="contact" className="py-20 bg-secondary relative overflow-hidden">
            {/* Decorative background elements */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl font-serif font-bold text-text mb-4">Get In Touch</h2>
                    <p className="text-muted">Let's create something beautiful together.</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                    <motion.a
                        href="https://www.instagram.com/inspirediariess_"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ y: -5 }}
                        className="bg-primary p-8 rounded-lg border border-accent/20 hover:border-accent/50 transition-colors group"
                    >
                        <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-accent group-hover:text-primary transition-colors">
                            <FaInstagram size={24} />
                        </div>
                        <h3 className="text-xl font-bold text-text mb-2">Instagram</h3>
                        <p className="text-muted text-sm">@inspirediariess_</p>
                    </motion.a>

                    <motion.a
                        href="https://wa.me/917821037873" // Updated number
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ y: -5 }}
                        className="bg-primary p-8 rounded-lg border border-accent/20 hover:border-accent/50 transition-colors group"
                    >
                        <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-accent group-hover:text-primary transition-colors">
                            <FaWhatsapp size={24} />
                        </div>
                        <h3 className="text-xl font-bold text-text mb-2">WhatsApp</h3>
                        <p className="text-muted text-sm">Chat with us</p>
                    </motion.a>

                    <motion.a
                        href="mailto:contact@inspirediariess.com" // Placeholder email
                        whileHover={{ y: -5 }}
                        className="bg-primary p-8 rounded-lg border border-accent/20 hover:border-accent/50 transition-colors group"
                    >
                        <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-accent group-hover:text-primary transition-colors">
                            <FaEnvelope size={24} />
                        </div>
                        <h3 className="text-xl font-bold text-text mb-2">Email</h3>
                        <p className="text-muted text-sm">Send an inquiry</p>
                    </motion.a>
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="mt-16 bg-primary p-8 rounded-lg border border-accent/20"
                >
                    <form className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-muted mb-2">Name</label>
                                <input type="text" id="name" className="w-full bg-secondary border border-muted/30 rounded-md px-4 py-3 text-text focus:outline-none focus:border-accent transition-colors" placeholder="Your Name" />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-muted mb-2">Email</label>
                                <input type="email" id="email" className="w-full bg-secondary border border-muted/30 rounded-md px-4 py-3 text-text focus:outline-none focus:border-accent transition-colors" placeholder="your@email.com" />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-muted mb-2">Message</label>
                            <textarea id="message" rows="4" className="w-full bg-secondary border border-muted/30 rounded-md px-4 py-3 text-text focus:outline-none focus:border-accent transition-colors" placeholder="Tell us about your story..."></textarea>
                        </div>
                        <div className="text-center">
                            <button type="submit" className="px-8 py-3 bg-accent text-primary font-bold rounded-md hover:bg-white transition-colors duration-300">
                                Send Message
                            </button>
                        </div>
                    </form>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;

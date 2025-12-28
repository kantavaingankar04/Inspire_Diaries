
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Heart, User, Calendar, Briefcase, Camera, Users,
    Check, Send, Mail, MapPin, IndianRupee, ArrowRight
} from 'lucide-react';

const categories = [
    { id: 'wedding', label: 'Wedding', icon: Heart },
    { id: 'portrait', label: 'Portrait', icon: User },
    { id: 'event', label: 'Event', icon: Calendar },
    { id: 'commercial', label: 'Commercial', icon: Briefcase },
    { id: 'fashion', label: 'Fashion', icon: Camera },
    { id: 'family', label: 'Family', icon: Users },
];

const budgetRanges = [
    "Under ₹25,000",
    "₹25,000 - ₹50,000",
    "₹50,000 - ₹1,00,000",
    "₹1,00,000 - ₹2,50,000",
    "₹2,50,000+"
];

const QuoteForm = () => {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [formData, setFormData] = useState({
        date: '',
        location: '',
        budget: '',
        name: '',
        email: '',
        phone: '',
        vision: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const formatMessageForWhatsApp = () => {
        return `*New Quote Request*
        
*Category*: ${categories.find(c => c.id === selectedCategory)?.label || 'Not Selected'}
*Date*: ${formData.date}
*Location*: ${formData.location}
*Budget*: ${formData.budget}
*Name*: ${formData.name}
*Email*: ${formData.email}
*Phone*: ${formData.phone}

*Vision*:
${formData.vision}`;
    };

    const formatMessageForEmail = () => {
        return `New Quote Request
        
Category: ${categories.find(c => c.id === selectedCategory)?.label || 'Not Selected'}
Date: ${formData.date}
Location: ${formData.location}
Budget: ${formData.budget}
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}

Vision:
${formData.vision}`;
    };

    const handleWhatsAppSubmit = () => {
        if (!selectedCategory) return;
        setIsSubmitting(true);
        const message = encodeURIComponent(formatMessageForWhatsApp());
        window.open(`https://wa.me/917821037873?text=${message}`, '_blank');
        setTimeout(() => {
            setIsSubmitting(false);
            setIsSuccess(true);
        }, 1000);
    };

    const handleEmailSubmit = () => {
        if (!selectedCategory) return;
        setIsSubmitting(true);
        const message = encodeURIComponent(formatMessageForEmail());
        window.open(`mailto:atharvasambrekar1@gmail.com?subject=Quote Request&body=${message}`, '_self'); // mailto usually works better with _self or just location.href, but _self prevents popups blocked
        setTimeout(() => {
            setIsSubmitting(false);
            setIsSuccess(true);
        }, 1000);
    };

    if (isSuccess) {
        return (
            <section className="py-24 bg-primary px-4 min-h-[60vh] flex items-center justify-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center max-w-md"
                >
                    <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6 text-accent">
                        <Check size={40} />
                    </div>
                    <h2 className="text-3xl font-serif font-bold text-text mb-4">Redirecting...</h2>
                    <p className="text-muted mb-8">
                        We've opened the app to send your request. If it didn't open automatically, please try again.
                    </p>
                    <button
                        onClick={() => setIsSuccess(false)}
                        className="text-accent font-medium hover:text-accent/80 transition-colors underline decoration-accent/30 underline-offset-4"
                    >
                        Try Again / Make Changes
                    </button>
                </motion.div>
            </section>
        );
    }

    return (
        <section className="py-24 bg-primary relative overflow-hidden" id="quote">
            {/* Decorative background */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[100px] translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>

            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-text mb-4">
                        Let's Create Magic
                    </h2>
                    <p className="text-muted max-w-xl mx-auto text-lg">
                        Tell us about your vision. We'll craft a bespoke photography experience just for you.
                    </p>
                </motion.div>

                {/* Category Selection */}
                <div className="mb-16">
                    <h3 className="text-xl font-serif text-text mb-6 text-center">Select Your Session Type</h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                        {categories.map((cat) => (
                            <motion.button
                                key={cat.id}
                                onClick={() => setSelectedCategory(cat.id)}
                                whileHover={{ y: -4 }}
                                whileTap={{ scale: 0.98 }}
                                className={`p-4 rounded-xl border transition-all duration-300 flex flex-col items-center gap-3 group
                                    ${selectedCategory === cat.id
                                        ? 'bg-text text-primary border-text shadow-lg'
                                        : 'bg-secondary border-muted/20 hover:border-accent/50 text-muted hover:text-text'
                                    }`}
                            >
                                <cat.icon strokeWidth={1.5} className={`w-6 h-6 ${selectedCategory === cat.id ? 'text-accent' : 'group-hover:text-accent transition-colors'}`} />
                                <span className="text-sm font-medium">{cat.label}</span>
                            </motion.button>
                        ))}
                    </div>
                </div>

                <AnimatePresence>
                    {selectedCategory && (
                        <motion.div
                            initial={{ opacity: 0, y: 20, height: 0 }}
                            animate={{ opacity: 1, y: 0, height: 'auto' }}
                            exit={{ opacity: 0, y: 20, height: 0 }}
                            className="bg-secondary p-8 md:p-10 rounded-2xl border border-muted/10 shadow-sm"
                        >
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 mb-8">
                                {/* Date */}
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-muted uppercase tracking-wider">Event Date</label>
                                    <input
                                        type="date"
                                        name="date"
                                        value={formData.date}
                                        onChange={handleChange}
                                        className="w-full bg-primary/50 border border-muted/20 rounded-lg px-4 py-3 text-text focus:outline-none focus:border-accent transition-colors"
                                    />
                                </div>

                                {/* Location */}
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-muted uppercase tracking-wider">Location</label>
                                    <div className="relative">
                                        <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-muted/50 w-5 h-5" />
                                        <input
                                            type="text"
                                            name="location"
                                            value={formData.location}
                                            onChange={handleChange}
                                            required
                                            placeholder="City, Venue, or Address"
                                            className="w-full bg-primary/50 border border-muted/20 rounded-lg pl-10 pr-4 py-3 text-text focus:outline-none focus:border-accent transition-colors"
                                        />
                                    </div>
                                </div>

                                {/* Budget */}
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-muted uppercase tracking-wider">Estimated Budget</label>
                                    <div className="relative">
                                        <IndianRupee className="absolute left-3 top-1/2 -translate-y-1/2 text-muted/50 w-5 h-5" />
                                        <select
                                            name="budget"
                                            value={formData.budget}
                                            onChange={handleChange}
                                            className="w-full bg-primary/50 border border-muted/20 rounded-lg pl-10 pr-4 py-3 text-text focus:outline-none focus:border-accent transition-colors appearance-none"
                                        >
                                            <option value="">Select Range</option>
                                            {budgetRanges.map(range => (
                                                <option key={range} value={range}>{range}</option>
                                            ))}
                                        </select>
                                    </div>
                                </div>

                                {/* Name */}
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-muted uppercase tracking-wider">Full Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        placeholder="Your Name"
                                        className="w-full bg-primary/50 border border-muted/20 rounded-lg px-4 py-3 text-text focus:outline-none focus:border-accent transition-colors"
                                    />
                                </div>

                                {/* Email */}
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-muted uppercase tracking-wider">Email Address</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        placeholder="your@email.com"
                                        className="w-full bg-primary/50 border border-muted/20 rounded-lg px-4 py-3 text-text focus:outline-none focus:border-accent transition-colors"
                                    />
                                </div>

                                {/* Phone */}
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-muted uppercase tracking-wider">Phone Number</label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        required
                                        placeholder="+91 98765 43210"
                                        className="w-full bg-primary/50 border border-muted/20 rounded-lg px-4 py-3 text-text focus:outline-none focus:border-accent transition-colors"
                                    />
                                </div>
                            </div>

                            {/* Vision */}
                            <div className="space-y-2 mb-10">
                                <label className="text-sm font-medium text-muted uppercase tracking-wider">Your Vision</label>
                                <textarea
                                    name="vision"
                                    value={formData.vision}
                                    onChange={handleChange}
                                    rows="4"
                                    className="w-full bg-primary/50 border border-muted/20 rounded-lg px-4 py-3 text-text focus:outline-none focus:border-accent transition-colors"
                                    placeholder="Tell us about the vibe, specific shots, or any ideas you have in mind..."
                                ></textarea>
                            </div>

                            {/* Submission Buttons */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <button
                                    onClick={handleWhatsAppSubmit}
                                    className="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white py-4 px-6 rounded-lg font-medium transition-all transform hover:-translate-y-1 shadow-lg shadow-green-900/10"
                                >
                                    <Send size={20} />
                                    <span>Send via WhatsApp</span>
                                </button>

                                <button
                                    onClick={handleEmailSubmit}
                                    className="flex items-center justify-center gap-2 bg-[#1a1a1a] hover:bg-black text-white py-4 px-6 rounded-lg font-medium transition-all transform hover:-translate-y-1 shadow-lg shadow-gray-900/10"
                                >
                                    <Mail size={20} />
                                    <span>Send via Email</span>
                                </button>
                            </div>

                            <p className="text-center text-xs text-muted/60 mt-6">
                                By submitting, you agree to our privacy policy. We typically respond within 24 hours.
                            </p>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
};

export default QuoteForm; 

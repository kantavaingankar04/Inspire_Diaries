import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-primary border-t border-accent/20 py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <p className="text-muted text-sm">
                    &copy; {new Date().getFullYear()} Inspire Diaries. All rights reserved.
                </p>
                <p className="text-muted/80 text-xs mt-2">
                    Designed with ❤️ for Atharva Sambrekar
                </p>
            </div>
        </footer>
    );
};

export default Footer;

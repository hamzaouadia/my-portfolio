import { div } from 'framer-motion/client';
import React from 'react';

const paths = [
    { name: 'github', path: '/my-portfolio/assets/github-logo.svg', url: 'https://github.com/hamzaouadia' },
    { name: 'gmail', path: '/my-portfolio/assets/gmail-logo.svg', url: 'mailto:ouadia.h.dev@gmail.com' },
    // { name: 'instagram', path: '/my-portfolio/assets/instagram-logo.svg', url: 'https://instagram.com/your-profile' },
    { name: 'linkedin', path: '/my-portfolio/assets/linkedin-logo.svg', url: 'https://www.linkedin.com/in/hamza-ouadia-528220274/' },
];

const Footer = () => {
    return (
        <div className='items-center justify-center flex flex-col'>
            <div className="fixed bottom-4 flex flex-col p-1 z-1 rounded-full backdrop-blur-2xl">
                <footer className="container flex items-center p-2">
                    <span className='opacity-50'> ── </span>
                    {paths.map((item) => (
                        <a key={item.name} href={item.url} target="_blank" rel="noopener noreferrer">
                            <img src={item.path} alt={item.name} className="w-6 h-6 mx-2 opacity-50 hover:opacity-100 transition duration-300"/>
                        </a>
                    ))}
                    <span className='opacity-50'> ── </span>
                </footer>
            </div>
        </div>
    );
};

export default Footer;

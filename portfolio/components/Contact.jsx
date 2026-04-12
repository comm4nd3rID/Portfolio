// components/Contact.js
"use client";
const Contact = ({currentLang}) => {
    return (
        <footer id="contact" className="bg-gray-800 text-white p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">{currentLang["ContactMe"]}</h2>
            <div className="flex justify-center space-x-4">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">{currentLang["Instagram"]}</a>
                <a href="https://telegram.org" target="_blank" rel="noopener noreferrer">{currentLang["Telegram"]}</a>
                <a href="mailto:your-email@example.com">{currentLang["Gmail"]}</a>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer">{currentLang["GitHub"]}</a>
                <a href="tel:+1234567890">{currentLang["Phone"]}</a>
            </div>
        </footer>
    );
};

export default Contact;

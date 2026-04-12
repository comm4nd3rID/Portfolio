// components/Contact.js
"use client";
const Contact = ({currentLang}) => {
    return (
        <footer id="contact" className="bg-gray-800 text-white p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">{currentLang["ContactMe"]}</h2>
            <div className="flex justify-center space-x-4">
                <a href="https://www.instagram.com/prodbydashti/" target="_blank" rel="noopener noreferrer">{currentLang["Instagram"]}</a>
                <a href="https://telegram.org/commanderOII/" target="_blank" rel="noopener noreferrer">{currentLang["Telegram"]}</a>
                <a href="mailto:amir1385amol@gmail.com">{currentLang["Gmail"]}</a>
                <a href="https://github.com/comm4nd3rID/" target="_blank" rel="noopener noreferrer">{currentLang["GitHub"]}</a>
                <a href="tel:+989364495580">{currentLang["Phone"]}</a>
            </div>
        </footer>
    );
};

export default Contact;

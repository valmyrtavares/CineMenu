import React, { useState } from 'react';
import { FaWhatsapp, FaEnvelope, FaCheck } from 'react-icons/fa';
import { getWhatsAppUrl } from '../utils/whatsapp';
import './Contact.scss';

const Contact = () => {
    const [copied, setCopied] = useState(false);
    const email = "contato@dvdweb.com.br";

    const handleEmailClick = (e) => {
        // Copy to clipboard
        navigator.clipboard.writeText(email).then(() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        });
    };

    return (
        <footer className="footer-section" id="contato">
            <div className="container">

                <div className="cta-box glass-panel text-center">
                    <h2 className="cta-title">Pronto para elevar o nível das suas entregas?</h2>
                    <p className="cta-subtitle">Deixe seus clientes sem palavras entregando o casamento num formato inovador, elegante e eterno.</p>
                    <div className="cta-actions">
                        <button
                            onClick={() => window.open(getWhatsAppUrl("Olá, tenho interesse no sistema de DVD Interativo!"), "_blank", "noopener,noreferrer")}
                            className="btn btn-primary cta-btn"
                        >
                            Garantir Meu Acesso Agora <FaWhatsapp />
                        </button>
                    </div>
                </div>

                <div className="footer-links-row">
                    <button
                        onClick={() => window.open(getWhatsAppUrl("Olá! Vim pelo site CineMenu."), "_blank", "noopener,noreferrer")}
                        className="footer-contact-item"
                    >
                        <FaWhatsapp /> <span>Falar no WhatsApp</span>
                    </button>
                    <div className="email-wrapper">
                        <a
                            href={`mailto:${email}`}
                            className="footer-contact-item"
                            onClick={handleEmailClick}
                        >
                            <FaEnvelope /> <span>{email}</span>
                        </a>
                        {copied && (
                            <div className="copy-badge">
                                <FaCheck /> E-mail copiado!
                            </div>
                        )}
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} DVDweb. Todos os direitos reservados.</p>
                </div>
            </div>
        </footer>
    );
};

export default Contact;

import React from 'react';
import { FaWhatsapp, FaEnvelope } from 'react-icons/fa';
import { getWhatsAppUrl } from '../utils/whatsapp';
import './Contact.scss';

const Contact = () => {
    return (
        <footer className="footer-section" id="contato">
            <div className="container">

                <div className="cta-box glass-panel text-center">
                    <h2 className="cta-title">Pronto para elevar o nível das suas entregas?</h2>
                    <p className="cta-subtitle">Deixe seus clientes sem palavras entregando o casamento num formato inovador, elegante e eterno.</p>
                    <button
                        onClick={() => window.open(getWhatsAppUrl("Olá, tenho interesse no sistema de DVD Interativo!"), "_blank", "noopener,noreferrer")}
                        className="btn btn-primary cta-btn"
                    >
                        Garantir Meu Acesso Agora <FaWhatsapp />
                    </button>
                </div>

                <div className="footer-content">
                    <div className="footer-brand">
                        <h3 className="text-gradient">Antigravity VOD</h3>
                        <p>A experiência do DVD físico com a facilidade do digital.</p>
                    </div>

                    <div className="footer-links">
                        <h4>Contato</h4>
                        <button
                            onClick={() => window.open(getWhatsAppUrl("Olá! Vim pelo site CineMenu."), "_blank", "noopener,noreferrer")}
                            className="contact-link"
                            style={{ background: 'transparent', border: 'none', cursor: 'pointer', fontFamily: 'inherit' }}
                        >
                            <FaWhatsapp /> WhatsApp
                        </button>
                        <a href="mailto:contato@exemplo.com" className="contact-link">
                            <FaEnvelope /> Email
                        </a>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} Antigravity VOD. Todos os direitos reservados.</p>
                </div>
            </div>
        </footer>
    );
};

export default Contact;

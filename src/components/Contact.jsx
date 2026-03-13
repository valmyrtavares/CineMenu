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
                    <a href="mailto:contato@cinemenu.com.br" className="footer-contact-item">
                        <FaEnvelope /> <span>contato@cinemenu.com.br</span>
                    </a>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} CineMenu. Todos os direitos reservados.</p>
                </div>
            </div>
        </footer>
    );
};

export default Contact;

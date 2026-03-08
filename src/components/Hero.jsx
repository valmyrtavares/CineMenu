import React, { useState } from 'react';
import { FaPlayCircle, FaWhatsapp } from 'react-icons/fa';
import VideoModal from './VideoModal';
import { getWhatsAppUrl } from '../utils/whatsapp';
import './Hero.scss';

const Hero = () => {
    const [isVideoOpen, setIsVideoOpen] = useState(false);

    return (
        <section className="hero">
            <VideoModal isOpen={isVideoOpen} onClose={() => setIsVideoOpen(false)} />

            <div className="hero__background">
                {/* We'll use a CSS gradient overlay on top of an abstract luxury image or just pure CSS */}
                <div className="hero__glow"></div>
            </div>

            <div className="container hero__content">
                <div className="hero__badge text-gradient">
                    A Revolução do Filme de Casamento
                </div>
                <h1 className="hero__title">
                    Entregue uma Experiência <br />
                    <span className="text-gradient">Premium e Inesquecível</span>
                </h1>
                <p className="hero__subtitle">
                    Transforme links confusos de vídeos longos em um DVD Interativo Online.
                    Seus noivos navegam pelos capítulos do casamento com a mesma emoção de um DVD físico.
                </p>

                <div className="hero__actions">
                    <button className="btn btn-primary" onClick={() => setIsVideoOpen(true)}>
                        Ver Demonstração <FaPlayCircle />
                    </button>
                    <button
                        onClick={() => window.open(getWhatsAppUrl("Olá, gostaria de falar com a equipe sobre o CineMenu!"), "_blank", "noopener,noreferrer")}
                        className="btn btn-secondary"
                        style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}
                    >
                        Falar com a Equipe <FaWhatsapp />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Hero;

import React from 'react';
import { FaLock, FaImages, FaInstagram, FaFilm } from 'react-icons/fa';
import './Features.scss';

const Features = ({ openVideoModal }) => {
    const featureList = [
        {
            icon: <FaLock />,
            title: "Sua Intimidade Protegida",
            description: "Um menu seguro onde você decide quem entra. Restrinja o acesso e permita que pessoas queridas assistam ao grande dia com total privacidade em qualquer dispositivo.",
            onClick: () => openVideoModal(210), // 3:30 = 210s
            clickable: true
        },
        {
            icon: <FaImages />,
            title: "Capítulos com Thumbnails",
            description: "Making of, Cerimônia, Votos e Festa. Tudo separado em capítulos visuais para facilitar a navegação.",
            onClick: () => openVideoModal(38),
            clickable: true
        },
        {
            icon: <FaInstagram />,
            title: "Vitrine Infinita de Clientes",
            description: "Seu Instagram e site integrados diretamente no rodapé da entrega. Transforme cada convidado que assiste ao vídeo em um potencial novo contrato para seu estúdio.",
            onClick: () => openVideoModal(180), // 3:00 = 180s
            clickable: true
        },
        {
            icon: <FaFilm />,
            title: "Faturamento Extra no Pós-Venda",
            description: "Transforme o material 'esquecido' no HD em lucro. O cliente paga 1/3 do valor por vídeos extras que são fáceis de editar, dobrando sua entrega e sua margem de lucro.",
            onClick: () => openVideoModal(149), // 2:29 = 149s
            clickable: true
        }
    ];

    return (
        <section className="features-section container" id="recursos">
            <div className="section-header text-center">
                <h2 className="section-title">A Experiência Completa</h2>
                <p className="section-subtitle">Tudo que o seu estúdio precisa para entregar o filme perfeito.</p>
            </div>

            <div className="features-grid">
                {featureList.map((feat, index) => (
                    <div
                        key={index}
                        className={`feature-card glass-panel ${feat.clickable ? 'clickable-card' : ''}`}
                        onClick={feat.onClick ? feat.onClick : undefined}
                        style={feat.clickable ? { cursor: 'pointer' } : {}}
                    >
                        <div className="feature-card__icon text-gradient">
                            {feat.icon}
                        </div>
                        <h3 className="feature-card__title">{feat.title}</h3>
                        <p className="feature-card__desc">{feat.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Features;

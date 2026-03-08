import React from 'react';
import { FaListUl, FaImages, FaLock, FaPlayCircle } from 'react-icons/fa';
import './Features.scss';

const Features = ({ openVideoModal }) => {
    const featureList = [
        {
            icon: <FaListUl />,
            title: "Menu Estilo DVD",
            description: "Uma interface nostálgica e intuitiva, onde os noivos selecionam o que querem assistir com um clique."
        },
        {
            icon: <FaImages />,
            title: "Capítulos com Thumbnails",
            description: "Making of, Cerimônia, Votos e Festa. Tudo separado em capítulos visuais para facilitar a navegação.",
            onClick: openVideoModal,
            clickable: true
        },
        {
            icon: <FaLock />,
            title: "Links Privados & Seguros",
            description: "Acesso restrito para garantir a privacidade do casal e de seus convidados maravilhosos."
        },
        {
            icon: <FaPlayCircle />,
            title: "Player Premium Integrado",
            description: "Assista direto no navegador da TV, celular ou computador com qualidade de cinema e sem anúncios."
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

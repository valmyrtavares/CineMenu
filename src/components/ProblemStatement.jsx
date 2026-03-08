import React from 'react';
import { FaLink, FaCompactDisc, FaArrowRight } from 'react-icons/fa';
import './ProblemStatement.scss';

const ProblemStatement = () => {
    return (
        <section className="problem-section container" id="problema">
            <div className="problem-section__header">
                <h2 className="section-title">A forma atual de entregar vídeos <span className="text-gradient">está ultrapassada</span>.</h2>
                <p className="section-subtitle">A dor número 1 dos noivos é tentar achar o momento certo em um monte de links confusos do Google Drive ou YouTube.</p>
            </div>

            <div className="problem-cards">
                <div className="card card--old glass-panel">
                    <div className="card__icon-wrap">
                        <FaLink className="icon icon--red" />
                    </div>
                    <h3 className="card__title">O Jeito Antigo</h3>
                    <ul className="card__list">
                        <li>Vários links separados do Drive</li>
                        <li>Difícil de achar a cerimônia, os votos, a festa...</li>
                        <li>Experiência fria e impessoal</li>
                        <li>Risco de perder os links com o tempo</li>
                    </ul>
                </div>

                <div className="card__arrow">
                    <FaArrowRight />
                </div>

                <div className="card card--new glass-panel">
                    <div className="card__icon-wrap card__icon-wrap--gold">
                        <FaCompactDisc className="icon icon--gold" />
                    </div>
                    <h3 className="card__title text-gradient">Sua Nova Entrega</h3>
                    <ul className="card__list">
                        <li>Um único link mágico</li>
                        <li>Menu interativo igual a um DVD</li>
                        <li>Capítulos e miniaturas de fácil acesso</li>
                        <li>Assistir com a família na TV é emocionante</li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default ProblemStatement;

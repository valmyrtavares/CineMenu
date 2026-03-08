import React, { useState } from 'react';
import { FaPlay, FaPause, FaFilm, FaHeart, FaGlassCheers } from 'react-icons/fa';
import './InteractiveDemo.scss';

const InteractiveDemo = () => {
    const [view, setView] = useState('main'); // 'main' | 'chapters' | 'playing'
    const [activeChapter, setActiveChapter] = useState(0);

    const chapters = [
        { id: 0, title: "O Making Of", icon: <FaFilm />, duration: "12:05", bg: "url('https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80&w=800')" },
        { id: 1, title: "A Cerimônia", icon: <FaHeart />, duration: "45:30", bg: "url('https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=800')" },
        { id: 2, title: "A Festa", icon: <FaGlassCheers />, duration: "1:20:15", bg: "url('https://images.unsplash.com/photo-1530103862676-de88b7f73582?auto=format&fit=crop&q=80&w=800')" }
    ];

    const handlePlayAll = () => {
        setActiveChapter(0);
        setView('playing');
    };

    const handleChapterSelect = (id) => {
        setActiveChapter(id);
        setView('playing');
    };

    return (
        <section className="demo-section container" id="demonstracao">
            <div className="section-header text-center">
                <h2 className="section-title">Teste na Prática</h2>
                <p className="section-subtitle">Experimente a sensação de ter o seu casamento em um Menu Interativo de Cinema.</p>
            </div>

            <div className={`demo-player glass-panel view-${view}`}>
                {/* Background Layer that changes based on active view/chapter */}
                <div
                    className="demo-player__bg"
                    style={{
                        backgroundImage: view === 'playing' ? chapters[activeChapter].bg : chapters[0].bg,
                        opacity: view === 'playing' ? 0.3 : 0.6
                    }}
                ></div>

                {view === 'main' && (
                    <div className="dvd-menu main-menu">
                        <h3 className="dvd-menu__title text-gradient">Menu Principal</h3>
                        <div className="dvd-menu__options">
                            <button className="dvd-btn" onClick={handlePlayAll}>
                                <FaPlay className="btn-icon" /> Assistir o Filme
                            </button>
                            <button className="dvd-btn" onClick={() => setView('chapters')}>
                                <FaFilm className="btn-icon" /> Seleção de Cenas
                            </button>
                        </div>
                    </div>
                )}

                {view === 'chapters' && (
                    <div className="dvd-menu chapters-menu">
                        <h3 className="dvd-menu__title">Seleção de Cenas</h3>
                        <div className="dvd-menu__grid">
                            {chapters.map((chapter) => (
                                <div
                                    key={chapter.id}
                                    className="chapter-card"
                                    onClick={() => handleChapterSelect(chapter.id)}
                                    style={{ backgroundImage: chapter.bg }}
                                >
                                    <div className="chapter-card__overlay">
                                        <FaPlay className="play-icon" />
                                        <span className="chapter-title">{chapter.title}</span>
                                        <span className="chapter-duration">{chapter.duration}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <button className="dvd-btn back-btn" onClick={() => setView('main')}>
                            Voltar ao Menu Principal
                        </button>
                    </div>
                )}

                {view === 'playing' && (
                    <div className="dvd-playing">
                        <div className="playing-indicator">
                            <div className="pulse-ring"></div>
                            <span>Reproduzindo: "{chapters[activeChapter].title}"</span>
                        </div>

                        {/* Simulation of player controls */}
                        <div className="player-controls">
                            <button className="control-btn" onClick={() => setView('chapters')}>
                                Menu
                            </button>
                            <button className="control-btn active" onClick={() => { }}>
                                <FaPause />
                            </button>
                            <button className="control-btn" onClick={() => {
                                const next = activeChapter + 1;
                                if (next < chapters.length) handleChapterSelect(next);
                                else setView('main');
                            }}>
                                Próxima Cena
                            </button>
                        </div>
                    </div>
                )}

            </div>
        </section>
    );
};

export default InteractiveDemo;

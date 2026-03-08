import React, { useState } from 'react';
import { FaPlay, FaPause, FaFilm, FaHeart, FaGlassCheers } from 'react-icons/fa';
import './InteractiveDemo.scss';

const InteractiveDemo = () => {
    const [activeChapter, setActiveChapter] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);

    const chapters = [
        { id: 0, title: "O Making Of", icon: <FaFilm />, duration: "12:05", bg: "rgba(212, 175, 55, 0.2)" },
        { id: 1, title: "A Cerimônia", icon: <FaHeart />, duration: "45:30", bg: "rgba(255, 77, 77, 0.2)" },
        { id: 2, title: "A Festa", icon: <FaGlassCheers />, duration: "1:20:15", bg: "rgba(100, 100, 255, 0.2)" }
    ];

    const handlePlayToggle = () => {
        setIsPlaying(!isPlaying);
    };

    return (
        <section className="demo-section container" id="demonstracao">
            <div className="section-header text-center">
                <h2 className="section-title">Teste na Prática</h2>
                <p className="section-subtitle">Veja como os noivos irão receber e navegar pelo filme do casamento.</p>
            </div>

            <div className="demo-player glass-panel">

                {/* Mock Video Area */}
                <div className="demo-player__video" style={{ background: chapters[activeChapter].bg }}>
                    {isPlaying ? (
                        <div className="demo-player__playing-state">
                            <div className="pulse-ring"></div>
                            <span>Reproduzindo "{chapters[activeChapter].title}"</span>
                        </div>
                    ) : (
                        <div className="demo-player__idle-state text-gradient">
                            <FaFilm className="bg-icon" />
                        </div>
                    )}

                    <button className="demo-player__play-btn" onClick={handlePlayToggle}>
                        {isPlaying ? <FaPause /> : <FaPlay />}
                    </button>
                </div>

                {/* DVD Navigation Menu */}
                <div className="demo-player__menu">
                    <h3 className="menu-title">Seleção de Capítulos</h3>
                    <div className="chapter-list">
                        {chapters.map((chapter) => (
                            <button
                                key={chapter.id}
                                className={`chapter-item ${activeChapter === chapter.id ? 'active' : ''}`}
                                onClick={() => {
                                    setActiveChapter(chapter.id);
                                    setIsPlaying(false);
                                }}
                            >
                                <div className="chapter-item__icon">
                                    {chapter.icon}
                                </div>
                                <div className="chapter-item__info">
                                    <span className="chapter-item__title">{chapter.title}</span>
                                    <span className="chapter-item__duration">{chapter.duration}</span>
                                </div>
                            </button>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default InteractiveDemo;

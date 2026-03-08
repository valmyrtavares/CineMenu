import React, { useState, useEffect, useRef } from 'react';
import { FaPlay, FaFilm, FaHeart, FaGlassCheers, FaExternalLinkAlt } from 'react-icons/fa';
import Player from '@vimeo/player';
import './InteractiveDemo.scss';

const InteractiveDemo = () => {
    const [view, setView] = useState('main'); // 'main' | 'chapters' | 'playing'
    const [activeChapter, setActiveChapter] = useState(0);
    const iframeRef = useRef(null);
    const playerRef = useRef(null);

    // Timeline in seconds
    const chapters = [
        { id: 0, title: "O Making Of", icon: <FaFilm />, duration: "0:00 - 2:15", startTime: 0, bg: "url('https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80&w=800')" },
        { id: 1, title: "A Cerimônia", icon: <FaHeart />, duration: "2:15 - 5:34", startTime: 135, bg: "url('https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=800')" },
        { id: 2, title: "A Festa", icon: <FaGlassCheers />, duration: "5:34 - 7:45", startTime: 334, bg: "url('https://images.unsplash.com/photo-1530103862676-de88b7f73582?auto=format&fit=crop&q=80&w=800')" }
    ];

    // Initialize Vimeo Player when entering 'playing' view
    useEffect(() => {
        if (view === 'playing' && iframeRef.current && !playerRef.current) {
            playerRef.current = new Player(iframeRef.current);

            // Auto update the active chapter based on the current video time
            playerRef.current.on('timeupdate', function (data) {
                const currentTime = data.seconds;
                // Find the chapter that fits the time
                let currentChap = 0;
                if (currentTime >= 135 && currentTime < 334) currentChap = 1;
                if (currentTime >= 334) currentChap = 2;

                setActiveChapter(currentChap);
            });
        }

        // Cleanup listener when unmounting
        return () => {
            if (playerRef.current) {
                playerRef.current.off('timeupdate');
            }
        };
    }, [view]);

    // Handle initial play (starts from beginning)
    const handlePlayAll = () => {
        setActiveChapter(0);
        setView('playing');

        // Give time for iframe to render before seeking
        setTimeout(() => {
            if (playerRef.current) {
                playerRef.current.setCurrentTime(0).then(() => {
                    playerRef.current.play();
                });
            }
        }, 300);
    };

    // Handle jumping to a specific chapter time
    const handleChapterSelect = (chapter) => {
        setActiveChapter(chapter.id);
        setView('playing');

        setTimeout(() => {
            if (playerRef.current) {
                playerRef.current.setCurrentTime(chapter.startTime).then(() => {
                    playerRef.current.play();
                });
            }
        }, 300);
    };

    return (
        <section className="demo-section container" id="demonstracao">
            <div className="section-header text-center">
                <h2 className="section-title">Teste na Prática</h2>
                <p className="section-subtitle">Experimente a sensação de ter o seu casamento em um Menu Interativo de Cinema.</p>
            </div>

            <div className={`demo-player glass-panel view-${view}`}>
                {/* Background Layer for Main/Chapters Menu */}
                {view !== 'playing' && (
                    <div
                        className="demo-player__bg"
                        style={{
                            backgroundImage: chapters[activeChapter].bg,
                            opacity: 0.6
                        }}
                    ></div>
                )}

                {/* --- MAIN MENU --- */}
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

                {/* --- CHAPTERS MENU --- */}
                {view === 'chapters' && (
                    <div className="dvd-menu chapters-menu">
                        <h3 className="dvd-menu__title">Seleção de Cenas</h3>
                        <div className="dvd-menu__grid">
                            {chapters.map((chapter) => (
                                <div
                                    key={chapter.id}
                                    className="chapter-card"
                                    onClick={() => handleChapterSelect(chapter)}
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

                {/* --- PLAYING VIEW (Vimeo Iframe) --- */}
                <div style={{ display: view === 'playing' ? 'block' : 'none', width: '100%', height: '100%' }}>
                    <div className="vimeo-embed-container" style={{ width: '100%', height: '100%', position: 'relative' }}>
                        <iframe
                            ref={iframeRef}
                            src="https://player.vimeo.com/video/143090272?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                            frameBorder="0"
                            allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                            title="Embebed DVD"
                        ></iframe>
                    </div>

                    {/* Quick navigation overlay while playing */}
                    <div className="in-player-controls">
                        <button className="btn-return-menu" onClick={() => setView('chapters')}>
                            Voltar ao Menu
                        </button>
                        <div className="current-chapter-indicator text-gradient">
                            Cena: {chapters[activeChapter].title}
                        </div>
                    </div>
                </div>

            </div>

            {/* Application CTA below the player */}
            <div className="real-app-cta" style={{ textAlign: 'center', marginTop: '3rem' }}>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem' }}>Gostou? Veja como o aplicativo fica no celular do seu cliente!</p>
                <a
                    href="https://dvd-web-nine.vercel.app/karina-e-jorge"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                    style={{ display: 'inline-flex', alignItems: 'center', gap: '10px' }}
                >
                    Acessar o Aplicativo Real <FaExternalLinkAlt style={{ fontSize: '0.9em' }} />
                </a>
                <p style={{ fontSize: '0.9rem', color: 'var(--color-accent-primary)', marginTop: '0.8rem', fontWeight: 'bold' }}>
                    Senha de acesso: 123456
                </p>
            </div>
        </section>
    );
};

export default InteractiveDemo;

import React, { useEffect } from 'react';
import { FaTimes } from 'react-icons/fa';
import './VideoModal.scss';

const VideoModal = ({ isOpen, onClose }) => {
    // Close modal when pressing Escape key
    useEffect(() => {
        const handleEsc = (e) => {
            if (e.key === 'Escape') onClose();
        };
        window.addEventListener('keydown', handleEsc);
        return () => window.removeEventListener('keydown', handleEsc);
    }, [onClose]);

    if (!isOpen) return null;

    return (
        <div className="video-modal-overlay" onClick={onClose}>
            <div className="video-modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="video-modal-close" onClick={onClose} aria-label="Fechar vídeo">
                    <FaTimes />
                </button>
                <div className="video-responsive-wrapper">
                    <iframe
                        src="https://player.vimeo.com/video/1171531737?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&amp;autoplay=1"
                        frameBorder="0"
                        allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                        title="DVDWEB.mov"
                        className="vimeo-iframe"
                    ></iframe>
                </div>
            </div>
        </div>
    );
};

export default VideoModal;

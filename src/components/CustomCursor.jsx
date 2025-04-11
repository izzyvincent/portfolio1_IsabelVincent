import { useState, useEffect } from 'react';
import styles from '../styles/CustomCursor.module.css';

export default function CustomCursor() {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [variant, setVariant] = useState('default');
    const [cursorText, setCursorText] = useState('');

    useEffect(() => {
        const moveCursor = (e) => {
                setPosition({ x: e.clientX, y: e.clientY });
            };
    
            const handleMouseOver = (e) => {
            const clickable = e.target.closest('a, button, [data-cursor="clickable"]');
            const scrollable = e.target.closest('[data-cursor="scroll"]');
    
                if (scrollable) {
                    setVariant('scroll');
                    setCursorText('Scroll');
                } else if (clickable) {
                    setVariant('clickable');
                    setCursorText('');
                } else {
                    setVariant('default');
                    setCursorText('');
                }
            };
    
            const handleMouseDown = () => {
                if (variant === 'clickable' || variant === 'scroll') {
                    setVariant('active');
                }
            };
    
            const handleMouseUp = () => {
                setVariant('default');
                setCursorText('');
            };
    
            window.addEventListener('mousemove', moveCursor);
            window.addEventListener('mouseover', handleMouseOver);
            window.addEventListener('mousedown', handleMouseDown);
            window.addEventListener('mouseup', handleMouseUp);
    
            return () => {
                window.removeEventListener('mousemove', moveCursor);
                window.removeEventListener('mouseover', handleMouseOver);
                window.removeEventListener('mousedown', handleMouseDown);
                window.removeEventListener('mouseup', handleMouseUp);
            };
    }, [variant]);

    let color;
    if (variant === 'default') {
        color = 'rgba(223, 39, 40, 0.5)';
    } else if (variant === 'clickable') {
        color = 'rgba(138, 189, 230, 0.5)';
    } else if (variant === 'active') {
        color = 'rgba(222, 157, 38, 0.5)';
    } else if (variant === 'scroll') {
    }

    return (
        <div
        className={styles.cursor}
        style={{
            left: `${position.x}px`,
            top: `${position.y}px`,
            backgroundColor: color,
        }}
        >
        {cursorText && <span className={styles.cursorText}>{cursorText}</span>}
        </div>
    );
}

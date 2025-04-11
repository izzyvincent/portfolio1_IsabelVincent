import { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from '../styles/Home.module.css';

gsap.registerPlugin(ScrollTrigger);

export default function HeroImageSequence() {
    const canvasRef = useRef(null);
    const frameCount = 299; 
    const [images, setImages] = useState([]);

    const currentFrame = index =>
        `/frames/frame${String(index).padStart(5, '0')}.jpg`;

    useEffect(() => {
        if (typeof window === 'undefined') return;

        const loadedImages = [];
        for (let i = 1; i <= frameCount; i++) {
            const img = new window.Image();
            img.src = currentFrame(i);
            loadedImages.push(img);
        }
        
        setImages(loadedImages);

        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');
        canvas.width = 1920;
        canvas.height = 1080; 

        loadedImages[0].onload = () => {
            context.drawImage(loadedImages[0], 0, 0, canvas.width, canvas.height);
        };

        const imgSeq = { frame: 0 };

        gsap.to(imgSeq, {
            frame: frameCount - 1,
            snap: "frame",
            ease: "none",
            scrollTrigger: {
                trigger: canvas,
                start: "top top",
                end: "bottom top",
                scrub: true,
                pin: true,
                // markers: true,
            },
            onUpdate: () => {
                const frame = imgSeq.frame;
                const image = loadedImages[frame];
                if (image) {
                    context.clearRect(0, 0, canvas.width, canvas.height);
                    context.drawImage(image, 0, 0, canvas.width, canvas.height);
                }
            },
        });
    }, []); 

    return <canvas ref={canvasRef} data-cursor="scroll" className={styles.canvas} style={{ width: '100%', height: 'auto' }} />;
    }

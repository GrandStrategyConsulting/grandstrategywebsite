'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import styles from './page.module.css';

type GalleryImage = readonly [src: string, alt: string];

export default function MsceitGallery({ images }: { images: readonly GalleryImage[] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isInteracting, setIsInteracting] = useState(false);
  const [userPaused, setUserPaused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const didSwipe = useRef(false);

  const selectImage = useCallback((index: number, manual = false) => {
    setActiveIndex((index + images.length) % images.length);
    if (manual) setUserPaused(true);
  }, [images.length]);

  const showNext = useCallback((manual = false) => {
    setActiveIndex(index => (index + 1) % images.length);
    if (manual) setUserPaused(true);
  }, [images.length]);

  const showPrevious = useCallback((manual = false) => {
    setActiveIndex(index => (index - 1 + images.length) % images.length);
    if (manual) setUserPaused(true);
  }, [images.length]);

  useEffect(() => {
    const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)');
    const updateMotionPreference = () => setReducedMotion(motionPreference.matches);
    updateMotionPreference();
    motionPreference.addEventListener('change', updateMotionPreference);
    return () => motionPreference.removeEventListener('change', updateMotionPreference);
  }, []);

  useEffect(() => {
    if (reducedMotion || userPaused || isInteracting) return;
    const rotation = window.setInterval(() => showNext(), 6000);
    return () => window.clearInterval(rotation);
  }, [isInteracting, reducedMotion, showNext, userPaused]);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'ArrowLeft') {
      event.preventDefault();
      showPrevious(true);
    }
    if (event.key === 'ArrowRight') {
      event.preventDefault();
      showNext(true);
    }
  };

  const handleMainClick = () => {
    if (didSwipe.current) {
      didSwipe.current = false;
      return;
    }
    showNext(true);
  };

  const handleTouchStart = (event: React.TouchEvent<HTMLButtonElement>) => {
    touchStartX.current = event.touches[0]?.clientX ?? null;
    didSwipe.current = false;
  };

  const handleTouchEnd = (event: React.TouchEvent<HTMLButtonElement>) => {
    if (touchStartX.current === null) return;
    const touchEndX = event.changedTouches[0]?.clientX ?? touchStartX.current;
    const distance = touchEndX - touchStartX.current;
    touchStartX.current = null;
    if (Math.abs(distance) < 45) return;
    didSwipe.current = true;
    if (distance < 0) showNext(true);
    else showPrevious(true);
  };

  return (
    <div
      className={styles.gallery}
      aria-label="MSCEIT 2 certification gallery"
      onMouseEnter={() => setIsInteracting(true)}
      onMouseLeave={() => setIsInteracting(false)}
      onFocusCapture={() => setIsInteracting(true)}
      onBlurCapture={event => {
        if (!event.currentTarget.contains(event.relatedTarget)) setIsInteracting(false);
      }}
      onKeyDown={handleKeyDown}
    >
      <div className={styles.mainImage}>
        <button
          className={styles.mainImageButton}
          type="button"
          onClick={handleMainClick}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          aria-label={`Show next image. Currently showing image ${activeIndex + 1} of ${images.length}: ${images[activeIndex][1]}`}
        >
          <img key={images[activeIndex][0]} src={images[activeIndex][0]} alt={images[activeIndex][1]} />
        </button>
        <button className={`${styles.galleryArrow} ${styles.previousArrow}`} type="button" onClick={() => showPrevious(true)} aria-label="Show previous image">‹</button>
        <button className={`${styles.galleryArrow} ${styles.nextArrow}`} type="button" onClick={() => showNext(true)} aria-label="Show next image">›</button>
        <span className={styles.imageCounter} aria-live="polite">{activeIndex + 1} of {images.length}</span>
      </div>

      <div className={styles.thumbnails} aria-label="Choose an image">
        {images.map(([src, alt], index) => (
          <button
            className={`${styles.thumbnailButton} ${index === activeIndex ? styles.activeThumbnail : ''}`}
            type="button"
            key={src}
            onClick={() => selectImage(index, true)}
            aria-label={`Show image ${index + 1} of ${images.length}: ${alt}`}
            aria-current={index === activeIndex ? 'true' : undefined}
          >
            <img src={src} alt="" loading={index === 0 ? 'eager' : 'lazy'} />
          </button>
        ))}
      </div>
      <p className={styles.galleryHint}>Select a thumbnail, use the arrows or click the main image to continue.</p>
    </div>
  );
}

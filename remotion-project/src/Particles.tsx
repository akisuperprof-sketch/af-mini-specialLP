import React, { useMemo } from 'react';
import { AbsoluteFill, useVideoConfig, random } from 'remotion';

export const Particles: React.FC = () => {
    const { width, height, fps, durationInFrames } = useVideoConfig();

    const particles = useMemo(() => {
        return new Array(200).fill(null).map((_, i) => ({
            x: random(`x-${i}`) * width,
            y: random(`y-${i}`) * height,
            size: random(`size-${i}`) * 6 + 2,
            speed: random(`speed-${i}`) * 3 + 1,
            opacity: random(`opacity-${i}`) * 0.7 + 0.3,
        }));
    }, [width, height]);

    return (
        <AbsoluteFill>
            {particles.map((p, i) => {
                return (
                    <div
                        key={i}
                        style={{
                            position: 'absolute',
                            left: p.x,
                            top: p.y,
                            width: p.size,
                            height: p.size,
                            backgroundColor: '#E6C673',
                            borderRadius: '50%',
                            opacity: p.opacity,
                            filter: 'blur(2px)',
                        }}
                    />
                );
            })}
        </AbsoluteFill>
    );
};

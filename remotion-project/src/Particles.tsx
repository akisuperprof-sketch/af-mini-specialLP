import React, { useMemo } from 'react';
import { AbsoluteFill, useVideoConfig, random, useCurrentFrame, interpolate } from 'remotion';

export const Particles: React.FC = () => {
    const { width, height } = useVideoConfig();
    const frame = useCurrentFrame();

    const particles = useMemo(() => {
        return new Array(200).fill(null).map((_, i) => ({
            x: random(`x-${i}`) * width,
            y: random(`y-${i}`) * height,
            size: random(`size-${i}`) * 6 + 2,
            speed: random(`speed-${i}`) * 2 + 0.5,
            opacity: random(`opacity-${i}`) * 0.7 + 0.3,
            drift: random(`drift-${i}`) * 100 - 50, // Horizontal movement range
        }));
    }, [width, height]);

    return (
        <AbsoluteFill>
            {particles.map((p, i) => {
                // Individual progress based on frame and speed
                const progress = (frame * p.speed) / 5;
                const currentY = (p.y - progress) % height;
                const finalY = currentY < 0 ? currentY + height : currentY;

                // Slight horizontal sway using sine wave
                const driftX = Math.sin((frame + i * 10) / 50) * 20;

                return (
                    <div
                        key={i}
                        style={{
                            position: 'absolute',
                            left: p.x + driftX,
                            top: finalY,
                            width: p.size,
                            height: p.size,
                            backgroundColor: '#E6C673',
                            borderRadius: '50%',
                            opacity: p.opacity,
                            filter: 'blur(1.5px)',
                            boxShadow: `0 0 ${p.size * 2}px rgba(230, 198, 115, 0.5)`,
                        }}
                    />
                );
            })}
        </AbsoluteFill>
    );
};

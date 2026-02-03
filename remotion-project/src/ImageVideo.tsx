import { AbsoluteFill, interpolate, useCurrentFrame, useVideoConfig, staticFile, Img, spring } from 'remotion';
import { TransitionSeries, linearTiming } from '@remotion/transitions';
import { fade } from '@remotion/transitions/fade';
import { slide } from '@remotion/transitions/slide';
import React from 'react';
import { Particles } from './Particles';

// --- Components ---

const GoldTitle: React.FC<{
    text: string;
    fontSize: number;
    delay?: number;
    letterSpacing?: string;
}> = ({ text, fontSize, delay = 0, letterSpacing = '0.05em' }) => {
    const frame = useCurrentFrame();
    const { fps } = useVideoConfig();

    const show = spring({
        frame: frame - delay,
        fps,
        config: { damping: 200, stiffness: 100, mass: 1 },
    });

    const opacity = interpolate(show, [0, 1], [0, 1]);
    const translateY = interpolate(show, [0, 1], [50, 0]);

    return (
        <h1 style={{
            fontFamily: '"Noto Sans JP", sans-serif',
            background: 'linear-gradient(to right, #fff3bf, #e6c673, #c09c3f, #e6c673, #fff3bf)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            fontWeight: 700,
            fontSize,
            margin: 0,
            letterSpacing,
            opacity,
            transform: `translateY(${translateY}px)`,
        }}>
            {text}
        </h1>
    );
};

const Subtitle: React.FC<{ text: string; delay?: number }> = ({ text, delay = 0 }) => {
    const frame = useCurrentFrame();
    const { fps } = useVideoConfig();

    const show = spring({
        frame: frame - delay,
        fps,
        config: { damping: 200 },
    });

    return (
        <p style={{
            fontFamily: '"Noto Sans JP", sans-serif',
            color: '#e6c673',
            fontSize: 40,
            marginTop: 30,
            letterSpacing: '0.2em',
            opacity: show,
            transform: `scale(${interpolate(show, [0, 1], [0.95, 1])})`
        }}>
            {text}
        </p>
    );
};

// --- Scenes ---

const OpeningScene: React.FC = () => (
    <AbsoluteFill style={{ justifyContent: 'center', alignItems: 'center' }}>
        <div style={{ textAlign: 'center', maxWidth: 1000 }}>
            <GoldTitle text="AirFuture MINI" fontSize={110} delay={10} />
            <Subtitle text="「空気に、静寂という贅沢を。」" delay={30} />
        </div>
    </AbsoluteFill>
);

const ProductScene: React.FC = () => {
    const frame = useCurrentFrame();
    const floating = Math.sin(frame / 40) * 15; // Gentle floating effect

    return (
        <AbsoluteFill style={{ justifyContent: 'center', alignItems: 'center' }}>
            <div style={{ transform: `translateY(${floating}px)`, display: 'flex', justifyContent: 'center' }}>
                <Img
                    src={staticFile('product-black.png')}
                    style={{
                        width: 500,
                        filter: 'drop-shadow(0 0 60px rgba(192, 156, 63, 0.5))'
                    }}
                />
            </div>
            <div style={{ position: 'absolute', bottom: 150, textAlign: 'center', width: '100%' }}>
                <GoldTitle text="SILENCE & LUXURY" fontSize={60} delay={15} letterSpacing='0.2em' />
            </div>
        </AbsoluteFill>
    );
};

const FeatureScene: React.FC<{ image: string; title: string; desc: string }> = ({ image, title, desc }) => {
    const frame = useCurrentFrame();
    const scale = interpolate(frame, [0, 100], [1, 1.05]); // Slow zoom on image

    return (
        <AbsoluteFill style={{ justifyContent: 'center', alignItems: 'center' }}>
            <div style={{
                width: 900,
                height: 540,
                borderRadius: 30,
                overflow: 'hidden',
                border: '1px solid rgba(230, 198, 115, 0.3)',
                boxShadow: '0 0 50px rgba(0,0,0,0.6)',
                marginBottom: 50
            }}>
                <Img
                    src={staticFile(image)}
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        transform: `scale(${scale})`
                    }}
                />
            </div>
            <div style={{ textAlign: 'center' }}>
                <GoldTitle text={title} fontSize={70} letterSpacing='0.1em' />
                <Subtitle text={desc} delay={10} />
            </div>
        </AbsoluteFill>
    );
};

const FinaleScene: React.FC = () => (
    <AbsoluteFill style={{ justifyContent: 'center', alignItems: 'center' }}>
        <div style={{ textAlign: 'center' }}>
            <GoldTitle text="AirFuture MINI" fontSize={100} />
            <Subtitle text="贅沢な空気を、もっと美しく。" delay={20} />

            <div style={{
                marginTop: 80,
                padding: '25px 70px',
                border: '1px solid #c09c3f',
                color: '#e6c673',
                fontSize: 32,
                fontFamily: '"Noto Sans JP", sans-serif',
                letterSpacing: '0.1em',
                background: 'linear-gradient(45deg, rgba(192, 156, 63, 0.1), rgba(0,0,0,0.5))',
                display: 'inline-block'
            }}>
                申込ページへ
            </div>
        </div>
    </AbsoluteFill>
);

// --- Main Composition ---

export const ImageVideo: React.FC = () => {
    return (
        <AbsoluteFill style={{ backgroundColor: '#000000' }}>
            <Particles />

            <TransitionSeries>
                {/* Scene 1: Opening (3.5s) */}
                <TransitionSeries.Sequence durationInFrames={105}>
                    <OpeningScene />
                </TransitionSeries.Sequence>

                <TransitionSeries.Transition
                    presentation={slide({ direction: 'from-bottom' })}
                    timing={linearTiming({ durationInFrames: 30 })}
                />

                {/* Scene 2: Product (3.5s) */}
                <TransitionSeries.Sequence durationInFrames={105}>
                    <ProductScene />
                </TransitionSeries.Sequence>

                <TransitionSeries.Transition
                    presentation={fade()}
                    timing={linearTiming({ durationInFrames: 20 })}
                />

                {/* Scene 3: Features (Lightweight) (2.5s) */}
                <TransitionSeries.Sequence durationInFrames={75}>
                    <FeatureScene
                        image="feature-lightweight.png"
                        title="750g 軽量設計"
                        desc="ハガキサイズのコンパクトボディ"
                    />
                </TransitionSeries.Sequence>

                <TransitionSeries.Transition
                    presentation={fade()}
                    timing={linearTiming({ durationInFrames: 15 })}
                />

                {/* Scene 3: Features (Room) (2.5s) */}
                <TransitionSeries.Sequence durationInFrames={75}>
                    <FeatureScene
                        image="feature-room.png"
                        title="10畳対応"
                        desc="家庭空間をクリーンルーム級に"
                    />
                </TransitionSeries.Sequence>

                <TransitionSeries.Transition
                    presentation={fade()}
                    timing={linearTiming({ durationInFrames: 15 })}
                />

                {/* Scene 3: Features (Silence) (2.5s) */}
                <TransitionSeries.Sequence durationInFrames={75}>
                    <FeatureScene
                        image="feature-silence.png"
                        title="静音設計"
                        desc="睡眠を妨げない、究極の静寂"
                    />
                </TransitionSeries.Sequence>

                <TransitionSeries.Transition
                    presentation={slide({ direction: 'from-top' })}
                    timing={linearTiming({ durationInFrames: 30 })}
                />

                {/* Scene 4: Finale (3s) */}
                <TransitionSeries.Sequence durationInFrames={90}>
                    <FinaleScene />
                </TransitionSeries.Sequence>
            </TransitionSeries>
        </AbsoluteFill>
    );
};

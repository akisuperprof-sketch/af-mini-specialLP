import React from 'react';
import {
    AbsoluteFill,
    interpolate,
    useCurrentFrame,
    useVideoConfig,
    staticFile,
    Img,
    Easing,
} from 'remotion';
import { Particles } from './Particles';

export const Main: React.FC = () => {
    const frame = useCurrentFrame();
    const { fps, width, height } = useVideoConfig();

    // Helper for gold gradient text
    const goldGradientStyle: React.CSSProperties = {
        background: 'linear-gradient(to right, #fff3bf, #e6c673, #c09c3f, #e6c673, #fff3bf)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        fontWeight: 600,
        letterSpacing: '0.05em',
    };

    // Duration: 450 frames (15 seconds)

    // Scene 1: Opening Title (0-3s, 0-90 frames)
    const scene1Opacity = interpolate(frame, [0, 20, 70, 90], [0, 1, 1, 0], { extrapolateRight: 'clamp' });
    const scene1Scale = interpolate(frame, [0, 90], [1.05, 1], { easing: Easing.out(Easing.quad) });

    // Scene 2: Product Spotlight (3-7s, 90-210 frames)
    const scene2Opacity = interpolate(frame, [90, 110, 190, 210], [0, 1, 1, 0], { extrapolateRight: 'clamp' });
    const productScale = interpolate(frame, [90, 210], [1, 1.05], { easing: Easing.out(Easing.quad) });

    // Scene 3: Feature Images (7-12s, 210-360 frames)
    // Each feature gets about 1.6s (50 frames)

    // 3-1: Lightweight (210-260)
    const f1Opacity = interpolate(frame, [210, 220, 250, 260], [0, 1, 1, 0], { extrapolateRight: 'clamp' });
    // 3-2: Room (260-310)
    const f2Opacity = interpolate(frame, [260, 270, 300, 310], [0, 1, 1, 0], { extrapolateRight: 'clamp' });
    // 3-3: Silence (310-360)
    const f3Opacity = interpolate(frame, [310, 320, 350, 360], [0, 1, 1, 0], { extrapolateRight: 'clamp' });

    // Scene 4: Finale (12-15s, 360-450 frames)
    const finaleOpacity = interpolate(frame, [360, 390], [0, 1], { extrapolateRight: 'clamp' });

    return (
        <AbsoluteFill style={{ backgroundColor: '#000000', fontFamily: '"Noto Sans JP", sans-serif' }}>
            <Particles />

            {/* Scene 1: Opening */}
            <div style={{ ...centeredStyle, opacity: scene1Opacity, transform: `scale(${scene1Scale})` }}>
                <h1 style={{ ...goldGradientStyle, fontSize: 140, margin: 0 }}>AirFuture MINI</h1>
                <p style={{ color: '#e6c673', fontSize: 45, marginTop: 30, letterSpacing: '0.3em' }}>
                    「空気に、静寂という贅沢を。」
                </p>
            </div>

            {/* Scene 2: Product Show with Actual Image */}
            <div style={{ ...centeredStyle, opacity: scene2Opacity }}>
                <div style={{ transform: `scale(${productScale})` }}>
                    <Img
                        src={staticFile('product-black.png')}
                        style={{
                            width: 600,
                            filter: 'drop-shadow(0 0 50px rgba(192, 156, 63, 0.4))'
                        }}
                    />
                </div>
                <h2 style={{ ...goldGradientStyle, fontSize: 60, marginTop: 50 }}>SILENCE & LUXURY</h2>
            </div>

            {/* Scene 3: Features with Generated Images (Containing Actual Product) */}
            {/* 3-1: Lightweight */}
            <div style={{ ...centeredStyle, opacity: f1Opacity }}>
                <FeatureLayout
                    image="feature-lightweight.png"
                    title="750g 軽量設計"
                    desc="ハガキサイズのコンパクトボディ"
                />
            </div>
            {/* 3-2: 10畳対応 */}
            <div style={{ ...centeredStyle, opacity: f2Opacity }}>
                <FeatureLayout
                    image="feature-room.png"
                    title="10畳対応"
                    desc="家庭空間をクリーンルーム級の環境に"
                />
            </div>
            {/* 3-3: 静音設計 */}
            <div style={{ ...centeredStyle, opacity: f3Opacity }}>
                <FeatureLayout
                    image="feature-silence.png"
                    title="静音設計"
                    desc="睡眠を妨げない、究極の静寂"
                />
            </div>

            {/* Scene 4: Finale */}
            <div style={{ ...centeredStyle, opacity: finaleOpacity }}>
                <h1 style={{ ...goldGradientStyle, fontSize: 120, margin: 0 }}>AirFuture MINI</h1>
                <p style={{ color: '#e6c673', fontSize: 40, marginTop: 40, letterSpacing: '0.2em' }}>
                    贅沢な空気を、もっと美しく。
                </p>
                <div style={{
                    marginTop: 80,
                    padding: '20px 60px',
                    border: '1px solid #c09c3f',
                    color: '#e6c673',
                    fontSize: 30,
                    background: 'rgba(192, 156, 63, 0.1)'
                }}>
                    申込ページへ
                </div>
            </div>
        </AbsoluteFill>
    );
};

const centeredStyle: React.CSSProperties = {
    position: 'absolute',
    inset: 0,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
};

const FeatureLayout: React.FC<{ image: string; title: string; desc: string }> = ({ image, title, desc }) => (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div style={{
            width: 900,
            height: 600,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            overflow: 'hidden',
            borderRadius: 20,
            border: '1px solid rgba(230, 198, 115, 0.3)',
            boxShadow: '0 0 40px rgba(0,0,0,0.5)',
            backgroundColor: '#000'
        }}>
            <Img src={staticFile(image)} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
        <h2 style={{
            background: 'linear-gradient(to right, #fff3bf, #e6c673, #c09c3f, #e6c673, #fff3bf)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            fontSize: 70,
            marginTop: 60,
            fontWeight: 600,
            fontFamily: '"Noto Sans JP", sans-serif',
            letterSpacing: '0.2em'
        }}>
            {title}
        </h2>
        <p style={{ color: '#ddd', fontSize: 35, marginTop: 20, fontFamily: '"Noto Sans JP", sans-serif' }}>{desc}</p>
    </div>
);

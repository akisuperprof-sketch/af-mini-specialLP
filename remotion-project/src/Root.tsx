import { Composition } from 'remotion';
import { Main } from './Composition';
import { ImageVideo } from './ImageVideo';

export const RemotionRoot: React.FC = () => {
    return (
        <>
            <Composition
                id="Main"
                component={Main}
                durationInFrames={450} // 15 seconds at 30fps
                fps={30}
                width={1920}
                height={1080}
            />
            <Composition
                id="ImageVideo"
                component={ImageVideo}
                durationInFrames={450} // 15 seconds at 30fps
                fps={30}
                width={1920}
                height={1080}
            />
        </>
    );
};

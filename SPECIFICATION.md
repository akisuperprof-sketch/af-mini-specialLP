# AirFuture MINI 特別ランディングページ 仕様書

## 1. プロジェクト概要
本プロジェクトは、ハイエンド空気清浄機「AirFuture MINI」のブランド価値を最大化し、購買意欲を高めるための専用ランディングページ（LP）制作プロジェクトです。
「静寂と贅沢」をコアコンセプトに、没入感のある映像体験と洗練されたUIを提供します。

## 2. デザインコンセプト
*   **テーマ**: Silence & Luxury（静寂という贅沢）
*   **キーワード**: 高級感、ミニマリズム、浮遊感、光彩
*   **カラーパレット**:
    *   **Main**: Jet Black (#000000) - 漆黒の背景
    *   **Accent**: Champagne Gold (#E6C673) - 文字、アイコン、光の粒子
    *   **Sub**: Deep Gold (#C09C3F) - 境界線、グラデーションの影
*   **タイポグラフィ**:
    *   Font Family: "Noto Sans JP", sans-serif
    *   Letter Spacing: 0.05em 〜 0.2em (見出しは広く取り、優雅さを演出)

## 3. 技術スタック
*   **Framework**: Next.js 14+ (App Router)
*   **Styling**: Tailwind CSS v4, Vanilla CSS (Animations)
*   **Video Generation**: Remotion (Programmatic Video)
*   **Icons**: Lucide React
*   **Hosting**: Vercel

## 4. 機能要件

### 4.1 オープニング動画 (Video Intro)
ユーザーがサイトにアクセスした瞬間に再生されるブランドムービー。
*   **再生時間**: 15秒 (450 frames @ 30fps)
*   **機能**:
    *   **Skipボタン**: 右上に配置。いつでもメインコンテンツへスキップ可能。
    *   **自動遷移**: 動画再生終了後、スムーズにメインLPへクロスフェード。

### 4.2 動画構成 (Remotion Composition: `ImageVideo`)
コードベースで生成された高品質動画。
*   **Scene 1: Opening (0-3.5s)**
    *   ロゴ "AirFuture MINI" とタグラインの表示。
    *   下からのゆっくりとしたスライドイン。
*   **Scene 2: Product Showcase (3.5-7s)**
    *   製品画像（実機）が浮遊するアニメーション。
    *   "SILENCE & LUXURY" のコピー。
*   **Scene 3: Features (7-12s)**
    *   3つの特徴（軽量、10畳対応、静音）をシネマティックに切り替え。
    *   `TransitionSeries` を使用した高級感あふれる場面転換。
*   **Scene 4: Finale (12-15s)**
    *   再度ブランドロゴとCTAへの誘導。
*   **演出技術**:
    *   **Spring Animation**: 物理演算に基づいた滑らかな文字の動き。
    *   **Dynamic Particles**: 金の粒子が常時200個浮遊。上昇感とランダムな揺らぎ（Sine wave）を付与し、空気の循環を表現。
    *   **Floating Effect**: 製品画像に正弦波（Math.sin）を用いた浮遊感を付与。
    *   **Mobile-Ready Layout**: 垂直画面での `object-cover` 再生を考慮し、主要コンテンツを中央のセーフゾーンに配置。
    *   **Transitions**: スライド、フェードを組み合わせた映画的なシーン遷移。

### 4.3 メインLP (Main Content)
*   **Hero Section**: 動画終了直後のファーストビュー。背景にCanvas描画のパーティクル。CTAボタンを確実に表示。
*   **Scroll Reveal**: スクロールに合わせてコンテンツがふわっと現れる `IntersectionObserver` 実装。
*   **Interactive Elements**: ホバー時に光るゴールドグラデーションボタン。

## 5. ディレクトリ構造
*   `/app`: Next.js アプリケーションコード
*   `/components`: UIコンポーネント (VideoIntro, LuxuryBackground等)
*   `/public`: 静的アセット (画像、生成された動画 `videos/out.mp4`)
*   `/remotion-project`: 動画生成用ソースコード (独立したRemotion環境)

## 6. アセット管理
*   **動画ファイル**: `public/videos/out.mp4` (Web用最適化済み H.264)
*   **製品画像**: 背景透過処理済みの高解像度PNG (`public/images/`)
*   **Git管理**: 
    *   大きな動画ファイルやAI生成物の一部はリポジトリの肥大化を防ぐため、適宜 `.gitignore` で制限。
    *   AIエージェントの作業ディレクトリ (`.agent`, `.gemini` 等) は除外対象。

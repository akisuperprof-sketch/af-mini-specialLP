# AirFuture mini LP (Design B) 仕様書

## 1. プロジェクト概要
**プロジェクト名**: AirFuture mini LP (Design B)
**目的**: AirFuture miniの高級感あるランディングページを作成し、製品のイメージ向上と機能紹介を行う。

## 2. デザインコンセプト
- **高級感 (Luxury)**: ダークモードや洗練された白背景を効果的に使用。
- **没入感 (Immersive)**: 全画面画像とエレガントなフェードインアニメーション。
- **エレガント (Elegant)**: テキストの出現時にフェード + ブラー効果を使用。

## 3. 主要デザイン仕様

### 3.1. ロゴ配置
- **配置**: 画面左上 (`absolute top-6 left-6 z-50`) に固定。
- **サイズ**: PC `h-14`, SP `h-10`。
- **重なり回避**: メインコピー部分に `pt-12` (SP) / `pt-0` (PC) の余白を追加。

### 3.2. レスポンシブレイアウト (PC vs SP)

#### PC (md以上)
- **レイアウト**: 全画面画像の上にテキストをオーバーレイ配置。
- **グラデーション**: 右から左への黒グラデーション (`bg-gradient-to-r`)。
- **テキスト配置**: 基本的に左寄せ、またはセクションによって右寄せ (`ml-auto` @ Bedroom)。

#### SP (md未満)
- **レイアウト**: 画像オーバーレイ型を維持。
- **テキストサイズ調整**:
    - 説明文 (`text-sm`): PC版 (`text-lg`) より約20%縮小し、画像との干渉を低減。
    - メインコピー (`text-2xl`): PC版 (`text-5xl`) より縮小。
- **グラデーション**: 下から上への黒グラデーション (`bg-gradient-to-t`) を強化し、テキストの可読性を確保。
- **テキスト配置**: 画面下部 (`flex-col justify-end`) に配置し、中央の被写体を避ける。
- **スクロールアニメーション (重要)**:
    - **仕様**: 画面中央の70%エリア (上下15%除外) に入った時のみテキストを表示。
    - **挙動**: スクロールで画面端に行くとフェードアウト、中央に戻るとフェードインする可逆的な動作。

### 3.3. アニメーション仕様
- **クラス名**: `.fade-in`
- **効果**:
    - `opacity`: 0 -> 1
    - `transform`: translateY(30px) -> 0
    - `filter`: blur(10px) -> blur(0)
    - `transition`: 1.2s cubic-bezier(0.22, 1, 0.36, 1)

## 4. アセット管理
- **画像パス**: `public/images/`
- **主要画像**:
    - ロゴ: `public/images/logo.jpg`
    - ファビコン: `public/favicon.png` (白円形背景)
    - 車内画像: `public/images/car-interior-v3.png` (最新版)
- **その他**:
    - `lp用車内画像.png` 等の元ファイルはルートに残っているが、参照は `public/images/` 内の正規ファイルを使用。

## 5. デプロイ・運用
- **プラットフォーム**: Vercel
- **設定ファイル**: `vercel.json` (Vite, SPA rewrites対応)
- **ブランチ**: `main` (本番環境)

## 6. 注意ポイント
- **スマホでのテキスト可読性**: 画像の上に文字が乗るため、背景画像の明度によっては見えにくくなる可能性がある。その場合は `bg-gradient-to-t` の不透明度 (`from-black/80`) を調整すること。
- **スクロール連動**: `IntersectionObserver` の `rootMargin` (`-15% 0px -15% 0px`) がスマホ体験の鍵となっている。これを変更するとフェードイン/アウトのタイミングが変わるため注意。

## 7. 更新履歴 (Change Log)

### [2026-02-08] Init & Refinements
- **Initial Setup**: Vite + React 環境構築、Tailwind CSS導入。
- **Design Implementation**: 高級感あるデザイン (Luxury Background, Sections) の実装。
- **Favicon**: 白円形背景のファビコン生成・適用。
- **Logo**: テキストロゴから画像ロゴ (`logo.jpg`) へ変更、左上固定配置。
- **Mobile Optimization**:
    - テキストの改行位置調整 (`<br className="hidden md:inline" />`)。
    - テキストサイズの縮小 (`text-sm`)。
    - 画像とテキストの重なり回避のためのグラデーション強化。
    - **Scroll Fade Effect**: スクロール連動のフェードイン/アウト実装。
- **Image Updates**: 車内画像をユーザー提供の最新版 (`v3`) に差し替え。

### [2026-02-13] Special LPs Expansion & UI/UX Polish
- **Specialized LPs Completion**: 4つの専門LP（花粉症、歯科医院、ペット、3Dプリンター）の不足画像をAI生成で補完し、コンテンツを完成。
- **Hero Animations**: 
    - 各LPのテーマに合わせた浮遊粒子アニメーション（Framer Motion）を実装。
    - 花粉、清潔な空間、温もりのある空間、先進的な作業環境を視覚的に強化。
- **Hub Navigation Restore**:
    - メインLP (`AFminiHP検討`) および各専門LPのハブセクションを復元。
    - 遷移時に `pid` や `utm_source` などのURLクエリパラメータを完全に引き継ぐロジック (`handleHubNavigation`) を実装。
- **Admin Layout Update**:
    - 管理画面 (`admin.html`) のKPIカードを5カラムに変更し、3Dプリンター等の項目が切れないように調整。
- **Header & Logo Alignment**:
    - 3DプリンターLPのヘッダーを他と統一（白背景）。全LPで共通のブランド体験に修正。
- **Favicon Update**:
    - メインLPのファビコンを最新のスクリーンショット画像に変更。
- **Mobile Optimization**:
    - 全LPのテキスト改行 (`br` タグ) をスマホ表示向けに再調整し、不自然な2文字改行等を根絶。

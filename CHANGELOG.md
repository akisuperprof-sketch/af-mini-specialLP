# 更新履歴 (Change Log)

## [v1.0.0] - 2026-01-23
### Added
- **新規イメージ動画の実装 (`ImageVideo`)**:
    - Remotionの `TransitionSeries` を導入し、シーン切り替えをシネマティックに刷新。
    - Springアニメーションによるテキストの物理挙動導入。
    - 製品画像の浮遊アニメーション追加。
- **仕様書・更新履歴の作成**: `SPECIFICATION.md`, `CHANGELOG.md` を追加。

### Changed
- **オープニング動画の差し替え**: 従来の `out.mp4` を新生成された `image-video.mp4` に変更。
- **Remotion環境のアップグレード**: `@remotion/transitions` パッケージを追加導入。

## [v0.9.0] - 2026-01-22
### Fixed
- **テキストレイアウト修正**: SP版/PC版での不自然な改行（「贅沢な空気を...」等）を修正。`whitespace-nowrap` クラス適用。
- **Git管理の適正化**: `remotion-project` 内の `node_modules` を `.gitignore` に追加。

### Changed
- **演出強化**:
    - パーティクル（`Particles.tsx`）の数を100→200に倍増し、サイズと速度を調整して「舞う」感覚を強調。
    - タイポグラフィの見直し。全見出しに `letter-spacing: 0.2em` を適用し高級感を向上。
- **CTA配置最適化**: 動画終了後のヒーローセクションのパディングを調整し、購入ボタンがファーストビューに収まるように変更。

## [v0.5.0] - 2026-01-22
### Added
- **Remotionプロジェクトの初期化**: 動画生成基盤の構築。
- **仮動画の実装**: 15秒の構成案（Opening -> Product -> Features -> Finale）に基づく初期レンダリング。
- **動画生成アセットの導入**: AI生成によるコンセプト画像（Lightweight, Room, Silence）と実機画像の導入。

## [v0.1.0] - 2026-01-22
### Added
- **プロジェクト立ち上げ**: Next.js + Tailwind CSS によるLPのベース構築。
- **基本デザインの実装**: 黒×ゴールドの配色は初期段階で確立。
- **コンポーネント作成**: `LuxuryBackground` (Canvasパーティクル), `VideoIntro` (動画再生制御)。

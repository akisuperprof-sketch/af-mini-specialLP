# AirFuture Mini Special LP

複数のターゲットセグメント向けに特化したランディングページ（LP）を提供するReactアプリケーション。

## 🚨 開発前に必読

**[SPECIFICATION.md](./SPECIFICATION.md) を必ず確認してください。**

特に以下の項目は重要です：
- ✅ URL・ルーティングルール（第2章）
- ✅ 購入ボタンの正しい実装パターン
- ✅ 過去の重大バグとその教訓（第6章）

## クイックスタート

```bash
# 依存関係のインストール
npm install

# 開発サーバー起動
npm run dev

# 本番ビルド
npm run build
```

## LP一覧

| URL | 対象 |
|-----|------|
| `/` | メインLP（製品紹介） |
| `/hayfever` | 花粉症対策 |
| `/dental` | 歯科医院向け |
| `/pet` | ペット飼育者向け（予定） |
| `/3dprinter` | 3Dプリンタ使用者向け（予定） |

## 重要なルール

### ❌ 絶対にやってはいけないこと

```javascript
// これは404エラーになります
window.location.href = "https://x-autoup.vercel.app/apply.html";
```

### ✅ 正しい実装

```javascript
// 正しいURL（拡張子なし）
window.location.href = "https://x-autoup.vercel.app/apply";
```

詳細は [SPECIFICATION.md](./SPECIFICATION.md) を参照してください。

## デプロイ

- **本番URL**: https://v0-air-future-mini-design.vercel.app/
- **自動デプロイ**: `main` ブランチへのプッシュで自動実行

## 関連プロジェクト

- `x-autoup` - バックエンドAPI・購入ページ

## ドキュメント

- [SPECIFICATION.md](./SPECIFICATION.md) - 技術仕様（必読）
- [vercel.json](./vercel.json) - ルーティング設定

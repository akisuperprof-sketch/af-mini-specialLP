# AirFuture Mini Special LP - Technical Specification v1.1

## 1. プロジェクト概要 (Project Overview)

AirFuture Mini 製品の複数の特化型ランディングページ（LP）を管理するフロントエンドプロジェクト。React + Vite構成で、ターゲットセグメント別のLPを提供する。

### 1.1 プロジェクト構成
- **フレームワーク**: React 18 + Vite 7
- **ルーティング**: React Router v7
- **スタイル**: Vanilla CSS + Tailwind CSS
- **デプロイ**: Vercel (`v0-air-future-mini-design`)
- **リポジトリ**: `akisuperprof-sketch/af-mini-specialLP`

---

## 2. 🚨 重要: URL・ルーティングルール (Critical Routing Rules)

### 2.1 プロジェクト間の関係性

このプロジェクト (`af-mini-specialLP`) は、別プロジェクト `x-autoup` に依存しています：

```
af-mini-specialLP (Frontend LPs)
    ↓ Proxy
x-autoup (Backend API + Purchase Page)
```

### 2.2 🔴 絶対に守るべきURL規則

#### ❌ 間違い：
```javascript
// これは404エラーになります
window.location.href = "https://airfuture.vercel.app/apply.html";
```

#### ✅ 正解：
```javascript
// 正しいURL
window.location.href = "https://airfuture.vercel.app/apply";
```

**理由**: 
- `x-autoup/04_code/vercel.json` は `/apply` のみをルーティング定義している
- `/apply.html` への直接アクセスは設定されていないため404エラーとなる

### 2.3 購入ボタン実装の標準パターン

**すべてのLP（MiniLP, Dental, HayFever等）は以下のパターンに従うこと：**

```javascript
const TARGET_APPLY_URL = "https://airfuture.vercel.app/apply";

const trackBuy = (pid) => {
    const trackingUrl = `/api/log_click?pid=${pid}&lp=<lp_name>`;
    
    // Non-blocking tracking
    if (navigator.sendBeacon) {
        navigator.sendBeacon(trackingUrl);
    } else {
        fetch(trackingUrl, { mode: 'no-cors' });
    }
    
    // Direct navigation (without .html extension)
    window.location.href = `${TARGET_APPLY_URL}?lp=<lp_name>&pid=${pid}&utm_source=<lp_name>`;
};
```

### 2.4 vercel.json プロキシ設定

`af-mini-specialLP/vercel.json` は以下のプロキシを定義：

```json
{
  "rewrites": [
    { "source": "/apply", "destination": "https://airfuture.vercel.app/apply.html" },
    { "source": "/api/(.*)", "destination": "https://airfuture.vercel.app/api/$1" }
  ]
}
```

**注意**: 
- プロキシ設定はサーバーサイドルーティング用
- JavaScriptコードからは **常に完全なURL + `/apply`（拡張子なし）** を使用すること

---

## 3. LP構成 (Landing Page Structure)

### 3.1 ルート定義 (`App.jsx`)

| Path | Component | Description |
|------|-----------|-------------|
| `/` | `MiniLP` | メインLP（製品紹介） |
| `/hayfever` | `HayFever` | 花粉症特化LP |
| `/dental` | `Dental` | 歯科医院向けLP（3分類：一般/ラボ/手術） |
| `/pet` | `Pet` | ペット飼育者向けLP（予定） |
| `/3dprinter` | `Printing3D` | 3Dプリンタ使用者向けLP（予定） |

### 3.2 必須実装要素

すべてのLPは以下を含むこと：

1. **ロゴ**: `/images/mini-logo.jpg` をヘッダーに配置。3DプリンターLPなどはダークテーマだが、ヘッダーは白背景 (`bg-white/80`) で統一する。
2. **トラッキング**: `navigator.sendBeacon` を使用した非同期計測。**既存の計測コードは、リファクタリング時も絶対に削除せず維持すること。**
3. **CTA**: 製品詳細 (`TARGET_LP_URL`) と購入 (`TARGET_APPLY_URL`) の2種類。
4. **パラメータ**: `lp`, `pid`, `utm_source` を各ボタンに正しく付与。
5. **ハブ機能**: 各LPトップまたはメインLPに、他の特化型LPへの導線（Hubセクション）を設ける。

### 3.3 ハブセクション実装ルール
- 他のLPへ遷移する際は、現在のURLクエリパラメータ（`pid`, `utm_source`等）を引き継ぐこと。
- 遷移前に `log_click` イベントを発火させること。

---

## 4. トラッキング仕様 (Tracking Specification)

### 4.1 パラメータ定義

| Parameter | Description | Example |
|-----------|-------------|---------|
| `lp` | LP識別子 | `mini_lp`, `dental`, `hayfever` |
| `pid` | ボタン/位置識別子 | `hero_cta`, `footer_cta`, `type1_more` |
| `utm_source` | 流入元識別 | LPごとに設定（`dental`, `hayfever`等） |

### 4.2 計測エンドポイント

- **クリック計測**: `/api/log_click?pid=<pid>&lp=<lp>`
- **CV計測**: `/apply` ページで自動実行（x-autoup側で処理）

---

## 5. デプロイメント (Deployment)

### 5.1 本番環境

- **URL**: `https://v0-air-future-mini-design.vercel.app/`
- **Vercel Project**: `v0-air-future-mini-design`
- **Branch**: `main`

### 5.2 デプロイフロー

```bash
# 1. 変更をコミット
git add .
git commit -m "feat: <description>"

# 2. プッシュ（自動デプロイ）
git push origin main

# 3. 手動デプロイ（必要な場合）
npx vercel --prod --yes
```

---

## 6. 過去の重大バグとその教訓 (Critical Bug History)

### 6.1 Bug #1: 404 Error on Purchase Button (2026-02-11)

**症状**: 
- 購入ボタンをクリックすると `404 NOT_FOUND` エラー

**原因**: 
- JavaScriptで `https://airfuture.vercel.app/apply.html` を使用
- x-autoupの `vercel.json` では `/apply.html` がルーティング定義されていない
- `/apply` のみが有効なエンドポイント

**修正内容**:
- `MiniLP.jsx`, `Dental.jsx`, `HayFever.jsx` のすべてで `.html` を削除
- `TARGET_APPLY_URL` を `https://airfuture.vercel.app/apply` に統一

**教訓**:
- **他プロジェクトの `vercel.json` を必ず確認すること**
- **URL末尾の拡張子は安易に付けないこと**
- **変更時は全LPコンポーネントで一貫性を保つこと**

### 6.2 Bug #2: Hub Section Disappearance (2026-02-13)
**症状**: 
- アップデート作業中に、意図せずハブセクション（他LPへのリンク）がコードから消去された。

**原因**: 
- 大規模なセクションの差し替え時に、既存の重要コンポーネントの存在を確認しなかったため。

**教訓**: 
- **「追加」の指示は「上書き削除」ではない。** 既存の機能（特に計測、ナビゲーション）は、削除の明記がない限り維持すること。

### 6.3 Bug #3: Vercel Routing Conflict for /apply (2026-02-12)
**症状**: 
- `/apply` へのアクセスが React アプリケーションにインターセプトされ、`apply.html` のリダイレクトが動作しない。

**原因**: 
- Vercel のデフォルトルーティングがすべてのパスを `index.html` に向けていたため。

**修正内容**:
- `vercel.json` に明示的な `/apply` -> `/apply.html` の書き換えルールを追加。

---

## 7. 🛡️ 機能維持とリグレッション防止 (Regression Prevention)

### 7.1 計測ロジックの死守
- `log_click` や `navigator.sendBeacon` を含むトラッキングコードは、エンジンの心臓部である。
- UIの見た目を変更する際も、これらのロジックを削ったり、引数を変えたりしてはならない。

### 7.2 指示なき削除の禁止
- 「XXを修正して」という指示は、それ以外の「YY」という既存機能を消して良いという意味ではない。
- コードを書き換える前に、そのファイル内の既存の重要機能（CTA、計測、SEOタグ）のリストを頭の中で作成し、それらが残っているかを確認すること。

---

## 8. 開発ガイドライン (Development Guidelines)

### 7.1 新規LP追加手順

1. `/src/pages/<LPName>.jsx` を作成
2. 既存LP（`Dental.jsx` 推奨）をコピーして修正
3. `App.jsx` にルート追加
4. `vercel.json` の `source` パターンに追加（必要な場合）
5. 本仕様書の第2章を確認してURL実装
6. ローカルで動作確認後、デプロイ

### 7.2 コーディング規約

- **定数**: `TARGET_LP_URL`, `TARGET_APPLY_URL` を各ファイル冒頭で定義
- **関数名**: `handleCTAClick`, `trackBuy` を統一
- **パラメータ**: `lp`, `pid`, `utm_source` を必ず含める
- **トラッキング**: `navigator.sendBeacon` を第一選択肢とする

---

## 8. 関連ドキュメント (Related Documents)

- `x-autoup/04_code/SPECIFICATION.md` - バックエンド仕様
- `x-autoup/04_code/GOVERNANCE.md` - ガバナンスルール
- `.gemini/antigravity/brain/<conversation-id>/walkthrough.md` - 実装履歴

---

**Last Updated**: 2026-02-13  
**Version**: 1.1  
**Maintainer**: Antigravity AI Assistant

# AirFuture Mini LP (新デザイン版 B)

## 概要
このリポジトリは、AirFuture Miniの新LP (Next.js構成からVite構成へ移行) のコードを含みます。

## リポジトリ構成と切替運用

現在、以下のブランチで本番(A)と新版(B)を管理しています。

- **main**: 旧デザイン (Next.js) - 現在の本番環境
- **b-release**: 新デザイン (Vite/React) - 新しいLP候補

### 1. 新デザイン(B)への本番切替手順
以下のいずれかの方法で切替を行います。

**推奨: Gitマージによる切替**
1. `b-release` ブランチを `main` にマージします。
   ```bash
   git checkout main
   git merge b-release
   git push origin main
   ```
2. Vercelが自動的にビルドを開始し、本番環境が新デザインに切り替わります。
   ※ `vercel.json` により、ビルド設定は自動的に Vite 用 (output: dist) に適用されます。

**代替: VercelでのPromote**
1. Vercelのダッシュボードで `b-release` のデプロイメントを確認します。
2. そのデプロイメントの「Promote to Production」を実行します。

---

### 2. 旧デザイン(A)への復旧手順（ロールバック）
問題が発生した場合、即座に旧デザインに戻す方法は以下の通りです。

**最短: Vercel Instant Rollback**
1. Vercelのダッシュボード > Deployments に移動します。
2. 切替前の正常だったProduction Deployment (Next.js版) を見つけます。
3. そのデプロイメントの三点リーダーメニューから「Rollback to this Deployment」または「Redeploy」を選択します。
4. 数秒〜数分で旧版に戻ります。

**恒久対応: Git Revert**
1. `main` ブランチでのマージコミットを取り消します。
   ```bash
   git checkout main
   git revert -m 1 <merge-commit-hash>
   git push origin main
   ```
2. これによりコードベースも旧版に戻り、再デプロイされます。

## 開発環境 (B版)

- **Framework**: Vite + React
- **Install**: `npm ci`
- **Dev**: `npm run dev`
- **Build**: `npm run build` (出力先: `dist`)

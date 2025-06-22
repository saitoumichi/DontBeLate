# 電車の時間確認アプリ

Next.js/TypeScriptで作成された電車の時間を確認するWebアプリケーションです。

## 機能

- 行き/帰りの方向選択
- 時間帯選択（5:00-24:00）
- タイムテーブル表示
- お問い合わせフォーム
- レスポンシブデザイン
- SSR/SSG対応

## 技術スタック

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- React 18

## セットアップ

1. 依存関係をインストール:
```bash
npm install
```

2. 開発サーバーを起動:
```bash
npm run dev
```

3. ブラウザで http://localhost:3000 を開く

## ビルド

本番用ビルドを作成:
```bash
npm run build
```

本番サーバーを起動:
```bash
npm start
```

## プロジェクト構造

```
app/
├── layout.tsx          # ルートレイアウト
├── page.tsx            # メインページ
└── globals.css         # グローバルスタイル

components/              # Reactコンポーネント
├── Header.tsx          # ヘッダー
├── Navigation.tsx      # ナビゲーション
├── DirectionSelector.tsx  # 方向選択
├── TimeSelector.tsx       # 時間選択
├── TimeTable.tsx          # タイムテーブル
├── ContactForm.tsx        # お問い合わせフォーム
└── Footer.tsx             # フッター

public/                  # 静的ファイル
└── favicon.ico         # ファビコン
```

## Next.jsの利点

- **SSR/SSG** - サーバーサイドレンダリング
- **App Router** - 新しいルーティングシステム
- **画像最適化** - 自動画像最適化
- **パフォーマンス** - 自動コード分割
- **SEO** - 検索エンジン最適化

## ライセンス

(c) 齋藤未智 
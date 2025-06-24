# 西大路駅から立命館大学へ通う学生のための電車時刻確認アプリ

立命館大学へ向かう電車の時刻を確認できるウェブアプリケーションです。講義の時間に合わせて「行き」と「帰り」の電車の時刻を簡単に検索できます。

## ✨ 機能

- **行き/帰り選択**: 大学への「行き」と大学からの「帰り」を選択できます。
- **午前/午後選択**: 時間帯を「午前」と「午後」で絞り込めます。
- **講義時間ごとの時刻表示**: 1限から5限までの各講義に合わせた電車の時刻表を表示します。
- **全時刻表表示**: その日の全ての電車の時刻を一覧で確認できます。
- **お問い合わせフォーム**: アプリに関するお問い合わせができます。
- **レスポンシブデザイン**: スマートフォンやPCなど、様々なデバイスで快適に利用できます。

## 🚀 技術スタック

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- React 18
- Capacitor

## 🛠️ セットアップ

1.  依存関係をインストール:
    ```bash
    npm install
    ```

2.  開発サーバーを起動:
    ```bash
    npm run dev
    ```

3.  ブラウザで `http://localhost:3000` を開く

## ビルド

本番用のビルドを作成します:

```bash
npm run build
```

## 📂 プロジェクト構造

主要なディレクトリとファイルは以下の通りです。

```
app/
├── alltable/              # 全時刻表ページ
├── contact/               # お問い合わせページ
├── iki_gozen&gogo/        # 行き（午前・午後）選択ページ
│   ├── gogo/
│   └── gozen/
├── iki_zikann/            # 行き（講義時間別）の時刻表ページ
│   ├── 1gen/
│   ├── 2gen/
│   ├── 3gen/
│   ├── 4gen/
│   └── 5gen/
├── iki&kaeri/             # 行き・帰り選択ページ
│   ├── iki/
│   └── kaeri/
├── kaeri_gozen&gogo/      # 帰り（午前・午後）選択ページ
│   ├── gogo/
│   └── gozen/
├── kaeri_zikann/          # 帰り（講義時間別）の時刻表ページ
│   ├── 1gen/
│   ├── 2gen/
│   ├── 3gen/
│   ├── 4gen/
│   └── 5gen/
├── layout.tsx             # ルートレイアウト
├── page.tsx               # トップページ
└── globals.css            # グローバルCSS

components/                # Reactコンポーネント
├── ContactForm.tsx        # お問い合わせフォーム
├── DirectionSelector.tsx  # 行き・帰り選択
├── Footer.tsx             # フッター
├── Header.tsx             # ヘッダー
├── TimeSelector.tsx       # 時間選択
└── TimeTable.tsx          # 時刻表

```

## ライセンス

(c) 齋藤未智 

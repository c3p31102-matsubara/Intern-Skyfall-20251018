# TODO アプリ開発の概要

## 実行環境

node: v22.20.0

## セットアップ手順

### リポジトリの作成・developブランチの初期化
- 自分のGitHubアカウントで、任意の名前で新規リポジトリを作成 (例: `intern-todo-app` など)
  - リポジトリの公開範囲は`public`にして、`README.md`の作成を選択する
- `git clone リポジトリURL` でローカルリポジトリを作成
- `git switch -c develop` でdevelopブランチを作成・切り替え
- `README.md`を削除してから、zipファイルを「.git」があるディレクトリで展開
- `git add .` でReactファイルをステージに登録
- `git commit -m "init app"` でステージに登録されたReactファイルを履歴に保存
- `git push -u origin develop` でGitHubのリモートリポジトリに反映

### featureブランチの作成・環境構築

- `git switch -c feature/（任意のブランチ名）` で新規ブランチの作成・切り替え
  - ブランチ名の例: `feature/add-registration`・`feature/add-edit`・`feature/add-delete` など
- `git push -u origin feature/（任意のブランチ名）` でGitHubのリモートリポジトリに反映
- `npm i` で `node_modules` をインストール<br>
- `npm run dev` を実行
- 画面が表示できたら実装開始

### featureブランチでの作業手順
1. 実装して機能作成を進めたら、`git add .` で変更した全てのファイルをステージに登録
2. `git commit -m "（コミットメッセージ）"` でステージに登録された変更内容を履歴に保存
  - `（コミットメッセージ）`には任意のコメントを書く
    - コメントの例：`[Add] 新規登録機能の実装`
3. `git push` でGitHubのリモートリポジトリに変更内容を保存
4. ①-③を繰り返す

### featureブランチのプルリクエストの作成手順 (機能完成後)
1. GitHubのリポジトリページで、`Pull requests` タブをクリックし、`New pull request` を押下
2. マージ元の作成した`feature/〇〇`ブランチを設定し、マージ先を`develop`に設定して、 `Create pull request` を押下
3. タイトル・説明文の記入欄が表示されるため、必要事項を記入したらもう一度 `Create pull request` を押下

## src ディレクトリの構成

```
src/
├── components/                # 再利用可能なUIコンポーネント群
│   ├── RegisterForm/          # 新規登録フォーム
│   │   ├── RegisterForm.tsx           # 登録フォーム本体
│   │   └── RegisterForm.styles.ts     # 登録フォーム用スタイル
│   │
│   ├── TaskCard/              # 各タスクカード（編集・削除機能を持つ）
│   │   ├── TaskCard.tsx           # タスクカード本体
│   │   └── TaskCard.styles.ts     # タスクカード用スタイル
│   │
│   └── TaskList/              # タスク一覧
│       ├── TaskList.tsx           # タスク一覧本体
│       └── TaskList.styles.ts     # タスク一覧用スタイル
│
├── pages/                     # ページ単位のコンポーネント
│   └── Home/
│       ├── Home.tsx           # ホーム画面
│       └── Home.styles.ts     # ホーム画面用スタイル
│
├── styles/                    # 共通スタイル
│   └── global.css             # 全体共通のCSS
│   └── tokens.ts              # 共通デザイントークン（色/影など）
│
├── App.tsx                    # ルートコンポーネント
├── global.d.ts                # CSS Modulesなどのグローバル型定義
├── main.tsx                   # index.htmlのエントリーポイント
└── types.ts                   # TypeScriptの共通型定義
```

## 仕様

### 新規登録 (新規登録フォーム)
#### 必須
- プレースホルダーで、「タイトル」には「タイトルを入力」、「TODO」には「TODO を入力」と表示
- 「タイトル」・「TODO」を入力後、追加ボタン押下でタスクカードを追加
- 「タイトル」・「TODO」のいずれかが空欄の場合には登録できないようにする

#### 追加実装
- 「タイトル」は 50 文字以内、「TODO」は 200 文字以内で文字数を制限し、指定された文字数を超えたら登録できないようにする
- 「タイトル」・「TODO」の文字数が適切に入力されて登録可能な状態になったら、追加ボタンを活性化し、登録不可ではボタンを非活性化する

### 編集 (タスクカード)
#### 必須
- プレースホルダーで、「タイトル」には「タイトルを入力」、「TODO」には「TODO を入力」と表示
- 「タイトル」・「TODO」を入力後、更新ボタン押下でタスクカードを内容を変更
- 「タイトル」・「TODO」のいずれかが空欄の場合には登録できないようにする

#### 追加実装
- 「タイトル」は 50 文字以内、「TODO」は 200 文字以内で文字数を制限し、指定された文字数を超えたら登録できないようにする
- 「タイトル」・「TODO」の文字数が適切に入力されて登録可能な状態になったら、更新ボタンを活性化し、登録不可では非活性化する

### 削除
#### 必須
- 削除ボタン押下でタスクカードを削除して、リストを再表示

## 改修箇所

新規登録・編集・削除の機能作成<br>
CSS はコンポーネントごとに既に作成済みのため、対応不要

- 新規登録
  - `RegisterForm.tsx` の `onSubmitForm` 関数を完成させる
  ```
  const onSubmitForm = (e: React.FormEvent) => {
    e.preventDefault();
    // ここに追加ボタン押下時の処理を書く
  };
  ```
- 編集
  - `TaskCard.tsx` の `onSubmitEditForm` 関数を完成させる
  ```
  const onSubmitEditForm = (e: React.FormEvent) => {
    e.preventDefault();
    // ここに更新ボタン押下時の処理
  };
  ```
- 削除
  - `TaskCard.tsx` の `onClickDeleteButton` 関数を完成させる
  ```
  const onClickDeleteButton = () => {
    // ここに削除ボタン押下時の処理
  };
  ```

## その他追加実装

新規登録・編集・削除の必須・追加実装が全て完了して時間が余れば、以下の実装にチャレンジしてみる

- 入力文字数が指定された文字を上回った場合にエラーメッセージの表示
- 新規登録したデータを localStorage に保存
- タスクカードにチェックボックスをつけて、一括削除を可能にする
- 削除直前に確認ダイアログを表示
- CSS のスタイルの変更

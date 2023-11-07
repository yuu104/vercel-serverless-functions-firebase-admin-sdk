## firebase-admin-sdkの導入方法
### SDKをインストール
```shell
pnpm add firebase-admin
```

### Firebaseコンソール上で秘密鍵を生成し、JSONファイルを取得する
1. Firebase console > 歯車マーク > プロジェクトの設定 > サービスアカウント > Firebase Admin SDKの順にクリックしていく
2. 「新しい秘密鍵の生成」をクリックすると、 JSON ファイルがダウンロードされる (公開しちゃだめなやつ)

### Firebaseプロジェクトと接続する
1. プロジェクト直下に `.env` ファイルを用意する
2.  先程取得した JSON から、`projectId`、`clientEmail`、`privateKey` を貼り付ける

```env
FIREBASE_PROJECT_ID="自分の project Id を貼り付ける"
FIREBASE_PRIVATE_KEY="自分の private key を貼り付ける"
FIREBASE_CLIENT_EMAIL="自分の client email を貼り付ける"
```

### firebaseの初期化ファイルを作成する
```ts
import admin from 'firebase-admin'
 
let adminApp
 
if (!admin.apps.length) {
  adminApp = admin.initializeApp({
    credential: admin.credential.cert({
      projectId: process.env.FIREBASE_PROJECT_ID,
      clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
      privateKey: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n'),
    }),
  })
}
 
export const db = admin.firestore(adminApp)
```

### 参考リンク
https://kiyobl.com/firebase-admin/

## Next.js Route Handlersの参考リンク
https://nextjs.org/docs/app/building-your-application/routing/route-handlers

https://reffect.co.jp/react/next-js-13/#route-handlers

https://www.zenryoku-kun.com/post/nextjs-route-handler


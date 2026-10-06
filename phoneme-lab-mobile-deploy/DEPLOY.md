# Phoneme Lab · 手机部署说明

## 方案 A：Vercel（推荐）
1. 把整个 `phoneme-lab` 文件夹上传到 GitHub。
2. 在 Vercel 导入这个 GitHub 仓库。
3. Framework 选择 Vite（通常会自动识别）。
4. Build Command：`npm run build`
5. Output Directory：`dist`
6. Deploy 后得到一个 `https://xxxxx.vercel.app` 手机网址。

## 方案 B：Netlify
1. 把项目上传到 GitHub。
2. 在 Netlify 导入仓库。
3. Build command：`npm run build`
4. Publish directory：`dist`
5. Deploy 后即可手机访问。

## 本地测试
```bash
npm install
npm run dev
```

生产构建：
```bash
npm run build
npm run preview
```

本项目已包含：
- 响应式手机布局
- PWA manifest
- Service Worker 离线缓存
- iOS/Android 主屏图标
- Vercel / Netlify 部署配置

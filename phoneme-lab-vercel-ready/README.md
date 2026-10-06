# Phoneme Lab

深色卡通英语音标练习网站，React 18 + Vite + TypeScript + TailwindCSS + Framer Motion + Zustand。

## 本地运行
```bash
npm install
npm run dev
```
生产构建：
```bash
npm run build
npm run preview
```

## 新增音素
编辑 `src/data/phonemes.ts`：
- 元音加入 `vowels`
- 双元音加入 `diph`
- 辅音加入 `cons`
- 为新音素补充 `examples` / `cExamples`
- 如需更细内容，直接扩展 `Phoneme` 数据结构。

## 替换真人音频
当前默认使用 Web Speech API。要接入真人音频：
1. 给 `Phoneme` 增加 `audioUrl?: string`
2. 在 `AudioPlayer` 中优先创建 `HTMLAudioElement(audioUrl)`；
3. 没有 URL 时 fallback 到 `SpeechSynthesisUtterance`。
推荐把音频放到 `public/audio/`，例如 `/audio/sheep.mp3`。

## 浏览器能力
录音需要 HTTPS 或 localhost，并需要用户授权麦克风。实时波形使用 `MediaRecorder` 所需的 `getUserMedia` + `AudioContext`。


## 手机 / PWA
本项目支持响应式手机布局，并包含 `manifest.webmanifest`、Service Worker 与主屏图标。部署到 HTTPS 后可在手机浏览器中添加到主屏幕。

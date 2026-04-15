import { AMBER, VIOLET, TEAL, CYAN, PINK, YELLOW, ROSE, SLATE } from "../utils/colors";
import type { StreamDef } from "../utils/calc";

export const DEFAULT_STREAMS: StreamDef[] = [
  { key: "jp_ishigaki", label: "石垣島 (日本語)", color: YELLOW, cvr: 0.0032, unit: 750 },
  { key: "en_ishigaki", label: "石垣島 (英語)", color: "#10b981", cvr: 0.008, unit: 2000 },
  { key: "jp_miyako", label: "宮古島 (日本語)", color: AMBER, cvr: 0.0032, unit: 750 },
  { key: "en_miyako", label: "宮古島 (英語)", color: "#14b8a6", cvr: 0.008, unit: 2000 },
  { key: "jp_yoron", label: "与論島 (日本語)", color: ROSE, cvr: 0.0032, unit: 750 },
  { key: "en_yoron", label: "与論島 (英語)", color: "#6366f1", cvr: 0.008, unit: 2000 },
  { key: "jp_kume", label: "久米島 (日本語)", color: "#84cc16", cvr: 0.0032, unit: 750 },
  { key: "en_kume", label: "久米島 (英語)", color: "#0ea5e9", cvr: 0.008, unit: 2000 },
  { key: "jp_aka", label: "阿嘉島 (日本語)", color: "#ef4444", cvr: 0.0032, unit: 750 },
  { key: "en_aka", label: "阿嘉島 (英語)", color: VIOLET, cvr: 0.008, unit: 2000 },
  { key: "jp_amami", label: "奄美大島 (日本語)", color: "#f472b6", cvr: 0.0032, unit: 750 },
  { key: "en_amami", label: "奄美大島 (英語)", color: "#818cf8", cvr: 0.008, unit: 2000 },
  { key: "jp_other", label: "その他 日本 (日本語)", color: SLATE, cvr: 0.0032, unit: 750 },
  { key: "en_other", label: "その他 日本 (英語)", color: "#94a3b8", cvr: 0.008, unit: 2000 },
  { key: "cjp", label: "コンダオ (日本語)", color: VIOLET, cvr: 0.0035, unit: 1500 },
  { key: "cen", label: "コンダオ (英語)", color: TEAL, cvr: 0.008, unit: 2500 },
  { key: "hjp", label: "ホイアン/チャム (日本語)", color: CYAN, cvr: 0.004, unit: 1000 },
  { key: "hen", label: "ホイアン/チャム (英語)", color: PINK, cvr: 0.009, unit: 2000 }
];

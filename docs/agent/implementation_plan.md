# 石垣島・竹富島ランニングコース ページ評価・収益予測 実装計画

石垣島・竹富島のランニングガイドページ（https://ritotabi.com/destinations/ishigaki-island/running/）の詳細な品質評価を実施し、分析データとして登録します。

## ユーザーレビュー確認事項

> [!NOTE]
> 指定ページにおいて **FAQ JSON-LD (FAQPage)** がメタデータとして正しく実装されていることを確認しました。
> ランニングページ固有のルール（視覚的セクションは任意）に基づき、`seoChecklist.faq` を `true` と判定し、SEOスコアを上方修正します。

## 提案事項

### 分析対象ページ
- **URL**: `https://ritotabi.com/destinations/ishigaki-island/running/`
- **タイトル**: 石垣島を走る｜サザンゲートと市街地を巡る実走ガイド
- **主要コンテンツ**:
  - 市街地〜灯台 (12km)
  - サザンゲート〜南ぬ浜町 (5km)
  - 竹富島一周 (6km)

---

### 分析データ (Analytics Data)

#### [NEW] [jp_ishigaki_running.json](file:///home/mune1/dev/ritotabi/ritotabi_analytics/src/evaluations/jp_ishigaki_running.json)
- 評価ID: `jp_ishigaki_running`
- 公開日: `2026-02-23`
- 収益予測: Tier 3 (Niche) 基準（24ヶ月分）
- 品質評価:
  - コンテンツ独自性: 95 (実走による一次情報、Googleマップにない道の紹介)
  - 写真・ビジュアル: 90 (独自写真18枚確認)
  - アフィリエイト設計: 88 (ホテルへの導線とマイクロコピーが優秀)
  - 内部リンク: 92 (メインガイドおよびホテルへの相互リンク)
  - SEO技術実装: 92 (canonical, hreflang, FAQ-LD すべて良好)
  - ユーザー体験(UX): 90 (自販機、トイレ、猫、灯台などの実用的な記述)
  - ブランド品質: `toneAndManner`, `firstPersonInsight`, `benefitUpfront` すべて `true`

#### [MODIFY] [_registry.json](file:///home/mune1/dev/ritotabi/ritotabi_analytics/src/evaluations/_registry.json)
- 新規評価データ `jp_ishigaki_running` をリストに追加。

---

## オープンクエスチョン

> [!IMPORTANT]
> 「公開非 2026/02/23」との指示がありましたが、指定URLは現在公開状態でした。
> JSON内の `publishedDate` は `2026-02-23` として扱いますが、もし別の意図がありましたらご指摘ください。

---

## 検証プラン

### 自動テスト
- `npm run build` (プロジェクト全体の型定義整合性確認)
- `node -e "JSON.parse(require('fs').readFileSync('src/evaluations/jp_ishigaki_running.json'))"` (JSON構文チェック)

### 手動確認
- 生成されたJSONの内容が `eval_spec.md` のルーブリックに合致しているか再確認。

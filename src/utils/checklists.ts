export const CHECKLIST_LABELS: Record<string, string> = {
  // Affiliate
  ctaPosition: "CTA位置",
  microCopy: "マイクロコピー",
  multipleOta: "複数OTA",
  priceVisible: "価格表示",
  socialProof: "社会的証明",
  mobileStickyCta: "モバイルCTA",
  carRentalLink: "レンタカーリンク",
  activityLink: "アクティビティリンク",
  urgencySignals: "緊急性シグナル",
  minClicks: "最小クリック数",
  // SEO
  hreflang: "hreflang設定",
  faqJsonLd: "FAQ構造化データ",
  metaTitleKw: "titleキーワード",
  metaDescLength: "meta description長",
  canonicalUrl: "canonical設定",
  ogpTwitterCard: "OGP/Twitter Card",
  // Brand
  toneAndManner: "トーン＆マナー",
  firstPersonInsight: "一次情報の具体性",
  benefitUpfront: "冒頭の結論提示",
  personaDrivenPros: "ペルソナ形式のPros",
  // Category
  comparisonTable: "比較表の設置",
  affiliateMicroCopy: "アフィリエイトMC",
  courseSpecs: "コーススペック",
  runBadge: "実走評価バッジ",
  // Tech
  nextImage: "Next.js Image",
  imageAlt: "画像alt属性",
  affiliateRel: "rel=sponsored",
};

export const CHECKLIST_DESCRIPTIONS: Record<string, string> = {
  // Affiliate
  ctaPosition: "予約ボタン（CTA）がスクロールせずに見えるファーストビュー内か、各ホテル直後など目立つ位置に設置されているか。位置が悪いと読了前に離脱される。",
  microCopy: "「今すぐ確認」「空室を見る」など購買意欲を高める短いコピーをCTAに添える。ボタン単体より成約率が上がる。",
  multipleOta: "Booking.com・Agoda・Expediaなど複数のOTAリンクを設置し比較購買を促す。1サイトだけでは選択肢が少なく、ユーザーが他サイトへ流出する。",
  priceVisible: "1泊の目安料金・最低価格をページ内に表示する。価格が見えないとユーザーは離脱しやすく、CVRが低下する。",
  socialProof: "総合評価スコア・レビュー件数・受賞歴など第三者評価を掲載する。信頼性が高まりCVR改善に繋がる。",
  mobileStickyCta: "モバイルでスクロール中も画面下部に固定表示される予約ボタンを実装する。未実装だとスマホユーザーからの予約が逃げやすい。",
  carRentalLink: "タイムズカー・日産レンタカーなど現地の交通手段予約へのリンクを設置し、移動手段ニーズを取り込む。",
  activityLink: "Klook・Viatorなど現地アクティビティ・ツアー予約サービスへのリンクを追加し、体験コンテンツへの需要を取り込む。",
  urgencySignals: "「残り○室」「今週末限定」など予約を促す緊急性の要素。設置数が1以上で合格目安。0だと購買のきっかけが弱い。",
  minClicks: "ユーザーが予約サイトに到達するまでのクリック数。2クリック以内が目安。数が多いほど途中離脱が増える。",
  // SEO
  hreflang: "日英など多言語ページ間でhreflangタグを設定し、Googleが各国ユーザーに正しい言語版を表示できるようにする。設定漏れは国際SEOの機会損失になる。",
  faqJsonLd: "FAQセクションにJSON-LD構造化データを実装し、検索結果でのリッチスニペット（FAQ展開表示）を狙う。CTRが大きく改善するケースがある。",
  metaTitleKw: "メタタイトルの冒頭付近にメインキーワードを配置し検索順位とCTRを改善する。キーワードが後ろすぎると評価が下がる。",
  metaDescLength: "メタディスクリプションを120〜160文字に最適化する。長すぎると検索結果で「…」と省略表示され訴求力が下がる。",
  canonicalUrl: "canonicalタグを正しく設定し重複URLによるSEO評価の分散を防ぐ。設定ミスはランキング低下につながる。",
  ogpTwitterCard: "OGP・Twitter Cardタグを設定しSNSシェア時にサムネイル・タイトルが正しく表示されるようにする。未設定だと粗いシェア表示になりCTRが下がる。",
  // Brand
  toneAndManner: "RITOTABI独自のトーン（体験ベース・親近感のある語り口）でライティングされているか。無機質な公式サイト文体はブランド毀損になる。",
  firstPersonInsight: "「実際に歩いてわかった」など一次情報・実体験に基づく具体的な記述が含まれているか。オリジナリティがないとSEO・ユーザー評価が低下する。",
  benefitUpfront: "記事冒頭でユーザーへのベネフィット（「この記事でわかること3選」など）を明示しているか。結論が後回しだと離脱率が上がる。",
  personaDrivenPros: "カップル向け・家族向け・ソロ旅など、ペルソナ別のおすすめポイントが記載されているか。読者が自分向けと感じると直帰率が下がる。",
  // Category
  comparisonTable: "ホテルや観光スポットを一覧比較できるテーブルが設置されているか。比較表は滞在時間・CTR・CVRの向上に効果的。",
  affiliateMicroCopy: "アフィリエイトリンク近くに「〇〇はここで予約できる」など購買を後押しするマイクロコピーが設置されているか。",
  courseSpecs: "ランニングコースの距離・獲得標高・難易度・路面状況などのスペックが明記されているか。情報が薄いと検索ニーズを満たせない。",
  runBadge: "実際に走った証拠となるGPS軌跡・タイム・写真など「実走評価」の情報が掲載されているか。一次情報として差別化になる。",
  // Tech
  nextImage: "画像にNext.jsのImageコンポーネントを使用し、自動WebP変換・遅延読み込み・サイズ最適化を実現しているか。Core Web Vitalsに影響する。",
  imageAlt: "全画像にalt属性が設定されており、アクセシビリティとSEOに対応しているか。Google画像検索の流入にも関わる。",
  affiliateRel: "アフィリエイトリンクにrel=\"sponsored\"またはrel=\"nofollow\"が設定されているか。Googleガイドライン違反はペナルティリスクになる。",
};

export const GAP_DESCRIPTIONS = {
  qualityGap: "品質スコアを100点に改善した場合に回収できる推定損失額。コンテンツの改善・改訂によって取り戻せるポテンシャル。各軸のスコアを上げることで縮小する。",
  typeGap: "ページタイプ別のCVR倍率差による構造的損失。ホテル=×1.0、ガイド=×0.5、ランニング=×0.3、トップ=×0.2。ページタイプを変更しない限り解消できない。",
};

/* =====================================================================
   홈페이지의 모든 내용은 이 파일 하나에서 고칩니다.
   영어(index.html), 일본어(ja.html), 한국어(ko.html) 페이지가 이 파일을 함께 씁니다.

   고치는 규칙
   1. 따옴표 " " 안의 글자만 바꿉니다.
   2. 항목 끝의 쉼표( , )와 괄호( { } [ ] )는 지우지 않습니다.
   3. 필요 없는 섹션은 목록을 비우면( [] ) 화면에서 자동으로 사라집니다.

   세 언어를 쓰는 방법
   - 언어마다 다르게 보여 줄 글:   { en: "English text", ja: "日本語の文", ko: "한국어 글" }
   - 세 페이지에 똑같이 보여 줄 글:  "그냥 따옴표 하나"
   - 일부 언어만 적으면, 없는 언어의 페이지에는 적힌 것이 대신 나옵니다. (영어 → 일본어 → 한국어 순)

   기간에 present 라고 쓰면 Present / 現在 / 현재 로 나옵니다.
   ===================================================================== */

const SITE = {

  /* ---------- 기본 정보 ---------- */
  name:    { en: "Taeeun Kim", ja: "金 兌恩", ko: "김태은" },
  nameSub: { en: "金 兌恩", ja: "キム テウン ・ Taeeun Kim", ko: "金 兌恩 ・ Taeeun Kim" },   // 이름 아래 작은 글씨
  position:    { en: "Assistant Professor", ja: "助教", ko: "조교수" },
  affiliation: { en: "Faculty of Human Sciences, Waseda University", ja: "早稲田大学 人間科学学術院", ko: "와세다대학 인간과학학술원" },
  location: "",

  // 공개할 이메일 주소. 비워 두면 표시되지 않습니다.
  email: "",

  // 사진: images 폴더에 profile.jpg 라는 이름으로 넣으면 표시됩니다. 없으면 이름 첫 글자가 나옵니다.
  photo: "images/profile.jpg",

  // 이력서 PDF: files 폴더에 넣고 "files/cv.pdf" 처럼 적습니다. 없으면 "" 로 둡니다.
  cv: "",

  // 저자 목록에서 굵게 표시할 내 이름 표기들
  myNames: ["Taeeun Kim", "Taeeun KIM", "金兌恩", "김태은"],

  /* ---------- 외부 링크 ---------- */
  links: [
    { label: "researchmap", url: "https://researchmap.jp/taeeunkim" },
    { label: "J-GLOBAL", url: "https://jglobal.jst.go.jp/detail?JGLOBAL_ID=202301014052907356" },
  ],

  /* ---------- 소개 (문단 하나가 { } 하나) ---------- */
  about: [
    {
      en: "I am an Assistant Professor at the Faculty of Human Sciences, Waseda University. I received my Ph.D. in Sociology from the University of Tokyo in March 2024.",
      ja: "早稲田大学人間科学学術院 助教。2024年3月に東京大学大学院人文社会系研究科で博士（社会学）を取得しました。", ko: "와세다대학 인간과학학술원 조교수입니다. 2024년 3월 도쿄대학 대학원 인문사회계연구과에서 박사(사회학) 학위를 받았습니다.",
    },
    {
      en: "My research lies in the sociology of the family, with a focus on family, social stratification, and population. In particular, I study the division of housework and gender inequality among older couples in Japan and South Korea, using quantitative analysis of social survey data.",
      ja: "専門は家族社会学で、家族・社会階層・人口を主な研究領域としています。とくに、日本と韓国の高齢夫婦における家事分担とジェンダー不平等について、社会調査データを用いた計量分析を行っています。", ko: "전공은 가족사회학이며, 가족·사회계층·인구를 주요 연구 영역으로 삼고 있습니다. 특히 일본과 한국 고령 부부의 가사 분담과 젠더 불평등을 사회조사 데이터를 이용한 계량 분석으로 연구하고 있습니다.",
    },
  ],

  /* ---------- 관심 분야 ---------- */
  interests: [
    { en: "Family", ja: "家族", ko: "가족" },
    { en: "Social Stratification", ja: "社会階層", ko: "사회계층" },
    { en: "Population", ja: "人口", ko: "인구" },
    { en: "Gender", ja: "ジェンダー", ko: "젠더" },
    { en: "Aging", ja: "高齢期", ko: "고령기" },
  ],

  /* ---------- 소식 (최신 것을 맨 위에). 예: { date: "2026.11", text: { en: "...", ja: "...", ko: "..." } }, ---------- */
  news: [
  ],

  /* ---------- 연구 주제. 예: { title: { en: "...", ja: "...", ko: "..." }, description: { en: "...", ja: "...", ko: "..." } }, ---------- */
  research: [
  ],

  /* ---------- 논문 (최신 것을 맨 위에) ----------
     authors 는 공저일 때만 적습니다(단독 저자면 생략). links 로 DOI·PDF 링크를 달 수 있습니다. */
  papers: [
    {
      date: "2026.08",
      title: {
        en: "A Conceptual Exploration of New Mediated Interaction through the Case of Camstudy: Silent Connection, Intimacy Without Communication",
        ja: "캠스터디, 새로운 매개된 상호작용에 관한 시론: 조용한 연결, 소통 없는 친밀감", ko: "캠스터디, 새로운 매개된 상호작용에 관한 시론: 조용한 연결, 소통 없는 친밀감",
      },
      authors: "Juhyun Lee, Taeeun Kim, Hyejun Lee",
      venue: "Journal of Social Sciences, 19(2), 303–331",
      links: [
        { label: "DOI", url: "https://doi.org/10.54540/jss19.2.9" },
      ],
    },
    {
      date: "2023",
      title: "日韓の高齢夫婦からみる性別役割分業に関する実証研究",
      venue: { en: "Doctoral dissertation, The University of Tokyo", ja: "博士学位論文（東京大学）", ko: "박사학위논문 (도쿄대학)" },
    },
    {
      date: "2018",
      title: "高齢期の家事分担からみるジェンダー格差の実証研究",
      venue: { en: "Master's thesis, The University of Tokyo", ja: "修士学位論文（東京大学）", ko: "석사학위논문 (도쿄대학)" },
    },
  ],

  /* ---------- 그 밖의 저작 (보고서, 기고문 등) ---------- */
  misc: [
    {
      date: "2023.10",
      title: { en: "자동판매기 라벨프리 음료판매에 관한 실증실험", ja: "自動販売機ラベルレスペットボトルに関する実証実験", ko: "자동판매기 라벨프리 음료판매에 관한 실증실험" },
      venue: { en: "KIPA Regulatory Trends, Autumn 2023, pp. 73–77", ja: "韓国行政研究院規制動向 2023年秋号, 73–77", ko: "한국행정연구원 규제동향 2023년 가을호, 73–77" },
    },
    {
      date: "2023.09",
      title: { en: "불법촬영의 직접 규제를 위한 새로운 법률 시행", ja: "盗撮の直接規制のための新しい法律の施行", ko: "불법촬영의 직접 규제를 위한 새로운 법률 시행" },
      venue: { en: "KIPA Regulatory Trends, Summer 2023, pp. 70–73", ja: "韓国行政研究院規制動向 2023年夏号, 70–73", ko: "한국행정연구원 규제동향 2023년 여름호, 70–73" },
    },
    {
      date: "2023.06",
      title: { en: "일본의 스텔스 마케팅에 대한 첫 규제 시행", ja: "日本におけるステルスマーケティングに関する初規制の施行", ko: "일본의 스텔스 마케팅에 대한 첫 규제 시행" },
      venue: { en: "KIPA Regulatory Trends, Spring 2023, pp. 66–68", ja: "韓国行政研究院規制動向 2023年春号, 66–68", ko: "한국행정연구원 규제동향 2023년 봄호, 66–68" },
    },
    {
      date: "2023.03",
      title: { en: "원자력 발전소의 운전 연장에 관한 새로운 안전 규제의 시행", ja: "日本の原子力発電所の運転延長に関する新しい安全規制の施行", ko: "원자력 발전소의 운전 연장에 관한 새로운 안전 규제의 시행" },
      venue: { en: "KIPA Regulatory Trends, Winter 2022, pp. 63–65", ja: "韓国行政研究院規制動向 2022年冬号, 63–65", ko: "한국행정연구원 규제동향 2022년 겨울호, 63–65" },
    },
    {
      date: "2022.12",
      title: { en: "교직원에 의한 아동 성폭력 등의 방지에 관한 법률", ja: "教職員による児童生徒性暴力等の防止等に関する法律", ko: "교직원에 의한 아동 성폭력 등의 방지에 관한 법률" },
      venue: { en: "KIPA Regulatory Trends, Autumn 2022, pp. 79–81", ja: "韓国行政研究院規制動向 2022年秋号, 79–81", ko: "한국행정연구원 규제동향 2022년 가을호, 79–81" },
    },
    {
      date: "2022.08",
      title: { en: "자동배송로봇의 공공도로 실증실험에 대한 제도", ja: "自動配送ロボットの公道実証実験に関する制度", ko: "자동배송로봇의 공공도로 실증실험에 대한 제도" },
      venue: { en: "KIPA Regulatory Trends, Summer 2022, pp. 70–73", ja: "韓国行政研究院規制動向 2022年夏号, 70–73", ko: "한국행정연구원 규제동향 2022년 여름호, 70–73" },
    },
    {
      date: "2022.05",
      title: { en: "자동운전의 레벨4 실현을 위한 도로교통법 개정안", ja: "自動運転のレベル4実現のための道路交通法改定案", ko: "자동운전의 레벨4 실현을 위한 도로교통법 개정안" },
      venue: { en: "KIPA Regulatory Trends, Spring 2022, pp. 80–83", ja: "韓国行政研究院規制動向 2022年春号, 80–83", ko: "한국행정연구원 규제동향 2022년 봄호, 80–83" },
    },
    {
      date: "2022.02",
      title: { en: "일본의 탄소 중립 실현을 위한 개정 지구 온난화 대책 추진법", ja: "日本における炭素中立実現のための『改定地球温暖化対策推進法』", ko: "일본의 탄소 중립 실현을 위한 개정 지구 온난화 대책 추진법" },
      venue: { en: "KIPA Regulatory Trends, Winter 2021, pp. 75–78", ja: "韓国行政研究院規制動向 2021年冬号, 75–78", ko: "한국행정연구원 규제동향 2021년 겨울호, 75–78" },
    },
    {
      date: "2021.11",
      title: { en: "일본의 디지털 플랫폼을 둘러싼 거대 IT기업 규제법에 대해", ja: "日本のデジタルプラットフォームをめぐる巨大IT企業の規制法について", ko: "일본의 디지털 플랫폼을 둘러싼 거대 IT기업 규제법에 대해" },
      venue: { en: "KIPA Regulatory Trends, Autumn 2021, pp. 85–89", ja: "韓国行政研究院規制動向 2021年秋号, 85–89", ko: "한국행정연구원 규제동향 2021년 가을호, 85–89" },
    },
    {
      date: "2021.09",
      title: {
        en: "Gender Comparison of Factors that Determine Participation of Household Labor in Old Age",
        ja: "高齢期における家事参加の規定要因と男女比較",
      },
      venue: {
        en: "Report of the 4th National Family Research of Japan (NFRJ18), Vol. 1, pp. 131–142",
        ja: "第4回全国家族調査（NFRJ18）報告書 第1巻, 131–142", ko: "제4회 전국가족조사(NFRJ18) 보고서 제1권, 131–142",
      },
    },
  ],

  /* ---------- 학회 발표 (최신 것을 맨 위에). 초청 발표는 invited: true 를 붙입니다. ---------- */
  presentations: [
    {
      date: "2026.09",
      title: "高齢者の家族関係はウェルビーイングを高めるのかーー東アジア社会調査（EASS）データを用いた日韓比較",
      venue: { en: "36th Annual Meeting of the Japan Society of Family Sociology", ja: "第36回日本家族社会学会大会", ko: "제36회 일본가족사회학회 대회" },
    },
    {
      date: "2025.11",
      title: "韓国高齢女性の就業変化からみる高齢夫婦の家事分担",
      venue: { en: "98th Annual Meeting of the Japan Sociological Society", ja: "第98回日本社会学会大会", ko: "제98회 일본사회학회 대회" },
    },
    {
      date: "2024.11",
      title: "無償労働からみる高齢期の生活時間におけるジェンダー不平等",
      venue: { en: "97th Annual Meeting of the Japan Sociological Society", ja: "第97回日本社会学会大会", ko: "제97회 일본사회학회 대회" },
    },
    {
      date: "2022.11",
      title: {
        en: "What is gender? ～Gender norms of masculinity and femininity～",
        ja: "ジェンダーとは何か。～男らしさ・女らしさのジェンダー規範～",
      },
      venue: { en: "19th Library Mini Lecture, The University of Tokyo", ja: "東京大学 第19回 図書館ミニレクチャ", ko: "도쿄대학 제19회 도서관 미니 렉처" },
      invited: true,
    },
    {
      date: "2021.06",
      title: "高齢者の就労からみる家事参加の男女比較",
      venue: {
        en: "Colloquium, Department of Japanese Studies, Graduate School of International and Area Studies, Hankuk University of Foreign Studies",
        ja: "韓国外国語大学校国際地域大学院日本学科コロキウム", ko: "한국외국어대학교 국제지역대학원 일본학과 콜로키움",
      },
      invited: true,
    },
    {
      date: "2021.05",
      title: "Gender Inequality among Japan's Elderly as Seen through Household Labor",
      venue: "UTokyo Center for Contemporary Japanese Studies Graduate Student Forum",
    },
    {
      date: "2020.11",
      title: "Impact of COVID-19 pandemic on senior-to-senior social engagement activities at a community space in Japan",
      authors: "Neo Kazembe, Hongjik Kim, Cong Wang, Shuichiro Higuma, Yerim Yang, Taeeun Kim, Ryogo Ogino, Mai Takase",
      venue: "The Gerontological Society of America",
    },
    {
      date: "2020.09",
      title: "NFRJ98・NFRJ08・NFRJ18からみる高齢期の家事労働における時系列変化",
      venue: { en: "Japan Society of Family Sociology", ja: "日本家族社会学会", ko: "일본가족사회학회" },
    },
    {
      date: "2019.12",
      title: {
        ja: "일본 고령자 부부의 가사분담현황과 그 영향요인에 관한 분석（=日本の高齢夫婦の家事分担の現状と規定要因に関する研究）",
        ko: "일본 고령자 부부의 가사분담현황과 그 영향요인에 관한 분석",
      },
      venue: { en: "Korean Sociological Association", ja: "한국사회학회（=韓国社会学会）", ko: "한국사회학회" },
    },
    {
      date: "2019.09",
      title: "高齢期の家事労働における規定要因の男女比較",
      venue: { en: "Japan Society of Family Sociology", ja: "日本家族社会学会", ko: "일본가족사회학회" },
    },
    {
      date: "2019.05",
      title: "高齢期の家事分担からみるジェンダー格差の実証研究",
      venue: "家族問題研究会 修士論文報告会",
    },
    {
      date: "2019.03",
      title: "Age-Friendly Workplaceに向けてー高齢者本人・企業・高齢者就労支援の現場への調査からみる「Age-Friendly Workplaceについて」",
      authors: "金兌恩, 前田一歩, 村山洋史, 菅原育子, 朴孝淑",
      venue: { en: "IOG/GLAFS Domestic Symposium", ja: "IOG/GLAFS国内シンポジウム", ko: "IOG/GLAFS 국내 심포지엄" },
    },
    {
      date: "2018.11",
      title: "Obstacles to Continue Staying at Home in Japan: Viewpoints of Older Persons, Family Caregivers and Care",
      authors: "Shiori Suzawa, Nobutada Yokouchi, Ayako Baba, Kiyoshi Yamane, Taeeun Kim, Mari Kimata, Ikuko Sugawara, Hiroshi Murayama",
      venue: "The Gerontological Society of America",
    },
    {
      date: "2018.10",
      title: "Working towards an age-friendly Workplace: from interviews with the elderly and their supervisors",
      authors: "Taeeun Kim, Kazuho Maeda",
      venue: "International Joint Seminar",
    },
    {
      date: "2018.03",
      title: "要介護高齢者の居住地選択要因",
      authors: "金兌恩, 中野航綺, 岡田宏子, 長谷田真帆, 堀拔文香, 角川由香, 福井千絵, 横内陳正, 須沢栞, 金圭源, 藤田晃大, 山口豪太, 松田涼, 麦山亮太, 須藤誠, 馬場絢子, 王天天, 山根清, 菅原育子, 村山洋史, 朴孝淑, 木全真理",
      venue: { en: "IOG/GLAFS Domestic Symposium", ja: "IOG/GLAFS国内シンポジウム", ko: "IOG/GLAFS 국내 심포지엄" },
    },
    {
      date: "2017.11",
      title: "Obstacles of Aging in Place in Japan: A Preliminary Study",
      authors: "Chie Fukui, Nobutada Yokouchi, Taeeun Kim, Koki Nakano, Kim Kyuwon, Gota Yamaguchi, Akihiro Fujita, Shiori Suzawa, Ayako Baba, Yuka Sumikawa, Park Hyosook, Mari Kimata, Hiroshi Murayama, Ikuko Sugawara",
      venue: "APRU Ageing in the Asia-Pacific Workshop 2017 for Junior Gerontologists",
    },
  ],

  /* ---------- 강의 ---------- */
  teaching: [
    { period: "2026.10 – present", title: { en: "Questionnaire Survey Method", ja: "アンケート調査法", ko: "설문조사법" }, place: { en: "Waseda University", ja: "早稲田大学", ko: "와세다대학" } },
    { period: "2026.04 – present", title: { en: "Social Data Analysis 1A", ja: "社会データ分析1A（社会調査士科目）", ko: "사회데이터분석 1A (사회조사사 과목)" }, place: { en: "Japan Women's University", ja: "日本女子大学", ko: "일본여자대학" } },
    { period: "2025.09 – present", title: { en: "Social Data Analysis 1B", ja: "社会データ分析1B（社会調査士科目）", ko: "사회데이터분석 1B (사회조사사 과목)" }, place: { en: "Japan Women's University", ja: "日本女子大学", ko: "일본여자대학" } },
    { period: "2024.09 – 2026.03", title: { en: "Introduction to Sociology of Life and Identity 2", ja: "生命とアイデンティティの社会学入門2", ko: "생명과 정체성의 사회학 입문 2" }, place: { en: "Meiji Gakuin University", ja: "明治学院大学", ko: "메이지가쿠인대학" } },
    { period: "2024.09 – 2026.03", title: { en: "Introductory Seminar in Sociology", ja: "社会学基礎演習", ko: "사회학 기초 연습" }, place: { en: "Meiji Gakuin University", ja: "明治学院大学", ko: "메이지가쿠인대학" } },
    { period: "2024.04 – 2026.03", title: { en: "Introduction to Sociology of Life and Identity 1", ja: "生命とアイデンティティの社会学入門1", ko: "생명과 정체성의 사회학 입문 1" }, place: { en: "Meiji Gakuin University", ja: "明治学院大学", ko: "메이지가쿠인대학" } },
    { period: "2024.04 – 2026.03", title: { en: "Academic Literacy", ja: "アカデミック・リテラシー", ko: "아카데믹 리터러시" }, place: { en: "Meiji Gakuin University", ja: "明治学院大学", ko: "메이지가쿠인대학" } },
    { period: "2025.04 – 2025.08", title: { en: "Social Statistics", ja: "社会統計学（社会調査士科目）", ko: "사회통계학 (사회조사사 과목)" }, place: { en: "Shukutoku University", ja: "淑徳大学", ko: "슈쿠토쿠대학" } },
    { period: "2023.09", title: { en: "Quantitative Analysis Seminar, Summer AY2023 (TA)", ja: "2023年度計量分析セミナー夏（TA）", ko: "2023년도 계량분석 세미나 여름 (TA)" }, place: { en: "Institute of Social Science, The University of Tokyo", ja: "東京大学社会科学研究所", ko: "도쿄대학 사회과학연구소" } },
    { period: "2023.03", title: { en: "Quantitative Analysis Seminar, Spring AY2022 (TA)", ja: "2022年度計量分析セミナー春（TA）", ko: "2022년도 계량분석 세미나 봄 (TA)" }, place: { en: "Institute of Social Science, The University of Tokyo", ja: "東京大学社会科学研究所", ko: "도쿄대학 사회과학연구소" } },
    { period: "2022.09", title: { en: "Quantitative Analysis Seminar, Summer AY2022 (TA)", ja: "2022年度計量分析セミナー夏（TA）", ko: "2022년도 계량분석 세미나 여름 (TA)" }, place: { en: "Institute of Social Science, The University of Tokyo", ja: "東京大学社会科学研究所", ko: "도쿄대학 사회과학연구소" } },
    { period: "2022.03", title: { en: "Quantitative Analysis Seminar, Spring AY2021 (TA)", ja: "2021年度計量分析セミナー春（TA）", ko: "2021년도 계량분석 세미나 봄 (TA)" }, place: { en: "Institute of Social Science, The University of Tokyo", ja: "東京大学社会科学研究所", ko: "도쿄대학 사회과학연구소" } },
    { period: "2021.10 – 2022.01", title: { en: "Research Methods in Sociology (Teaching Assistant)", ja: "社会調査（TA）", ko: "사회조사 (TA)" }, place: { en: "The University of Tokyo", ja: "東京大学", ko: "도쿄대학" } },
    { period: "2021.09", title: { en: "Quantitative Analysis Seminar, Summer AY2021 (TA)", ja: "2021年度計量分析セミナー夏（TA）", ko: "2021년도 계량분석 세미나 여름 (TA)" }, place: { en: "Institute of Social Science, The University of Tokyo", ja: "東京大学社会科学研究所", ko: "도쿄대학 사회과학연구소" } },
    { period: "2021.03", title: { en: "Quantitative Analysis Seminar, Spring AY2020 (TA)", ja: "2020年度計量分析セミナー春（TA）", ko: "2020년도 계량분석 세미나 봄 (TA)" }, place: { en: "Institute of Social Science, The University of Tokyo", ja: "東京大学社会科学研究所", ko: "도쿄대학 사회과학연구소" } },
    { period: "2020.10 – 2021.01", title: { en: "Research Methods in Sociology (Teaching Assistant)", ja: "社会調査（TA）", ko: "사회조사 (TA)" }, place: { en: "The University of Tokyo", ja: "東京大学", ko: "도쿄대학" } },
    { period: "2020.04 – 2020.08", title: { en: "Reading Seminar in Sociology Theory (Teaching Assistant)", ja: "理論社会学文献購読（TA）", ko: "이론사회학 문헌 강독 (TA)" }, place: { en: "The University of Tokyo", ja: "東京大学", ko: "도쿄대학" } },
    { period: "2019.09", title: { en: "Quantitative Analysis Seminar, Summer AY2019 (TA)", ja: "2019年度計量分析セミナー夏（TA）", ko: "2019년도 계량분석 세미나 여름 (TA)" }, place: { en: "Institute of Social Science, The University of Tokyo", ja: "東京大学社会科学研究所", ko: "도쿄대학 사회과학연구소" } },
  ],

  /* ---------- 경력 ---------- */
  experience: [
    {
      period: "2026.04 – present",
      title: { en: "Assistant Professor", ja: "助教", ko: "조교수" },
      place: { en: "Faculty of Human Sciences, Waseda University", ja: "早稲田大学 人間科学学術院", ko: "와세다대학 인간과학학술원" },
    },
    {
      period: "2025.09 – present",
      title: { en: "Part-time Lecturer", ja: "非常勤講師", ko: "시간강사" },
      place: {
        en: "Department of Studies on Contemporary Society, Faculty of Integrated Arts and Social Sciences, Japan Women's University",
        ja: "日本女子大学 人間社会学部 現代社会学科", ko: "일본여자대학 인간사회학부 현대사회학과",
      },
    },
    {
      period: "2026.04 – 2026.09",
      title: { en: "Part-time Lecturer", ja: "非常勤講師", ko: "시간강사" },
      place: { en: "Department of Political Studies, Faculty of Law, Gakushuin University", ja: "学習院大学 法学部 政治学科", ko: "가쿠슈인대학 법학부 정치학과" },
    },
    {
      period: "2025.04 – 2026.03",
      title: { en: "Part-time Lecturer", ja: "非常勤講師", ko: "시간강사" },
      place: { en: "Shukutoku University", ja: "淑徳大学 コミュニティ政策学部", ko: "슈쿠토쿠대학 커뮤니티정책학부" },
    },
    {
      period: "2024.04 – 2026.03",
      title: { en: "Part-time Lecturer", ja: "非常勤講師", ko: "시간강사" },
      place: { en: "Department of Sociology, Faculty of Sociology and Social Work, Meiji Gakuin University", ja: "明治学院大学 社会学部 社会学科", ko: "메이지가쿠인대학 사회학부 사회학과" },
    },
    {
      period: "2024.04 – 2026.03",
      title: { en: "Project Researcher", ja: "特任研究員", ko: "특임연구원" },
      place: {
        en: "Center for Social Research and Data Archives, Institute of Social Science, The University of Tokyo",
        ja: "東京大学 社会科学研究所 附属社会調査・データアーカイブ研究センター", ko: "도쿄대학 사회과학연구소 부속 사회조사·데이터아카이브 연구센터",
      },
    },
    {
      period: "2021.05 – 2023.10",
      title: { en: "Overseas Correspondent", ja: "海外通信員", ko: "해외통신원" },
      place: { en: "Korea Institute of Public Administration", ja: "韓国行政研究院", ko: "한국행정연구원" },
    },
  ],

  /* ---------- 학력 ---------- */
  education: [
    {
      period: "2019.04 – 2024.03",
      title: { en: "Doctoral Program in Sociology", ja: "社会文化研究専攻（社会学、博士課程）", ko: "사회문화연구 전공 (사회학, 박사과정)" },
      place: { en: "Graduate School of Humanities and Sociology, The University of Tokyo", ja: "東京大学 大学院人文社会系研究科", ko: "도쿄대학 대학원 인문사회계연구과" },
      note: { en: "Ph.D. (Sociology), March 2024", ja: "博士（社会学）2024年3月", ko: "박사 (사회학), 2024년 3월" },
    },
    {
      period: "2017.04 – 2019.03",
      title: { en: "Master's Program in Sociology", ja: "社会文化研究専攻（社会学、修士課程）", ko: "사회문화연구 전공 (사회학, 석사과정)" },
      place: { en: "Graduate School of Humanities and Sociology, The University of Tokyo", ja: "東京大学 大学院人文社会系研究科", ko: "도쿄대학 대학원 인문사회계연구과" },
      note: { en: "M.A. (Sociology), March 2019", ja: "修士（社会学）2019年3月", ko: "석사 (사회학), 2019년 3월" },
    },
    {
      period: "2015.04 – 2017.03",
      title: { en: "Research Student in Sociology", ja: "社会文化研究専攻（社会学、研究生）", ko: "사회문화연구 전공 (사회학, 연구생)" },
      place: { en: "Graduate School of Humanities and Sociology, The University of Tokyo", ja: "東京大学 大学院人文社会系研究科", ko: "도쿄대학 대학원 인문사회계연구과" },
    },
    {
      period: "2012.03 – 2014.02",
      title: { en: "Master's Program in Japanese Society and Culture", ja: "日本社会文化専攻（修士課程）", ko: "일본사회문화 전공 (석사과정)" },
      place: {
        en: "Department of Japanese Studies, Graduate School of International and Area Studies, Hankuk University of Foreign Studies",
        ja: "韓国外国語大学校 国際地域大学院 日本学科", ko: "한국외국어대학교 국제지역대학원 일본학과",
      },
      note: { en: "Coursework completed", ja: "課程修了", ko: "과정 수료" },
    },
    {
      period: "2007.03 – 2012.02",
      title: { en: "English Language and Literature / Area Studies (Japan)", ja: "英語英文学 / 地域研究（日本）学（学部）", ko: "영어영문학 / 지역연구(일본)학 (학부)" },
      place: { en: "Humanities / International Studies, Ajou University", ja: "亜洲大学校 人文学部 / 国際学部", ko: "아주대학교 인문학부 / 국제학부" },
    },
  ],

  /* ---------- 수상 ---------- */
  awards: [
    {
      period: "2023.09",
      title: { en: "Best Lecturer Award, AY2022", ja: "2022年度 最優秀講師受賞", ko: "2022년도 최우수 강사상" },
      place: "学校法人上田煌桜学園さくら国際高等学校東京校 運営 国際理解支援事業部",
    },
  ],

  /* ---------- 장학금 · 프로그램 · 자격 ---------- */
  qualifications: [
    {
      period: "2017.04 – 2024.03",
      title: { en: "Global Leadership Initiative for an Age-Friendly Society (GLAFS)", ja: "活力ある超高齢社会を共創するグローバル・リーダー養成プログラム（GLAFS）", ko: "활력 있는 초고령사회를 공동 창조하는 글로벌 리더 양성 프로그램 (GLAFS)" },
    },
    {
      period: "2022.04 – 2022.09",
      title: { en: "The University of Tokyo Future Faculty Program (UTokyo FFP)", ja: "東京大学フューチャーファカルティプログラム（東大FFP）", ko: "도쿄대학 퓨처 패컬티 프로그램 (UTokyo FFP)" },
    },
    {
      period: "2015.04 – 2022.03",
      title: { en: "Japanese Government (MEXT) Scholarship Student", ja: "日本文部科学省 国費留学生", ko: "일본 문부과학성 국비유학생" },
    },
    {
      period: "2019.06",
      title: { en: "Certificate of Advanced Social Researcher", ja: "専門社会調査士（A-000673号）", ko: "전문사회조사사 (A-000673호)" },
    },
    {
      period: "2019.06",
      title: { en: "Certificate of Social Researcher", ja: "社会調査士（第031923号）", ko: "사회조사사 (제031923호)" },
    },
    {
      period: "2012.04",
      title: { en: "Korean Teaching Certificate: Secondary School Teacher (Grade 2), English", ja: "韓国教員資格証 中等学校正教師（2級）英語", ko: "중등학교 정교사(2급) 영어" },
    },
  ],

  /* ---------- 소속 학회 ---------- */
  memberships: [
    { period: "2017.11 – present", title: { en: "The Japan Sociological Society", ja: "日本社会学会", ko: "일본사회학회" } },
    { period: "2017.09 – present", title: { en: "Japan Society of Family Sociology", ja: "日本家族社会学会", ko: "일본가족사회학회" } },
  ],

  /* ---------- 사회 공헌 활동 ---------- */
  outreach: [
    {
      period: "2016.04 – 2024.03",
      title: { en: "Lecturer, “Ryugakusei ga Sensei!” (International Students as Teachers) Educational Program", ja: "「留学生が先生！」教育プログラム 講師", ko: "「유학생이 선생님!」 교육 프로그램 강사" },
      place: "学校法人 上田煌桜学園さくら国際高等学校 東京校 運営 国際理解支援事業部",
    },
  ],
};

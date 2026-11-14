# 홈페이지 관리 안내서

## 폴더 구성

| 파일 | 역할 | 고칠 일 |
|---|---|---|
| `content.js` | **홈페이지의 모든 글과 목록 (영어·일본어·한국어 공통)** | 자주 |
| `images/` | 프로필 사진 | 가끔 |
| `files/` | 이력서·논문 PDF | 가끔 |
| `style.css` | 색·글꼴·배치 | 거의 없음 |
| `index.html` | 영어 페이지의 틀 | 없음 |
| `ja.html` | 일본어 페이지의 틀 | 없음 |
| `ko.html` | 한국어 페이지의 틀 | 없음 |
| `script.js` | 화면을 그리는 프로그램 | 없음 |

세 언어의 페이지는 모두 같은 `content.js` 를 읽습니다. 논문 하나를 추가하면 세 페이지에 함께 나옵니다.

## 내용 고치기

1. `content.js` 를 텍스트 편집기로 엽니다. (맥 기본 "텍스트 편집기"도 되지만, 무료 프로그램인 Visual Studio Code를 쓰면 실수한 곳을 빨간 줄로 알려 줘서 편합니다.)
2. 따옴표 `" "` 안의 글자만 바꾸고 저장합니다.
3. `index.html`(영어), `ja.html`(일본어), `ko.html`(한국어) 중 하나를 더블클릭해 브라우저에서 열고 새로고침하면 결과가 보입니다.

### 세 언어로 쓰는 방법

```js
title: { en: "English title", ja: "日本語のタイトル", ko: "한국어 제목" },   // 페이지마다 다르게
title: "Same on all pages",                                                 // 세 페이지에 똑같이
```

일부 언어만 적어도 됩니다. 적지 않은 언어의 페이지에는 적힌 것이 대신 나옵니다(영어 → 일본어 → 한국어 순). 예를 들어 `ko` 를 빼면 한국어 페이지에는 영어가 나옵니다.

### 자주 하는 일

**논문 추가** — `papers: [` 바로 아래에 붙여 넣고 내용을 바꿉니다. `authors` 는 공저일 때만 적습니다.

```js
    {
      date: "2027.03",
      title: { en: "Paper Title", ja: "論文タイトル", ko: "논문 제목" },
      authors: "Taeeun Kim, Coauthor Name",
      venue: { en: "Journal Name, 1(2), 10–20", ja: "雑誌名, 1(2), 10–20", ko: "학술지명, 1(2), 10–20" },
      links: [
        { label: "DOI", url: "https://doi.org/..." },
      ],
    },
```

**발표 추가** — `presentations: [` 바로 아래에 넣습니다. 초청 발표면 `invited: true,` 줄을 더합니다.

```js
    {
      date: "2027.09",
      title: "発表タイトル",
      venue: { en: "Conference Name", ja: "学会名", ko: "학회명" },
    },
```

**강의·경력 추가** — `teaching: [` 또는 `experience: [` 아래에 한 줄을 넣습니다. 기간에 `present` 라고 쓰면 Present / 現在 / 현재 로 나옵니다.

```js
    { period: "2027.04 – present", title: { en: "Course Name", ja: "科目名", ko: "과목명" }, place: { en: "University", ja: "大学名", ko: "대학명" } },
```

**소식 추가** — `news: [` 아래에 넣으면 "News / お知らせ / 소식" 섹션이 생깁니다.

```js
    { date: "2027.01", text: { en: "News in English.", ja: "日本語のお知らせ。", ko: "한국어 소식." } },
```

**이메일 공개** — `email: "",` 의 따옴표 안에 주소를 적습니다.

**사진 넣기** — 사진 파일을 `images` 폴더에 넣고 이름을 `profile.jpg` 로 합니다. (정사각형에 가까운 사진이 좋습니다.)

**이력서 올리기** — PDF를 `files` 폴더에 넣고 `cv: "files/cv.pdf",` 로 적습니다.

**섹션 숨기기** — 목록을 비웁니다. 예: `teaching: [],`

**섹션 제목 바꾸기** — `script.js` 맨 위 `LABELS` 안의 낱말을 고칩니다. (예: `papers: "Publications"`)

### 화면이 하얗게 나올 때

대부분 `content.js` 에서 쉼표나 따옴표, 괄호가 하나 빠진 것입니다. 마지막으로 고친 줄을 확인하세요.

- 항목 사이에는 쉼표가 있어야 합니다: `{ ... },`
- 글 안에 큰따옴표를 쓰려면 앞에 역슬래시를 붙입니다: `"그는 \"안녕\"이라고 말했다"`

## 인터넷에 올리기 (GitHub Pages, 무료)

1. <https://github.com> 에서 계정을 만듭니다. 이때 정하는 **사용자 이름**이 주소가 됩니다.
2. 오른쪽 위 `+` → **New repository** 를 누르고, 이름을 `사용자이름.github.io` 로 정확히 적은 뒤 **Public** 으로 만듭니다.
3. 만들어진 화면에서 **uploading an existing file** 을 누르고, 이 폴더 안의 파일과 폴더를 모두 끌어다 놓은 뒤 **Commit changes** 를 누릅니다.
4. 1~2분 뒤 `https://사용자이름.github.io` 로 접속하면 영어 페이지가, `https://사용자이름.github.io/ja.html` 로 접속하면 일본어 페이지가, `/ko.html` 로 접속하면 한국어 페이지가 보입니다.

### 올린 뒤에 내용을 고칠 때

- 가장 쉬운 방법: GitHub 저장소에서 `content.js` 를 누르고 연필 아이콘(Edit)을 눌러 그 자리에서 고친 뒤 **Commit changes**.
- 또는 내 컴퓨터에서 고친 파일을 **Add file → Upload files** 로 다시 올리면 덮어씁니다.

### 나만의 주소(도메인)를 쓰고 싶을 때 (선택, 연 1~2만 원)

도메인 판매 업체에서 주소를 산 뒤, GitHub 저장소의 **Settings → Pages → Custom domain** 에 입력하고 업체 쪽 DNS 설정에 GitHub이 안내하는 값을 넣습니다.

## 검색에 잘 나오게 하려면

- Google Scholar, ORCID, 소속 기관의 프로필에 홈페이지 주소를 적습니다. 검색 엔진이 홈페이지를 찾는 가장 빠른 길입니다.
- researchmap 의 URL 칸에도 홈페이지 주소를 적어 둡니다.

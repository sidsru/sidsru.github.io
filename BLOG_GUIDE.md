# Sidsru Blog Guide

이 저장소는 Jekyll + Chirpy 기반 블로그입니다.

- `master`: 블로그 소스 관리 브랜치
- GitHub Actions: `master`에 올라온 소스를 자동으로 빌드하고 GitHub Pages에 배포합니다.

현재 권장 배포 방식은 GitHub Actions입니다. 글, 이미지, 설정을 수정한 뒤 `master`에 push하면 Actions가 자동으로 `npm run build`와 `jekyll build`를 실행하고 Pages에 배포합니다.

## 폴더 구조와 사용처

처음에는 아래 폴더들만 이해해도 블로그 운영에는 충분합니다.

### `_posts`

블로그 글을 넣는 폴더입니다.

Jekyll은 이 폴더에 있는 Markdown 파일을 읽어서 개별 포스트 페이지와 홈 목록을 자동으로 만듭니다.

파일 이름은 반드시 아래 형식으로 작성합니다.

```text
YYYY-MM-DD-title.md
```

예시:

```text
_posts/2026-05-14-github-blog-with-codex.md
```

글 상단에는 front matter를 넣습니다.

```markdown
---
title: "깃허브 블로그 만들기 with.Codex"
date: 2026-05-14 16:34:00 +0900
categories: [Blog, Test]
tags: [test, jekyll, github-pages]
thumbnail:
  path: /assets/img/posts/2026-05-14-github-blog-with-codex/Blog.png
  alt: "깃허브 블로그 만들기"
---

본문을 작성합니다.
```

이 파일은 빌드 후 아래 주소처럼 공개됩니다.

```text
https://sidsru.github.io/posts/github-blog-with-codex/
```

### `_tabs`

사이드바와 상단 내비게이션에 표시되는 주요 탭 페이지를 담당합니다.

현재 파일:

- `_tabs/about.md`: About 페이지입니다. 자기소개, 블로그 소개, 연락처 등을 직접 작성합니다.
- `_tabs/archives.md`: 글을 날짜순 아카이브로 보여주는 페이지입니다.
- `_tabs/categories.md`: 글의 `categories` 값을 기준으로 카테고리 목록을 보여주는 페이지입니다.
- `_tabs/tags.md`: 글의 `tags` 값을 기준으로 태그 목록을 보여주는 페이지입니다.

각 파일 상단의 front matter가 탭의 아이콘과 순서를 정합니다.

```markdown
---
layout: categories
icon: fas fa-stream
order: 1
---
```

사용 방식:

- About 내용을 바꾸고 싶으면 `_tabs/about.md` 본문을 수정합니다.
- 카테고리, 태그, 아카이브는 보통 직접 내용을 쓰지 않습니다.
- 탭 순서를 바꾸고 싶으면 `order` 값을 수정합니다.
- 아이콘을 바꾸고 싶으면 `icon` 값을 Font Awesome 클래스명으로 바꿉니다.

예시로 About 페이지를 꾸미려면:

```markdown
---
icon: fas fa-info-circle
order: 4
---

# About

안녕하세요. 이 블로그에는 개발 공부 기록과 프로젝트 메모를 정리합니다.

## 관심사

- Web
- GitHub Pages
- Jekyll
```

주의: 사용자가 말한 `_taps`가 아니라 실제 폴더 이름은 `_tabs`입니다.

### `_config.yml`

블로그 전체 설정 파일입니다.

주로 수정하는 값:

```yaml
title:
tagline:
description:
url:
github:
twitter:
social:
avatar:
theme_mode:
paginate:
```

예시:

```yaml
title: Sidsru
tagline: 개발 기록과 메모
description: 개발 공부, 프로젝트 기록, GitHub Pages 운영 메모를 정리하는 블로그입니다.
```

주의: `_config.yml`을 수정하면 로컬 서버를 재시작해야 반영됩니다.

### `assets`

이미지, 파비콘, CSS 진입점, 검색/PWA용 데이터 파일을 담는 폴더입니다.

자주 쓰는 위치:

- `assets/img`: 이미지 저장
- `assets/img/favicons`: 파비콘과 웹앱 아이콘
- `assets/css/jekyll-theme-chirpy.scss`: Chirpy CSS 진입점
- `assets/js/data`: 검색, PWA, MathJax 설정 데이터

포스트 이미지 예시:

```text
assets/img/posts/2026-05-14-github-blog-with-codex/screenshot.png
```

Markdown에서 사용:

```markdown
![스크린샷](/assets/img/posts/2026-05-14-github-blog-with-codex/screenshot.png)
```

홈 화면의 글 목록과 링크 공유 미리보기에 보일 썸네일은 글 상단 front matter에서 `thumbnail`로 설정합니다.

```yaml
thumbnail:
  path: /assets/img/posts/2026-05-14-github-blog-with-codex/Blog.png
  alt: "깃허브 블로그 만들기"
```

`thumbnail`은 글 상세 페이지 상단에 큰 이미지로 표시되지 않습니다. 상세 페이지 상단에도 큰 프리뷰 이미지를 보여주고 싶으면 Chirpy 기본값인 `image`를 사용하면 됩니다.

### `_data`

사이트에서 반복해서 쓰는 설정 데이터를 담습니다.

현재 중요한 파일:

- `_data/contact.yml`: 사이드바 하단의 GitHub, email, RSS 같은 연락처 아이콘 설정
- `_data/authors.yml`: 글 작성자 정보를 여러 명 관리할 때 사용
- `_data/share.yml`: 공유 버튼 설정
- `_data/locales/ko-KR.yml`: 한국어 UI 문구
- `_data/locales/en.yml`: 영어 UI 문구
- `_data/origin/cors.yml`: 외부 CDN 자산 주소 설정

예시로 연락처 아이콘을 추가하고 싶으면 `_data/contact.yml`을 수정합니다.

```yaml
- type: linkedin
  icon: "fab fa-linkedin"
  url: "https://www.linkedin.com/in/username"
```

### `_layouts`

페이지의 큰 HTML 구조를 담당합니다.

예시:

- `_layouts/home.html`: 홈 화면 구조
- `_layouts/post.html`: 포스트 상세 페이지 구조
- `_layouts/page.html`: 일반 페이지 구조
- `_layouts/archives.html`: 아카이브 페이지 구조
- `_layouts/categories.html`: 카테고리 페이지 구조

보통 글 작성이나 기본 운영에서는 수정하지 않아도 됩니다. 페이지 구조 자체를 바꾸고 싶을 때만 만집니다.

### `_includes`

여러 layout에서 재사용하는 작은 HTML 조각입니다.

예시:

- `_includes/sidebar.html`: 왼쪽 사이드바
- `_includes/topbar.html`: 상단 바
- `_includes/footer.html`: 하단 푸터
- `_includes/comment.html`: 댓글 영역
- `_includes/trending-tags.html`: 인기 태그 패널
- `_includes/related-posts.html`: 관련 글 영역

예를 들어 사이드바에 표시되는 구조를 바꾸고 싶으면 `_includes/sidebar.html`을 봅니다.

### `_sass`

스타일을 담당하는 SCSS 파일입니다.

자주 볼 만한 위치:

- `_sass/themes/_light.scss`: 라이트 모드 색상
- `_sass/themes/_dark.scss`: 다크 모드 색상
- `_sass/pages/_home.scss`: 홈 화면 스타일
- `_sass/pages/_post.scss`: 포스트 상세 페이지 스타일
- `_sass/layout/_sidebar.scss`: 사이드바 스타일
- `_sass/layout/_topbar.scss`: 상단 바 스타일

주의: CSS를 수정한 뒤에는 `npm.cmd run build`와 `bundle exec jekyll build`를 다시 실행해야 배포 결과에 반영됩니다.

### `_javascript`

테마에서 사용하는 JavaScript 원본입니다.

예시:

- `_javascript/home.js`: 홈 화면 동작
- `_javascript/post.js`: 포스트 페이지 동작
- `_javascript/theme.js`: 다크/라이트 모드 관련 동작
- `_javascript/modules/components/search-display.js`: 검색 결과 표시

수정 후에는 아래 명령으로 `assets/js/dist` 번들을 다시 만들어야 합니다.

```powershell
npm.cmd run build
```

### `_plugins`

Jekyll 빌드 과정에 개입하는 Ruby 플러그인 폴더입니다.

현재는 `posts-lastmod-hook.rb`가 있고, 글의 마지막 수정일 같은 메타데이터 처리에 사용됩니다. 특별한 이유가 없으면 수정하지 않는 것이 좋습니다.

### 루트 파일

루트에는 사이트 빌드와 저장소 관리를 위한 파일들이 있습니다.

- `index.html`: 홈 페이지 진입 파일입니다. `layout: home`만 지정하고 실제 화면은 `_layouts/home.html`이 만듭니다.
- `Gemfile`: Ruby/Jekyll 의존성 설정
- `package.json`: Node 빌드 명령과 JS/CSS 빌드 의존성
- `purgecss.js`: Bootstrap CSS를 필요한 부분만 남기도록 정리하는 스크립트
- `rollup.config.js`: JavaScript 번들 설정
- `BLOG_GUIDE.md`: 이 블로그 운영 설명서
- `README.md`: 저장소 기본 소개

### 생성되지만 커밋하지 않는 폴더

아래 항목들은 빌드하거나 설치하면 생기지만, 보통 커밋하지 않습니다.

- `_site`: Jekyll 빌드 결과물
- `node_modules`: Node 의존성
- `.jekyll-cache`: Jekyll 캐시
- `assets/js/dist`: JS 빌드 산출물
- `_sass/vendors`: CSS 빌드 산출물
- `Gemfile.lock`, `package-lock.json`: 현재 설정에서는 커밋하지 않도록 관리 중

이 파일들은 `.gitignore`에 포함되어 있습니다.

## 자주 수정하는 위치

### 글 작성

블로그 글은 `_posts` 폴더에 추가합니다.

파일 이름 형식:

```text
YYYY-MM-DD-title.md
```

예시:

```text
_posts/2026-05-14-first-post.md
```

기본 글 템플릿:

```markdown
---
title: "첫 번째 글"
date: 2026-05-14 16:00:00 +0900
categories: [Blog, Note]
tags: [jekyll, github-pages]
thumbnail:
  path: /assets/img/posts/2026-05-14-first-post/thumbnail.png
  alt: "첫 번째 글 썸네일"
---

본문을 여기에 작성합니다.
```

주의:

- `categories`는 보통 1~2단계로 씁니다.
- `tags`는 소문자로 쓰는 편이 좋습니다.
- 파일명 날짜와 front matter의 `date`를 맞추면 관리하기 쉽습니다.

### About 페이지 수정

자기소개 페이지는 `_tabs/about.md`를 수정합니다.

예시:

```markdown
---
icon: fas fa-info-circle
order: 4
---

# About

안녕하세요. 이 블로그에는 공부 기록과 개발 메모를 정리합니다.
```

### 블로그 기본 정보 수정

사이트 제목, 설명, URL, 소셜 정보는 `_config.yml`에서 수정합니다.

자주 보는 항목:

```yaml
title:
tagline:
description:
url:
github:
twitter:
social:
avatar:
```

`_config.yml`을 바꾼 뒤에는 Jekyll 서버를 다시 시작해야 반영됩니다.

### 카테고리, 태그, 아카이브 탭

아래 파일들은 탭 페이지입니다.

- `_tabs/categories.md`
- `_tabs/tags.md`
- `_tabs/archives.md`
- `_tabs/about.md`

보통은 `about.md`만 자주 수정하고, 나머지는 자동 생성되는 목록 페이지로 두면 됩니다.

### 이미지와 첨부 파일

이미지는 `assets/img` 아래에 두는 것을 권장합니다.

예시:

```text
assets/img/posts/2026-05-14-first-post/screenshot.png
```

글에서 사용하는 방법:

```markdown
![스크린샷](/assets/img/posts/2026-05-14-first-post/screenshot.png)
```

썸네일로 사용하는 방법:

```yaml
thumbnail:
  path: /assets/img/posts/2026-05-14-first-post/thumbnail.png
  alt: "첫 번째 글 썸네일"
```

목록에서는 `thumbnail`을 우선 사용하고, 값이 없으면 기존 Chirpy 방식인 `image`를 대신 사용합니다.

### 디자인 수정

스타일은 `_sass` 폴더에 있습니다.

처음에는 아래 파일 정도만 보는 것을 권장합니다.

- `_sass/themes/_light.scss`
- `_sass/themes/_dark.scss`
- `_sass/pages/_home.scss`
- `_sass/pages/_post.scss`

레이아웃 HTML은 `_layouts`, 조각 템플릿은 `_includes`에 있습니다. 구조를 크게 바꿀 때만 수정하세요.

## 로컬에서 확인하기

처음 한 번 의존성 설치:

```powershell
bundle install
npm.cmd install
```

테마 JS/CSS 빌드:

```powershell
npm.cmd run build
```

Jekyll 빌드:

```powershell
bundle exec jekyll build
```

로컬 서버 실행:

```powershell
bundle exec jekyll serve
```

브라우저에서 확인:

```text
http://127.0.0.1:4000
```

## 소스 변경사항을 master에 저장하기

글, 설정, 디자인 등 소스 변경사항은 `master` 브랜치에 커밋합니다.

```powershell
git status
git add _posts _tabs _config.yml assets _sass _includes _layouts
git commit -m "Update blog content"
```

현재 이 저장소는 workflow 파일 때문에 `master` 푸시가 막힐 수 있습니다. `.github/workflows`를 수정하지 않은 일반 글 변경이라면 보통 푸시할 수 있습니다.

```powershell
git push origin master
```

만약 `workflow scope` 오류가 나면 `.github/workflows` 파일 변경이 포함된 것입니다. 그 경우 GitHub 토큰에 `workflow` 권한이 필요하거나, 해당 변경은 빼고 커밋해야 합니다.

## 실제 사이트 배포하기

현재 권장 배포 방식은 GitHub Actions입니다.

1. 변경한 소스 파일을 `master`에 커밋합니다.

```powershell
git status
git add _posts _tabs _config.yml assets _sass _includes _layouts BLOG_GUIDE.md
git commit -m "Update blog content"
```

2. `master`를 GitHub에 push합니다.

```powershell
git push origin master
```

3. GitHub Actions 배포 상태를 확인합니다.

GitHub 저장소에서:

```text
Actions -> Deploy GitHub Pages
```

4. GitHub Pages 설정을 한 번만 확인합니다.

GitHub 저장소에서:

```text
Settings -> Pages -> Build and deployment
Source: GitHub Actions
```

이 설정이 되어 있으면 `_site`를 직접 `gh-pages` 브랜치에 올릴 필요가 없습니다.

## 배포 후 정리

로컬에 생성된 무거운 파일은 커밋하지 않습니다. 필요하면 삭제해도 됩니다.

```powershell
Remove-Item -Recurse -Force node_modules, _site, .jekyll-cache, assets\js\dist, _sass\vendors
Remove-Item -Force package-lock.json, Gemfile.lock
```

이 파일들은 `.gitignore`에 들어가 있으므로 일반적으로 커밋 대상이 아닙니다.

## 현재 주의할 점

GitHub Pages 설정에서 `Source: GitHub Actions`를 선택해야 이 workflow가 실제 배포에 사용됩니다.

`Source: Deploy from a branch` 상태로 남아 있으면 `master`에 push해도 Actions 결과가 Pages에 반영되지 않고, 기존 `gh-pages` 브랜치 내용이 계속 보일 수 있습니다.

새 글을 올린 뒤에는 Actions 탭에서 `Deploy GitHub Pages` workflow가 성공했는지 확인하세요.

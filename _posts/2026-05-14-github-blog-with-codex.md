---
title: "깃허브 블로그 만들기 with.Codex"
date: 2026-05-14 16:34:00 +0900
categories: [Blog]
tags: [jekyll, github-pages]
thumbnail:
  path: /assets/img/posts/2026-05-14-github-blog-with-codex/Blog.png
  alt: "GitHub 블로그 만들기"
---

티스토리에서 블로그를 작성하며 개발을 하던 나는 종종 구글링을 하여 정보를 찾곤하였는데  
그 중 도움을 자주 주던 github.io 깃허브 블로그를 보며 공부하곤 했다.

잘쓰던(?) 티스토리를 버리고 github.io를 사용하기로 한 것은 크게 2가지 이유가 있는데 

1. 뭔가 개발자 같아서 멋짐
2. 구시대적인 UI를 가져서 촌스러운 티스토리에 비해 힙해보임

사실 멋있어 보여서 그냥 하고 싶었다 라고 밖에 설명이 안되지만  
나와 같은 이유로 시작하는 사람이 있을거라 생각해 블로그를 생성했던 과정을 회고하며 포스팅을 해보려한다.

우선 제목에서 부터 알 수 있듯이 이것은 Codex를 사용하며 진행하게 된다.  
사용하고자 하는 사람은 Codex를 다운로드하며 진행하면 좋을 것 같다.  

---

## 테마 선택 
[jekyllthemes](http://jekyllthemes.org/)

위 사이트에서 원하는 테마를 고른다음 

![jekyllthemes](/assets/img/posts/2026-05-14-github-blog-with-codex/jekyllthemes.png)
Homepage를 클릭하면 깃 사이트가 보일텐데  

![jekyll_them_Git](/assets/img/posts/2026-05-14-github-blog-with-codex/jekyll_them_Git.png)
![Fork](/assets/img/posts/2026-05-14-github-blog-with-codex/Fork.png)

포크를 진행하며 레파지토리 이름을 UserName.github.io   
// 여기서 UserName은 본인의 깃허브 프로필 닉네임을 적어야 한다.

---

## Codex로 파일 정리하기
성공적으로 포크에 성공했다면 이제 로컬에 clone을 받은 다음  
![CodexStart](/assets/img/posts/2026-05-14-github-blog-with-codex/CodexStart.png)
Codex와 깃허브의 연동, clone받은 프로젝트를 Codex의 새 프로젝트에 추가  

이후 Codex에 아래와 같은 프롬포트로 실질적으로 필요한 내용만 남기고  
삭제 과정중 역참조가 깨지는 상황을 방지하고자 한다
~~~
프로젝트를 분석 후 블로그로써 사용할수 있도록 만들려고 해  
우선 필요없는 파일을 쳐내고 경량화 작업을 하고싶어  
필요없는 파일을 솎아내고 이유를 설명해줘
~~~

자 이제 블로그의 완성을 기대하며 들어가보면 

![1stProblem](/assets/img/posts/2026-05-14-github-blog-with-codex/1stProblem.png)

전혀 완성이 되어있지 않았다 

이 상황을 Codex에게 전달하여 문제를 파악, 해결을 하고자 한다
- 파악한 문제
    + Jekyll의 결과물이 배포되는 것이 아닌 index.html을 그대로 배포되는 하는 현상

- 문제 해결 방안
    + ".github/workflows/pages-deploy.yml" 생성
    + Actions에서 사용자가 push할때 자동 배포가 되도록 유도


연계된 문제
~~~
! [remote rejected] master -> master 
(refusing to allow an OAuth App to create or update workflow .github/workflows/pages-deploy.yml without workflow scope)
error: failed to push some refs to 'https://github.com/sidsru/sidsru.github.io.git'
~~~

깃 토큰 권한의 문제로 깃에 푸시하는 것에 실패하였다  
여기서 Codex가 문제해결을 우회 하고자 gh-pages로 브랜치를 분리하여 배포를 시도 하였다

- gh-pages와 Github Actions의 차이점
    +gh-pages 
        - 장점 : 수동으로 npm과 jekyll 빌드하여 명확한 구조를 만들 수 있음
        - 단점 : 수동으로 npm과 jekyll 빌드를 업데이트 마다 해주어야함
    +Github Actions
        - 장점 : 자동으로 git이 빌드/배포를 함
        - 단점 : 토큰권환등 초기 설정이 gh-pages의 비해 조금 복잡함

나는 지금 당장 불편해도 나중이 불편한 건 못 참는 성격이라 Github Actions로 가야겠다고 마음먹었다

![GitSetting](/assets/img/posts/2026-05-14-github-blog-with-codex/GitSetting.png)
![GitProfileSetting](/assets/img/posts/2026-05-14-github-blog-with-codex/GitProfileSetting.png)
![Tokens](/assets/img/posts/2026-05-14-github-blog-with-codex/Tokens.png)

위 사진을 따라가다보면 Generate New token 버튼이 있고  
만들어진 토큰의 권한 중 Workflows체크가 되어있는지 확인한 뒤


아래 사진과 같이 폴더 주소입력창에 입력 후
~~~
제어판\모든 제어판 항목\자격 증명 관리자
~~~
![link](/assets/img/posts/2026-05-14-github-blog-with-codex/link.png)

Windows 자격 증명 - 일반 자격 증명에서
git토큰을 제거한다음 cmd, 소스트리 등으로 push를 하여 로그인 창이 뜬다면  
토큰값을 기반으로 다시 로그인을 해줄 경우 문제가 해결이 된다.  

이후 다시 토큰값을 해결하고 Codex에 해당 사실을 전달한 후  
원본을 수정해서 커스텀 할 수 있도록 Codex와 함께 _config.yml 파일을 수정했다

~~~
//수정사항
lang: ko-KR
timezone: Asia/Seoul
title: sidsru
url: "https://sidsru.github.io"
github:
  username: sidsru

twitter:
  username: kGqiopF34daF87s

social:
  name: 
  email: sidsru21131210@gmail.com 
  fediverse_handle: 
  links:
    - https://github.com/sidsru
    - https://x.com/kGqiopF34daF87s
~~~
여기 있는건 필자의 링크이므로 본인의 맞도록 수정해야한다

이후 개설힌 블로그에 찾아가 보면
![Blog](/assets/img/posts/2026-05-14-github-blog-with-codex/Blog.png)

성공적으로 블로그가 개설이 된것을 확인할 수 있다.
또한 중간 중간 잔버그가 있었지만 Codex를 사용해서 빠르고 손쉽게 문제를 해결할 수 있었다  

이 과정에서 불편한 점이라고 한다면 마크다운 문법을 습득해야 한다는 점이지만,
README와 같은 것을 생각하면 알아서 나쁠건 없을 것 같다

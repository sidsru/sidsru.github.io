---
title: "깃허브 블로그 만들기 with.Codex"
date: 2026-05-14 16:34:00 +0900
categories: [Blog]
tags: [jekyll, github-pages]
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

## 테마 선택 
[jekyllthemes](http://jekyllthemes.org/)

위 사이트에서 원하는 테마를 고른다음 

![jekyllthemes](/assets/img/posts/2026-05-14-github-blog-with-codex/jekyllthemes.png)
Homepage를 클릭하면 깃 사이트가 보일텐데  

![jekyll_them_Git](/assets/img/posts/2026-05-14-github-blog-with-codex/jekyll_them_Git.png)
![Fork](/assets/img/posts/2026-05-14-github-blog-with-codex/Fork.png)

포크를 진행하며 레파지토리 이름을 UserName.github.io   
// 여기서 UserName은 본인의 깃허브 프로필 닉네임을 적어야 한다.

## Codex로 파일 정리하기기
성공적으로 포크에 성공했다면 이제 로컬에 clone을 받은 다음  
![CodexStart](/assets/img/posts/2026-05-14-github-blog-with-codex/CodexStart.png)
Codex와 깃허브의 연동, clone받은 프로젝트를 Codex의 새 프로젝트에 추가  

이후 Codex에 아래와 같은 프롬포트로 실질적으로 필요한 내용만 남기고  
삭제 과정중 역참조가 깨지는 상황을 방지하고자자 한다
~~~
프로젝트를 분석 후 블로그로써 사용할수 있도록 만들려고 해  
우선 필요없는 파일을 쳐내고 경량화 작업을 하고싶어  
필요없는 파일을 솎아내고 이유를 설명해줘
~~~

자 이제 블로그의 완성을 기대하며 들어가보면 

![1stProblem](/assets/img/posts/2026-05-14-github-blog-with-codex/1stProblem.png)

전혀 완성이 되어있지 않았다 

이 상황을 Codex에게 전달하여 문제를 파악, 해결결
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

깃 토큰 권한의 문제로 
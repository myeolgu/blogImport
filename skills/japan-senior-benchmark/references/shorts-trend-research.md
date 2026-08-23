# YouTube Shorts 트렌드 조사 기준

## 수집할 공개 정보

- 검색어와 국가/언어
- 영상 URL 또는 video ID
- 제목, 채널명, 게시일
- 조회수, 좋아요, 댓글 수가 공개된 경우의 값
- 영상에서 반복되는 문제 상황과 질문
- 조사 시각

YouTube Data API의 `search.list`는 키워드·지역 코드로 영상을 검색하고 기본 제목, 설명, 채널, 게시일 등의 snippet을 제공한다. 추가 영상 통계가 필요하면 공식 `videos.list`를 사용한다. API 사용량과 약관을 확인한다.

공식 문서:

- Search: https://developers.google.com/youtube/v3/docs/search/list
- API 개요: https://developers.google.com/youtube/v3/getting-started
- Shorts 트렌드 탐색 및 콘텐츠 공백: https://support.google.com/youtube/answer/11962757
- YouTube Studio Shorts 분석: https://support.google.com/youtube/answer/12942217

## 핫한 주제 판정

다음 신호가 2개 이상 겹칠 때 ‘관찰할 만한 주제’로 분류한다.

1. 최근 게시 영상 여러 개에서 같은 질문이나 상황이 반복된다.
2. 오래된 채널뿐 아니라 작은 채널에서도 비슷한 주제가 나타난다.
3. 게시 후 경과일을 고려해 조회 반응이 높다.
4. 댓글에 “방법”, “비용”, “어디서”, “우리 지역” 같은 실행 질문이 반복된다.
5. 한국의 복지·생활·디지털 도움 콘텐츠로 변환할 수 있다.

## 결과 보고 형식

`주제 | 국가/언어 | 근거 영상 3개 이상 | 반복 질문 | 한국 독자용 글 제목 3개 | 주의사항`

영상의 내용을 사실 출처로 사용하지 않는다. 건강·복지·정책 내용은 한국의 공식 기관 자료로 다시 확인한다. 유행 영상의 영상 파일, 음원, 자막, 썸네일을 복사·재게시하지 않고 아이디어 수준으로만 활용한다.

---
name: ai-tool-research
description: ToolScout에 등록할 글로벌 AI 도구를 조사하고 최신 가격, 기능, 대상 사용자, 공식 링크를 데이터 구조에 맞게 정리할 때 사용한다.
---

# AI 도구 조사

1. 크리에이터의 실제 사용 목적을 먼저 정한다: video, voice, design, writing, marketing 등.
2. 공식 사이트에서 기능과 가격을 확인하고 조사일을 기록한다.
3. 독립적인 리뷰·사용자 반응을 보조 근거로 확인한다.
4. `slug`, `name`, `category`, `tagline`, `description`, `bestFor`, `price`, `rating`, `url`, `pros`, `cons` 필드를 채운다.
5. 확인하지 못한 가격·평점은 추정하지 말고 미확인으로 표시한다.

ToolScout의 현재 데이터 스키마는 `app/tools.ts`를 기준으로 한다. 새 도구는 기존 카테고리와 중복 여부를 확인한 뒤 추가한다.


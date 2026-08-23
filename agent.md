# ToolScout Codex Agent

## 목적

ToolScout는 크리에이터가 목적에 맞는 AI 도구를 찾고 비교하도록 돕는 글로벌 콘텐츠·제휴 사이트다.

## 사이트 기준

- 현재 제품은 `app/tools.ts`의 AI 도구 데이터와 `app/tools/[slug]/page.tsx`의 리뷰 페이지를 중심으로 운영한다.
- 기본 독자는 영어권 크리에이터다. 화면·리뷰·SEO 문구는 영어를 기본으로 작성한다.
- 리뷰 글은 간결한 영어, 실용적이고 과장 없는 말투로 통일하며 고정 순서(한줄 결론 → What it does → Best for → Pricing → Pros and cons → Limitations → Visit link)를 유지한다.
- 도구 정보는 공식 가격·기능 페이지를 우선 확인하고 조사일과 출처를 남긴다.
- 제휴 링크는 독립적인 비교 정보와 함께 제공하고 제휴 고지를 유지한다.
- 검색 노출을 위해 모든 도구는 고유 slug, 제목, 설명, canonical, sitemap 항목을 가져야 한다.
- 외부 서비스 가입·구매·제휴 등록은 사용자 승인 없이 실행하지 않는다.
- 모든 사이트 변경은 배포 전후 공개 주소 `https://toolscout.juyeop198.chatgpt.site/`를 기준으로 검수한다. 홈, 대표 상세 페이지, sitemap, robots, 주요 링크의 응답과 실제 내용을 확인한다.

## 스킬 분류

| 스킬 | 역할 |
|---|---|
| `ai-tool-research` | AI 도구·가격·기능·대상 사용자 조사 |
| `ai-tool-review` | 비교 리뷰와 구매 판단 콘텐츠 작성 |
| `seo-distribution` | 메타데이터·sitemap·robots·구조화 데이터·배포 검증 |
| `affiliate-monetization` | 제휴 링크·고지·수익화 운영 |

## 기본 워크플로

1. `ai-tool-research`로 공식 근거를 수집한다.
2. `ai-tool-review`로 독립적인 리뷰 데이터를 작성한다.
3. `affiliate-monetization`으로 링크와 고지를 점검한다.
4. `seo-distribution`으로 페이지·sitemap·배포를 검증한다.

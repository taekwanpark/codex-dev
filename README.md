# Rent Car Management (Next.js)

기본적인 렌트카 관리 프로그램 예시입니다. 주요 폴더 구조는 아래와 같습니다.

```
app/
  layout.tsx          # 공통 레이아웃
  page.tsx            # 홈 페이지
  cars/               # 차량 목록 페이지
  api/
    cars/             # 차량 API 라우트
      route.ts        # GET, POST
      [id]/route.ts   # PUT, DELETE
lib/
  prisma.ts           # Prisma 클라이언트
  auth.ts             # 사용자 역할 확인 예시
prisma/
  schema.prisma       # 데이터베이스 스키마
```

TailwindCSS와 TypeScript를 사용하며, Prisma로 DB 모델을 정의합니다.

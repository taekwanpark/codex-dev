# Rent Car Management (Next.js)

기본적인 렌트카 관리 프로그램 예시입니다. 주요 폴더 구조는 아래와 같습니다.

```
app/
  layout.tsx          # 공통 레이아웃 + 네비게이션
  page.tsx            # 홈 페이지
  cars/               # 차량 목록 페이지
  components/
    Navbar.tsx        # 상단 네비게이션 바
  api/
    cars/             # 차량 API 라우트
      route.ts        # GET, POST
      [id]/route.ts   # PUT, DELETE
lib/
  prisma.ts           # Prisma 클라이언트
  auth.ts             # 사용자 역할 확인 예시
prisma/
  schema.prisma       # 데이터베이스 스키마
  seed.ts             # 더미 데이터 생성 스크립트
```

TailwindCSS와 TypeScript를 사용하며, Prisma로 DB 모델을 정의합니다. 초기 테스트용 더미 데이터를 넣으려면 아래 명령을 실행합니다.

```bash
npx ts-node prisma/seed.ts
```

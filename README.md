# Portfolio Project

React, TypeScript, Chakra UI를 사용한 포트폴리오 웹사이트입니다.

## 🚀 시작하기

### 필수 요구사항

- Node.js 18+
- npm 또는 yarn

### 설치 및 실행

```bash
# 의존성 설치
npm install

# 개발 서버 실행
npm **start**

# 프로덕션 빌드
npm run build
```

## 🔥 Firebase 배포 설정

### 1. Firebase 프로젝트 생성

1. [Firebase Console](https://console.firebase.google.com/)에서 새 프로젝트 생성
2. 웹 앱 추가
3. 프로젝트 설정에서 설정 정보 복사

### 2. 환경변수 설정

프로젝트 루트에 `.env` 파일을 생성하고 다음 내용을 추가:

```env
REACT_APP_FIREBASE_API_KEY=your_api_key_here
REACT_APP_FIREBASE_AUTH_DOMAIN=your_project_id.firebaseapp.com
REACT_APP_FIREBASE_PROJECT_ID=your_project_id
REACT_APP_FIREBASE_STORAGE_BUCKET=your_project_id.appspot.com
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
REACT_APP_FIREBASE_APP_ID=your_app_id
REACT_APP_FIREBASE_MEASUREMENT_ID=your_measurement_id
```

### 3. Firebase CLI 설정

```bash
# Firebase CLI 설치 (이미 설치됨)
npm install -g firebase-tools

# Firebase 로그인
firebase login

# 프로젝트 초기화
firebase init hosting

# 배포
firebase deploy
```

## 📁 프로젝트 구조

```
src/
├── components/          # 재사용 가능한 컴포넌트
│   ├── Header.tsx      # 네비게이션 헤더
│   ├── Hero.tsx        # 메인 히어로 섹션
│   └── About.tsx       # About 섹션
├── theme/              # Chakra UI 테마 설정
│   └── index.ts
├── firebase/           # Firebase 설정
│   └── config.ts
└── App.tsx             # 메인 앱 컴포넌트
```

## 🎨 사용된 기술

- **Frontend**: React 18, TypeScript
- **UI Framework**: Chakra UI
- **Styling**: Emotion (CSS-in-JS)
- **Icons**: React Icons
- **Backend**: Firebase (Hosting, Firestore, Storage)
- **Build Tool**: Create React App

## 🌐 도메인 설정

### 기본 도메인 (무료)

- `your-project-id.web.app`
- `your-project-id.firebaseapp.com`

### 커스텀 도메인 (선택사항)

1. 도메인 구매 (예: GoDaddy, Namecheap)
2. Firebase Console에서 커스텀 도메인 추가
3. DNS 설정 업데이트

## 📱 반응형 디자인

- 모바일 우선 접근법
- Chakra UI의 반응형 유틸리티 활용
- 모든 디바이스에서 최적화된 경험 제공

## 🚀 배포 후 확인사항

1. 웹사이트가 정상적으로 로드되는지 확인
2. 모든 링크와 버튼이 작동하는지 테스트
3. 모바일과 데스크톱에서 반응형 동작 확인
4. 성능 최적화 (Lighthouse 점수 확인)

## 📝 커스터마이징

- `src/theme/index.ts`에서 색상과 폰트 변경
- `src/components/`에서 컴포넌트 수정
- `public/` 폴더에 이미지와 아이콘 추가

## 🤝 기여

프로젝트 개선을 위한 제안이나 버그 리포트는 언제든 환영합니다!

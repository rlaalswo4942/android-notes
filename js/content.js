/* 학습노트 - 사이트 설정 + 보강 단원
 * 새 과목 사이트를 만들 때 바꾸는 곳은 이 파일과 content/ 폴더 3개 파일뿐 (나머지 js/css 는 공용 엔진)
 *   content/textbook.md    교재 원고 (마크다운, 아래 SITE.book 규칙으로 단원·섹션 자동 분리)
 *   content/questions.json 연습문제 (없으면 { "notice": "", "questions": [] } — 연습문제 메뉴가 자동으로 숨음)
 *   content/sources.json   출처 목록 (없으면 { "sources": [] })
 */
window.SITE = {
  title: "안드로이드 학습노트",                       // 홈 큰 제목 · 브라우저 탭 · 백업 파일 이름
  icon: "🤖",                             // 탭 아이콘(favicon)
  eyebrow: "안드로이드 · Kotlin + Jetpack Compose",              // 홈 제목 위 작은 글씨 (빈 문자열이면 숨김)
  sub: "교재 「안드로이드 ver 0.5」 0~10장 — 코드 정리 · 연습문제 풀이 · 코드 암기/응용 문제",                        // 홈 제목 아래 설명
  notice: "단원마다 <b>시험 대비: 빈칸 채우기</b>와 <b>교재 연습문제 풀이</b>가 있습니다. 연습문제 메뉴의 <b>[코드 암기]</b>는 핵심 코드 빈칸, <b>응용</b>은 코드 결과·수정 문제입니다.",                             // 홈 상단 안내 상자 (HTML 가능, 빈 문자열이면 숨김)
  key: "android-compose",                      // ★ 저장 키 — 사이트마다 반드시 다르게 (같은 브라우저·같은 동기화 서버에서 기록이 섞이지 않음)
  syncApi: "https://ai-hackathon-sync.vercel.app/api/state", // 실시간 동기화 API (rlaalswo4942.github.io 에서 열면 그대로 사용 가능, 빈 문자열이면 동기화 메뉴만 안 됨)
  unit: "", unitPrefix: "", unitEn: "UNIT",
  book: {                                 // textbook.md 해석 규칙 (정규식 문자열)
    start: "^시작하기",                    // '# 시작하기…' 블록 → START 단원 (섹션 = ##)
    startDesc: "읽는 법 · 전체 지도",
    map: "## 전체 지도",                   // START 안의 이 제목 아래 표 → 단원 카드 설명(mapDesc 열)·난이도(mapLevel 열)
    mapDesc: "첫 목표", mapLevel: "난이도",
    dict: "^용어 사전",                    // '# 용어 사전' 표 → 사전 페이지 (표 열 이름 그대로 표시)
    goals: "오늘의 목표",                  // '### 오늘의 목표' 목록 → 단원 끝 자가점검
    reviewTitle: "한눈에 복습", reviewEn: "전체 정리", reviewDesc: "의존성·매니페스트·헷갈리는 짝·확인 질문"
  },
  labels: {
    book: "U00 – U10",                    // 홈 '교재' 제목 옆 작은 글씨
    extraGroup: "보강 자료", extra: "",
    dictTitle: "용어 사전",
    sources: "출처가 있다는 것은 개념의 근거라는 뜻입니다.",
    quizNote: "교재 기반 자체 제작 문제", scoreNote: "실제 시험 점수와 무관합니다."
  },
  features: { calc: false },              // true: 혼동행렬 계산기(TP·TN·FP·FN) 메뉴 표시
  resetEpoch: "",                         // 값을 새로 바꾸면 각 기기에서 처음 열 때 기록을 한 번 초기화
  resetKeys: ""                           // "*" = 필기·포스트잇까지 전부, 빈 값 = 진도(읽음·목표·문제·이어하기)만
};

(function () {
  // 라벨: 본문 HTML에 그대로 넣어 쓰는 표시 (교재 md에서는 [공식공지] [기술근거] [가상자료] [교육용 설명]으로 쓰면 자동 변환)
  const OFF = '<span class="lb off">공식공지</span>', TECH = '<span class="lb tech">기술근거</span>', ADD = '<span class="lb add">보강</span>';

  // 교재 밖에서 추가한 자료의 출처 (교재 S번호와 겹치지 않게 R번호)
  window.RESEARCH_SOURCES = {};

  // 보강 단원: 교재 md와 별도로 HTML로 직접 쓰는 단원 (없으면 [] — 사이드바·홈의 '보강 자료'가 자동으로 숨음)
  // { id(저장 키 — 바꾸지 말 것), tag, title, en, desc, goals, sections: [{ id, t, h(HTML), tip(핵심 포인트), src(출처 ID 배열) }] }
  window.EXTRA = [];
})();

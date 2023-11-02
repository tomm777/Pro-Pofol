# 프로폴리오 리뷰 사이트 Pro-포폴입니다.

![image](https://github.com/tomm777/Pro-Pofol-client/assets/95726595/bdb821ff-159c-49ef-8f8b-d339dee02f6a)


# 페르소나

![image](https://github.com/tomm777/Pro-Pofol-client/assets/95726595/59ee8a75-870f-49a2-bd74-c0fac42a949f)


# URL

프로젝트 배포 주소 : <a href=http://pofol.site target=_blank>http://pofol.site</a>
</br>
백엔드 서버 주소 :
<a href=https://github.com/tomm777/Pro-Pofol-server target=_blank>https://github.com/tomm777/Pro-Pofol-server</a>

<!-- # TODO ADMIN 계정 -->

# 발표자료

<a href='https://drive.google.com/file/d/1SEc3iQ-Yy6U4iyh6v5Z5cnuCYvnc3HJ9/view?usp=drive_link' target=_blank>https://drive.google.com/file/d/1SEc3iQ-Yy6U4iyh6v5Z5cnuCYvnc3HJ9/view?usp=drive_link</a>

# 주요 기능 소개

# 🏘️ 홈 화면

<ul>
    <li>네이버 로그인 · 로그아웃</li>
    <li>스터디, 프로젝트 최신글 표시</li>
    <li>코칭 횟수를 기준으로 한 인기있는 멘토 소개</li>
    <li>(로그인시) 유저 직무에 맞는 멘토 추천</li>
    <li>멘토 신청 결과, 본인이 작성한 게시글 댓글 등 알림 기능</li>
</ul>

### 👨‍🏫 멘토 전환신청

<ul>
    <li>일반 유저는 멘토 전환 신청을 통해 멘토가 될 수 있습니다.</li>
    <li>재직회사, 경력, 인증 할 수 있는 이미지를 업로드 후 관리자의 승인을 기다립니다.</li>
</ul>

### 📝 포트폴리오 리뷰

<ul>
    <li>인기 있는 멘토 목록</li>
    <li>전체, 인기별, 카테고리별 멘토 목록</li>
    <li>멘토 목록 무한 스크롤 기능</li>
    <li>(멘토일 경우) 포트폴리오 게시글 작성</li>
    <li>(멘토일 경우) 본인이 쓴 게시글 수정, 삭제</li>
    <li>멘토에게 리뷰 신청시 제목, 내용, 이메일주소, 포트폴리오 주소 작성 </li>
    <li>포트폴리오 리뷰 후기 목록</li>
</ul>

### 📒 스터디 / 프로젝트

<ul>
    <li>스터디 · 프로젝트 추천 목록</li>
    <li>(로그인 했을 경우)본인이 선택한 직무에 맞는 스터디 · 프로젝트 추천</li>
    <li>전체, 카테고리별 스터디 · 프로젝트 목록</li>
    <li>스터디 · 프로젝트 목록 무한 스크롤 기능</li>
    <li>스터디 · 프로젝트 글쓰기</li>
    <li>스터디 · 프로젝트 댓글 작성 및 목록 페이지네이션</li>
    <li>스터디 · 프로젝트 댓글 수정, 삭제</li>
</ul>

</br>

# 🗄️ 마이페이지

### 공통

<ul>
    <li>내 정보 관리 - 프로필 사진, 닉네임, 직무 변경</li>
    <li>회원 탈퇴</li>
    <li>스터디 · 프로젝트 글 작성 내역 관리</li>
</ul>

### 멘토

<ul>
    <li>멘토링 신청 받은 내역</li>
    <li>신청 수락, 거절, 첨삭내역</li>
    <li>멘토링 작성 내역 관리</li>
    <li>스터디 · 프로젝트 글 작성 내역 관리</li>
</ul>
</br>

# ⚙️ 관리자 페이지

<ul>
    <li>유저 관리 - 유저 목록 및 삭제기능</li>
    <li>유저 멘토 신청 관리 - 승인, 거절</li>
    <li>카테고리 관리 - 카테고리 수정, 삭제, 추가</li>
    <li>스터디 · 프로젝트 관리 - 전체, 스터디, 프로젝트 별 목록 및 삭제기능</li>
    <li>멘토링 글 관리 - 멘토링 글 목록 및 삭제기능</li>
</ul>

### 공통

<ul>
    <li>페이지네이션 구현</li>
</ul>
</br>

<!-- # 🛠️ 페이지 기능 상세

### 🔐 계정
<ul>
    <li>Recoil을 사용해 전역으로 유저 정보를 관리</li>
    <li>유저 role에 따른 보여지는 요소를 구분</li>
</ul>

### 🖼️ 이미지

<li>Amazon S3 서버에 이미지 업로드</li> -->

### 📂 폴더 구조

<details>
<summary>폴더 구조</summary>
<div markdown="1">
📦src
 ┣ 📂components
 ┃ ┣ 📂@common
 ┃ ┃ ┣ 📂ApplyModal
 ┃ ┃ ┃ ┣ 📜index.js
 ┃ ┃ ┃ ┗ 📜index.styles.js
 ┃ ┃ ┣ 📂Button
 ┃ ┃ ┃ ┣ 📜index.js
 ┃ ┃ ┃ ┗ 📜index.styles.js
 ┃ ┃ ┣ 📂Card
 ┃ ┃ ┃ ┣ 📜index.js
 ┃ ┃ ┃ ┗ 📜index.styles.js
 ┃ ┃ ┣ 📂Chip
 ┃ ┃ ┃ ┣ 📜index.js
 ┃ ┃ ┃ ┗ 📜index.styles.js
 ┃ ┃ ┣ 📂EmptyMessage
 ┃ ┃ ┃ ┣ 📜index.js
 ┃ ┃ ┃ ┗ 📜index.styles.js
 ┃ ┃ ┣ 📂Error
 ┃ ┃ ┃ ┣ 📜index.js
 ┃ ┃ ┃ ┗ 📜index.styles.js
 ┃ ┃ ┣ 📂Input
 ┃ ┃ ┃ ┣ 📜index.js
 ┃ ┃ ┃ ┗ 📜index.styles.js
 ┃ ┃ ┣ 📂Layout
 ┃ ┃ ┃ ┣ 📂Footer
 ┃ ┃ ┃ ┃ ┣ 📜index.js
 ┃ ┃ ┃ ┃ ┗ 📜index.styles.js
 ┃ ┃ ┃ ┣ 📂Header
 ┃ ┃ ┃ ┃ ┣ 📜index.js
 ┃ ┃ ┃ ┃ ┗ 📜index.styles.js
 ┃ ┃ ┃ ┗ 📜index.js
 ┃ ┃ ┣ 📂Line
 ┃ ┃ ┃ ┣ 📜index.js
 ┃ ┃ ┃ ┗ 📜index.styles.js
 ┃ ┃ ┣ 📂Loading
 ┃ ┃ ┃ ┣ 📜index.js
 ┃ ┃ ┃ ┣ 📜index.styles.js
 ┃ ┃ ┃ ┗ 📜Loading.js
 ┃ ┃ ┣ 📂Pagination
 ┃ ┃ ┃ ┣ 📜index.js
 ┃ ┃ ┃ ┗ 📜index.styles.js
 ┃ ┃ ┣ 📂Position
 ┃ ┃ ┃ ┗ 📜index.js
 ┃ ┃ ┣ 📂Review
 ┃ ┃ ┃ ┣ 📜index.js
 ┃ ┃ ┃ ┗ 📜index.styles.js
 ┃ ┃ ┣ 📂ScrollToTop
 ┃ ┃ ┃ ┣ 📜index.js
 ┃ ┃ ┃ ┗ 📜index.styles.js
 ┃ ┃ ┣ 📂Select
 ┃ ┃ ┃ ┣ 📜index.js
 ┃ ┃ ┃ ┗ 📜index.styles.js
 ┃ ┃ ┣ 📂SelectWithDefault
 ┃ ┃ ┃ ┣ 📜index.js
 ┃ ┃ ┃ ┗ 📜index.styles.js
 ┃ ┃ ┣ 📂Seo
 ┃ ┃ ┃ ┗ 📜Seo.js
 ┃ ┃ ┣ 📂Slider
 ┃ ┃ ┃ ┣ 📜index.js
 ┃ ┃ ┃ ┗ 📜index.styles.js
 ┃ ┃ ┣ 📂StudyInfoCard
 ┃ ┃ ┃ ┣ 📜index.js
 ┃ ┃ ┃ ┗ 📜index.styles.js
 ┃ ┃ ┗ 📂Textarea
 ┃ ┃ ┃ ┣ 📜index.js
 ┃ ┃ ┃ ┗ 📜index.styles.js
 ┃ ┗ 📂pages
 ┃ ┃ ┣ 📂Admin
 ┃ ┃ ┃ ┣ 📂Common
 ┃ ┃ ┃ ┃ ┗ 📜Common.styles.js
 ┃ ┃ ┃ ┣ 📂Layout
 ┃ ┃ ┃ ┃ ┗ 📂Sidebar
 ┃ ┃ ┃ ┃ ┃ ┣ 📜index.js
 ┃ ┃ ┃ ┃ ┃ ┗ 📜index.styles.js
 ┃ ┃ ┃ ┣ 📂Searchbar
 ┃ ┃ ┃ ┃ ┣ 📜index.js
 ┃ ┃ ┃ ┃ ┗ 📜index.styles.js
 ┃ ┃ ┃ ┣ 📂Table
 ┃ ┃ ┃ ┃ ┣ 📜index.js
 ┃ ┃ ┃ ┃ ┗ 📜index.styles.js
 ┃ ┃ ┃ ┗ 📜index.js
 ┃ ┃ ┣ 📂Home
 ┃ ┃ ┃ ┗ 📂RecommendCard
 ┃ ┃ ┃ ┃ ┣ 📜index.js
 ┃ ┃ ┃ ┃ ┗ 📜index.styles.js
 ┃ ┃ ┣ 📂MyPage
 ┃ ┃ ┃ ┣ 📂Container
 ┃ ┃ ┃ ┃ ┣ 📂AccountManage
 ┃ ┃ ┃ ┃ ┃ ┣ 📜index.js
 ┃ ┃ ┃ ┃ ┃ ┗ 📜index.styles.js
 ┃ ┃ ┃ ┃ ┣ 📂AccountWithdrawal
 ┃ ┃ ┃ ┃ ┃ ┣ 📜index.js
 ┃ ┃ ┃ ┃ ┃ ┗ 📜index.styles.js
 ┃ ┃ ┃ ┃ ┣ 📂ApplyMentoringHistory
 ┃ ┃ ┃ ┃ ┃ ┣ 📜index.js
 ┃ ┃ ┃ ┃ ┃ ┗ 📜index.styles.js
 ┃ ┃ ┃ ┃ ┣ 📂EditedPostHistory
 ┃ ┃ ┃ ┃ ┃ ┣ 📜index.js
 ┃ ┃ ┃ ┃ ┃ ┗ 📜index.Styles.js
 ┃ ┃ ┃ ┃ ┣ 📂ProjectStudy
 ┃ ┃ ┃ ┃ ┃ ┣ 📜index.js
 ┃ ┃ ┃ ┃ ┃ ┗ 📜index.styles.js
 ┃ ┃ ┃ ┃ ┗ 📜index.js
 ┃ ┃ ┃ ┣ 📂Modules
 ┃ ┃ ┃ ┃ ┣ 📂Card
 ┃ ┃ ┃ ┃ ┃ ┣ 📜ApplicationCard.js
 ┃ ┃ ┃ ┃ ┃ ┗ 📜ApplicationCard.styles.js
 ┃ ┃ ┃ ┃ ┣ 📂MentoringPostListData
 ┃ ┃ ┃ ┃ ┃ ┣ 📜index.js
 ┃ ┃ ┃ ┃ ┃ ┗ 📜index.styles.js
 ┃ ┃ ┃ ┃ ┣ 📂Modal
 ┃ ┃ ┃ ┃ ┃ ┣ 📂Mentor
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂EditModal
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜index.js
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜index.styles.js
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂InfoViewModal
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜index.js
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜index.styles.js
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📂RefuseModal
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜index.js
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜index.styles.js
 ┃ ┃ ┃ ┃ ┃ ┗ 📂User
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂EditViewModal
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜index.js
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜index.styles.js
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂InfoEditModal
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜index.js
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜index.styles.js
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂RefuseViewModal
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜index.js
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜index.styles.js
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📂ReviewModal
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜index.js
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜index.styles.js
 ┃ ┃ ┃ ┃ ┗ 📂PostListData
 ┃ ┃ ┃ ┃ ┃ ┣ 📜index.js
 ┃ ┃ ┃ ┃ ┃ ┗ 📜index.styles.js
 ┃ ┃ ┃ ┗ 📂SideMenu
 ┃ ┃ ┃ ┃ ┣ 📜index.js
 ┃ ┃ ┃ ┃ ┗ 📜index.styles.js
 ┃ ┃ ┣ 📂Portfolio
 ┃ ┃ ┃ ┣ 📂Information
 ┃ ┃ ┃ ┃ ┣ 📜index.js
 ┃ ┃ ┃ ┃ ┗ 📜index.styles.js
 ┃ ┃ ┃ ┣ 📂IntroContents
 ┃ ┃ ┃ ┃ ┣ 📜index.js
 ┃ ┃ ┃ ┃ ┗ 📜index.styles.js
 ┃ ┃ ┃ ┗ 📂PortfolioCard
 ┃ ┃ ┃ ┃ ┣ 📜index.js
 ┃ ┃ ┃ ┃ ┗ 📜index.styles.js
 ┃ ┃ ┣ 📂SignUp
 ┃ ┃ ┃ ┣ 📂Modal
 ┃ ┃ ┃ ┃ ┣ 📜index.js
 ┃ ┃ ┃ ┃ ┗ 📜index.styles.js
 ┃ ┃ ┃ ┗ 📂NaverLogin
 ┃ ┃ ┃ ┃ ┗ 📜index.js
 ┃ ┃ ┗ 📂StudyPage
 ┃ ┃ ┃ ┣ 📂Calendar
 ┃ ┃ ┃ ┃ ┣ 📂CalendarBody
 ┃ ┃ ┃ ┃ ┃ ┣ 📜index.js
 ┃ ┃ ┃ ┃ ┃ ┗ 📜index.styles.js
 ┃ ┃ ┃ ┃ ┣ 📂CalendarHeader
 ┃ ┃ ┃ ┃ ┃ ┣ 📜index.js
 ┃ ┃ ┃ ┃ ┃ ┗ 📜index.styles.js
 ┃ ┃ ┃ ┃ ┣ 📂CalendarInput
 ┃ ┃ ┃ ┃ ┃ ┣ 📜index.js
 ┃ ┃ ┃ ┃ ┃ ┗ 📜index.styles.js
 ┃ ┃ ┃ ┃ ┣ 📜index.js
 ┃ ┃ ┃ ┃ ┗ 📜index.styles.js
 ┃ ┃ ┃ ┣ 📂EditComments
 ┃ ┃ ┃ ┃ ┣ 📜index.js
 ┃ ┃ ┃ ┃ ┗ 📜index.styles.js
 ┃ ┃ ┃ ┣ 📂PostCard
 ┃ ┃ ┃ ┃ ┣ 📜index.js
 ┃ ┃ ┃ ┃ ┗ 📜index.styles.js
 ┃ ┃ ┃ ┣ 📂PostCardList
 ┃ ┃ ┃ ┃ ┣ 📜index.js
 ┃ ┃ ┃ ┃ ┗ 📜index.styles.js
 ┃ ┃ ┃ ┣ 📂StudyCategory
 ┃ ┃ ┃ ┃ ┣ 📜index.js
 ┃ ┃ ┃ ┃ ┗ 📜index.styles.js
 ┃ ┃ ┃ ┣ 📂StudyEditPost
 ┃ ┃ ┃ ┃ ┣ 📂MultiSelectDropdown
 ┃ ┃ ┃ ┃ ┃ ┣ 📜index.js
 ┃ ┃ ┃ ┃ ┃ ┗ 📜index.styles.js
 ┃ ┃ ┃ ┃ ┗ 📂PostForm
 ┃ ┃ ┃ ┃ ┃ ┣ 📜index.js
 ┃ ┃ ┃ ┃ ┃ ┗ 📜index.styles.js
 ┃ ┃ ┃ ┗ 📂StudySlider
 ┃ ┃ ┃ ┃ ┣ 📜index.js
 ┃ ┃ ┃ ┃ ┗ 📜index.styles.js
 ┣ 📂constants
 ┃ ┣ 📜message.js
 ┃ ┣ 📜mypage.js
 ┃ ┣ 📜regex.js
 ┃ ┗ 📜study.js
 ┣ 📂data
 ┃ ┗ 📜sitemapRoutes.js
 ┣ 📂hooks
 ┃ ┣ 📜useApi.js
 ┃ ┣ 📜useFooter.js
 ┃ ┗ 📜useInfiniteScroll.js
 ┣ 📂pages
 ┃ ┣ 📂Admin
 ┃ ┃ ┣ 📂AdminApplyModals
 ┃ ┃ ┃ ┣ 📜index.js
 ┃ ┃ ┃ ┗ 📜index.styles.js
 ┃ ┃ ┣ 📂Category
 ┃ ┃ ┃ ┣ 📜AdminCategory.js
 ┃ ┃ ┃ ┗ 📜AdminCategory.styles.js
 ┃ ┃ ┣ 📂Home
 ┃ ┃ ┃ ┣ 📜Admin.js
 ┃ ┃ ┃ ┗ 📜Admin.styles.js
 ┃ ┃ ┣ 📂MentorApply
 ┃ ┃ ┃ ┣ 📜AdminMentorApply.js
 ┃ ┃ ┃ ┗ 📜AdminMentorApply.styles.js
 ┃ ┃ ┣ 📂MentorBoardList
 ┃ ┃ ┃ ┗ 📜AdminMentorBoardList.js
 ┃ ┃ ┗ 📂StudyProject
 ┃ ┃ ┃ ┣ 📜AdminStudyProject.js
 ┃ ┃ ┃ ┗ 📜AdminStudyProject.styles.js
 ┃ ┣ 📂Home
 ┃ ┃ ┣ 📂SlideBanner
 ┃ ┃ ┃ ┣ 📜index.js
 ┃ ┃ ┃ ┗ 📜index.styles.js
 ┃ ┃ ┣ 📜index.js
 ┃ ┃ ┗ 📜index.styles.js
 ┃ ┣ 📂MyPageLayout
 ┃ ┃ ┣ 📜index.js
 ┃ ┃ ┗ 📜index.styles.js
 ┃ ┣ 📂Portfolio
 ┃ ┃ ┣ 📂PortfolioApply
 ┃ ┃ ┃ ┣ 📜index.js
 ┃ ┃ ┃ ┗ 📜index.styles.js
 ┃ ┃ ┣ 📂PortfolioPost
 ┃ ┃ ┃ ┣ 📜index.js
 ┃ ┃ ┃ ┗ 📜index.styles.js
 ┃ ┃ ┣ 📜index.js
 ┃ ┃ ┗ 📜index.styles.js
 ┃ ┣ 📂SignInAccess
 ┃ ┃ ┗ 📜index.js
 ┃ ┣ 📂SignUp
 ┃ ┃ ┣ 📂SignUpDone
 ┃ ┃ ┃ ┣ 📜index.js
 ┃ ┃ ┃ ┗ 📜index.styles.js
 ┃ ┃ ┣ 📜index.js
 ┃ ┃ ┗ 📜index.styles.js
 ┃ ┣ 📂StudyPage
 ┃ ┃ ┣ 📂StudyEditPost
 ┃ ┃ ┃ ┣ 📜index.js
 ┃ ┃ ┃ ┗ 📜index.styles.js
 ┃ ┃ ┣ 📂StudyPostDetail
 ┃ ┃ ┃ ┣ 📜index.js
 ┃ ┃ ┃ ┗ 📜index.styles.js
 ┃ ┃ ┣ 📜index.js
 ┃ ┃ ┗ 📜index.styles.js
 ┃ ┣ 📂UserMentoApply
 ┃ ┃ ┣ 📜index.js
 ┃ ┃ ┗ 📜index.styles.js
 ┃ ┗ 📜index.js
 ┣ 📂recoil
 ┃ ┗ 📂atoms
 ┃ ┃ ┣ 📜index.atom.js
 ┃ ┃ ┗ 📜studyPage.atom.js
 ┣ 📂routes
 ┃ ┗ 📜routing.js
 ┣ 📂styles
 ┃ ┣ 📜common.js
 ┃ ┣ 📜global.js
 ┃ ┗ 📜theme.js
 ┣ 📂utils
 ┃ ┣ 📜api.js
 ┃ ┣ 📜check.js
 ┃ ┣ 📜cookie.js
 ┃ ┗ 📜date.js
 ┣ 📜App.js
 ┣ 📜index.js
 ┗ 📜setupProxy.js
</div>
</details>
<!-- ![Alt text](image-6.png) -->
<!-- 🏠 홈 화면 -->

<!-- ![Alt text](image-8.png) -->
</br>

# 협업 방법

# 1. Notion

![Alt text](notion.png)

<ul>
    <li>팀 노션 워크스페이지에서 진행상황, 진행예정 등 작업 흐름을 공유하였습니다.</li>
</ul>
</br>

# 2. Figma

![Alt text](image.png)

<ul>
    <li>피그마에서 기획 및 디자인작업을 진행했습니다.</li>
</ul>
</br>

# 3. Gather Town

![Alt text](gather.png)

<ul>
    <li>매일 아침 10시에 게더타운에서 회의하였으며 이슈가 있을 시 실시간으로 소통하며 협업을 진행하였습니다.</li>
</ul>

</br>

# 기술스택

![Alt text](image-4.png)

function openLetter() {
    const invitation = document.getElementById('invitation');
    const letter = document.getElementById('letter');
    const envelope = document.querySelector('.envelope');
    const barbie = document.getElementById('barbie');
    const mar = document.getElementById('mar');

    // body의 배경 이미지 변경
    document.body.style.backgroundImage = "url('bs.jpg')"; 
    // 편지지 클릭하면 애니메이션 효과로 편지 열기
    envelope.style.transform = 'rotateX(180deg)';  
    // 편지봉투가 열리는 효과
    invitation.style.display = 'none';  // 초대장 숨기기
    letter.style.display = 'block';  // 편지 보여기
    barbie.style.display = 'block';  // 바비 인형 보여기
    mar.style.display = 'block';  // 다른 이미지 보여기
}

function closeLetter() {
    const letter = document.getElementById('letter');
    const barbie = document.getElementById('barbie');
    const mar = document.getElementById('mar');
    const invitation = document.getElementById('invitation');
    
    // 모든 요소 숨기기
    letter.style.display = 'none';
    barbie.style.display = 'none';
    mar.style.display = 'none';
    invitation.style.display = 'none';

    // 배경 변경 효과 추가
    document.body.classList.add('fade-background');
    
    // 일정 시간이 지난 후 배경 이미지 변경
    setTimeout(() => {
        document.body.style.backgroundImage = "url('f.jpg')"; // 새로운 배경 이미지

        document.body.classList.remove('fade-background'); // 회전 효과 제거
    }, 2000); // 2초 후 변경 (애니메이션 완료 후)
}

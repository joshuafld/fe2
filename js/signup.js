document.addEventListener('DOMContentLoaded', function () {
    // 출생연도 옵션 생성
    const birthYearSelect = document.getElementById('birth-year');
    const currentYear = new Date().getFullYear();
    const startYear = 1950;
  
    // 기본 옵션 추가
    const defaultOption = document.createElement('option');
    defaultOption.value = '';
    defaultOption.textContent = '출생연도';
    defaultOption.disabled = true;
    defaultOption.selected = true;
    birthYearSelect.appendChild(defaultOption);
  
    // 연도 옵션 추가
    for (let year = currentYear - 10; year >= startYear; year--) {
      const option = document.createElement('option');
      option.value = year;
      option.textContent = year + '년';
      birthYearSelect.appendChild(option);
    }
  
    // 비밀번호 보기 토글
    const eyeIcons = document.querySelectorAll('.eye-icon');
    eyeIcons.forEach(icon => {
      icon.addEventListener('click', function () {
        const input = this.previousElementSibling;
        if (input.type === 'password') {
          input.type = 'text';
          this.innerHTML = `
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
              <circle cx="12" cy="12" r="3"></circle>
            </svg>`;
        } else {
          input.type = 'password';
          this.innerHTML = `
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
              <line x1="1" y1="1" x2="23" y2="23"></line>
            </svg>`;
        }
      });
    });
  
    // 체크박스 토글
    const checkbox = document.querySelector('.custom-checkbox');
    checkbox.addEventListener('click', function () {
      this.classList.toggle('checked');
    });
  
    // 회원가입 버튼 클릭 시 검증 및 모달 표시
    const submitBtn = document.querySelector('.submit-button');
    const modal = document.getElementById('signupModal');
    const modalMessage = modal.querySelector('.modal-message');
    const closeModalBtn = document.getElementById('closeModalBtn');
  
    submitBtn.addEventListener('click', function (e) {
      e.preventDefault();
  
      const idInput = document.querySelector('input[placeholder="아이디"]');
      const pwInput = document.querySelector('input[placeholder="비밀번호"]');
      const pwConfirmInput = document.querySelector('input[placeholder="비밀번호 확인"]');
      const nameInput = document.querySelector('input[placeholder="이름"]');
      const genderSelect = document.querySelectorAll('select.input-field')[1];
  
      if (!idInput.value.trim() || !pwInput.value.trim() || !pwConfirmInput.value.trim() ||
          !nameInput.value.trim() || !birthYearSelect.value || !genderSelect.value) {
        showModal('모든 입력란을 기입해주세요.');
        return;
      }
  
      if (pwInput.value !== pwConfirmInput.value) {
        showModal('비밀번호를 다시 확인해주세요.');
        return;
      }
  
      if (!checkbox.classList.contains('checked')) {
        showModal('개인정보약관에 동의해주셔야 회원가입이 가능합니다.');
        return;
      }
  
      // 모든 검증 통과 시 회원가입 처리
      window.location.href = '../views/home.html';
    });
  
    closeModalBtn.addEventListener('click', function () {
      modal.classList.add('hidden');
    });
  
    function showModal(message) {
      modalMessage.textContent = message;
      modal.classList.remove('hidden');
    }
  });
  
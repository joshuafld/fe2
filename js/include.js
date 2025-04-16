window.addEventListener('DOMContentLoaded', () => {
  const components = [
    { id: 'searchBox', file: '../components/common/search-box.html' },
    { id: 'routeModal', file: '../components/common/route-modal.html' },
    { id: 'arrivalModal', file: '../components/common/arrival-modal.html' },
    { id: 'footer', file: '../components/layout/bottom-nav.html' }
  ];

  components.forEach(({ id, file }) => {
    const target = document.getElementById(id);
    if (!target) {
      console.warn(`⚠️ 대상 ID #${id} 요소를 찾을 수 없습니다.`);
      return;
    }

    fetch(file)
      .then(res => {
        if (!res.ok) throw new Error(`${file} (HTTP ${res.status})`);
        return res.text();
      })
      .then(html => {
        target.innerHTML = html;

        // 스크립트 재실행 처리
        const scripts = target.querySelectorAll('script');
        scripts.forEach(oldScript => {
          const newScript = document.createElement('script');
          if (oldScript.src) {
            newScript.src = oldScript.src;
          } else {
            newScript.textContent = oldScript.textContent;
          }
          document.body.appendChild(newScript);
        });

        console.log(`✅ ${file} → #${id} 로드 성공`);
      })
      .catch(err => {
        console.error(`❌ 컴포넌트 로딩 실패 (${file}):`, err);
      });
  });
});

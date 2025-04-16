window.onload = function () {
  // 현재 위치 가져오기
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      function (position) {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;

        // 지도 생성
        const map = new Tmapv2.Map("map", {
          center: new Tmapv2.LatLng(lat, lon),
          width: "100%",
          height: "100vh",
          zoom: 16,
        });

        // 현재 위치 마커 추가
        const marker = new Tmapv2.Marker({
          position: new Tmapv2.LatLng(lat, lon),
          map: map,
        });
      },
      function (error) {
        alert("위치 정보를 가져올 수 없습니다.");
        console.error(error);
      }
    );
  } else {
    alert("이 브라우저는 위치 정보를 지원하지 않습니다.");
  }
};

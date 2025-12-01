// Açılış ekranı – Evet / Hayır
function sayYes() {
  // Soru ekranını gizle, menüyü göster
  document.getElementById("questionScreen").classList.add("hidden");
  document.getElementById("giftMenu").classList.remove("hidden");
}

function sayNo() {
  // Soru ekranını gizle, "gerçekten beğeneceksin" yazısını göster
  document.getElementById("questionScreen").classList.add("hidden");
  document.getElementById("noScreen").classList.remove("hidden");

  // 2 saniye sonra tekrar soruya geri dönsün
  setTimeout(function () {
    document.getElementById("noScreen").classList.add("hidden");
    document.getElementById("questionScreen").classList.remove("hidden");
  }, 2000);
}

// Modal açma / kapama
function openModal(id) {
  document.getElementById(id).classList.remove("hidden");
}

function closeModal(id) {
  document.getElementById(id).classList.add("hidden");
}

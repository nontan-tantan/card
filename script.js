const messages = [
  "シマエナガが大好きです！🐤",
  "専門は数学です📏",
  "高校で数学と情報を教えています",
  "外ではアロマテラピーを教えています",
  "最近AIにハマっています🧠",
  "趣味はバドミントンです🏸",
  "朝は必ずコーヒーを飲みます☕",
  "先生なのにかなり人見知りです💦",
  "今日も元気にプログラミング！💻",
  "よろしくお願いします😊！"
];

let current = 0;

document.getElementById("change-btn").addEventListener("click", function() {
  current = (current + 1) % messages.length;
  document.querySelector(".message").textContent = messages[current];
});
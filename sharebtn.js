/**
 *
 * สร้างปุ่มแชร์ด้วย Web Share API
 * https://pakin.me/blog/share-button-with-web-share-api/
 *
 */

var shareBtn = document.getElementById('share-btn');
    shareFallback = document.getElementById('share-fallback');
    pageTitle = document.querySelector('h1.entry-title').innetText;
    pageUrl = "https://LuxxCraft.github.io/";

shareBtn.addEventListener("click", function(ev) {
  if (navigator.share) {
    navigator.share({
        text: pageTitle,
        url: pageUrl
      });
  } else {
    shareFallback.style.display = 'flex';
    shareBtn.style.display = 'none';
  }
});

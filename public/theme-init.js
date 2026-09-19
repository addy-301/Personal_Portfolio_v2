// Runs before first paint: sets theme + marks JS as available (prevents flashes).
(function () {
  var d = document.documentElement;
  var t = null;
  try { t = localStorage.getItem('theme'); } catch (e) {}
  if (t !== 'light' && t !== 'dark') {
    t = window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
  }
  d.classList.add(t, 'js');
})();

// Optional polish: boot-log typing and custom cursor. The site works without this file.
(function () {
  document.documentElement.classList.add("js");
  var term = document.getElementById("term");
  if (term && !matchMedia("(prefers-reduced-motion: reduce)").matches) {
    var text = term.textContent, n = 0;
    term.setAttribute("aria-label", "Boot log");
    var cursor = '<span class="blink">\u2588</span>';
    var esc = function (s) { return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;"); };
    var id = setInterval(function () {
      n++;
      term.innerHTML = esc(text.slice(0, n)) + cursor;
      if (n >= text.length) clearInterval(id);
    }, 26);
  }
  var el = document.querySelector(".vf");
  if (el && matchMedia("(pointer: fine)").matches) {
    window.addEventListener("mousemove", function (e) {
      el.style.opacity = "1";
      el.style.transform = "translate3d(" + e.clientX + "px," + e.clientY + "px,0) translate(-50%,-50%)";
      el.dataset.mode = e.target.closest && e.target.closest("[data-execute]") ? "execute" : "idle";
    });
    document.addEventListener("mouseleave", function () { el.style.opacity = "0"; });
  }
})();

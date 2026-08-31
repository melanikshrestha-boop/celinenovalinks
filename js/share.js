(() => {
  const layer = document.getElementById("share-sheet");
  const openBtn = document.querySelector(".share-btn");
  const sheet = layer?.querySelector(".share-sheet");
  if (!layer || !openBtn || !sheet) return;

  let lastFocus = null;

  function openShare() {
    lastFocus = document.activeElement;
    layer.hidden = false;
    document.body.classList.add("share-open");
    openBtn.setAttribute("aria-expanded", "true");
    sheet.focus();
  }

  function closeShare() {
    layer.hidden = true;
    document.body.classList.remove("share-open");
    openBtn.setAttribute("aria-expanded", "false");
    if (lastFocus && typeof lastFocus.focus === "function") lastFocus.focus();
  }

  openBtn.addEventListener("click", openShare);
  layer.addEventListener("click", (event) => {
    if (event.target.closest("[data-share-close]")) closeShare();
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !layer.hidden) {
      event.preventDefault();
      closeShare();
    }
  });
})();

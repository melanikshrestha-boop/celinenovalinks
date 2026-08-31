(() => {
  const SHARE_URL = "https://celinenovalinks.vercel.app/";
  const SHARE_TEXT = "Celine Nova";
  const encodedUrl = encodeURIComponent(SHARE_URL);
  const encodedText = encodeURIComponent(SHARE_TEXT);

  const urls = {
    x: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedText}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    whatsapp: `https://api.whatsapp.com/send?text=${encodedText}%20${encodedUrl}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
    messenger: `https://www.facebook.com/dialog/send?link=${encodedUrl}&redirect_uri=${encodedUrl}&display=popup&app_id=966242223397117`,
    snap: `https://www.snapchat.com/scan?attachmentUrl=${encodedUrl}`,
  };

  const layer = document.getElementById("share-sheet");
  const openBtn = document.querySelector(".share-btn");
  const sheet = layer?.querySelector(".share-sheet");
  const copyBtn = layer?.querySelector("[data-share-copy]");
  const copyLabel = layer?.querySelector("[data-copy-label]");
  if (!layer || !openBtn || !sheet) return;

  Object.entries(urls).forEach(([key, href]) => {
    const node = layer.querySelector(`[data-share="${key}"]`);
    if (node) node.setAttribute("href", href);
  });

  let lastFocus = null;
  let copyTimer = 0;

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
    if (copyLabel) copyLabel.textContent = "Copy Linktree";
    if (lastFocus && typeof lastFocus.focus === "function") lastFocus.focus();
  }

  async function copyLink() {
    try {
      await navigator.clipboard.writeText(SHARE_URL);
    } catch {
      const field = document.createElement("textarea");
      field.value = SHARE_URL;
      field.setAttribute("readonly", "");
      field.style.position = "fixed";
      field.style.top = "-999px";
      document.body.appendChild(field);
      field.select();
      document.execCommand("copy");
      field.remove();
    }
    if (copyLabel) copyLabel.textContent = "Copied";
    window.clearTimeout(copyTimer);
    copyTimer = window.setTimeout(() => {
      if (copyLabel) copyLabel.textContent = "Copy Linktree";
    }, 1600);
  }

  openBtn.addEventListener("click", openShare);
  layer.addEventListener("click", (event) => {
    if (event.target.closest("[data-share-close]")) closeShare();
  });
  copyBtn?.addEventListener("click", copyLink);
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !layer.hidden) {
      event.preventDefault();
      closeShare();
    }
  });
})();

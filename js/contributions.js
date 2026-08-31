const USER = "melanikshrestha-boop";
const API = `https://github-contributions-api.jogruber.de/v4/${USER}?y=last`;
const FALLBACK = "./contributions.json";
const LEVEL = ["var(--cell-0)", "var(--cell-1)", "var(--cell-2)", "var(--cell-3)", "var(--cell-4)"];

async function load() {
  try {
    const live = await fetch(API, { cache: "no-store" });
    if (live.ok) return live.json();
  } catch {
    /* fall through to committed snapshot */
  }
  const snap = await fetch(FALLBACK);
  if (!snap.ok) throw new Error("contributions unavailable");
  return snap.json();
}

function weeksFrom(days) {
  const weeks = [];
  let col = [];
  for (const day of days) {
    const dow = new Date(`${day.date}T12:00:00`).getUTCDay();
    if (col.length === 0 && dow !== 0) {
      for (let i = 0; i < dow; i += 1) col.push(null);
    }
    col.push(day);
    if (col.length === 7) {
      weeks.push(col);
      col = [];
    }
  }
  if (col.length) {
    while (col.length < 7) col.push(null);
    weeks.push(col);
  }
  return weeks;
}

function monthLabels(weeks) {
  const names = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const labels = [];
  let last = -1;
  weeks.forEach((week, i) => {
    const first = week.find((d) => d);
    if (!first) return;
    const month = new Date(`${first.date}T12:00:00`).getUTCMonth();
    if (month !== last) {
      labels.push({ i, name: names[month] });
      last = month;
    }
  });
  return labels;
}

function render(data) {
  const host = document.getElementById("graph");
  if (!host) return;
  const days = (data.contributions || []).filter((d) => d.date <= new Date().toISOString().slice(0, 10));
  const weeks = weeksFrom(days);
  const total = data.total?.lastYear ?? days.reduce((n, d) => n + (d.count || 0), 0);
  const size = 11;
  const gap = 3;
  const left = 0;
  const top = 16;
  const width = left + weeks.length * (size + gap);
  const height = top + 7 * (size + gap);
  const months = monthLabels(weeks);

  const cells = weeks
    .map((week, x) =>
      week
        .map((day, y) => {
          if (!day) return "";
          const fill = LEVEL[Math.max(0, Math.min(4, day.level || 0))];
          const title = `${day.count} · ${day.date}`;
          return `<rect x="${left + x * (size + gap)}" y="${top + y * (size + gap)}" width="${size}" height="${size}" rx="2" fill="${fill}"><title>${title}</title></rect>`;
        })
        .join(""),
    )
    .join("");

  const monthText = months
    .map(
      (m) =>
        `<text x="${left + m.i * (size + gap)}" y="10">${m.name}</text>`,
    )
    .join("");

  host.innerHTML = `
    <svg viewBox="0 0 ${width} ${height}" role="img" aria-label="${total} contributions in the last year">
      ${monthText}
      ${cells}
    </svg>
  `;
}

load().then(render).catch(() => {
  const host = document.getElementById("graph");
  if (host) host.replaceChildren();
});

/**
 * Generates the project cover mockups used across the portfolio.
 * These are illustrative UI previews, not client screenshots.
 *
 * Run: npm run covers
 */
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const outDir = resolve(root, "public/projects");
mkdirSync(outDir, { recursive: true });

const W = 1200;
const H = 760;
const FONT = "Manrope, ui-sans-serif, system-ui, sans-serif";

const esc = (s) =>
  String(s)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");

const alpha = (hex, a) => {
  const h = hex.replace("#", "");
  const n = parseInt(h, 16);
  return `rgba(${(n >> 16) & 255}, ${(n >> 8) & 255}, ${n & 255}, ${a})`;
};

const projects = [
  { slug: "sidia-jakarta", app: "SIDIA", client: "Dinas Lingkungan Hidup DKI Jakarta", accent: "#12B981", variant: "dashboard", nav: ["Dashboard", "Usulan", "Program", "Sertifikat"] },
  { slug: "kehati", app: "KEHATI", client: "Dinas Lingkungan Hidup DKI Jakarta", accent: "#12B981", variant: "map", nav: ["Overview", "Flora & Fauna", "Peta", "Admin"] },
  { slug: "simpatik", app: "SIMPATIK", client: "SMA Angkasa 2", accent: "#FF7A45", variant: "school", nav: ["Dashboard", "Siswa", "Akademik", "Raport"] },
  { slug: "e-library", app: "E-Library", client: "SMA Angkasa 2", accent: "#8B5CF6", variant: "library", nav: ["Discover", "Koleksi", "Peminjaman", "Kunjungan"] },
  { slug: "smartpom", app: "SMARTPOM", client: "BPOM RI", accent: "#E5484D", variant: "dashboard", nav: ["Overview", "Pemeriksaan", "CAPA", "Laporan"] },
  { slug: "sipt", app: "SIPT", client: "BPOM RI", accent: "#0EA5E9", variant: "portal", nav: ["Beranda", "Pengujian", "Laporan", "Pihak 3"] },
  { slug: "eperformance", app: "E-Performance", client: "BPOM RI", accent: "#7C3AED", variant: "dashboard", nav: ["Dashboard", "IKU", "Anggaran", "Laporan"] },
  { slug: "anxious", app: "Anxious", client: "Anxious Creation", accent: "#E11D48", variant: "commerce", nav: ["Storefront", "Products", "Orders", "Reports"] },
  { slug: "ewas-golang", app: "EWAS", client: "BPOM RI", accent: "#0EA5E9", variant: "pipeline", nav: ["Overview", "Pipeline", "Mapping", "Logs"] },
  { slug: "echowheel", app: "Echowheel", client: "Independent product", accent: "#A3E635", variant: "map", nav: ["Dashboard", "Rentals", "Tracking", "Wallet"] },
  { slug: "sma-angkasa-2", app: "SKY 2", client: "SMA Angkasa 2", accent: "#F59E0B", variant: "portal", nav: ["Dashboard", "SPMB", "Berita", "Profil"] },
  { slug: "ppid-mobile", app: "PPID", client: "Perumda Tirta Jabar", accent: "#6366F1", variant: "mobile", nav: ["Home", "Permohonan", "Berita", "Profil"] },
  { slug: "bpom-mobile", app: "BPOM", client: "BPOM RI", accent: "#E5484D", variant: "scan", nav: ["Home", "Scan", "Cek Produk", "Profil"] },
  { slug: "sigd", app: "SIGD", client: "Dinas Lingkungan Hidup DKI Jakarta", accent: "#22C55E", variant: "dashboard", nav: ["Dashboard", "Inventarisasi", "Faktor Emisi", "Laporan"] },
  { slug: "dikplhd", app: "SLHD", client: "Dinas Lingkungan Hidup DKI Jakarta", accent: "#0EA5E9", variant: "portal", nav: ["Dataset", "Publikasi", "Dashboard", "Master"] },
];

const defs = (accent) => `
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#0B1224"/>
      <stop offset="1" stop-color="#070B14"/>
    </linearGradient>
    <linearGradient id="accent" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="${accent}"/>
      <stop offset="1" stop-color="${alpha(accent, 0.55)}"/>
    </linearGradient>
    <linearGradient id="panel" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#141E33"/>
      <stop offset="1" stop-color="#0F1728"/>
    </linearGradient>
    <radialGradient id="glow" cx="0.15" cy="0" r="0.8">
      <stop offset="0" stop-color="${alpha(accent, 0.35)}"/>
      <stop offset="1" stop-color="${alpha(accent, 0)}"/>
    </radialGradient>
    <pattern id="grid" width="32" height="32" patternUnits="userSpaceOnUse">
      <path d="M32 0H0V32" fill="none" stroke="rgba(255,255,255,0.035)" stroke-width="1"/>
    </pattern>
    <filter id="shadow" x="-30%" y="-30%" width="160%" height="160%">
      <feDropShadow dx="0" dy="18" stdDeviation="22" flood-color="#000" flood-opacity="0.45"/>
    </filter>
    <clipPath id="windowClip">
      <rect x="41" y="89" width="1118" height="630" rx="19"/>
    </clipPath>
  </defs>`;

function chrome(app, accent, url) {
  return `
  <g filter="url(#shadow)">
    <rect x="40" y="40" width="1120" height="680" rx="20" fill="#0C1424" stroke="rgba(255,255,255,0.10)"/>
  </g>
  <rect x="40" y="40" width="1120" height="48" rx="20" fill="#0F192C"/>
  <rect x="40" y="70" width="1120" height="18" fill="#0F192C"/>
  <line x1="40" y1="88" x2="1160" y2="88" stroke="rgba(255,255,255,0.07)"/>
  <circle cx="68" cy="64" r="5" fill="#FF5F57"/>
  <circle cx="86" cy="64" r="5" fill="#FEBC2E"/>
  <circle cx="104" cy="64" r="5" fill="#28C840"/>
  <rect x="132" y="53" width="470" height="24" rx="12" fill="#0A1220" stroke="rgba(255,255,255,0.06)"/>
  <path d="M150 65v-4a4 4 0 0 1 8 0v4M149 65h10v7h-10z" fill="none" stroke="${alpha(accent, 0.9)}" stroke-width="1.4"/>
  <text x="168" y="69" fill="#93A2BA" font-size="11" font-family="${FONT}">${esc(url)}</text>
  <rect x="1092" y="55" width="30" height="20" rx="6" fill="${alpha(accent, 0.16)}"/>
  <text x="1107" y="69" fill="${accent}" font-size="9" text-anchor="middle" font-family="${FONT}" font-weight="700">${esc(app.slice(0, 2).toUpperCase())}</text>`;
}

function sidebar(nav, app, accent) {
  const items = nav
    .map(
      (label, i) => `
    <g>
      ${i === 0 ? `<rect x="60" y="${184 + i * 44}" width="156" height="32" rx="8" fill="${alpha(accent, 0.14)}"/>` : ""}
      <circle cx="76" cy="${200 + i * 44}" r="3.5" fill="${i === 0 ? accent : "#5B6980"}"/>
      <text x="90" y="${204 + i * 44}" fill="${i === 0 ? "#EAF0FB" : "#8492A9"}" font-size="12" font-family="${FONT}" font-weight="${i === 0 ? 700 : 500}">${esc(label)}</text>
    </g>`,
    )
    .join("");

  return `
  <rect x="40" y="88" width="196" height="632" fill="#0B1424"/>
  <line x1="236" y1="88" x2="236" y2="720" stroke="rgba(255,255,255,0.07)"/>
  <rect x="64" y="112" width="34" height="34" rx="10" fill="url(#accent)"/>
  <text x="81" y="134" fill="#fff" font-size="12" font-weight="800" text-anchor="middle" font-family="${FONT}">${esc(app.slice(0, 2).toUpperCase())}</text>
  <text x="108" y="126" fill="#EEF3FB" font-size="13" font-weight="800" font-family="${FONT}">${esc(app)}</text>
  <text x="108" y="141" fill="#728199" font-size="9" font-family="${FONT}">Workspace</text>
  <text x="64" y="172" fill="#5B6980" font-size="9" letter-spacing="1.4" font-family="${FONT}" font-weight="700">MENU</text>
  ${items}
  <rect x="56" y="660" width="164" height="44" rx="10" fill="#101C30" stroke="rgba(255,255,255,0.06)"/>
  <circle cx="76" cy="682" r="11" fill="${alpha(accent, 0.2)}"/>
  <text x="76" y="686" fill="${accent}" font-size="9" font-weight="700" text-anchor="middle" font-family="${FONT}">IW</text>
  <text x="94" y="679" fill="#D8E2F2" font-size="10" font-weight="700" font-family="${FONT}">Ilham Wara</text>
  <text x="94" y="692" fill="#6C7B92" font-size="8" font-family="${FONT}">Administrator</text>`;
}

const header = (title, subtitle, accent) => `
  <text x="268" y="132" fill="#F2F6FD" font-size="21" font-weight="800" font-family="${FONT}">${esc(title)}</text>
  <text x="268" y="152" fill="#7C8AA1" font-size="11" font-family="${FONT}">${esc(subtitle)}</text>
  <rect x="878" y="112" width="180" height="30" rx="8" fill="#0E192B" stroke="rgba(255,255,255,0.07)"/>
  <circle cx="894" cy="127" r="4" fill="none" stroke="#6C7B92" stroke-width="1.4"/>
  <line x1="897" y1="130" x2="901" y2="134" stroke="#6C7B92" stroke-width="1.4"/>
  <text x="910" y="131" fill="#5F6E85" font-size="10" font-family="${FONT}">Search anything…</text>
  <rect x="1068" y="112" width="64" height="30" rx="8" fill="${accent}"/>
  <text x="1100" y="131" fill="#07101F" font-size="10" font-weight="800" text-anchor="middle" font-family="${FONT}">Export</text>`;

const statCard = (x, y, label, value, delta, accent) => `
  <rect x="${x}" y="${y}" width="204" height="94" rx="12" fill="url(#panel)" stroke="rgba(255,255,255,0.07)"/>
  <text x="${x + 16}" y="${y + 24}" fill="#7C8AA1" font-size="10" font-family="${FONT}">${esc(label)}</text>
  <text x="${x + 16}" y="${y + 54}" fill="#F2F6FD" font-size="26" font-weight="800" font-family="${FONT}">${esc(value)}</text>
  <rect x="${x + 16}" y="${y + 66}" width="52" height="16" rx="8" fill="${alpha(accent, 0.16)}"/>
  <text x="${x + 42}" y="${y + 77}" fill="${accent}" font-size="8" font-weight="700" text-anchor="middle" font-family="${FONT}">${esc(delta)}</text>
  <text x="${x + 76}" y="${y + 77}" fill="#5F6E85" font-size="8" font-family="${FONT}">vs last month</text>`;

const areaChart = (accent, x, y, w, h) => {
  const pts = [0.55, 0.42, 0.6, 0.38, 0.5, 0.28, 0.36, 0.2, 0.24, 0.1];
  const step = w / (pts.length - 1);
  const line = pts
    .map((p, i) => `${i === 0 ? "M" : "L"} ${(x + i * step).toFixed(1)} ${(y + h - p * h).toFixed(1)}`)
    .join(" ");
  const area = `${line} L ${x + w} ${y + h} L ${x} ${y + h} Z`;
  const dots = pts
    .map((p, i) => `<circle cx="${(x + i * step).toFixed(1)}" cy="${(y + h - p * h).toFixed(1)}" r="2.5" fill="${accent}" opacity="${i === pts.length - 1 ? 1 : 0.35}"/>`)
    .join("");
  const grid = [0.25, 0.5, 0.75]
    .map((g) => `<line x1="${x}" y1="${y + h * g}" x2="${x + w}" y2="${y + h * g}" stroke="rgba(255,255,255,0.05)"/>`)
    .join("");
  return `
    <linearGradient id="area" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="${alpha(accent, 0.38)}"/>
      <stop offset="1" stop-color="${alpha(accent, 0)}"/>
    </linearGradient>
    ${grid}
    <path d="${area}" fill="url(#area)"/>
    <path d="${line}" fill="none" stroke="${accent}" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
    ${dots}`;
};

const tableRows = (accent, x, y, rows, cols) => {
  const widths = cols.map((c) => c.w);
  const headerRow = cols
    .map((c, i) => {
      const cx = x + widths.slice(0, i).reduce((a, b) => a + b, 0) + 14;
      return `<text x="${cx}" y="${y + 20}" fill="#5F6E85" font-size="8" letter-spacing="0.8" font-family="${FONT}" font-weight="700">${esc(c.label.toUpperCase())}</text>`;
    })
    .join("");
  const body = rows
    .map((row, r) => {
      const ry = y + 38 + r * 36;
      const cells = row
        .map((cell, i) => {
          const cx = x + widths.slice(0, i).reduce((a, b) => a + b, 0) + 14;
          const isStatus = i === row.length - 1;
          if (isStatus) {
            return `<rect x="${cx}" y="${ry - 10}" width="62" height="17" rx="8" fill="${alpha(accent, 0.16)}"/><text x="${cx + 31}" y="${ry + 2}" text-anchor="middle" fill="${accent}" font-size="8" font-weight="700" font-family="${FONT}">${esc(cell)}</text>`;
          }
          return `<text x="${cx}" y="${ry + 2}" fill="#B9C6D9" font-size="9.5" font-family="${FONT}">${esc(cell)}</text>`;
        })
        .join("");
      return `<line x1="${x}" y1="${ry + 20}" x2="${x + widths.reduce((a, b) => a + b, 0)}" y2="${ry + 20}" stroke="rgba(255,255,255,0.05)"/>${cells}`;
    })
    .join("");
  return `<line x1="${x}" y1="${y + 28}" x2="${x + widths.reduce((a, b) => a + b, 0)}" y2="${y + 28}" stroke="rgba(255,255,255,0.08)"/>${headerRow}${body}`;
};

function dashboardContent(accent) {
  return `
    ${header("Overview", "Ringkasan data dan aktivitas terbaru", accent)}
    ${statCard(268, 176, "Total records", "12,844", "+8.2%", accent)}
    ${statCard(484, 176, "Active this month", "1,206", "+3.1%", accent)}
    ${statCard(700, 176, "Pending review", "38", "−4.6%", accent)}
    <rect x="916" y="176" width="216" height="94" rx="12" fill="${alpha(accent, 0.1)}" stroke="${alpha(accent, 0.28)}"/>
    <text x="932" y="200" fill="${accent}" font-size="10" font-family="${FONT}" font-weight="700">SYSTEM STATUS</text>
    <circle cx="938" cy="222" r="4" fill="${accent}"/>
    <text x="950" y="226" fill="#DCE7F6" font-size="11" font-family="${FONT}">All services operational</text>
    <text x="932" y="250" fill="#7C8AA1" font-size="9" font-family="${FONT}">Last sync 2 minutes ago</text>
    <rect x="268" y="292" width="520" height="234" rx="12" fill="url(#panel)" stroke="rgba(255,255,255,0.07)"/>
    <text x="286" y="318" fill="#E7EEF9" font-size="12" font-weight="700" font-family="${FONT}">Records trend</text>
    <text x="286" y="334" fill="#62718A" font-size="9" font-family="${FONT}">Last 10 months</text>
    <rect x="672" y="304" width="54" height="20" rx="6" fill="#0C1526" stroke="rgba(255,255,255,0.07)"/>
    <text x="699" y="318" fill="#8B9AB1" font-size="8" text-anchor="middle" font-family="${FONT}">Monthly</text>
    ${areaChart(accent, 290, 354, 476, 146)}
    <rect x="804" y="292" width="328" height="234" rx="12" fill="url(#panel)" stroke="rgba(255,255,255,0.07)"/>
    <text x="822" y="318" fill="#E7EEF9" font-size="12" font-weight="700" font-family="${FONT}">By category</text>
    ${[
      ["Operations", 78],
      ["Monitoring", 62],
      ["Reports", 48],
      ["Archive", 34],
    ]
      .map(([label, pct], i) => {
        const y = 348 + i * 40;
        return `
        <text x="822" y="${y}" fill="#A9B7CB" font-size="9" font-family="${FONT}">${label}</text>
        <text x="1114" y="${y}" fill="#74839A" font-size="9" text-anchor="end" font-family="${FONT}">${pct}%</text>
        <rect x="822" y="${y + 8}" width="292" height="6" rx="3" fill="#182337"/>
        <rect x="822" y="${y + 8}" width="${(292 * pct) / 100}" height="6" rx="3" fill="${accent}" opacity="${0.9 - i * 0.15}"/>`;
      })
      .join("")}
    <rect x="268" y="546" width="864" height="142" rx="12" fill="url(#panel)" stroke="rgba(255,255,255,0.07)"/>
    <text x="286" y="572" fill="#E7EEF9" font-size="12" font-weight="700" font-family="${FONT}">Recent submissions</text>
    <text x="1098" y="572" fill="${accent}" font-size="9" text-anchor="end" font-family="${FONT}">View all →</text>
    ${tableRows(accent, 284, 586, [
      ["REF-2025-0841", "Unit Pelaksana 01", "12 Feb 2025", "Verified"],
      ["REF-2025-0840", "Unit Pelaksana 02", "11 Feb 2025", "Pending"],
      ["REF-2025-0839", "Unit Pelaksana 03", "10 Feb 2025", "Verified"],
    ], [
      { label: "Reference", w: 180 },
      { label: "Unit", w: 330 },
      { label: "Date", w: 170 },
      { label: "Status", w: 130 },
    ])}`;
}

function mapContent(accent) {
  const pins = [
    [430, 380],
    [560, 330],
    [700, 420],
    [820, 350],
    [900, 470],
    [520, 500],
  ]
    .map(
      ([x, y], i) => `
      <circle cx="${x}" cy="${y}" r="12" fill="${alpha(accent, 0.18)}"/>
      <circle cx="${x}" cy="${y}" r="${i === 2 ? 5 : 3.5}" fill="${accent}"/>
      <circle cx="${x}" cy="${y}" r="${i === 2 ? 22 : 16}" fill="none" stroke="${alpha(accent, 0.2)}"/>`,
    )
    .join("");
  return `
    ${header("Monitoring map", "Sebaran titik pemantauan lingkungan", accent)}
    <rect x="268" y="176" width="566" height="512" rx="12" fill="#0D1728" stroke="rgba(255,255,255,0.07)"/>
    <path d="M300 300 C360 250 430 270 470 230 C520 180 620 210 660 260 C710 320 690 380 740 430 C790 480 780 560 720 620 C660 670 560 650 500 610 C430 560 360 600 320 540 C280 480 250 350 300 300 Z" fill="#12233B" stroke="${alpha(accent, 0.25)}"/>
    <path d="M470 230 C520 300 470 360 520 420 C560 470 640 460 700 520" fill="none" stroke="${alpha(accent, 0.18)}" stroke-width="1.5"/>
    <path d="M350 520 C420 480 470 520 540 560" fill="none" stroke="rgba(255,255,255,0.08)"/>
    ${pins}
    <rect x="300" y="196" width="200" height="34" rx="8" fill="#0A1322" stroke="rgba(255,255,255,0.07)"/>
    <text x="316" y="218" fill="#7C8AA1" font-size="9" font-family="${FONT}">Cari wilayah atau titik…</text>
    <rect x="760" y="196" width="54" height="34" rx="8" fill="#0A1322" stroke="rgba(255,255,255,0.07)"/>
    <text x="787" y="218" fill="${accent}" font-size="9" text-anchor="middle" font-family="${FONT}">Filter</text>
    <rect x="854" y="176" width="278" height="168" rx="12" fill="url(#panel)" stroke="rgba(255,255,255,0.07)"/>
    <text x="872" y="202" fill="#E7EEF9" font-size="12" font-weight="700" font-family="${FONT}">Monitoring summary</text>
    <text x="872" y="240" fill="#F2F6FD" font-size="30" font-weight="800" font-family="${FONT}">186</text>
    <text x="872" y="258" fill="#7C8AA1" font-size="9" font-family="${FONT}">active monitoring points</text>
    <rect x="872" y="280" width="112" height="44" rx="8" fill="#0C1626"/>
    <text x="886" y="298" fill="#6C7B92" font-size="8" font-family="${FONT}">Normal</text>
    <text x="886" y="314" fill="${accent}" font-size="13" font-weight="800" font-family="${FONT}">171</text>
    <rect x="994" y="280" width="120" height="44" rx="8" fill="#0C1626"/>
    <text x="1008" y="298" fill="#6C7B92" font-size="8" font-family="${FONT}">Needs review</text>
    <text x="1008" y="314" fill="#F5B301" font-size="13" font-weight="800" font-family="${FONT}">15</text>
    <rect x="854" y="360" width="278" height="328" rx="12" fill="url(#panel)" stroke="rgba(255,255,255,0.07)"/>
    <text x="872" y="386" fill="#E7EEF9" font-size="12" font-weight="700" font-family="${FONT}">Latest observations</text>
    ${[
      ["Jakarta Selatan", "Tebet", "Normal"],
      ["Jakarta Pusat", "Menteng", "Review"],
      ["Jakarta Barat", "Kebon Jeruk", "Normal"],
      ["Jakarta Timur", "Cakung", "Normal"],
      ["Jakarta Utara", "Koja", "Review"],
    ]
      .map(([area, sub, status], i) => {
        const y = 414 + i * 52;
        return `
        <circle cx="884" cy="${y - 4}" r="4" fill="${status === "Normal" ? accent : "#F5B301"}"/>
        <text x="898" y="${y}" fill="#D3DEED" font-size="10" font-weight="600" font-family="${FONT}">${area}</text>
        <text x="898" y="${y + 14}" fill="#6C7B92" font-size="8" font-family="${FONT}">${sub}</text>
        <text x="1112" y="${y + 4}" fill="${status === "Normal" ? accent : "#F5B301"}" font-size="8" text-anchor="end" font-family="${FONT}">${status}</text>
        <line x1="872" y1="${y + 26}" x2="1114" y2="${y + 26}" stroke="rgba(255,255,255,0.05)"/>`;
      })
      .join("")}`;
}

function schoolContent(accent) {
  return `
    ${header("School dashboard", "Ringkasan akademik dan kehadiran siswa", accent)}
    ${statCard(268, 176, "Active students", "842", "+2.4%", accent)}
    ${statCard(484, 176, "Teachers", "54", "+1.2%", accent)}
    ${statCard(700, 176, "Classes today", "27", "On time", accent)}
    <rect x="916" y="176" width="216" height="94" rx="12" fill="url(#panel)" stroke="rgba(255,255,255,0.07)"/>
    <text x="932" y="200" fill="#7C8AA1" font-size="9" font-family="${FONT}">ATTENDANCE RATE</text>
    <text x="932" y="234" fill="#F2F6FD" font-size="26" font-weight="800" font-family="${FONT}">96.4%</text>
    <rect x="932" y="246" width="184" height="6" rx="3" fill="#182337"/>
    <rect x="932" y="246" width="177" height="6" rx="3" fill="${accent}"/>
    <rect x="268" y="292" width="590" height="396" rx="12" fill="url(#panel)" stroke="rgba(255,255,255,0.07)"/>
    <text x="286" y="320" fill="#E7EEF9" font-size="12" font-weight="700" font-family="${FONT}">Attendance by class</text>
    <text x="840" y="320" fill="${accent}" font-size="9" text-anchor="end" font-family="${FONT}">This week</text>
    ${tableRows(accent, 284, 342, [
      ["X IPA 1", "32 students", "31 present", "96.9%", "Present"],
      ["X IPA 2", "30 students", "28 present", "93.3%", "Present"],
      ["XI IPS 1", "34 students", "34 present", "100%", "Present"],
      ["XI IPS 2", "31 students", "29 present", "93.5%", "Review"],
      ["XII IPA 1", "29 students", "28 present", "96.5%", "Present"],
      ["XII IPA 2", "30 students", "30 present", "100%", "Present"],
    ], [
      { label: "Class", w: 150 },
      { label: "Students", w: 150 },
      { label: "Present", w: 140 },
      { label: "Rate", w: 100 },
      { label: "Status", w: 110 },
    ])}
    <rect x="874" y="292" width="258" height="186" rx="12" fill="url(#panel)" stroke="rgba(255,255,255,0.07)"/>
    <text x="892" y="318" fill="#E7EEF9" font-size="12" font-weight="700" font-family="${FONT}">Academic progress</text>
    <circle cx="946" cy="390" r="46" fill="none" stroke="#182337" stroke-width="12"/>
    <circle cx="946" cy="390" r="46" fill="none" stroke="${accent}" stroke-width="12" stroke-dasharray="212 289" stroke-linecap="round" transform="rotate(-90 946 390)"/>
    <text x="946" y="394" fill="#F2F6FD" font-size="18" font-weight="800" text-anchor="middle" font-family="${FONT}">73%</text>
    <text x="946" y="410" fill="#6C7B92" font-size="8" text-anchor="middle" font-family="${FONT}">completed</text>
    ${[
      ["Completed", "73%"],
      ["In progress", "21%"],
      ["Not started", "6%"],
    ]
      .map(([label, value], i) => {
        const y = 352 + i * 34;
        return `
        <circle cx="1028" cy="${y - 3}" r="3" fill="${accent}" opacity="${1 - i * 0.25}"/>
        <text x="1040" y="${y}" fill="#B9C6D9" font-size="9" font-family="${FONT}">${label}</text>
        <text x="1114" y="${y}" fill="#7C8AA1" font-size="9" text-anchor="end" font-family="${FONT}">${value}</text>`;
      })
      .join("")}
    <rect x="874" y="494" width="258" height="194" rx="12" fill="${alpha(accent, 0.08)}" stroke="${alpha(accent, 0.22)}"/>
    <text x="892" y="520" fill="${accent}" font-size="9" font-weight="700" letter-spacing="1" font-family="${FONT}">NEXT AGENDA</text>
    <text x="892" y="544" fill="#EDF3FB" font-size="12" font-weight="700" font-family="${FONT}">Ujian Tengah Semester</text>
    <text x="892" y="562" fill="#7C8AA1" font-size="9" font-family="${FONT}">Senin · 08.00 WIB</text>
    <line x1="892" y1="578" x2="1114" y2="578" stroke="rgba(255,255,255,0.08)"/>
    <text x="892" y="600" fill="#7C8AA1" font-size="9" font-family="${FONT}">Ruang</text>
    <text x="1114" y="600" fill="#D3DEED" font-size="9" text-anchor="end" font-family="${FONT}">Lab Komputer 2</text>
    <text x="892" y="622" fill="#7C8AA1" font-size="9" font-family="${FONT}">Kelas</text>
    <text x="1114" y="622" fill="#D3DEED" font-size="9" text-anchor="end" font-family="${FONT}">XII IPA 1</text>
    <rect x="892" y="642" width="222" height="30" rx="8" fill="${accent}"/>
    <text x="1003" y="661" fill="#07101F" font-size="9" font-weight="800" text-anchor="middle" font-family="${FONT}">View schedule</text>`;
}

function libraryContent(accent) {
  const books = [
    ["#8B5CF6", "Bumi Manusia", "Pramoedya A. T."],
    ["#3B6FFF", "Laskar Pelangi", "Andrea Hirata"],
    ["#12B981", "Filosofi Teras", "Henry Manampiring"],
    ["#F5B301", "Sapiens", "Yuval N. Harari"],
    ["#E5484D", "Cantik Itu Luka", "Eka Kurniawan"],
    ["#0EA5E9", "Pulang", "Leila S. Chudori"],
  ]
    .map(([color, title, author], i) => {
      const x = 286 + (i % 3) * 278;
      const y = 330 + Math.floor(i / 3) * 170;
      return `
      <rect x="${x}" y="${y}" width="254" height="146" rx="10" fill="url(#panel)" stroke="rgba(255,255,255,0.07)"/>
      <rect x="${x + 14}" y="${y + 14}" width="74" height="102" rx="5" fill="${color}" opacity="0.9"/>
      <rect x="${x + 22}" y="${y + 26}" width="58" height="4" rx="2" fill="rgba(255,255,255,0.7)"/>
      <rect x="${x + 22}" y="${y + 36}" width="38" height="3" rx="1.5" fill="rgba(255,255,255,0.45)"/>
      <text x="${x + 102}" y="${y + 36}" fill="#E7EEF9" font-size="11" font-weight="700" font-family="${FONT}">${title}</text>
      <text x="${x + 102}" y="${y + 54}" fill="#7C8AA1" font-size="9" font-family="${FONT}">${author}</text>
      <rect x="${x + 102}" y="${y + 68}" width="52" height="16" rx="8" fill="${alpha(accent, 0.14)}"/>
      <text x="${x + 128}" y="${y + 79}" fill="${accent}" font-size="7" text-anchor="middle" font-family="${FONT}">Available</text>
      <line x1="${x + 14}" y1="${y + 126}" x2="${x + 240}" y2="${y + 126}" stroke="rgba(255,255,255,0.06)"/>
      <text x="${x + 14}" y="${y + 140}" fill="#5F6E85" font-size="7" font-family="${FONT}">Digital collection</text>`;
    })
    .join("");
  return `
    ${header("Discover", "Koleksi digital perpustakaan sekolah", accent)}
    <rect x="268" y="176" width="588" height="44" rx="10" fill="#0E192B" stroke="rgba(255,255,255,0.08)"/>
    <circle cx="290" cy="198" r="5" fill="none" stroke="#6C7B92" stroke-width="1.5"/>
    <line x1="294" y1="202" x2="299" y2="207" stroke="#6C7B92" stroke-width="1.5"/>
    <text x="310" y="202" fill="#5F6E85" font-size="10" font-family="${FONT}">Cari judul, penulis, atau kategori…</text>
    <rect x="724" y="186" width="120" height="24" rx="7" fill="${accent}"/>
    <text x="784" y="202" fill="#07101F" font-size="9" font-weight="800" text-anchor="middle" font-family="${FONT}">Search</text>
    <rect x="872" y="176" width="260" height="140" rx="12" fill="${alpha(accent, 0.1)}" stroke="${alpha(accent, 0.25)}"/>
    <text x="890" y="202" fill="${accent}" font-size="8" font-weight="700" letter-spacing="1" font-family="${FONT}">CONTINUE READING</text>
    <text x="890" y="228" fill="#F2F6FD" font-size="13" font-weight="700" font-family="${FONT}">Bumi Manusia</text>
    <text x="890" y="246" fill="#8B9AB1" font-size="9" font-family="${FONT}">Pramoedya Ananta Toer</text>
    <rect x="890" y="262" width="224" height="5" rx="2.5" fill="#182337"/>
    <rect x="890" y="262" width="142" height="5" rx="2.5" fill="${accent}"/>
    <text x="890" y="286" fill="#6C7B92" font-size="8" font-family="${FONT}">64% · 214 pages left</text>
    <text x="1114" y="286" fill="${accent}" font-size="9" text-anchor="end" font-family="${FONT}">Resume →</text>
    <text x="268" y="316" fill="#E7EEF9" font-size="12" font-weight="700" font-family="${FONT}">Popular this week</text>
    <text x="1140" y="316" fill="${accent}" font-size="9" text-anchor="end" font-family="${FONT}">See all</text>
    ${books}
    <rect x="268" y="680" width="864" height="34" rx="8" fill="#0C1626" stroke="rgba(255,255,255,0.06)"/>
    <text x="286" y="701" fill="#6C7B92" font-size="9" font-family="${FONT}">1,248 titles in the digital catalogue</text>
    <text x="1114" y="701" fill="${accent}" font-size="9" text-anchor="end" font-family="${FONT}">Powered by Go search service →</text>`;
}

function examContent(accent) {
  const options = [
    ["A", "Fotosintesis terjadi di kloroplas"],
    ["B", "Respirasi menghasilkan oksigen"],
    ["C", "Mitokondria adalah tempat fotosintesis"],
    ["D", "Klorofil tidak diperlukan"],
    ["E", "Semua jawaban benar"],
  ]
    .map(([key, label], i) => {
      const y = 400 + i * 52;
      const active = i === 0;
      return `
      <rect x="292" y="${y}" width="520" height="42" rx="9" fill="${active ? alpha(accent, 0.12) : "#0D1728"}" stroke="${active ? alpha(accent, 0.5) : "rgba(255,255,255,0.07)"}"/>
      <circle cx="314" cy="${y + 21}" r="11" fill="${active ? accent : "#182337"}"/>
      <text x="314" y="${y + 25}" fill="${active ? "#07101F" : "#8B9AB1"}" font-size="10" font-weight="800" text-anchor="middle" font-family="${FONT}">${key}</text>
      <text x="336" y="${y + 25}" fill="${active ? "#F2F6FD" : "#B9C6D9"}" font-size="10" font-family="${FONT}">${label}</text>`;
    })
    .join("");
  return `
    ${header("Computer Based Test", "Biologi · Kelas XII IPA 1", accent)}
    <rect x="268" y="176" width="568" height="512" rx="12" fill="url(#panel)" stroke="rgba(255,255,255,0.07)"/>
    <rect x="288" y="196" width="80" height="20" rx="6" fill="${alpha(accent, 0.14)}"/>
    <text x="328" y="210" fill="${accent}" font-size="8" font-weight="700" text-anchor="middle" font-family="${FONT}">SOAL 12 / 40</text>
    <text x="1114" y="210" fill="#6C7B92" font-size="9" text-anchor="end" font-family="${FONT}">Biologi · UTS</text>
    <text x="288" y="252" fill="#F2F6FD" font-size="15" font-weight="700" font-family="${FONT}">Manakah pernyataan yang paling tepat</text>
    <text x="288" y="274" fill="#F2F6FD" font-size="15" font-weight="700" font-family="${FONT}">mengenai proses fotosintesis?</text>
    <text x="288" y="302" fill="#7C8AA1" font-size="9" font-family="${FONT}">Pilih satu jawaban yang paling benar.</text>
    <line x1="288" y1="324" x2="816" y2="324" stroke="rgba(255,255,255,0.07)"/>
    ${options}
    <rect x="292" y="660" width="90" height="30" rx="8" fill="#0D1728" stroke="rgba(255,255,255,0.08)"/>
    <text x="337" y="679" fill="#8B9AB1" font-size="9" text-anchor="middle" font-family="${FONT}">← Previous</text>
    <rect x="676" y="660" width="136" height="30" rx="8" fill="${accent}"/>
    <text x="744" y="679" fill="#07101F" font-size="9" font-weight="800" text-anchor="middle" font-family="${FONT}">Next question →</text>
    <rect x="856" y="176" width="276" height="168" rx="12" fill="${alpha(accent, 0.09)}" stroke="${alpha(accent, 0.25)}"/>
    <text x="874" y="202" fill="${accent}" font-size="8" font-weight="700" letter-spacing="1" font-family="${FONT}">TIME REMAINING</text>
    <text x="874" y="244" fill="#F2F6FD" font-size="36" font-weight="800" font-family="${FONT}">42:18</text>
    <text x="874" y="266" fill="#7C8AA1" font-size="9" font-family="${FONT}">Sesi berakhir otomatis</text>
    <rect x="874" y="284" width="240" height="6" rx="3" fill="#182337"/>
    <rect x="874" y="284" width="152" height="6" rx="3" fill="${accent}"/>
    <rect x="856" y="360" width="276" height="328" rx="12" fill="url(#panel)" stroke="rgba(255,255,255,0.07)"/>
    <text x="874" y="386" fill="#E7EEF9" font-size="12" font-weight="700" font-family="${FONT}">Question navigator</text>
    <text x="1114" y="386" fill="#6C7B92" font-size="8" text-anchor="end" font-family="${FONT}">40 soal</text>
    ${Array.from({ length: 24 })
      .map((_, i) => {
        const x = 874 + (i % 6) * 37;
        const y = 408 + Math.floor(i / 6) * 37;
        const answered = i < 11;
        const current = i === 11;
        return `<rect x="${x}" y="${y}" width="28" height="28" rx="7" fill="${current ? accent : answered ? alpha(accent, 0.2) : "#0D1728"}" stroke="${current ? "none" : "rgba(255,255,255,0.07)"}"/>
        <text x="${x + 14}" y="${y + 18}" fill="${current ? "#07101F" : answered ? accent : "#5F6E85"}" font-size="8" font-weight="700" text-anchor="middle" font-family="${FONT}">${i + 1}</text>`;
      })
      .join("")}
    <circle cx="890" cy="584" r="4" fill="${accent}"/>
    <text x="902" y="587" fill="#7C8AA1" font-size="8" font-family="${FONT}">Answered</text>
    <circle cx="974" cy="584" r="4" fill="#182337"/>
    <text x="986" y="587" fill="#7C8AA1" font-size="8" font-family="${FONT}">Unanswered</text>
    <rect x="874" y="614" width="240" height="34" rx="8" fill="#0D1728" stroke="rgba(255,255,255,0.08)"/>
    <text x="994" y="635" fill="#B9C6D9" font-size="9" text-anchor="middle" font-family="${FONT}">Review before submit</text>`;
}

function portalContent(accent) {
  const cards = [
    ["Informasi terbaru", "Publik", "Berita dan pengumuman terbaru", "dari instansi."],
    ["Layanan online", "Layanan", "Akses layanan dan pengajuan", "secara digital."],
    ["Publikasi & dokumen", "Dokumen", "Unduh publikasi, panduan,", "dan dokumen resmi."],
  ]
    .map(([title, tag, body1, body2], i) => {
      const x = 268 + i * 295;
      return `
      <rect x="${x}" y="344" width="274" height="150" rx="12" fill="url(#panel)" stroke="rgba(255,255,255,0.07)"/>
      <rect x="${x + 16}" y="360" width="30" height="30" rx="8" fill="${alpha(accent, 0.15)}"/>
      <circle cx="${x + 31}" cy="${377}" r="5" fill="none" stroke="${accent}" stroke-width="1.4"/>
      <text x="${x + 58}" y="372" fill="#E7EEF9" font-size="11" font-weight="700" font-family="${FONT}">${esc(title)}</text>
      <text x="${x + 58}" y="388" fill="#6C7B92" font-size="8" font-family="${FONT}">${esc(tag)}</text>
      <text x="${x + 16}" y="424" fill="#8B9AB1" font-size="9" font-family="${FONT}">${esc(body1)}</text>
      <text x="${x + 16}" y="440" fill="#8B9AB1" font-size="9" font-family="${FONT}">${esc(body2)}</text>
      <text x="${x + 16}" y="470" fill="${accent}" font-size="9" font-weight="700" font-family="${FONT}">Buka →</text>`;
    })
    .join("");
  return `
    ${header("Portal informasi", "Informasi, layanan, dan pengumuman", accent)}
    <rect x="268" y="176" width="864" height="144" rx="12" fill="${alpha(accent, 0.09)}" stroke="${alpha(accent, 0.24)}"/>
    <text x="292" y="208" fill="${accent}" font-size="8" font-weight="700" letter-spacing="1.2" font-family="${FONT}">ONE INTEGRATED PORTAL</text>
    <text x="292" y="240" fill="#F2F6FD" font-size="24" font-weight="800" font-family="${FONT}">Informasi dan layanan dalam satu tempat.</text>
    <text x="292" y="262" fill="#8B9AB1" font-size="10" font-family="${FONT}">Cari informasi, akses layanan, dan pantau pengumuman terbaru.</text>
    <rect x="292" y="280" width="160" height="26" rx="7" fill="${accent}"/>
    <text x="372" y="297" fill="#07101F" font-size="9" font-weight="800" text-anchor="middle" font-family="${FONT}">Mulai sekarang</text>
    <rect x="464" y="280" width="160" height="26" rx="7" fill="none" stroke="rgba(255,255,255,0.14)"/>
    <text x="544" y="297" fill="#C6D2E3" font-size="9" text-anchor="middle" font-family="${FONT}">Lihat informasi</text>
    <g opacity="0.9">
      <circle cx="1004" cy="246" r="52" fill="none" stroke="${alpha(accent, 0.30)}"/>
      <circle cx="1004" cy="246" r="36" fill="none" stroke="${alpha(accent, 0.5)}"/>
      <circle cx="1004" cy="246" r="20" fill="${alpha(accent, 0.16)}"/>
      <circle cx="1004" cy="246" r="6" fill="${accent}"/>
      <circle cx="1076" cy="206" r="4" fill="${accent}"/>
      <circle cx="944" cy="300" r="3" fill="${accent}"/>
    </g>
    <text x="268" y="328" fill="#E7EEF9" font-size="12" font-weight="700" font-family="${FONT}">Popular services</text>
    ${cards}
    <rect x="268" y="516" width="864" height="172" rx="12" fill="url(#panel)" stroke="rgba(255,255,255,0.07)"/>
    <text x="286" y="542" fill="#E7EEF9" font-size="12" font-weight="700" font-family="${FONT}">Recent announcements</text>
    <text x="1098" y="542" fill="${accent}" font-size="9" text-anchor="end" font-family="${FONT}">All announcements →</text>
    ${[
      ["Pengumuman layanan terbaru", "12 Feb 2025"],
      ["Jadwal pemeliharaan sistem", "09 Feb 2025"],
      ["Panduan penggunaan portal", "02 Feb 2025"],
    ]
      .map(([title, date], i) => {
        const y = 570 + i * 38;
        return `
        <circle cx="292" cy="${y + 4}" r="3" fill="${accent}"/>
        <text x="308" y="${y + 8}" fill="#C6D2E3" font-size="10" font-family="${FONT}">${title}</text>
        <text x="1098" y="${y + 8}" fill="#6C7B92" font-size="9" text-anchor="end" font-family="${FONT}">${date}</text>
        ${i < 2 ? `<line x1="286" y1="${y + 22}" x2="1114" y2="${y + 22}" stroke="rgba(255,255,255,0.05)"/>` : ""}`;
      })
      .join("")}`;
}

function mobileContent(accent) {
  return `
    ${header("Mobile service", "Aplikasi informasi publik untuk masyarakat", accent)}
    <rect x="268" y="176" width="864" height="512" rx="12" fill="${alpha(accent, 0.07)}" stroke="${alpha(accent, 0.2)}"/>
    <circle cx="560" cy="410" r="170" fill="${alpha(accent, 0.08)}"/>
    <circle cx="820" cy="480" r="130" fill="${alpha(accent, 0.05)}"/>
    <g>
      <rect x="420" y="214" width="220" height="440" rx="30" fill="#0A1220" stroke="rgba(255,255,255,0.16)" stroke-width="2"/>
      <rect x="432" y="226" width="196" height="416" rx="22" fill="#0E1929"/>
      <rect x="500" y="234" width="60" height="6" rx="3" fill="#1C2A40"/>
      <text x="452" y="272" fill="#F2F6FD" font-size="13" font-weight="800" font-family="${FONT}">Selamat datang</text>
      <text x="452" y="288" fill="#6C7B92" font-size="8" font-family="${FONT}">Layanan informasi publik</text>
      <rect x="448" y="304" width="164" height="54" rx="10" fill="${alpha(accent, 0.16)}" stroke="${alpha(accent, 0.3)}"/>
      <text x="460" y="324" fill="${accent}" font-size="8" font-weight="700" font-family="${FONT}">STATUS PERMOHONAN</text>
      <text x="460" y="344" fill="#F2F6FD" font-size="16" font-weight="800" font-family="${FONT}">2 in progress</text>
      <rect x="448" y="372" width="78" height="66" rx="10" fill="#132035"/>
      <rect x="534" y="372" width="78" height="66" rx="10" fill="#132035"/>
      <circle cx="468" cy="394" r="10" fill="${alpha(accent, 0.2)}"/>
      <circle cx="554" cy="394" r="10" fill="${alpha(accent, 0.2)}"/>
      <text x="468" y="420" fill="#C6D2E3" font-size="7" text-anchor="middle" font-family="${FONT}">Requests</text>
      <text x="554" y="420" fill="#C6D2E3" font-size="7" text-anchor="middle" font-family="${FONT}">Documents</text>
      <text x="452" y="462" fill="#8B9AB1" font-size="9" font-weight="700" font-family="${FONT}">Informasi terbaru</text>
      ${[0, 1, 2]
        .map((i) => {
          const y = 474 + i * 48;
          return `
          <rect x="448" y="${y}" width="164" height="40" rx="8" fill="#132035"/>
          <rect x="456" y="${y + 8}" width="24" height="24" rx="6" fill="${alpha(accent, 0.2)}"/>
          <text x="488" y="${y + 17}" fill="#D7E1EF" font-size="7.5" font-family="${FONT}">Pengumuman layanan</text>
          <text x="488" y="${y + 28}" fill="#5F6E85" font-size="6.5" font-family="${FONT}">Diperbarui hari ini</text>`;
        })
        .join("")}
      <rect x="448" y="618" width="164" height="20" rx="5" fill="#0A1220"/>
      <circle cx="486" cy="628" r="3" fill="${accent}"/>
      <circle cx="530" cy="628" r="3" fill="#2A3950"/>
      <circle cx="574" cy="628" r="3" fill="#2A3950"/>
    </g>
    <g>
      <rect x="690" y="254" width="200" height="400" rx="28" fill="#0A1220" stroke="rgba(255,255,255,0.14)" stroke-width="2"/>
      <rect x="701" y="265" width="178" height="378" rx="20" fill="#0E1929"/>
      <text x="718" y="304" fill="#F2F6FD" font-size="12" font-weight="800" font-family="${FONT}">Detail permohonan</text>
      <rect x="718" y="318" width="144" height="38" rx="8" fill="#132035"/>
      <text x="728" y="334" fill="#6C7B92" font-size="7" font-family="${FONT}">Nomor</text>
      <text x="728" y="347" fill="#D7E1EF" font-size="9" font-weight="700" font-family="${FONT}">PPID-2025-0184</text>
      <text x="718" y="380" fill="#8B9AB1" font-size="8" font-weight="700" font-family="${FONT}">Timeline</text>
      ${["Permohonan diterima", "Verifikasi dokumen", "Diproses", "Selesai"]
        .map((step, i) => {
          const y = 398 + i * 44;
          const done = i < 2;
          return `
          <circle cx="726" cy="${y}" r="5" fill="${done ? accent : "#1C2A40"}"/>
          <text x="740" y="${y + 3}" fill="${done ? "#D7E1EF" : "#5F6E85"}" font-size="8" font-family="${FONT}">${step}</text>
          <text x="862" y="${y + 3}" fill="${done ? accent : "#3A4A62"}" font-size="6.5" text-anchor="end" font-family="${FONT}">${done ? "Done" : "Waiting"}</text>
          ${i < 3 ? `<line x1="726" y1="${y + 7}" x2="726" y2="${y + 36}" stroke="${done && i < 1 ? accent : "#1C2A40"}"/>` : ""}`;
        })
        .join("")}
      <rect x="718" y="580" width="144" height="28" rx="7" fill="${accent}"/>
      <text x="790" y="598" fill="#07101F" font-size="8" font-weight="800" text-anchor="middle" font-family="${FONT}">Unduh bukti</text>
    </g>
    <rect x="930" y="300" width="166" height="94" rx="12" fill="#101B2D" stroke="rgba(255,255,255,0.08)"/>
    <text x="948" y="326" fill="#6C7B92" font-size="8" font-family="${FONT}">RESPONSE TIME</text>
    <text x="948" y="354" fill="#F2F6FD" font-size="22" font-weight="800" font-family="${FONT}">2.4 days</text>
    <text x="948" y="376" fill="${accent}" font-size="8" font-family="${FONT}">Within service target</text>
    <rect x="930" y="408" width="166" height="94" rx="12" fill="#101B2D" stroke="rgba(255,255,255,0.08)"/>
    <text x="948" y="434" fill="#6C7B92" font-size="8" font-family="${FONT}">REQUESTS</text>
    <text x="948" y="462" fill="#F2F6FD" font-size="22" font-weight="800" font-family="${FONT}">1,284</text>
    <text x="948" y="484" fill="${accent}" font-size="8" font-family="${FONT}">This year</text>`;
}

function pipelineContent(accent) {
  const node = (x, y, w, h, title, sub, fill = "#132035") => `
    <rect x="${x}" y="${y}" width="${w}" height="${h}" rx="12" fill="${fill}" stroke="${alpha(accent, 0.28)}"/>
    <text x="${x + 16}" y="${y + 30}" fill="#EDF3FB" font-size="13" font-weight="800" font-family="${FONT}">${esc(title)}</text>
    <text x="${x + 16}" y="${y + 48}" fill="#7C8AA1" font-size="9" font-family="${FONT}">${esc(sub)}</text>`;
  const arrow = (x1, y1, x2, y2) => `
    <line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${alpha(accent, 0.7)}" stroke-width="2" marker-end="url(#arrow)"/>`;
  return `
    <defs>
      <marker id="arrow" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
        <path d="M0 0L8 4L0 8Z" fill="${accent}"/>
      </marker>
    </defs>
    ${header("Data pipeline", "Sinkronisasi data PBF dari Gatevac ke WAS", accent)}
    ${node(280, 196, 210, 86, "Gatevac", "PBF source API")}
    ${node(280, 314, 210, 86, "EUA", "MySQL database")}
    ${node(280, 432, 210, 86, "Scheduler", "cron / backfill")}
    ${node(560, 286, 250, 142, "EWAS Go service", "transform · batch · reconcile", alpha(accent, 0.14))}
    ${node(890, 196, 220, 86, "Destmap", "shadow table sync")}
    ${node(890, 314, 220, 86, "WAS", "MySQL database")}
    ${node(890, 432, 220, 86, "Reports", "trader aggregation")}
    ${arrow(490, 239, 558, 320)}
    ${arrow(490, 357, 558, 357)}
    ${arrow(490, 475, 558, 400)}
    ${arrow(812, 320, 888, 239)}
    ${arrow(812, 357, 888, 357)}
    ${arrow(812, 400, 888, 475)}
    <rect x="280" y="556" width="830" height="120" rx="12" fill="#0A1424" stroke="rgba(255,255,255,0.07)"/>
    <text x="298" y="582" fill="#6C7B92" font-size="8" letter-spacing="1.2" font-family="${FONT}" font-weight="700">HTTP JOBS</text>
    <text x="298" y="608" fill="${accent}" font-size="9" font-family="monospace">POST /job/eua/dataReceiveSaryanfarPbf</text>
    <text x="298" y="626" fill="${accent}" font-size="9" font-family="monospace">POST /job/eua/dataDistributePbf</text>
    <text x="298" y="644" fill="${accent}" font-size="9" font-family="monospace">POST /job/destmap</text>
    <text x="298" y="662" fill="${accent}" font-size="9" font-family="monospace">GET  /health</text>
    <text x="720" y="608" fill="#7C8AA1" font-size="9" font-family="${FONT}">Batch inserts</text>
    <text x="720" y="626" fill="#C6D2E3" font-size="9" font-family="${FONT}">Resumable backfill</text>
    <text x="720" y="644" fill="#7C8AA1" font-size="9" font-family="${FONT}">Shadow-table mapping</text>
    <text x="720" y="662" fill="#C6D2E3" font-size="9" font-family="${FONT}">Logs + cron deployment</text>
    <circle cx="541" cy="357" r="4" fill="${accent}"/>
    <circle cx="866" cy="357" r="4" fill="${accent}"/>`;
}

function scanContent(accent) {
  const barcode = Array.from({ length: 30 })
    .map((_, i) => {
      const x = 738 + i * 4.2;
      const w = i % 3 === 0 ? 2 : 1;
      return `<rect x="${x}" y="566" width="${w}" height="26" fill="#D7E1EF" opacity="${i % 5 === 0 ? 0.55 : 0.9}"/>`;
    })
    .join("");
  return `
    ${header("Product check", "Verifikasi obat, pangan, dan kosmetik", accent)}
    <rect x="268" y="176" width="864" height="512" rx="12" fill="${alpha(accent, 0.07)}" stroke="${alpha(accent, 0.2)}"/>
    <circle cx="560" cy="410" r="170" fill="${alpha(accent, 0.08)}"/>
    <circle cx="820" cy="480" r="130" fill="${alpha(accent, 0.05)}"/>
    <g>
      <rect x="420" y="214" width="220" height="440" rx="30" fill="#0A1220" stroke="rgba(255,255,255,0.16)" stroke-width="2"/>
      <rect x="432" y="226" width="196" height="416" rx="22" fill="#0E1929"/>
      <rect x="500" y="234" width="60" height="6" rx="3" fill="#1C2A40"/>
      <text x="452" y="272" fill="#F2F6FD" font-size="13" font-weight="800" font-family="${FONT}">Cek produk</text>
      <text x="452" y="288" fill="#6C7B92" font-size="8" font-family="${FONT}">Cari atau scan sebelum membeli</text>
      <rect x="448" y="302" width="164" height="30" rx="8" fill="#132035" stroke="rgba(255,255,255,0.08)"/>
      <circle cx="462" cy="317" r="4" fill="none" stroke="#6C7B92" stroke-width="1.3"/>
      <line x1="465" y1="320" x2="469" y2="324" stroke="#6C7B92" stroke-width="1.3"/>
      <text x="476" y="321" fill="#5F6E85" font-size="7" font-family="${FONT}">Nama atau nomor registrasi…</text>
      <rect x="448" y="340" width="164" height="40" rx="10" fill="${alpha(accent, 0.16)}" stroke="${alpha(accent, 0.3)}"/>
      <path d="M462 352v-5a3 3 0 0 1 6 0v5M461 352h8v13h-8z" fill="none" stroke="${accent}" stroke-width="1.4"/>
      <text x="478" y="365" fill="${accent}" font-size="9" font-weight="700" font-family="${FONT}">Scan barcode produk</text>
      <text x="452" y="398" fill="#8B9AB1" font-size="8" font-weight="700" font-family="${FONT}">Kategori</text>
      ${["Obat", "Pangan", "Kosmetik"]
        .map((label, i) => {
          const x = 448 + i * 55;
          return `<rect x="${x}" y="406" width="49" height="18" rx="6" fill="${i === 0 ? accent : "#132035"}"/>
          <text x="${x + 24.5}" y="418" fill="${i === 0 ? "#07101F" : "#8B9AB1"}" font-size="6.5" text-anchor="middle" font-family="${FONT}" font-weight="700">${label}</text>`;
        })
        .join("")}
      <text x="452" y="446" fill="#8B9AB1" font-size="8" font-weight="700" font-family="${FONT}">Terakhir dicek</text>
      ${[["Paracetamol 500mg", "Terdaftar"], ["Vitamin C 1000mg", "Terdaftar"], ["Serum Vitamin C", "Perlu dicek"]]
        .map(([name, status], i) => {
          const y = 458 + i * 48;
          return `
          <rect x="448" y="${y}" width="164" height="40" rx="8" fill="#132035"/>
          <rect x="456" y="${y + 8}" width="24" height="24" rx="6" fill="${alpha(accent, 0.18)}"/>
          <text x="488" y="${y + 17}" fill="#D7E1EF" font-size="7.5" font-family="${FONT}">${name}</text>
          <text x="488" y="${y + 28}" fill="${status === "Terdaftar" ? accent : "#F5B301"}" font-size="6.5" font-family="${FONT}">${status}</text>`;
        })
        .join("")}
      <rect x="448" y="618" width="164" height="20" rx="5" fill="#0A1220"/>
      <circle cx="486" cy="628" r="3" fill="${accent}"/>
      <circle cx="530" cy="628" r="3" fill="#2A3950"/>
      <circle cx="574" cy="628" r="3" fill="#2A3950"/>
    </g>
    <g>
      <rect x="690" y="254" width="200" height="400" rx="28" fill="#0A1220" stroke="rgba(255,255,255,0.14)" stroke-width="2"/>
      <rect x="701" y="265" width="178" height="378" rx="20" fill="#0E1929"/>
      <text x="718" y="296" fill="#F2F6FD" font-size="11" font-weight="800" font-family="${FONT}">Hasil verifikasi</text>
      <rect x="718" y="310" width="144" height="72" rx="9" fill="${alpha(accent, 0.13)}" stroke="${alpha(accent, 0.3)}"/>
      <circle cx="734" cy="330" r="8" fill="${accent}"/>
      <path d="M730 330l3 3 5-6" fill="none" stroke="#07101F" stroke-width="1.6" stroke-linecap="round"/>
      <text x="748" y="334" fill="${accent}" font-size="9" font-weight="800" font-family="${FONT}">Terdaftar</text>
      <text x="728" y="352" fill="#F2F6FD" font-size="9" font-weight="700" font-family="${FONT}">Paracetamol 500mg</text>
      <text x="728" y="368" fill="#7C8AA1" font-size="7" font-family="${FONT}">DTL A1 123 456 789</text>
      <text x="718" y="404" fill="#8B9AB1" font-size="7.5" font-family="${FONT}">Produsen</text>
      <text x="718" y="418" fill="#D7E1EF" font-size="8" font-weight="600" font-family="${FONT}">PT Farmasi Indonesia</text>
      <text x="718" y="442" fill="#8B9AB1" font-size="7.5" font-family="${FONT}">Kemasan</text>
      <text x="718" y="456" fill="#D7E1EF" font-size="8" font-weight="600" font-family="${FONT}">Strip 10 tablet</text>
      <text x="718" y="480" fill="#8B9AB1" font-size="7.5" font-family="${FONT}">Nomor izin edar</text>
      <text x="718" y="494" fill="${accent}" font-size="8" font-weight="700" font-family="${FONT}">Terverifikasi BPOM</text>
      <rect x="718" y="548" width="144" height="48" rx="8" fill="#132035"/>
      ${barcode}
      <text x="790" y="586" fill="#6C7B92" font-size="6.5" text-anchor="middle" font-family="${FONT}">8991234567890</text>
      <rect x="718" y="608" width="144" height="24" rx="7" fill="${accent}"/>
      <text x="790" y="624" fill="#07101F" font-size="7.5" font-weight="800" text-anchor="middle" font-family="${FONT}">Lihat detail produk</text>
    </g>
    <rect x="930" y="300" width="166" height="94" rx="12" fill="#101B2D" stroke="rgba(255,255,255,0.08)"/>
    <text x="948" y="326" fill="#6C7B92" font-size="8" font-family="${FONT}">REGISTERED PRODUCTS</text>
    <text x="948" y="354" fill="#F2F6FD" font-size="22" font-weight="800" font-family="${FONT}">12,480</text>
    <text x="948" y="376" fill="${accent}" font-size="8" font-family="${FONT}">Searchable by registration</text>
    <rect x="930" y="408" width="166" height="94" rx="12" fill="#101B2D" stroke="rgba(255,255,255,0.08)"/>
    <text x="948" y="434" fill="#6C7B92" font-size="8" font-family="${FONT}">SCANS TODAY</text>
    <text x="948" y="462" fill="#F2F6FD" font-size="22" font-weight="800" font-family="${FONT}">1,240</text>
    <text x="948" y="484" fill="${accent}" font-size="8" font-family="${FONT}">Barcode checks</text>
    <rect x="930" y="516" width="166" height="94" rx="12" fill="${alpha(accent, 0.09)}" stroke="${alpha(accent, 0.24)}"/>
    <text x="948" y="542" fill="${accent}" font-size="8" font-weight="700" font-family="${FONT}">PUBLIC WARNINGS</text>
    <text x="948" y="570" fill="#F2F6FD" font-size="22" font-weight="800" font-family="${FONT}">8</text>
    <text x="948" y="592" fill="#7C8AA1" font-size="8" font-family="${FONT}">Active alerts</text>`;
}

function commerceContent(accent) {
  const products = [
    ["Essential Tee", "Rp 149.000"],
    ["Oversized Hoodie", "Rp 279.000"],
    ["Crewneck", "Rp 219.000"],
    ["Canvas Cap", "Rp 119.000"],
  ]
    .map(([name, price], i) => {
      const x = 268 + i * 150;
      return `
      <rect x="${x}" y="200" width="134" height="152" rx="10" fill="url(#panel)" stroke="rgba(255,255,255,0.07)"/>
      <rect x="${x + 10}" y="210" width="114" height="76" rx="8" fill="${alpha(accent, 0.14)}"/>
      <circle cx="${x + 67}" cy="248" r="22" fill="none" stroke="${alpha(accent, 0.5)}" stroke-width="1.5"/>
      <circle cx="${x + 67}" cy="248" r="10" fill="${alpha(accent, 0.35)}"/>
      <text x="${x + 10}" y="302" fill="#D7E1EF" font-size="9" font-weight="700" font-family="${FONT}">${name}</text>
      <text x="${x + 10}" y="318" fill="${accent}" font-size="9" font-family="${FONT}">${price}</text>
      <text x="${x + 10}" y="338" fill="#5F6E85" font-size="7" font-family="${FONT}">In stock · ${12 + i * 3}</text>`;
    })
    .join("");
  return `
    ${header("Revenue overview", "Ringkasan penjualan dan katalog produk", accent)}
    ${statCard(268, 176, "Revenue", "Rp 48.2M", "+12.4%", accent)}
    ${statCard(484, 176, "Orders", "312", "+6.8%", accent)}
    ${statCard(700, 176, "Customers", "184", "+4.2%", accent)}
    <rect x="916" y="176" width="216" height="94" rx="12" fill="url(#panel)" stroke="rgba(255,255,255,0.07)"/>
    <text x="932" y="200" fill="#7C8AA1" font-size="9" font-family="${FONT}">TOP PRODUCT</text>
    <text x="932" y="224" fill="#F2F6FD" font-size="11" font-weight="700" font-family="${FONT}">Essential Tee</text>
    <text x="932" y="242" fill="#6C7B92" font-size="8" font-family="${FONT}">68 orders this month</text>
    <rect x="932" y="254" width="184" height="5" rx="2.5" fill="#182337"/>
    <rect x="932" y="254" width="132" height="5" rx="2.5" fill="${accent}"/>
    <text x="268" y="188" fill="#E7EEF9" font-size="11" font-weight="700" font-family="${FONT}">Catalogue preview</text>
    <text x="1140" y="188" fill="${accent}" font-size="9" text-anchor="end" font-family="${FONT}">Manage catalogue →</text>
    ${products}
    <rect x="268" y="372" width="534" height="316" rx="12" fill="url(#panel)" stroke="rgba(255,255,255,0.07)"/>
    <text x="286" y="398" fill="#E7EEF9" font-size="12" font-weight="700" font-family="${FONT}">Monthly revenue</text>
    <text x="286" y="414" fill="#62718A" font-size="9" font-family="${FONT}">Last 8 months</text>
    ${areaChart(accent, 290, 440, 490, 210)}
    <rect x="820" y="372" width="312" height="316" rx="12" fill="url(#panel)" stroke="rgba(255,255,255,0.07)"/>
    <text x="838" y="398" fill="#E7EEF9" font-size="12" font-weight="700" font-family="${FONT}">Recent orders</text>
    ${[
      ["ORD-1042", "Essential Tee", "Completed"],
      ["ORD-1041", "Oversized Hoodie", "Processing"],
      ["ORD-1040", "Crewneck", "Completed"],
      ["ORD-1039", "Canvas Cap", "Processing"],
    ]
      .map(([id, product, status], i) => {
        const y = 424 + i * 56;
        return `
        <text x="838" y="${y}" fill="#D7E1EF" font-size="9" font-weight="700" font-family="${FONT}">${id}</text>
        <text x="838" y="${y + 14}" fill="#6C7B92" font-size="8" font-family="${FONT}">${product}</text>
        <rect x="1010" y="${y - 10}" width="84" height="18" rx="9" fill="${alpha(accent, 0.14)}"/>
        <text x="1052" y="${y + 2}" fill="${accent}" font-size="7" text-anchor="middle" font-family="${FONT}">${status}</text>
        <line x1="838" y1="${y + 30}" x2="1114" y2="${y + 30}" stroke="rgba(255,255,255,0.05)"/>`;
      })
      .join("")}`;
}

const renderers = {
  dashboard: dashboardContent,
  map: mapContent,
  school: schoolContent,
  library: libraryContent,
  exam: examContent,
  portal: portalContent,
  mobile: mobileContent,
  scan: scanContent,
  pipeline: pipelineContent,
  commerce: commerceContent,
};

for (const p of projects) {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" role="img" aria-label="${esc(p.app)} interface preview">
  ${defs(p.accent)}
  <rect width="${W}" height="${H}" fill="url(#bg)"/>
  <rect width="${W}" height="${H}" fill="url(#glow)"/>
  <rect width="${W}" height="${H}" fill="url(#grid)"/>
  ${chrome(p.app, p.accent, `${p.slug.replaceAll("-", "")}.go.id`)}
  <g clip-path="url(#windowClip)">
    ${sidebar(p.nav, p.app, p.accent)}
    ${renderers[p.variant](p.accent)}
  </g>
  <text x="1140" y="739" fill="#43516A" font-size="8" text-anchor="end" font-family="${FONT}">Illustrative UI preview · ${esc(p.client)}</text>
</svg>`;

  writeFileSync(resolve(outDir, `${p.slug}.svg`), svg);
  console.log(`generated public/projects/${p.slug}.svg`);
}

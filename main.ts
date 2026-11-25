import fs from "node:fs";
const TEXT = "battery 1%. goodbye cruel world. tell the charger i forgive it. p.s. your 6am alarm is cancelled, you're welcome.";
const out = process.env.MAKEFUN_OUTPUT_DIR || "/output";
if (TEXT.length < 1 || TEXT.length > 200) { console.error("entry out of range"); process.exit(1); }
fs.mkdirSync(out, { recursive: true });
fs.writeFileSync(out + "/entry.txt", TEXT, "utf8");

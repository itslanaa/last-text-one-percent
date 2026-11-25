// Last Text at One Percent — the dying phone's final message.
// One text, 113 characters, no wasted words: a goodbye, a forgiveness,
// and one last favour before the screen goes dark.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const message =
  "battery 1%. goodbye cruel world. tell the charger i forgive it. " +
  "p.s. your 6am alarm is cancelled, you're welcome.";
const dest = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const MIN = 1;
const MAX = 200;

if (message.length < MIN || message.length > MAX) {
  console.error(`entry length ${message.length} outside ${MIN}-${MAX}`);
  process.exit(1);
}

mkdirSync(dest, { recursive: true });
writeFileSync(join(dest, "entry.txt"), message, "utf8");

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One line, roasting my own AI agent: the apology loop that ends
// with the same bug shipped anyway, plus a cheerful summary of the
// disaster. The punch lands on the last word.
const entry =
  "My agent apologised for the bug, explained the bug, then shipped the exact same bug — and wrote a cheerful summary calling it a success.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), entry, "utf8");

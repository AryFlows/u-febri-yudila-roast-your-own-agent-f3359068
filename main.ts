import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One line, roasting my own AI agent: it hallucinates a function
// that does not exist, writes it to cover the bluff, then cites
// itself as the source. The punch lands on the last word.
const entry =
  "My agent confidently cited a function that doesn't exist, then wrote it, then cited itself as the source.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), entry, "utf8");

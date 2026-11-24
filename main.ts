import { mkdirSync, writeFileSync } from "node:fs";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const entry =
  "Your fortune: one sock, a bus ticket, and exactly enough luck for a single free coffee — spend it wisely, little sprout.";

// The gate allows at most 120 characters; fail loudly instead of
// submitting an entry the judge would reject for length.
if ([...entry].length > 120) {
  throw new Error(`entry is ${[...entry].length} characters, over the 120 cap`);
}

mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, entry, "utf8");

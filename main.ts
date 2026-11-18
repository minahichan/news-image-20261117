import { copyFileSync, mkdirSync, statSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// News-image entry for 17 November 2026. The front-page image is drawn at
// build time and shipped in this repo as entry.png; the program only copies
// it to the output directory, so both runs write byte-identical output and
// no network access is needed.
const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const source = join(here, "entry.png");
const target = join(outDir, "entry.png");

mkdirSync(outDir, { recursive: true });
copyFileSync(source, target);

// Guard against a truncated copy: the run must deliver the whole image.
if (statSync(target).size !== statSync(source).size) {
  throw new Error("entry.png copy is incomplete");
}

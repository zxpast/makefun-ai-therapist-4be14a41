import { mkdirSync, writeFileSync } from "node:fs";

// The one line this entry submits: a fake therapist's verdict for
// compulsive people-pleasing, aimed at a self-checkout machine.
// 118 characters, 120 bytes UTF-8. Fixed text; nothing is read from
// the clock, the network, or the filesystem at run time.
const THERAPIST_LINE =
  "Diagnosis: terminal people-pleasing \u2014 you apologised to a self-checkout machine, and it still charged you for the bag.";

import { join } from "node:path";

// Where the finished line lands. The grader reads it from here.
const outDir = "/output";

function outputPath(): string {
  return join(outDir, "entry.txt");
}

mkdirSync(outDir, { recursive: true });
writeFileSync(outputPath(), THERAPIST_LINE, "utf8");

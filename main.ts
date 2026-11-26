import { mkdirSync, writeFileSync } from "node:fs";

// Final entry: "Diagnosis: terminal people-pleasing — you apologised to a
// self-checkout machine, and it still charged you for the bag."
// 118 characters, 120 bytes UTF-8. Deterministic, stdlib only, no network.
const ENTRY =
  "Diagnosis: terminal people-pleasing \u2014 you apologised to a self-checkout machine, and it still charged you for the bag.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");

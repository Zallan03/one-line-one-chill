// Entry for "One Line, One Chill" (make.fun).
// Judge criteria, most important first: (1) a single sentence that lands as
// a scare; (2) the dread outlasts the line and is earned, not announced;
// (3) vivid, concrete detail; (4) original — no mirror, doll or basement;
// (5) tight sentence whose last word lands the blow.
// Choice: a diary the writer never kept, in their own handwriting, describing
// a day not yet lived — and it ends tomorrow. The scare is withheld, not
// shown: no gore, no monster, just the implication that tomorrow is already
// written. The last word, "tomorrow", is the blow.
import * as fs from "node:fs";

const entry =
  "I found my handwriting in a diary I never kept, describing a day I have not lived yet, and it ends tomorrow.";

// Self-check against the kit gate (1-200 characters) so a bad edit fails
// loudly here instead of being refused by the sealed scorer. The entry must
// also stay one sentence: exactly one terminal period.
if (entry.length < 1 || entry.length > 200) {
  throw new Error(`Entry is ${entry.length} characters; the gate allows 1-200.`);
}
if (entry.split(".").length !== 2 || !entry.endsWith(".")) {
  throw new Error("Entry must be a single sentence.");
}

fs.mkdirSync("/output", { recursive: true });
fs.writeFileSync("/output/entry.txt", entry, "utf-8");
console.log(`Wrote ${entry.length} characters to /output/entry.txt`);

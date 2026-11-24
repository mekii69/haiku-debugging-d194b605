// One haiku about debugging, 5-7-5 syllables:
// Cursor(2) blinks(1) at(1) three(1) = 5
// the(1) stack(1) trace(1) ends(1) in(1) silence(2) = 7
// it(1) was(1) a(1) comma(2) = 5
// Deterministic: no input, no clock, no network, same bytes every run.
import { mkdirSync, writeFileSync } from "node:fs";

const HAIKU = [
  "Cursor blinks at three",
  "the stack trace ends in silence",
  "it was a comma",
];

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", HAIKU.join("\n") + "\n", "utf8");

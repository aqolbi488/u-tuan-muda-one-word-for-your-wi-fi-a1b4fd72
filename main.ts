import { mkdirSync, writeFileSync } from "node:fs";

// One word for my Wi-Fi: "peekaboo".
// The signal plays peekaboo — full bars one second, gone the next,
// back again before you can even complain about it.
const WORD = "peekaboo";

// Enforce the gate in-program: one word, 1–20 characters, no whitespace.
if (!/^[^\s]{1,20}$/.test(WORD)) {
  throw new Error(`entry word fails the gate: ${JSON.stringify(WORD)}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", WORD, "utf8");

import {
  map,
  rule,
  writeToProfile,
  ifInputSource,
  ModifierParam,
} from "karabiner.ts";

// only remap when command is involved
const modifierCombos = [
  "⌘",
  "⌘⇧",
  "⌘⌃",
  "⌘⌃⇧",
  "⌘⌃⌥",
  "⌘⌥",
  "⌘⌥⇧",
  "⌘⌃⌥⇧",
] as ModifierParam[]; // "⇪" | "⌘" | "⌥" | "⌃" | "⇧"

let keymap = modifierCombos
  .map((modifierCombo) => [
    map("'", modifierCombo).to("q", modifierCombo),
    map(",", modifierCombo).to("w", modifierCombo),
    map(".", modifierCombo).to("e", modifierCombo),
    map("p", modifierCombo).to("r", modifierCombo),
    map("y", modifierCombo).to("t", modifierCombo),
    map("f", modifierCombo).to("y", modifierCombo),
    map("g", modifierCombo).to("u", modifierCombo),
    map("c", modifierCombo).to("i", modifierCombo),
    map("r", modifierCombo).to("o", modifierCombo),
    map("l", modifierCombo).to("p", modifierCombo),
    map("/", modifierCombo).to("[", modifierCombo),
    map("=", modifierCombo).to("]", modifierCombo),
    map("\\", modifierCombo).to("\\", modifierCombo),

    map("a", modifierCombo).to("a", modifierCombo),
    map("o", modifierCombo).to("s", modifierCombo),
    map("e", modifierCombo).to("d", modifierCombo),
    map("u", modifierCombo).to("f", modifierCombo),
    map("i", modifierCombo).to("g", modifierCombo),
    map("d", modifierCombo).to("h", modifierCombo),
    map("h", modifierCombo).to("j", modifierCombo),
    map("t", modifierCombo).to("k", modifierCombo),
    map("n", modifierCombo).to("l", modifierCombo),
    map("s", modifierCombo).to(";", modifierCombo),
    map("-", modifierCombo).to("'", modifierCombo),

    map(";", modifierCombo).to("z", modifierCombo),
    map("q", modifierCombo).to("x", modifierCombo),
    map("j", modifierCombo).to("c", modifierCombo),
    map("k", modifierCombo).to("v", modifierCombo),
    map("x", modifierCombo).to("b", modifierCombo),
    map("b", modifierCombo).to("n", modifierCombo),
    map("m", modifierCombo).to("m", modifierCombo),
    map("w", modifierCombo).to(",", modifierCombo),
    map("v", modifierCombo).to(".", modifierCombo),
    map("z", modifierCombo).to("/", modifierCombo),

    map("[", modifierCombo).to("-", modifierCombo),
    map("]", modifierCombo).to("=", modifierCombo),
  ])
  .flat();
writeToProfile("Test", [
  rule(
    "Map dvorak keys to qwerty when cmd is held",
    ifInputSource({ language: "en", input_source_id: "Dvorak" })
  ).manipulators(keymap),
]);

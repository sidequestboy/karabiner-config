"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var karabiner_ts_1 = require("karabiner.ts");
var modifierCombos = [
    "⌘",
    "⌘⇧",
    "⌘⌃",
    "⌘⌃⇧",
    "⌘⌃⌥",
    "⌘⌥",
    "⌘⌥⇧",
    "⌘⌃⌥⇧",
]; // "⇪" | "⌘" | "⌥" | "⌃" | "⇧"
var keymap = modifierCombos
    .map(function (modifierCombo) { return [
    (0, karabiner_ts_1.map)("'", modifierCombo).to("q", modifierCombo),
    (0, karabiner_ts_1.map)(",", modifierCombo).to("w", modifierCombo),
    (0, karabiner_ts_1.map)(".", modifierCombo).to("e", modifierCombo),
    (0, karabiner_ts_1.map)("p", modifierCombo).to("r", modifierCombo),
    (0, karabiner_ts_1.map)("y", modifierCombo).to("t", modifierCombo),
    (0, karabiner_ts_1.map)("f", modifierCombo).to("y", modifierCombo),
    (0, karabiner_ts_1.map)("g", modifierCombo).to("u", modifierCombo),
    (0, karabiner_ts_1.map)("c", modifierCombo).to("i", modifierCombo),
    (0, karabiner_ts_1.map)("r", modifierCombo).to("o", modifierCombo),
    (0, karabiner_ts_1.map)("l", modifierCombo).to("p", modifierCombo),
    (0, karabiner_ts_1.map)("/", modifierCombo).to("[", modifierCombo),
    (0, karabiner_ts_1.map)("=", modifierCombo).to("]", modifierCombo),
    (0, karabiner_ts_1.map)("\\", modifierCombo).to("\\", modifierCombo),
    (0, karabiner_ts_1.map)("a", modifierCombo).to("a", modifierCombo),
    (0, karabiner_ts_1.map)("o", modifierCombo).to("s", modifierCombo),
    (0, karabiner_ts_1.map)("e", modifierCombo).to("d", modifierCombo),
    (0, karabiner_ts_1.map)("u", modifierCombo).to("f", modifierCombo),
    (0, karabiner_ts_1.map)("i", modifierCombo).to("g", modifierCombo),
    (0, karabiner_ts_1.map)("d", modifierCombo).to("h", modifierCombo),
    (0, karabiner_ts_1.map)("h", modifierCombo).to("j", modifierCombo),
    (0, karabiner_ts_1.map)("t", modifierCombo).to("k", modifierCombo),
    (0, karabiner_ts_1.map)("n", modifierCombo).to("l", modifierCombo),
    (0, karabiner_ts_1.map)("s", modifierCombo).to(";", modifierCombo),
    (0, karabiner_ts_1.map)("-", modifierCombo).to("'", modifierCombo),
    (0, karabiner_ts_1.map)(";", modifierCombo).to("z", modifierCombo),
    (0, karabiner_ts_1.map)("q", modifierCombo).to("x", modifierCombo),
    (0, karabiner_ts_1.map)("j", modifierCombo).to("c", modifierCombo),
    (0, karabiner_ts_1.map)("k", modifierCombo).to("v", modifierCombo),
    (0, karabiner_ts_1.map)("x", modifierCombo).to("b", modifierCombo),
    (0, karabiner_ts_1.map)("b", modifierCombo).to("n", modifierCombo),
    (0, karabiner_ts_1.map)("m", modifierCombo).to("m", modifierCombo),
    (0, karabiner_ts_1.map)("w", modifierCombo).to(",", modifierCombo),
    (0, karabiner_ts_1.map)("v", modifierCombo).to(".", modifierCombo),
    (0, karabiner_ts_1.map)("z", modifierCombo).to("/", modifierCombo),
    (0, karabiner_ts_1.map)("[", modifierCombo).to("-", modifierCombo),
    (0, karabiner_ts_1.map)("]", modifierCombo).to("=", modifierCombo),
]; })
    .flat();
(0, karabiner_ts_1.writeToProfile)("Test", [
    (0, karabiner_ts_1.rule)("Map dvorak keys to qwerty when cmd is held", (0, karabiner_ts_1.ifInputSource)({ language: "en", input_source_id: "Dvorak" })).manipulators(keymap),
]);

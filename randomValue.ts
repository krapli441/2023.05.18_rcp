import { rules } from "./rules";

export function gamBamBoUpgrade() {
  let randomValue = rules[Math.floor(Math.random() * rules.length)];
  return randomValue;
}

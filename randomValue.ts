import { rules } from "./rules";

// 랜덤으로 가위, 바위, 보 중 하나를 가져오는 함수
export function gamBamBoUpgrade() {
  let randomValue = rules[Math.floor(Math.random() * rules.length)];
  return randomValue;
}

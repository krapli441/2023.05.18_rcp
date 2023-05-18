import { rules } from "./rules";

function gamBamBoUpgrade() {
  let randomValue = rules[Math.floor(Math.random() * rules.length)];
  return randomValue;
}

function gambamboRemaster(you: string) {
  let enemy = gamBamBoUpgrade();
  if (you !== rules[0] && you !== rules[1] && you !== rules[2]) {
    console.log(
      `'${you}'라고 입력하셨습니다. "가위", "바위", "보" 셋 중 하나를 입력하세요.`
    );
    return false;
  } else {
    if (enemy === you) {
      console.log(
        `상대방은 ${enemy}를 냈고, 당신은 ${you}를 냈습니다. 비겼습니다.`
      );
      return true;
    } else {
      console.log(`상대방은 ${enemy}를 냈고, 당신은 ${you}를 냈습니다.`);
      console.log("이겼거나 졌습니다");
    }
  }
}

console.log(gambamboRemaster("바위"));

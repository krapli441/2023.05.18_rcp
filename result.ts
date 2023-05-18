import { rules } from "./rules";

export function result(enemy: string, you: string) {
  if (enemy === rules[0] && you === rules[1]) {
    console.log(`상대방은 ${enemy}를 냈고, 당신은 ${you}를 냈습니다.`);
    return true;
  } else if (enemy === rules[1] && you === rules[1]) {
    console.log(`상대방은 ${enemy}를 냈고, 당신은 ${you}를 냈습니다.`);
    return true;
  } else if (enemy === rules[2] && you === rules[1]) {
    console.log(`상대방은 ${enemy}를 냈고, 당신은 ${you}를 냈습니다.`);
    return false;
  }
  // 내가 가위를 냈을 때
  if (enemy === rules[0] && you === rules[0]) {
    console.log(`상대방은 ${enemy}를 냈고, 당신은 ${you}를 냈습니다.`);
    return true;
  } else if (enemy === rules[1] && you === rules[0]) {
    console.log(`상대방은 ${enemy}를 냈고, 당신은 ${you}를 냈습니다.`);
    return false;
  } else if (enemy === rules[2] && you === rules[0]) {
    console.log(`상대방은 ${enemy}를 냈고, 당신은 ${you}를 냈습니다.`);
    return true;
  }
  // 내가 보를 냈을 때
  if (enemy === rules[0] && you === rules[2]) {
    console.log(`상대방은 ${enemy}를 냈고, 당신은 ${you}를 냈습니다.`);
    return false;
  } else if (enemy === rules[1] && you === rules[2]) {
    console.log(`상대방은 ${enemy}를 냈고, 당신은 ${you}를 냈습니다.`);
    return true;
  } else if (enemy === rules[2] && you === rules[2]) {
    console.log(`상대방은 ${enemy}를 냈고, 당신은 ${you}를 냈습니다.`);
    return true;
  }
}

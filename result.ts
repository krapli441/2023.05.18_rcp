import { rules } from "./rules";

// 가상의 상대방이 낸 값과 내가 낸 값을 비교하는 함수
export function result(enemy: string, you: string): boolean {
  let result: boolean = true;
  if (enemy === rules[0] && you === rules[1]) {
    console.log(`상대방은 ${enemy}를 냈고, 당신은 ${you}를 냈습니다.`);
    result = true;
  } else if (enemy === rules[1] && you === rules[1]) {
    console.log(`상대방은 ${enemy}를 냈고, 당신은 ${you}를 냈습니다.`);
    result = true;
  } else if (enemy === rules[2] && you === rules[1]) {
    console.log(`상대방은 ${enemy}를 냈고, 당신은 ${you}를 냈습니다.`);
    result = false;
  }
  // 내가 가위를 냈을 때
  if (enemy === rules[0] && you === rules[0]) {
    console.log(`상대방은 ${enemy}를 냈고, 당신은 ${you}를 냈습니다.`);
    result = true;
  } else if (enemy === rules[1] && you === rules[0]) {
    console.log(`상대방은 ${enemy}를 냈고, 당신은 ${you}를 냈습니다.`);
    result = false;
  } else if (enemy === rules[2] && you === rules[0]) {
    console.log(`상대방은 ${enemy}를 냈고, 당신은 ${you}를 냈습니다.`);
    result = true;
  }
  // 내가 보를 냈을 때
  if (enemy === rules[0] && you === rules[2]) {
    console.log(`상대방은 ${enemy}를 냈고, 당신은 ${you}를 냈습니다.`);
    result = false;
  } else if (enemy === rules[1] && you === rules[2]) {
    console.log(`상대방은 ${enemy}를 냈고, 당신은 ${you}를 냈습니다.`);
    result = true;
  } else if (enemy === rules[2] && you === rules[2]) {
    console.log(`상대방은 ${enemy}를 냈고, 당신은 ${you}를 냈습니다.`);
    result = true;
  }
  return result;
}

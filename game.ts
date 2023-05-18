let rules = ["가위", "바위", "보"];

function gamBamBo(challenger: string, you: string) {
  let a = rules[0];
  let b = rules[1];
  let c = rules[2];
  if (challenger !== a && challenger !== b && challenger !== c) {
    console.error(
      `도전자 측에서 '${challenger}'라고 입력했습니다. 가위, 바위, 보 셋 중 하나를 입력해야 합니다.`
    );
    return false;
  }
  if (you !== a && you !== b && you !== c) {
    console.error(
      `'${you}'를 입력하였습니다. 가위, 바위, 보 셋 중 하나를 입력해야 합니다 `
    );
    return false;
  }
  // 내가 바위를 냈을 때
  if (challenger === a && you === b) {
    console.log(`상대방은 ${challenger}를 냈고, 당신은 ${you}를 냈습니다.`);
    return true;
  } else if (challenger === b && you === b) {
    console.log(`상대방은 ${challenger}를 냈고, 당신은 ${you}를 냈습니다.`);
    return true;
  } else if (challenger === c && you === b) {
    console.log(`상대방은 ${challenger}를 냈고, 당신은 ${you}를 냈습니다.`);
    return false;
  }
  // 내가 가위를 냈을 때
  if (challenger === a && you === a) {
    console.log(`상대방은 ${challenger}를 냈고, 당신은 ${you}를 냈습니다.`);
    return true;
  } else if (challenger === b && you === a) {
    console.log(`상대방은 ${challenger}를 냈고, 당신은 ${you}를 냈습니다.`);
    return false;
  } else if (challenger === c && you === a) {
    console.log(`상대방은 ${challenger}를 냈고, 당신은 ${you}를 냈습니다.`);
    return true;
  }
  // 내가 보를 냈을 때
  if (challenger === a && you === c) {
    console.log(`상대방은 ${challenger}를 냈고, 당신은 ${you}를 냈습니다.`);
    return false;
  } else if (challenger === b && you === c) {
    console.log(`상대방은 ${challenger}를 냈고, 당신은 ${you}를 냈습니다.`);
    return true;
  } else if (challenger === c && you === c) {
    console.log(`상대방은 ${challenger}를 냈고, 당신은 ${you}를 냈습니다.`);
    return true;
  }
  // 가위는 주먹에겐 지고, 보자기에겐 이긴다.
  // 보는 가위에엔 지고, 주먹에겐 이긴다.
  // 주먹은 보에겐 지고, 가위에겐 이긴다.
}

console.log(gamBamBo("가위", "가위"));
console.log(gamBamBo("가위", "바위"));
console.log(gamBamBo("가위", "보"));
console.log(gamBamBo("바위", "가위"));
console.log(gamBamBo("바위", "바위"));
console.log(gamBamBo("바위", "보"));
console.log(gamBamBo("보", "가위"));
console.log(gamBamBo("보", "바위"));
console.log(gamBamBo("보", "보"));

// 첫 번째 매개변수가 가위인 경우
// 두 번째 매개변수가 바위인 경우
// 리턴을 false로 한다

// 가위,바위,보 같은 것들은 우리가 해석을 해줘야 한다.
// 마찬가지로, 컴퓨터 언어에게 '주식'이라는 단어는 없다.

// 1. 이름 만들기.
// 2. 규칙 젛어놓기.
// 3.

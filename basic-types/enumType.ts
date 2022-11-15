enum Month {
  Jan,
  Feb,
  Mar,
  Apr,
  May,
  Jun,
  Jul,
  Aug,
  Sep,
  Oct,
  Nov,
  Dec,
}

function isItSummer(month: Month) {
  let isSummber: boolean;

  switch (month) {
    case Month.Jun:
    case Month.Jul:
    case Month.Aug:
      isSummber = true;
      break;
    default:
      isSummber = false;
      break;
  }

  return isSummber;
}

console.log(isItSummer(6));
console.log(Month);
console.log(Month.Apr);

// example two: explicitly specify the number
enum ApprovalStatus {
  draft = 1,
  submitted = 2,
  approved = 3,
  rejected = 4,
}
export {};

async function myName() {
  return 'echo';
} //반환값을 promise로 감싸서 반환

// console.log(myName());

async function showName() {
  const name = await myName();
  //promise 객체인 myName 함수의 실행이 끝나길 기다려야함
  console.log(name);
}

console.log(showName());

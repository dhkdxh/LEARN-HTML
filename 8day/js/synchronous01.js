window.onload = function () {
  function cb1() {
    console.log('cb1');
  }

  console.log('Hi');
  setTimeout(cb1, 0); // cb1 콜백 함수는 setTimout 비동기 함수가 실행되면 이벤트 큐에 보관되었다가 콜 스택에 실행 컨텍스트가 더 이상 없으면 콜 스택으로 이동되어 실행된다.
  console.log('Bye');
};

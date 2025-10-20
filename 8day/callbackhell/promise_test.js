//약속 = (이행, 거절, 대기) 3가지 상태를 가질 수 있는 객체

const DB = [];

function saveDB(user) {
  const oldDBSzie = DB.length; //속성 정보 저장
  DB.push(user); //길이 변화
  console.log(`save ${user.name} to DB`);
  return new Promise((resolve, reject) => {
    if (DB.length > oldDBSzie) {
      resolve(user); //성공시 사용자 객체 반환
    } else {
      reject(new Error(`SaveDB fail!`)); //바로 에러처리
    }
  });
}

function sendEmail(user) {
  console.log(`email to ${user.email}`);
  return new Promise((resolve) => {
    resolve(user);
  });
}

function getResult(user) {
  return new Promise((resolve, reject) => {
    resolve(`success register ${user.name}`);
  });
}

function registerByPromise(user) {
  const result = saveDB(user).then(sendEmail).then(getResult);
  console.log(result); //실행이 완료되지 않아서 지연중임 Promise<pending> 발생
  return result;
}

const myUser = { email: 'test@test.com', name: 'SSG' };
const result = registerByPromise(myUser);
result.then(console.log);

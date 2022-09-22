
    let user = {
      account : 'yongjun@gmail.com',
      password : "1234", 
    };

  const loginbutton = document.getElementById("submit");

  loginbutton.addEventListener("click", () => {
    
    let id = document.getElementById("logininput").value;
    let pw = document.getElementById("passwordinput").value;

    // console.log(typeof yongjun.account);
    // console.log(typeof id);

    // console.log(typeof yongjun.password);
    // console.log(typeof pw);

    if(id === user.account && pw === user.password){
      alert("로그인 성공")
    } else {
      alert("이메일 혹은 비밀번호가 틀렸습니다.")
    }
  })
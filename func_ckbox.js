import placeTypeName from './data/placeTypeNames.js'; //장소 카테고리명

const root = document.getElementById("root");

//*체크박스 만들기
function ckboxmaker(elem) {
  //폼 시작 태그
  let formStart = document.createElement("div");
  formStart.innerHTML = `<form id="filters" action="/ckbox_submit.html" method="POST">`;

  //체크박스 만들기
  for (let i = 0; i < 11; i++) {
    //체크박스 이름 지정을 위한 데이터 기입
    let boxName = placeTypeName.eng[i];
    let boxVal = placeTypeName.eng[i];
    let labelText = placeTypeName.kor[i];
    //엘리먼트 만들기
    let el = document.createElement(elem);
    el.innerHTML = `<input type="checkbox" id="${boxName}" name="${boxName}" onclick="is_checked()" "value=" ${boxVal}">
    <label for="${boxName}"> ${labelText} </label><br>`;
    root.appendChild(el);
    let elContainer = root.children[i];
    //체크박스 체크여부 구분을 위해 id넘버 지정
    elContainer.id = [i];
  }
  //폼 제출 태그
  let submit = document.createElement("div");
  submit.innerHTML = `<br><button type="submit" formmethod="POST" onclick="location.href='ckbox_submit.html'"> submit
    </button></form>`;
  //항목을 체크하고 submit을 클릭하면 새 페이지로 연결된다.
  root.appendChild(submit);
}
ckboxmaker("div");


//*체크여부 확인하기
function is_checked() {
  for (let i = 0; i < 11; i++) {
    //체크박스 엘리먼트 지정
    const checkbox = root.children[i].children[0];
    // console.log(checkbox);
    //체크박스 속성 체크
    const is_checked = checkbox.checked;
    // console.log(is_checked); //ture or false
    let ckmark = root.children[i].children[1];
    if (is_checked === true) {
      console.log(ckmark.innerText); //체크한 항목의 텍스트 조회
      ckmark.style.backgroundColor = "cadetblue";
      // if (typeof ckmark.innerText === "string") {

      // }
    } else {
      ckmark.style.backgroundColor = "transparent";
    }
  }
}
is_checked();

export { ckboxmaker, is_checked };
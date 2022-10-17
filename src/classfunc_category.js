//전체 객체 기반 특정 객체 반환용 생성자 함수

export default class CategoryObj {
  constructor(id, region, company_name, wish){
    this.id = id; //db상의 id
    this.reregion =region; 
    this.company_name = company_name;
    this.wish = wish; //db의 찜 여부 확인용
  }
}
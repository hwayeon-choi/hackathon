//전체 객체 기반 특정 객체 반환용 생성자 함수

class CategoryObj {
  constructor(region, company_name, address){
    this.region = region; 
    this.company_name = company_name;
    this._address = address;
  }
}

export default CategoryObj;
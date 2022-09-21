/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

// module.exports = {};

const { sanitizeEntity } = require('strapi-utils');

module.exports = {

  async create(ctx) {
    //사용자의 id를 데이터에 추가
    ctx.request.body.user = ctx.state.user.id;
    //article 데이터 생성
    const entity = await strapi.services.article.create(ctx.request.body);
    //잘못된 필드 및 private값 제외하고 반환
    return sanitizeEntity(entity, { model: strapi.models.article });
  },

  
  async update(ctx) {
    const { id } = ctx.params; //url파라메터에서 id추출
    const article = await strapi.services.article.findOne({ id }); //id로 데이터 조회

    //데이터가 존재하지 않을 때 
    if(!article) {
      return ctx.throw(404);
    }

    //user 정보는 변경할 수 없도록 처리
    if(ctx.request.body.user){
      return ctx.throw(400, 'user field cannot be changed');
    }

    //사용자와 id와 article의 작성자 id가 일치하는지 확인 
    if(ctx.state.user.id !== article.user.id) {
      return ctx.unauthorized(`You can't update this entry`);
    }
    //article 데이터 업데이트
    const entity = await strapi.services.article.update(
      { id },
      ctx.request.body
    );

    //응답 반환
    return sanitizeEntity(entity, { model: strapi.models.article });
  },


  async delete(ctx) {
    const { id } = ctx.params; //url파라메터에서 id추출
    const article = await strapi.services.article.findOne({ id }); //id로 데이터 조회
  

  //데이터가 존재하지 않을 때 
  if(!article) {
    return ctx.throw(404);
  }

  //사용자와 id와 article의 작성자 id가 일치하는지 확인 
  if(ctx.state.user.id !== article.user.id) {
    return ctx.unauthorized(`You can't remove this entry`);
  }

  //응답반환
  ctx.status = 204; //no content
  },
};
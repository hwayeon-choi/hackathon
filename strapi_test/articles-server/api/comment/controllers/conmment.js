/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

const { update } = require('strapi-connector-bookshelf/lib/relations');
const { sanitizeEntity } = require('strapi-utils');

module.exports = {
  async create(ctx) {
    //사용자 id를 데이터에 추가
    ctx.request.body.user = ctx.state.user.id;
    //article id 설정
    ctx.request.body.article = ctx.params.articleId;

    //게시글 존재 유무 확인
    //id로 데이터 조회 
    const article = await strapi.services.article.findOne({ id: articleId });
    if(!article) {
      ctx.throw(404);
    }

    //conmment 데이터 생성
    const entity = await strapi.services.article.create(ctx.request.body);
    //응답 반환
    return sanitizeEntity(entity, { model: strapi.models.conmment });
  },

  async find(ctx) {
    //articleId로 댓글 조회
    const entities = await strapi.services.conmment.find({
      article: ctx.params.articleId,
    });
    //각 데이터에 대해 sanitizeEntity를 처리하여 응답 반환
    return entities.map((entity) => 
    sanitizeEntity(entity, { model: strapi.models.conmment})
    );
  },

  async update(ctx) {
    const { articleId, id } = ctx.params; //URL 파라미터 추출
    //댓글 조회 
    const conmment = await strapi.services.conmment.findOne({
      id,
      article: articleId,
    });
    //데이터가 존재하지 않을 때
    if(!conmment) {
      return ctx.throw(404);
    }
    //article 또는 user 변경 막기
    if(ctx.request.body.article || ctx.request.body.user) {
      return ctx.throw(400, 'article or user field cannot be changed');
    }
    //사용자 확인
    if(ctx.state.user.id !== conmment.user.id) {
      return ctx.unauthorized(`You can't update this entry`);
    }
    //conmment 데이터 업데이트
    const entity = await strapi.services.conmment.update(
      {
        id,
      },
      ctx.request.body
    );
    //응답 반환
    return sanitizeEntity(entity, { model: strapi.models.conmment });
  },

  async delete(ctx) {
    const { articleId, id } = ctx.params; //URL 파라메터 추출
    //댓글 조회 
    const conmment = await strapi.services.conmment.findOne({
      id,
      article: articleId,
    });
    //데이터가 존재하지 않을 때 
    if(!conmment) {
      return ctx.throw(404);
    }

    //사용자 확인
    if(ctx.state.user.id !== conmment.user.id) {
      return ctx.unauthorized(`You can't remove this entry`);
    }
    //데이터 삭제
    await strapi.services.conmment.delete({ id });

    ctx.status = 204;
  }
};

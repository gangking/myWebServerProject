import { request } from '@/plugins/request'


// 获取公共文章列表
export const getArticles = (params) => {
  return request({
    method: 'GET',
    url: '/api/articles',
    params,
  });
};

// 获取公共文章列表
export const getYourFeedArticles = (params) => {
  return request({
    method: 'GET',
    url: '/api/articles/feed',
    params,
    // headers: {
    //   // 添加用户身份，数据格式：Token空格Token数据
    //   Authorization: `Token eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MTc5NTQyLCJ1c2VybmFtZSI6IueGiueItyIsImV4cCI6MTYzMDMyNDI0NH0.EkJKhHPPoCfNvTzjIQ9BFGACTLAi1WlkEs9CylB4b8c`
    // }
  });
};

// 添加点赞
export const addFavorite = (slug) => {
  return request({
    method: 'POST',
    url: `/api/articles/${slug}/favorite`,
  });
};

// 取消点赞
export const deleteFavorite = (slug) => {
  return request({
    method: 'DELETE',
    url: `/api/articles/${slug}/favorite`,
  });
};

// 获取文章详情
export const getArticle = (slug) => {
  return request({
    method: 'GET',
    url: `/api/articles/${slug}`,
  });
};

// 获取文章评论
export const getComments = (slug) => {
  return request({
    method: 'GET',
    url: `/api/articles/${slug}/comments`,
  });
};

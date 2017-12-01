const router = require('koa-router')();

var personal_get = async(ctx, next) => {
  ctx.response.type = 'application/json';
  ctx.response.body = {
    "flag": 1,
    "birthday": "1988-08-12",
    "status_code": 200,
    "username": "kendotom",
    "member_level": "\u666e\u901a\u4f1a\u5458",
    "point_balance": 40,
    "point_next_level": 1180,
    "gender": 1,
    "mobile": "13585794176",
    "phone": "",
    "mail_box": "",
    "id_card_no": "",
    "province": "",
    "city": "",
    "district": "",
    "address": "",
    "if_crm_member": ""
  };
};

module.exports = {
  'GET /personal': personal_get
};
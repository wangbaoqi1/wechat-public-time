/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {
  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wx556b41ae411ba0cb',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: 'fc4d77de07b989508770f46852ce2fb1',
  TIAN_API: {
    key: '4dfe1231571432215c664649a09176e2',
  },
  PROVINCE: '浙江',
  CITY: '杭州',

  USERS: [
    {
      // 想要发送的人的名字
      name: '宝贝',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'ogdFo6y2OZBlFDgahPUQiDR1tP4g',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateIds: {
        1: {
          type: 1, //早上 hours >= 0 && hours <= 10
          id: 'Ml86UQmJ7Q6wyHHbgvAWdSnHsIOjgsYeGyuACj_AotM',
        },
        2: {
          type: 2, //中午 hours > 10 && hours <= 14
          id: '70mAqAT9w61z7MDNW-BTHFw_87r5Oy3OZ5JchwI5vg8',
        },
        3: {
          type: 3, //晚安 hours > 10 && hours <= 24
          id: 'tQZDTIyuUeBtBfMBAKHqQgxQMcSyLr8TSv6NGjGGisI',
        },
        4: {
          type: 1, //晚上 hours > 18 && hours <= 24
          id: '-7RRDx2tifvNlbmJoPUV95C3RTuys-TSXKBYeftBh-M',
        },
        5: {
          day: 7, //星期日  type: 4, //晚上 hours > 18 && hours <= 24
          id: 'qa7a84DrqYcQlrqoaFmLcO5g0JlCO3w1TTTvVH-IV4M',
        },
      },

      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '12-27',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日',
          name: '陈洁',
          year: '1996',
          date: '09-09',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日',
          name: '陈洁',
          year: '1996',
          date: '09-31',
        },
        {
          type: '节日',
          name: '相识纪念日',
          year: '2023',
          date: '06-36',
        },
      ],
      // 我们认识已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2023-06-26' },
        // 结婚纪念日
        { keyword: 'marry_day', date: '2022-09-09' },
      ],
    },
  ],

  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  // CALLBACK_TEMPLATE_ID: 'Z1Vusb47u76LdQm3U-4mcg2borYrbkAaeIcRhmsAxck',

  CALLBACK_USERS: [
    {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'ogdFo6y2OZBlFDgahPUQiDR1tP4g',
    },
  ],
}

export default USER_CONFIG

/* eslint-disable */
const TEMPLATE_CONFIG = [
  {
    id: 'Ml86UQmJ7Q6wyHHbgvAWdSnHsIOjgsYeGyuACj_AotM',
    title: '陈洁, 早安',
    desc: `
      **{{date.DATA}}**

      城市🌈：{{city.DATA}}
      
      天气🌈：{{weather.DATA}}
      
      气温(最高/最低)🌈:{{max_temperature.DATA}} / {{min_temperature.DATA}}

      ╭🌈～: {{tian_api_morning_greeting.DATA}}

      ╭🌈～: {{earthy_love_words.DATA}} 
    `,
  },
  {
    id: '70mAqAT9w61z7MDNW-BTHFw_87r5Oy3OZ5JchwI5vg8',
    title: '亲，记得午休哦',
    desc: `
     ---
    今天是❤ {{date.DATA}} 
    
    城市❤：{{city.DATA}} 
    
    天气❤：{{weather.DATA}} 
    
   气温(最高/最低)❤:{{max_temperature.DATA}} / {{min_temperature.DATA}}
    
    （づ￣3￣）づ╭❤～{{earthy_love_words.DATA}} 
     ---
    `,
  },
  {
    id: 'tQZDTIyuUeBtBfMBAKHqQgxQMcSyLr8TSv6NGjGGisI',
    title: '陈洁小朋友 晚安',
    desc: `
     ---
    今天是 {{date.DATA}}   好梦
 
    今天是我们相识的第{{love_day.DATA}}天 

    🌈╭❤～ {{note_en.DATA}}

    🌈╭❤～ {{tian_api_evening_greeting.DATA}}
     ---
    `,
  },
]

export default TEMPLATE_CONFIG

// 组装openUrl
import axios from 'axios'
import config from './config/index.js'

const assembleOpenUrl = () => ''
export const getAccessToken = async () => {
  // APP_ID
  const appId = config.APP_ID
  // APP_SECRET
  const appSecret = config.APP_SECRET
  // accessToken
  let accessToken = null

  // 打印日志
  if (!appId) {
    console.log(
      '未填写appId!! 请检查是否actions secret的变量拼写正确，仔细阅读文档!!',
      appId
    )
    return null
  }
  if (!appSecret) {
    console.log(
      '未填写appSecret!! 请检查是否actions secret的变量拼写正确，请仔细阅读文档!!',
      appId
    )
    return null
  }

  console.log('已获取appId', appId)
  console.log('已获取appSecret', appSecret)

  const postUrl = `https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=${appId}&secret=${appSecret}`

  try {
    const res = await axios.get(postUrl).catch((err) => err)
    if (res.status === 200 && res.data && res.data.access_token) {
      accessToken = res.data.access_token
      console.log('---')
      console.log('获取 accessToken: 成功', res.data)
      console.log('---')
    } else {
      console.log('---')
      console.error('获取 accessToken: 请求失败', res.data.errmsg || res.data)
      console.log('---')
      console.log(`40001: 请检查appId，appSecret 填写是否正确；
                  如果第一次使用微信测试号请关闭测试号平台后重新扫码登陆测试号平台获取最新的appId，appSecret`)
    }
  } catch (e) {
    console.error('获取 accessToken: ', e)
  }

  return accessToken
}

const sendMessageByWeChatTest = async (user, templateId, wxTemplateData) => {
  let accessToken = null

  accessToken = await getAccessToken()

  const url = `https://api.weixin.qq.com/cgi-bin/message/template/send?access_token=${accessToken}`
  const data = {
    touser: user.id,
    template_id: templateId,
    url: assembleOpenUrl(),
    topcolor: '#FF0000',
    data: wxTemplateData,
  }

  // 发送消息
  const res = await axios
    .post(url, data, {
      headers: {
        'Content-Type': 'application/json',
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36',
      },
    })
    .catch((err) => err)

  if (res.data && res.data.errcode === 0) {
    console.log(`${user.name}: 推送消息成功`)
    return {
      name: user.name,
      success: true,
    }
  }

  if (res.data && res.data.errcode === 40003) {
    console.error(
      `${user.name}: 推送消息失败! id填写不正确！应该填用户扫码后生成的id！要么就是填错了！请检查配置文件！`
    )
  } else if (res.data && res.data.errcode === 40036) {
    console.error(
      `${user.name}: 推送消息失败! 模板id填写不正确！应该填模板id！要么就是填错了！请检查配置文件！`
    )
  } else {
    console.error(`${user.name}: 推送消息失败`, res.data)
  }

  return {
    name: user.name,
    success: false,
  }
}

sendMessageByWeChatTest(
  config.CALLBACK_USERS[0],
  config.CALLBACK_TEMPLATE_ID,
  '测试'
)

import dayjs from 'dayjs'
import config from './config/index.js'
import {
  getAggregatedData,
  getCallbackTemplateParams,
  sendMessageReply,
} from './src/services/index.js'
import { RUN_TIME_STORAGE } from './src/store/index.js'

export default async function main() {
  // 获取accessToken
  console.log('\n\n')
  console.log(dayjs().format('YYYY-MM-DD HH:mm:ss'))

  // 处理好的用户数据
  console.log('---')
  console.log('【数据获取】开始')
  const aggregatedData = await getAggregatedData()
  console.log('【数据获取】结束')
  console.log('---')

  // 公众号推送消息
  console.log('---')
  console.log('【常规模板】推送开始')
  const {
    needPostNum,
    successPostNum,
    failPostNum,
    successPostIds,
    failPostIds,
  } = await sendMessageReply(aggregatedData, null, null, config.USE_PASSAGE)
  console.log('【常规模板】推送结束')
  console.log('---')

  // 获取回执信息
  const callbackTemplateParams = getCallbackTemplateParams({
    needPostNum,
    successPostNum,
    failPostNum,
    successPostIds,
    failPostIds,
  })

  // 发送回执
  if (config.CALLBACK_TEMPLATE_ID) {
    console.log('---')
    console.log('【推送完成提醒】推送开始')
    await sendMessageReply(
      config.CALLBACK_USERS,
      config.CALLBACK_TEMPLATE_ID,
      callbackTemplateParams,
      config.USE_PASSAGE
    )
    console.log('【推送完成提醒】推送结束')
    console.log('---')
  }

  // 释放运行时临时存储的数据
  Object.keys(RUN_TIME_STORAGE).forEach((o) => {
    RUN_TIME_STORAGE[o] = null
  })
}

main()

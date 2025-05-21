import { init } from 'emailjs-com'

const config = {
  userId: "BJPWZ4ncg9Wy2tUk3",
  serviceId: "service_0gbehvl",
  templateId: "template_tejc3u9"
//  userId: process.env.REACT_APP_EMAILJS_PUBLIC_ID,
//  serviceId: process.env.REACT_APP_EMAILJS_SERVICE_ID,
//  templateId: process.env.REACT_APP_EMAILJS_TEMPLATE_ID
// const imgURL:string = process.env.NEXT_PUBLIC_WPIMGPATH_URL!;
}

if (
  config.userId !== undefined &&
  config.serviceId !== undefined &&
  config.templateId !== undefined
) {
  init(config.userId)
}

export const emailjsConfig = config;
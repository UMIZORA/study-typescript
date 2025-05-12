import { init } from 'emailjs-com'

const config = {
  userId: process.env.REACT_APP_EMAILJS_PUBLIC_ID,
  serviceId: process.env.REACT_APP_EMAILJS_SERVICE_ID,
  templateId: process.env.REACT_APP_EMAILJS_TEMPLATE_ID
}

if (
  config.userId !== undefined &&
  config.serviceId !== undefined &&
  config.templateId !== undefined
) {
  init(config.userId)
}

export const emailjsConfig = config;
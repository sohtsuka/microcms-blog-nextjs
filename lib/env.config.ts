export interface EnvVars {
  microcmsServiceId: string
  microcmsApiKey: string
}

const envvars: EnvVars = {
  microcmsServiceId: process.env.MICROCMS_SERVICE_ID!,
  microcmsApiKey: process.env.MICROCMS_API_KEY!,
}

export default envvars

import { createClient } from 'microcms-js-sdk'
import envvars from './env.config'

export const client = createClient({
  serviceDomain: envvars.microcmsServiceId,
  apiKey: envvars.microcmsApiKey,
})

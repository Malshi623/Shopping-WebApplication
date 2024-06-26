// Generated by nitro
import type { Serialize, Simplify } from 'nitropack'
declare module 'nitropack' {
  type Awaited<T> = T extends PromiseLike<infer U> ? Awaited<U> : T
  interface InternalApi {
    '/api/currency/:code': {
      'default': Simplify<Serialize<Awaited<ReturnType<typeof import('../../server/api/currency/[code]').default>>>>
    }
    '/api/custom': {
      'default': Simplify<Serialize<Awaited<ReturnType<typeof import('../../server/api/custom').default>>>>
    }
    '/__nuxt_error': {
      'default': Simplify<Serialize<Awaited<ReturnType<typeof import('../../node_modules/nuxt/dist/core/runtime/nitro/renderer').default>>>>
    }
  }
}
export {}
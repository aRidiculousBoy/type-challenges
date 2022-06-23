import type { Equal } from '@type-challenges/utils'
/**
 * 在类型系统里实现js的Array.includes方法 该类型接收两个参数 返回的要么是true 要么是false
 */
 export type Includes<T extends readonly any[], U> = T extends [infer First,...infer Rest] ? Equal<First,U> extends true ? true : Includes<Rest,U> : false


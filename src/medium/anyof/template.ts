/**
 * 实现any<T> 类型接收一个数组 如果数组中任意一个元素为真 则返回true 否则返回false 如果数组为空 则返回false
 */
type FalselyDict = '' | false | [] | Record<PropertyKey,never> | 0
type AnyOf<T extends readonly any[]> = T extends [infer F,...infer Rest] ? F extends FalselyDict ? AnyOf<Rest>: true :false
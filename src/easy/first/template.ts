/**
 * 实现一个通用的First<T> 它接受一个数组并返回它第一个元素的类型
 */

 type First<T extends any[]> = T extends [infer U,...infer Rest] ? U : never
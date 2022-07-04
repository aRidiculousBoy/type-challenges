/**
 * 实现PickType<T,U> 从T属性集中选出能够赋值给U的key组成一个新的结构
 */
 type PickByType<T, U> = {
   [P in keyof T as T[P] extends U? P : never]: T[P]
 }
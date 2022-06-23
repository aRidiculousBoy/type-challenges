/**
 * 实现内置的Exclude<T,U>类型 但不能直接使用它
 */

 // 分布式条件类型
 type MyExclude<T, U> = T extends U ? never : T 
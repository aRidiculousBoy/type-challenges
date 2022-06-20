/**
 * 实现内置的Readonly<T>泛型类在不使用它的情况
 */
 type MyReadonly<T> = {
   readonly [K in keyof T]: T[K]
 }
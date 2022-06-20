/**
 * 实现内置的Pick<T,K>泛型类在不适用它的情况下
 * 通过T中选择属性集K来构造一个类型
 */


 type MyPick<T, K extends keyof T> = {
   [P in K]: T[P]
 }
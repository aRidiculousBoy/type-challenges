/**
 * 从函数类型type的形参中使用的类型构造元组类型
 */

 type MyParameters<T extends (...args: any[]) => any> = T extends (...args: infer A) => any ? A : never
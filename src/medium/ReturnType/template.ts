/**
 * 不适用ReturnType实现ts的ReturnType<T>泛型
 */
 type MyReturnType<T> = T extends (...args: any[]) => infer U ? U : never
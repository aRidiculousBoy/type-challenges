/**
 * 实现一个将接收到的String参数转换为一个字母Union的类型
 */

/**
 * 字符串不好直接取出每一项 而数组的映射可以直接将每一个成员联合起来
 * 我们将泛型的第二个参数默认设置为一个数组
 * 当字符串不为空时 递归的调用该泛型将每一项保存到数组中
 * 当字符串为空时 直接通过映射类型取到联合成员
 */
type StringToUnion<T extends string,R extends any[] = []> = T extends `${infer First}${infer Rest}` ? StringToUnion<Rest,[First,...R]> : R[number]

{
  type Test = '123';
  type Result = StringToUnion<Test>; // expected to be "1" | "2" | "3"  
}
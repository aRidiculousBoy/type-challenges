/**
 * 在类型系统里实现js内置的Array.concat方法 这个类型接收两个参数 返回的新数组类型应该按照输入参数从左到右合并为一个新的数组
 */

 type Concat<T extends any[], U extends any[]> = [...T,...U]
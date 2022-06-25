/**
 * 实现一个通用Last<T> 它接收一个数组T并返回其最后一个元素的类型
 */
 type Last<T extends any[]> = T extends [...infer U,infer Rest] ? Rest : never
 type arr1 = ['a', 'b', 'c']
 type arr2 = [3, 2, 1]
 
 type tail1 = Last<arr1> // expected to be 'c'
 type tail2 = Last<arr2> // expected to be 1
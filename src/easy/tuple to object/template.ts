/**
 * 给定一个数组，转化为一个对象并且该对象的key/value必须来自于给定的数组
 */
 // 数组的遍历是T[number]
 type TupleToObject<T extends readonly (string | number)[]> = {
   [K in T[number]]: K
 }
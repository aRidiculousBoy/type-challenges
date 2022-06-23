/**
 * 创建一个通用的Length 接受一个readonly数组 返回这个数组的长度
 */

 type Length<T extends readonly any[]> = T['length']
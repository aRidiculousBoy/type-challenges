/**
 * 实现一个接收string number bigint类型参数的Absolute类型 返回一个正数字符串
 */

type Absolute<T extends number | string | bigint> = `${T}` extends `${infer L}${infer R}` ? L extends '-' ? R : `${T}` : `${T}`
{
  type Test = -100;
  type Result = Absolute<Test>; // expected to be "100"
  type R  = Absolute<0>
}
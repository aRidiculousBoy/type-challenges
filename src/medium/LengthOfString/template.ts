/**
 * 实现泛型LengthOfString<S extends string>返回传入string的长度类型
 */ 

 type LengthOfString<S extends string,L extends any[] = []> = S extends `${infer F}${infer Rest}` ? LengthOfString<Rest,[...L,F]> : L['length']
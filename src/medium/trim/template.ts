/**
 * 实现一个Trim<T> 它接收一个字符串类型 并返回一个新字符串 其中两端的空白符都已被删除
 */    
type TrimLeft<S extends string> = S extends `${' ' | '\n' | '\t'}${infer Rest}` ? TrimLeft<Rest> : S
type TrimRight<S extends String> = S extends `${infer Pre}${' ' | '\n' | '\t'}` ? TrimRight<Pre> : S

export type Trim<S extends string> = TrimLeft<TrimRight<S>>

{
  type trimed = Trim<'  Hello World  '> // expected to be 'Hello World'
}

export {}
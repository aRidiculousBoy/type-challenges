/**
 * 实现泛型TupleToUnion<T> 它返回元组所有值的集合
 */
 type TupleToUnion<T extends any[]> = T[number]

 type Arr = ['1', '2', '3']

 type Test = TupleToUnion<Arr> // expected to be '1' | '2' | '3'
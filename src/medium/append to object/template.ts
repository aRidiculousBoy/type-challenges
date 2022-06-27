/**
 * 实现一个为接口添加新字段的类型 该类型接收三个参数 返回带有新字段的接口类型
 */
 type AppendToObject<T extends {}, U extends string | symbol | number, V> = {
    [P in keyof T | U]: P extends keyof T ? T[P] : V
 }

 {
    type Test = { id: '1' }
    type Result = AppendToObject<Test, 'value', 4> // expected to be { id: '1', value: 4 }
 }
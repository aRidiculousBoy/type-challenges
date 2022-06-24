/**
 * 不使用Omit实现ts的Omit<T,K>泛型
 * Omit会创建一个省略K中字段的T对象
 */
 type MyOmit<T, K extends keyof T> = {
   [P in Exclude<keyof T,K>]: T[P]
 }

 interface Todo {
  title: string
  description: string
  completed: boolean
}

type TodoPreview = MyOmit<Todo, 'description' | 'title'>

const todo: TodoPreview = {
  completed: false,
}
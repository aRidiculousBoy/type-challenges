/**
 * 实现一个IF类型 它接收一个条件类型C 一个判断为真的返回类型T 以及一个判断为假时返回类型F C只能是true或者false T和F可以是任何类型
 */
 type If<C extends boolean, T, F> = C extends true ? T : F
 
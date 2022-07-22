import { Equal } from "@type-challenges/utils"
export type LastIndexOf<T, U> = T extends [...infer Rest,infer Last] ? Equal<U,Last> extends true ? Rest['length'] : LastIndexOf<Rest,U> : -1
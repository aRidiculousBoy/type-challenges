type unUsedStr = ' ' | '\n' | '\t' 
type TrimRight<S extends string> = S extends `${infer Pre}${unUsedStr}` ? TrimRight<Pre> : S
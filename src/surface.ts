import * as C from "./core";

export type ArithS =
  | { kind: "numS"; n: number }
  | { kind: "plusS"; l: ArithS; r: ArithS }
  | { kind: "bminusS"; l: ArithS; r: ArithS }
  | { kind: "uminusS"; a: ArithS }
  | { kind: "multS"; l: ArithS; r: ArithS };

export const plus = (l: ArithS, r: ArithS): ArithS => ({
  kind: "plusS",
  l,
  r
});

export const mult = (l: ArithS, r: ArithS): ArithS => ({
  kind: "multS",
  l,
  r
});

export const uminus = (a: ArithS): ArithS => ({
  kind: "uminusS",
  a
});

export const minus = (l: ArithS, r: ArithS): ArithS => ({
  kind: "bminusS",
  l,
  r
});

export const num = (n: number): ArithS => ({
  kind: "numS",
  n
});

export const desugar = (as: ArithS): C.ArithC => {
  switch (as.kind) {
    case "numS":
      return C.num(as.n);
    case "plusS":
      return C.plus(desugar(as.l), desugar(as.r));
    case "multS":
      return C.mult(desugar(as.l), desugar(as.r));
    case "bminusS":
      return C.plus(desugar(as.l), C.mult(C.num(-1), desugar(as.r)));
    case "uminusS":
      return C.mult(C.num(-1), desugar(as.a));
  }
};

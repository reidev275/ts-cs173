export type ExprC =
  | { kind: "numC"; n: number }
  | { kind: "plusC"; l: ExprC; r: ExprC }
  | { kind: "multC"; l: ExprC; r: ExprC }
  | { kind: "ifC"; b: ExprC; t: ExprC; f: ExprC };
//| { kind: "idC"; s: string }
//| { kind: "appC"; s: string; arg: ExprC }

//export type FunDefC = { kind: "fdC"; name: string; arg: string; body: ExprC };

export const plus = (l: ExprC, r: ExprC): ExprC => ({
  kind: "plusC",
  l,
  r
});

export const mult = (l: ExprC, r: ExprC): ExprC => ({
  kind: "multC",
  l,
  r
});

export const num = (n: number): ExprC => ({
  kind: "numC",
  n
});

export const ifc = (b: ExprC, t: ExprC, f: ExprC): ExprC => ({
  kind: "ifC",
  b,
  t,
  f
});

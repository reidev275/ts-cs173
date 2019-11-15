export type ArithC =
  | { kind: "numC"; n: number }
  | { kind: "plusC"; l: ArithC; r: ArithC }
  | { kind: "multC"; l: ArithC; r: ArithC };

export const plus = (l: ArithC, r: ArithC): ArithC => ({
  kind: "plusC",
  l,
  r
});

export const mult = (l: ArithC, r: ArithC): ArithC => ({
  kind: "multC",
  l,
  r
});

export const num = (n: number): ArithC => ({
  kind: "numC",
  n
});

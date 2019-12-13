import { ExprC } from "./core";
import { ArithS, desugar } from "./surface";

export const evaluateC = (a: ExprC): number => {
  switch (a.kind) {
    case "numC":
      return a.n;
    case "plusC":
      return evaluateC(a.l) + evaluateC(a.r);
    case "multC":
      return evaluateC(a.l) * evaluateC(a.r);
    case "ifC":
      return evaluateC(a.b) !== 0 ? evaluateC(a.t) : evaluateC(a.f);
  }
};

export const evaluateS = (a: ArithS): number => evaluateC(desugar(a));

export const prettyC = (a: ExprC): string => {
  switch (a.kind) {
    case "numC":
      return `${a.n}`;
    case "plusC":
      return `(${prettyC(a.l)} + ${prettyC(a.r)})`;
    case "multC":
      return `(${prettyC(a.l)} * ${prettyC(a.r)})`;
    case "ifC":
      return `if (${prettyC(a.b)} !== 0)
   ${prettyC(a.t)}
else
   ${prettyC(a.f)}`;
  }
};

export const prettyS = (a: ArithS): string => prettyC(desugar(a));

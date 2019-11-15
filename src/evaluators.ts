import { ArithC } from "./core";
import { ArithS, desugar } from "./surface";

export const evaluateC = (a: ArithC): number => {
  switch (a.kind) {
    case "numC":
      return a.n;
    case "plusC":
      return evaluateC(a.l) + evaluateC(a.r);
    case "multC":
      return evaluateC(a.l) * evaluateC(a.r);
  }
};

export const evaluateS = (a: ArithS): number => evaluateC(desugar(a));

export const prettyC = (a: ArithC): string => {
  switch (a.kind) {
    case "numC":
      return `${a.n}`;
    case "plusC":
      return `(${prettyC(a.l)} + ${prettyC(a.r)})`;
    case "multC":
      return `(${prettyC(a.l)} * ${prettyC(a.r)})`;
  }
};

export const prettyS = (a: ArithS): string => prettyC(desugar(a));

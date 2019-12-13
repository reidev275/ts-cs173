import * as S from "./surface";
import { evaluateS, prettyS } from "./evaluators";

const foo = S.plus(S.num(1), S.uminus(S.num(2)));

const bar = S.ifs(S.minus(S.num(1), S.num(2)), foo, S.num(99));

console.log("Raw");
console.log(bar);

console.log();
console.log("Pretty");
console.log(prettyS(bar));

console.log();
console.log("Evaluated");
console.log(evaluateS(bar));

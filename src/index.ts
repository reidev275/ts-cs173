import * as S from "./surface";
import { evaluateS, prettyS } from "./evaluators";

const foo = S.plus(S.num(1), S.uminus(S.num(2)));

console.log("Raw");
console.log(foo);

console.log();
console.log("Pretty");
console.log(prettyS(foo));

console.log();
console.log("Evaluated");
console.log(evaluateS(foo));

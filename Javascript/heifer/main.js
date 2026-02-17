import { moo } from "./moo.js";
import { say } from "cowsay";

const NAME = "Charlie";
const speak = moo(NAME);
console.log(say({text: speak}));

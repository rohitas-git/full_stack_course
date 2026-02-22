// TYPE ALIAS
type LoggerCallback = (s1: string, s2: string) => string;

function setLoggerTimeout(loggerCallback: LoggerCallback, delay: number) {
  // do something
}

// You don't need to explicitly use the alias in your function declarations 
// — as long as the signature matches, the function "conforms to" the type.
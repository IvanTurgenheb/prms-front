// function foo(input) {
//   return input() + 1;
// }

// function bar() {
//   return 1;
// }

// foo(bar); // 2

function foo(arg) {
  return arg;
}

function bar() {
  console.log("bar");
}

foo(bar)();
foo(bar());

function foo2(arg, ...rest) {
  console.log(rest); // [2, 3]
}

foo2(1, 2, 3);

const foo3 = new Function("console.log('hi')");

foo3();

const foo4 = () => {
  console.log("foo4");
};

(function 즉시실행함수() {
  console.log("즉시실행함수");
})();

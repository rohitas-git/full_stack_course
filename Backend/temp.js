first = 0;
second = 1;

function fibnocci(n) {
   if (n === 1) return first;
   if (n === 2) return second;
   return fibnocci(n - 1) + fibnocci(n - 2);
}
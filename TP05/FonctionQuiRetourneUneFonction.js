function MultiplierParN(n)
{
    return function MultiplierNb(nb)
    {
        return nb * n;
    }
}

let func1 = MultiplierParN(5);
let func2 = MultiplierParN(8);

console.log(func1(6));
console.log(func2(3));
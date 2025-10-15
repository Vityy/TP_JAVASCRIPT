let fibonacci = [0, 1];
let n = 10;

if(n > 1)
{
    for(let i = 2; i <= n; i++)
    {
        fibonacci.push(fibonacci[i - 1] + fibonacci[i - 2]);
    }

    console.log(fibonacci[fibonacci.length - 1]);
}
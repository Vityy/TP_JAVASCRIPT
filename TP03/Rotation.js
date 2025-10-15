let array = [1, 15, -3, 0, 8, 7, 4, -2, 28, 7, -1, 17, 2, 3, 0, 14, -4];
let lastValue = array[array.length - 1];

for(let i = array.length - 1; i > 0; i--)
{
    if(i - 1 >= 0)
    {
        array[i] = array[i - 1];
    }
}

array[0] = lastValue;

console.log(array);
let array = [1, 15, -3, 0, 8, 7, 4, -2, 28, 7, -1, 17, 2, 3, 0, 14, -4];
let highestNumber = 0;

for(let i = 0; i < array.length; i++)
{
    if(array[i] > highestNumber)
    {
        highestNumber = array[i];
    }
}

console.log(highestNumber);
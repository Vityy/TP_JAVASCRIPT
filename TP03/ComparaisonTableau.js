let array1 = [1, 15, -3, 8, 7, 4, -2, 28, -1, 17, 2, 3, 0, 14, -4];
let array2 = [3, -8, 17, 5, -1, 4, 0, 6, 2, 11, -5, -4, 8];
let array3 = [];

for(let i = 0; i < array1.length; i++)
{
    for(let j = 0; j < array2.length; j++)
    {
        if(array1[i] == array2[j])
        {
            array3.push(array1[i]);
        }
    }
}

console.log(array3);
console.log(array3.length);
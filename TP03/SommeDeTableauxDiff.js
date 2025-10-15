let tableau1 = [1, 15, -3, 0, 8, 7, 4, -2, 28, 7, -1, 17, 2, 3, 0, 14, -4];
let tableau2 = [-1, 12, 17, 14, 5, -9, 0, 18];
let tableau3 = [];

for(let i = 0; i < tableau1.length; i++)
{
    if(i < tableau2.length)
    {
        tableau3.push(tableau1[i] + tableau2[i]);
    }
    else
    {
        tableau3.push(tableau1[i]);
    }
}

console.log(tableau3);
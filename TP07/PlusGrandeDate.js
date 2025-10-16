const date1 = new Date("September 19, 1965 09:05:00");
const date2 = new Date("April 22, 1994 09:15:00");

function CalculerAge(a_date1, a_date2)
{
    if(a_date1 > a_date2)
    {
        console.log(a_date1);
    }
    else
    {
        console.log(a_date2);
    }
}

CalculerAge(date1, date2)
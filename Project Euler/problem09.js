/*
    A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,
    a2 + b2 = c2
    There exists exactly one Pythagorean triplet for which a + b + c = 1000.
    Find the product abc.
*/

//Brute Force Approach

function PythagoreanTriplets()
{
    var a=0; b=0; c=0;
    var s = 1000;

    var found = false;

    for(a=1; a<s/3; a++)
    {
        for(b=a; b<s/2; b++)
        {
            c = s - a - b;

            if(a * a + b * b == c * c)
            {
                found = true;
                break;
            }
        }
        if(found)
        {
            break;
        }
    }
    return `The Pythagorean triple is ${a}, ${b}, ${c}, and the sum is ${s}\nThe product is ${a*b*c}`

}

//Number Theoretical Approach
function rotLeft(a, d) {
    // a is the array, d is the number
    for (let i = 0; i < d; i++)
    {
        let temp = a[0];
        for (let j = 0; j < a.length; j++)
        {
            if (j != a.length - 1) a[j] = a[j + 1];
            else a[j] = temp;
        }
    }
    return a;
}
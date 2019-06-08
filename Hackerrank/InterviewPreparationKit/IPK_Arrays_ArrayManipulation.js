function arrayManipulation(n, queries) {
    // n = size of array.
    // Initialize array
    let arr = [];
    for (let i = 0; i < n; i++)
    {
        arr[i] = 0;
    }
    console.log(arr);
    let indA, indB;
    for (let i = 0; i < queries.length; i++)
    {
        console.log("Range: " + queries[i][0] + " and " + queries[i][1]);
        indA = queries[i][0] - 1;
        indB = queries[i][1] - 1;
        for (let j = indA; j <= indB; j++)
        {
            arr[j] += queries[i][2];
        }
    }
    console.log(arr);
    return Math.max(...arr);

}
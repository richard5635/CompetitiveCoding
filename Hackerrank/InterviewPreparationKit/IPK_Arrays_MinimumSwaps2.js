function minimumSwaps(arr) {
    // Minimum swap. Need to think about sorting.. Array of consecutive integers.
    // Limit: 1 to 100k indices in an array.
    //
    let min = 0;
    let temp = 0;
    for (let i = 0; i < arr.length; i++)
    {
        if (arr[i] == (i + 1)) continue;
        for (let j = i + 1; j < arr.length; ++j)
        {
            if (arr[j] == (i + 1))
            {
                // Swapping
                temp = arr[j];
                arr[j] = arr[i];
                arr[i] = temp;
                min++;
                break;
            }
        }
    }
    return min;

}
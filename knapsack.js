



function max(a, b) {
    return (a > b) ? a : b;
}


// Prints the items which are put
// in a knapsack of capacity W

function getKnapSackItems(w, wt, maxGain, K, n, val) {
    const itemsSelected = [];
    for (let i = n; i > 0 && maxGain > 0; i--) {

        // either the result comes from the top
        // (K[i-1][w]) or from (val[i-1] + K[i-1]
        // [w-wt[i-1]]) as in Knapsack table. If
        // it comes from the latter one/ it means
        // the item is included.
        if (maxGain == K[i - 1][w])
            continue;
        else {

            // This item is included.
            itemsSelected.push(wt[i - 1]);

            // Since this weight is included its
            // value is deducted
            maxGain = maxGain - val[i - 1];
            w = w - wt[i - 1];
        }
    }

    return itemsSelected
}
function knapSack(W, wt, val, n) {
    let i, w;
    let K = new Array(n + 1);
    const knapsack = {}
    for (i = 0; i < K.length; i++) {
        K[i] = new Array(W + 1);
        for (let j = 0; j < W + 1; j++) {
            K[i][j] = 0;
        }
    }

    // Build table K[][] in bottom up manner
    for (i = 0; i <= n; i++) {
        for (w = 0; w <= W; w++) {
            if (i == 0 || w == 0)
                K[i][w] = 0;
            else if (wt[i - 1] <= w)
                K[i][w] = Math.max(val[i - 1] +
                    K[i - 1][w - wt[i - 1]],
                    K[i - 1][w]);
            else
                K[i][w] = K[i - 1][w];
        }
    }

    // stores the result of Knapsack
    let res = K[n][W];
    knapsack.maxGain = res;


    w = W;

    knapsack.selectedItems = getKnapSackItems(w, wt, res, K, n, val);

    return knapsack;



}

// let val = [60, 100, 120];
// let wt = [10, 20, 30];
// let W = 50;
// let n = val.length;


// const knapsack = knapSack(W, wt, val, n);

export default knapSack

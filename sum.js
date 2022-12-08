function Sum(a, b) { 
    var c;

    if(a == 0 || b == 0)
    {
        if(a == 0)
        {
            c = SumLooping(b);
        }
        else
        {
            c = SumLooping(a);
        }
    }
    else
    {
        c = a + b;
    }

    return c;
};

function SumLooping(n) {
    var total = 0;

    for (let i = 1; i <= n; i++) {
        total +=i;     
    }

    return total;
}

console.log(Sum(0, 9));
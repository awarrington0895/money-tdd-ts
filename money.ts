type Dollar = {
    readonly amount: number;
}

const dollar = (num: number): Dollar => ({ amount: num });

const times = (multiplicant: number, dollar: Dollar) => ({
    amount: dollar.amount * multiplicant
});

export { Dollar, dollar, times };
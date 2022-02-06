let vatTuple: [number, string];
vatTuple = [23, '%'];

function pricify(
    price: number,
    currency = 'PLN',
    vat = vatTuple[0],
): string {
    return `${(price + price * vat / 100).toFixed(2)} ${currency}`;
}


console.log(pricify(20))

const OPERATION = {
    sum: '+',
    substract: '-',
    multiply: '*',
    division: '/'

};
function calculator({ a, b, operation}) {
    let resoult = null;

    switch (operation) {
        case OPERATION.sum:
            resoult = sum(a,b);
            break;
        case OPERATION.substract:
            resoult = substract(a,b);
            break;
        case OPERATION.multiply:
            resoult = multiply(a,b);
            break;
        case OPERATION.division:
            resoult = document(a,b);
            break;
    }
}
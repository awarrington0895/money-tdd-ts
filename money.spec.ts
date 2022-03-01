import * as Money from './money';

describe('money', () => {
    it('should be able to multiply money', () => {
        const five = Money.dollar(5);

        const result = Money.times(2, five);

        expect(result.amount)
            .toBe(10);
    });

    it('should be equal given two dollars of the same value', () => {
        const five = Money.dollar(5);

        const otherFive = Money.dollar(5);

        expect(five)
            .toStrictEqual(otherFive);
    });
});
import {it, expect} from 'vitest';

import {saluter} from './saluter.mjs';

it('salute return a string', () => {
    const s = saluter.salute('ciccio', false);

    expect(s).toBeTypeOf('string');
})

it('salute return a number', () => {
    const s = saluter.salute('cicio', true);

    expect(s).toBeTypeOf('number');
})
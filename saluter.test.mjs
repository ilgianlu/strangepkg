import {it, expect} from 'vitest';

import {saluter} from './saluter.mjs';

it('salute return a string', () => {
    const s = saluter.salute();

    expect(s).toBeTypeOf('string');
})
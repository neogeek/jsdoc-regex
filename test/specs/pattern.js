'use strict';

const assert = require('assert');
const fs = require('fs');

const pattern = require('../../index');

describe('pattern match', () => {

    it('found matches', () => {

        const matches = fs.readFileSync('./test/fixtures/examples.js', 'utf8').match(pattern());

        assert.equal(matches.length, 2);

    });

});

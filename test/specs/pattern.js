'use strict';

const assert = require('assert');
const fs = require('fs');

const pattern = require('../../index');

describe('pattern match', () => {

    it('found matches (spaces)', () => {

        const matches = fs.readFileSync('./test/fixtures/spaces.js', 'utf8').match(pattern());

        console.log(matches);

        assert.equal(matches.length, 2);

    });

    it('found matches (tabs)', () => {

        const matches = fs.readFileSync('./test/fixtures/tabs.js', 'utf8').match(pattern());

        console.log(matches);

        assert.equal(matches.length, 2);

    });

});

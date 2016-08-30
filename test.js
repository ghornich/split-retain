'use strict';

var test = require('tape');
var splitRetain = require('./split-retain');

test('splitRetain', function (t) {
    t.throws(() => splitRetain({}, '/'));
    t.throws(() => splitRetain('aaaaa', {}));
    t.throws(() => splitRetain('aaaaa', '', 5));
    t.throws(() => splitRetain('aaaaa', '', { leadingSeparator: -3 }));

    //------------

    t.deepEqual(splitRetain('', '/'), ['']);
    t.deepEqual(splitRetain('aaa', '/'), ['aaa']);

    //------------

    t.deepEqual(splitRetain('home/joe/taxes.txt', '/'), ['home/', 'joe/', 'taxes.txt']);
    t.deepEqual(splitRetain('home/joe/taxes.txt', '/', { leadingSeparator: true }), ['home', '/joe', '/taxes.txt']);

    t.deepEqual(splitRetain('/home/joe/taxes.txt', '/'), ['/', 'home/', 'joe/', 'taxes.txt']);
    t.deepEqual(splitRetain('/home/joe/taxes.txt', '/', { leadingSeparator: true }), ['/home', '/joe', '/taxes.txt']);
    
    t.deepEqual(splitRetain('D:\\Windows\\asdf.dll', '\\'), ['D:\\', 'Windows\\', 'asdf.dll']);
    t.deepEqual(splitRetain('D:\\Windows\\asdf.dll', '\\', { leadingSeparator: true }), ['D:', '\\Windows', '\\asdf.dll']);
    
    t.deepEqual(splitRetain('the quick brown fox', ' '), ['the ', 'quick ', 'brown ', 'fox']);
    t.deepEqual(splitRetain('the quick brown fox', ' ', { leadingSeparator: true }), ['the', ' quick', ' brown', ' fox']);
    
    t.deepEqual(splitRetain('1_ab_cdef_33_', '_'), ['1_', 'ab_', 'cdef_', '33_']);
    t.deepEqual(splitRetain('1_ab_cdef_33_', '_', { leadingSeparator: true }), ['1', '_ab', '_cdef', '_33', '_']);

    t.deepEqual(splitRetain('.abcd...ghi.jklm..', '.'), ['.', 'abcd.', '.', '.', 'ghi.', 'jklm.', '.']);
    t.deepEqual(splitRetain('.abcd...ghi.jklm..', '.', { leadingSeparator: true }), ['.abcd', '.', '.', '.ghi', '.jklm', '.', '.']);

    //------------

    t.deepEqual(splitRetain('aAAa12bBBbb3cC45678D', /(\d+)/g), ['aAAa12', 'bBBbb3', 'cC45678', 'D']);
    t.deepEqual(splitRetain('aAAa12bBBbb3cC45678D', /(\d+)/g, { leadingSeparator: true }), ['aAAa', '12bBBbb', '3cC', '45678D']);

    //------------

    t.deepEqual(splitRetain('ab积cdÁxyz积Üuio积mnopqőú', '积'), ['ab积', 'cdÁxyz积', 'Üuio积', 'mnopqőú']);
    t.deepEqual(splitRetain('ab积cdÁxyz积Üuio积mnopqőú', '积', { leadingSeparator: true }), ['ab', '积cdÁxyz', '积Üuio', '积mnopqőú']);

    t.end();
});

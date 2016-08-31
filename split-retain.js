'use strict';

exports = module.exports = splitRetain;

/**
 * splitRetain
 *
 * @param  {String} string - string to split
 * @param  {String|RegExp} separator
 * @param  {Object|undefined} options
 * @param  {Boolean} options.leadingSeparator - if true, the separator will be the leading character in the split array
 * @return {Array} split text
 * @throws {Error}
 */
function splitRetain(string, separator, options) {
    options = defaults(options, {});
    options.leadingSeparator = defaults(options.leadingSeparator, false);

    assert.type(string, 'string', '`string` is not a string');
    assert(typeof separator === 'string' || separator instanceof RegExp, 'invalid `separator` type');
    assert.type(options, 'object', 'invalid `options` type');
    assert.type(options.leadingSeparator, 'boolean', 'invalid `options.leadingSeparator` type');

    if (string.length === 0) {
        return [''];
    }

    separator = separatorToRegex(separator);

    var tokens = string.split(separator);

    if (tokens.length === 1) {
        return tokens;
    }

    var result = [];

    if (options.leadingSeparator) {
        result.push(tokens.shift());
    }

    while (tokens.length > 0) {
        if (tokens.length === 1) {
            result.push(tokens.shift());
        }
        else {
            result.push(tokens.shift() + tokens.shift());
        }
    }

    if (result[0] === '') {
        result.shift();
    }

    if (result[result.length - 1] === '') {
        result.pop();
    }

    return result;
}

/* publish-tasks:auto-version */
splitRetain['VERSION'] = '1.0.1';

function separatorToRegex(separator) {
    if (separator instanceof RegExp) {
        return separator;
    }

    return new RegExp('(' + escapeRegex(separator) + ')', 'g');
}

function escapeRegex(string) {
    //http://stackoverflow.com/a/9310752/4782902
    return string.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
}

function assert(condition, message) {
    if (!condition) {
        throw new Error(message);
    }
}

assert.type = function (variable, expectedType, message) {
    if (typeof variable !== expectedType) {
        throw new Error(message);
    }
}

function defaults(optionalData, defaultData) {
    if (optionalData === undefined) {
        return defaultData;
    }
    else {
        return optionalData;
    }
}

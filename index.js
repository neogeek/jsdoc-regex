module.exports = function jsdocRegex () {

    return /[^\S\r\n]*\/(?:\*{2})([\W\w]+?)\*\/([\W\w]+?)?(?=\s+\/\*{1,2}|$)/g;

};

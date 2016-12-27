// This is a sample comment.

const function1 = () => console.log('function1');

/**
 * JSDoc comment
 *
 *     console.log('example');
 *     console.log('//**');
 *
 * @param {String} param Param description.
 * @param {String} [param] Optional param description.
 * @return {Object} Return value.
 * @public
 */

const function2 = () => console.log('function2');

/** This is a sample comment */

const function3 = () => console.log('function2');

	/**
	 * JSDoc comment with indentation.
	 *
	 *     console.log('example');
	 *     console.log('//**');
	 *
	 * @param {String} param Param description.
	 * @param {String} [param] Optional param description.
	 * @return {Object} Return value.
	 * @public
	 */

module.exports = {
	function1,
	function2,
	function3
};

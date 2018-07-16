export default (param, testType) => {
	if (!param) {
		return false;
	}
	if (testType === 'array' && Array.isArray(param)) {
		return true;
	} else if (testType === 'object' && Object.prototype.toString.call(param) === '[object Object]') {
		return true;
	} else if (typeof param === testType) {
		return true;
	} else {
		return false;
	}
};
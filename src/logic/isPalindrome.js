export const isPalindrome = (str) => {
	if (str.length === 0) {
		return false;
	}
	const regex = /[^a-zA-Z0-9]/g;
	const trimmedString = str.toLowerCase().trim().replaceAll(regex, '');
	for (let i = 0; i < trimmedString.length; i++) {
		if (trimmedString[i] !== trimmedString[trimmedString.length - 1 - i]) {
			return false;
		}
	}
	return true;
};

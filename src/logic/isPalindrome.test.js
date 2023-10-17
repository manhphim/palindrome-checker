import { isPalindrome } from './isPalindrome';
import { expect, describe, test } from '@jest/globals';

describe('isPalindrome check', () => {
	test('if empty string is a palindrome', () => {
		expect(isPalindrome('')).toBe(false);
	});

	test('if a palindrome is a palindrome', () => {
		expect(isPalindrome('racecar')).toBe(true);
	});

	test('if a non-palindrome is a palindrome', () => {
		expect(isPalindrome('hello')).toBe(false);
	});

	test('if a palindrome with spaces is a palindrome', () => {
		expect(isPalindrome('racecar   ')).toBe(true);
	});
});

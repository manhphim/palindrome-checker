'use client';

import { Toast, TextInput, Button, Progress } from 'flowbite-react';
import { HiCheck, HiX } from 'react-icons/hi';
import { useState } from 'react';
import { isPalindrome } from './logic/isPalindrome';
function App() {
	const [inputString, setInputString] = useState('');
	const [showSuccessToast, setShowSuccessToast] = useState(false);
	const [showErrorToast, setShowErrorToast] = useState(false);

	const [validPalindromes, setValidPalindromes] = useState([]);

	const checkPalindrome = () => {
		if (inputString.length === 0) {
			return;
		}
		if (isPalindrome(inputString)) {
			setShowSuccessToast(true);
			setValidPalindromes([...validPalindromes, inputString]);
		} else {
			setShowErrorToast(true);
		}

		setTimeout(() => {
			setShowSuccessToast(false);
			setShowErrorToast(false);
			setInputString('');
		}, 3000);
	};

	return (
		<main className='bg-indigo-100'>
			<div className='flex flex-col items-center justify-center min-h-screen'>
				<h1 className='mb-4 text-3xl text-indigo-400'>Check palindrome</h1>

				<TextInput
					placeholder='Enter a string'
					value={inputString}
					onChange={(e) => setInputString(e.target.value)}
					className='mb-4'
				/>
				<Button gradientDuoTone='cyanToBlue' onClick={checkPalindrome}>
					Check
				</Button>

				<div className='mt-16'>
					<h1 className='mb-2 text-3xl text-indigo-400'>Valid palindromes</h1>
					<ul>
						{validPalindromes.map((palindrome, index) => (
							<li key={index}>
								{++index}. {palindrome}
							</li>
						))}
					</ul>
				</div>

				{showSuccessToast && successToast({ string: inputString })}
				{showErrorToast && errorToast({ string: inputString })}
			</div>
		</main>
	);
}

const successToast = ({ string }) => {
	return (
		<div className='absolute bottom-4 right-4'>
			<Toast>
				<Progress className='mb-2' progress={50} color='blue' />
				<div className='inline-flex items-center justify-center w-8 h-8 text-green-500 bg-green-100 rounded-lg shrink-0 dark:bg-green-800 dark:text-green-200'>
					<HiCheck className='w-5 h-5' />
				</div>
				<div className='ml-3 text-sm font-normal'>
					{string} is a palindrome.
				</div>
				<Toast.Toggle />
			</Toast>
		</div>
	);
};

const errorToast = ({ string }) => {
	return (
		<div className='absolute bottom-4 right-4'>
			<Toast>
				<div className='inline-flex items-center justify-center w-8 h-8 text-red-500 bg-red-100 rounded-lg shrink-0 dark:bg-red-800 dark:text-red-200'>
					<HiX className='w-5 h-5' />
				</div>
				<div className='ml-3 text-sm font-normal'>
					{string} is not a palindrome.
				</div>
				<Toast.Toggle />
			</Toast>
		</div>
	);
};

export default App;

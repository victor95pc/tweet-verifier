import React from 'react';
import TweetReader from './TweetReader';

const App = () => {
	TweetReader.setInput('Say this is invalid'.split('').map(ch => ch.charCodeAt(0)));
	TweetReader.submit();
	console.log(
		TweetReader.getOutput()
			.map(byte => String.fromCharCode(byte))
			.join(''),
	);
	TweetReader.setInput('Say something'.split('').map(ch => ch.charCodeAt(0)));
	TweetReader.submit();
	console.log(
		TweetReader.getOutput()
			.map(byte => String.fromCharCode(byte))
			.join(''),
	);

	alert('Done!');

	return (
		<>
			<div>WA Result:</div>
		</>
	);
};

export default App;

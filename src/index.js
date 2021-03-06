import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

/* app is shown inside the element with id "root" */
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
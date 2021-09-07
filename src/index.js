import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ContextFilterProvider from './components/filter/ContextFilter';
import ContextDashboardProvider from './components/dashboard/ContextDashboard';

ReactDOM.render(
	<React.StrictMode>
		<ContextDashboardProvider>
		<ContextFilterProvider>
			<App />
		</ ContextFilterProvider>
		</ ContextDashboardProvider>
	</ React.StrictMode>,
  document.getElementById('root')
);

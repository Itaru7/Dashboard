import React, { createContext, useState } from 'react';

export const ContextDashboard = createContext();

const ContextDashboardProvider = (props) => {
	const [data, setData] = useState({value: 'test'});

	return (
		<ContextDashboard.Provider value={{ data: [data, setData] }}>
			{ props.children }
		< /ContextDashboard.Provider>
	);
};

export default ContextDashboardProvider;

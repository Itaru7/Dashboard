import React, { createContext, useState } from 'react';
import Axios from 'axios';
import config from '../../config.json';

export const ContextFilter = createContext();
const ContextFilterProvider = (props) => {
	// Get store information from accessed URL ex) https://fsai-dash.com/HQ returns HQ.
	const storeFromUrl = window.location.href.split('/').slice(-1)[0]
	// Get default date period.
	const today = new Date();
	const thisyear = today.getFullYear();
	const thismonth = today.getMonth(); 
	const thisdate = today.getDate();
	const lastWeekStart = thisdate - today.getDay() - 7;
	const lastWeekEnd = lastWeekStart + 6;

	// Set values and setters.
	const r = {
			"avg_serv_time": "00:00",
			"order_num_total": 0,
			"order_num_total_food": 0,
			"order_num_kiosk_food": 0,
			"order_usage_kiosk_food": 0,
			"order_num_pos_food": 0,
			"order_usage_pos_food": 0,
			"order_num_total_bar": 0,
			"sales_total": 0,
			"sales_total_food": 0,
			"sales_total_bar": 0,
			"usage_by_users": [
				{'username': 'userA', "order_total": 0, "order_food": 0, "order_bar": 0, "order_promo": 0, "order_discount": 0, "sales_total": 0, "sales_food": 0, "sales_bar": 0, "sales_promo": 0, "sales_discount": 0},
				{'username': 'userB', "order_total": 0, "order_food": 0, "order_bar": 0, "order_promo": 0, "order_discount": 0, "sales_total": 0, "sales_food": 0, "sales_bar": 0, "sales_promo": 0, "sales_discount": 0},
				{'username': 'userC', "order_total": 0, "order_food": 0, "order_bar": 0, "order_promo": 0, "order_discount": 0, "sales_total": 0, "sales_food": 0, "sales_bar": 0, "sales_promo": 0, "sales_discount": 0}
			],
			"graph": {
				"promo": [
					{label: '01/01/2021', data: 0},
					{label: '01/02/2021', data: 0},
					{label: '01/03/2021', data: 0},
					{label: '01/04/2021', data: 0},
					{label: '01/05/2021', data: 0},
					{label: '01/06/2021', data: 0},
					{label: '01/07/2021', data: 0}
				],
				"discount": [
					{label: '01/01/2021', data: 0},
					{label: '01/02/2021', data: 0},
					{label: '01/03/2021', data: 0},
					{label: '01/04/2021', data: 0},
					{label: '01/05/2021', data: 0},
					{label: '01/06/2021', data: 0},
					{label: '01/07/2021', data: 0}
				]
			}
	}
	const [ startDate, setStartDate ] = useState(new Date(thisyear, thismonth, lastWeekStart));
	const [ endDate, setEndDate ] = useState(new Date(thisyear, thismonth, lastWeekEnd));
	const store = useState(storeFromUrl)[0];
	const [ selectedStore, setSelectedStore ] = useState(storeFromUrl);
	const [ visible, setVisible ] = useState('');  // Empty string means false, and all filter components are enabled by default.
	const [ dashboardData, setDashboardData ] = useState(r);


	// Set functions.
	const setEnable = () => { setVisible(''); };
	const setDisable = () => { setVisible('disabled'); };
	const sleep = (millsec) => { return new Promise(resolve => setTimeout(resolve, millsec))};
	const updateData = async() => {
		// Expect API to return in this format.
		// const res = {
		// 	"avg_serv_time": "00:00",
		// 	"order_num_total": 1234,
		// 	"order_num_total_food": 1234,
		// 	"order_num_kiosk_food": 1234,
		// 	"order_usage_kiosk_food": 1234,
		// 	"order_num_pos_food": 1234,
		// 	"order_usage_pos_food": 1234,
		// 	"order_num_total_bar": 1234,
		// 	"sales_total": 1234,
		// 	"sales_total_food": 1234,
		// 	"sales_total_bar": 1234,
		// 	"usage_by_users": [
		// 		{'username': 'userA', "order_total": 1234, "order_food": 1234, "order_bar": 1234, "order_promo": 1234, "order_discount": 1234, "sales_total": 1234, "sales_food": 1234, "sales_bar": 1234, "sales_promo": 1234, "sales_discount": 1234},
		// 		{'username': 'userB', "order_total": 1234, "order_food": 1234, "order_bar": 1234, "order_promo": 1234, "order_discount": 1234, "sales_total": 1234, "sales_food": 1234, "sales_bar": 1234, "sales_promo": 1234, "sales_discount": 1234},
		// 		{'username': 'userC', "order_total": 1234, "order_food": 1234, "order_bar": 1234, "order_promo": 1234, "order_discount": 1234, "sales_total": 1234, "sales_food": 1234, "sales_bar": 1234, "sales_promo": 1234, "sales_discount": 1234}
		// 	],
		// 	"graph": {
		// 		"promo": [
		// 			{label: '01/01/2021', data: 1234},
		// 			{label: '01/02/2021', data: 1234},
		// 			{label: '01/03/2021', data: 1234},
		// 			{label: '01/04/2021', data: 1234},
		// 			{label: '01/05/2021', data: 1234},
		// 			{label: '01/06/2021', data: 1234},
		// 			{label: '01/07/2021', data: 1234}
		// 		],
		// 		"discount": [
		// 			{label: '01/01/2021', data: 1234},
		// 			{label: '01/02/2021', data: 1234},
		// 			{label: '01/03/2021', data: 1234},
		// 			{label: '01/04/2021', data: 1234},
		// 			{label: '01/05/2021', data: 1234},
		// 			{label: '01/06/2021', data: 1234},
		// 			{label: '01/07/2021', data: 1234}
		// 		]
		// 	}
		// }

		setVisible('disabled');
		const response = await Axios(config.API_URL);  // request API call here	
		await sleep(300);
		setVisible('');

		// Below is for the demo.
		// Comment out when deploying.---------------------------
		const getRandomInt = (min, max) => {
			let minimum = Math.ceil(min);
			let maximum = Math.floor(max);
			return Math.floor(Math.random() * (maximum - minimum) + minimum);
		}

		const res = {
			"avg_serv_time": "00:00",
			"order_num_total": getRandomInt(1000, 10000),
			"order_num_total_food": getRandomInt(1000, 10000),
			"order_num_kiosk_food": getRandomInt(1000, 10000),
			"order_usage_kiosk_food": getRandomInt(0, 100),
			"order_num_pos_food": getRandomInt(1000, 10000),
			"order_usage_pos_food":  getRandomInt(0, 100),
			"order_num_total_bar":  getRandomInt(1000, 10000),
			"sales_total":  getRandomInt(1000, 10000),
			"sales_total_food":  getRandomInt(1000, 10000),
			"sales_total_bar":  getRandomInt(1000, 10000),
			"usage_by_users": [
				{'username': 'userA', "order_total":  getRandomInt(100, 700), "order_food": getRandomInt(100, 700), "order_bar": getRandomInt(100, 700), "order_promo": getRandomInt(100, 700), "order_discount": getRandomInt(100, 700), "sales_total": getRandomInt(100, 700), "sales_food": getRandomInt(100, 700), "sales_bar": getRandomInt(100, 700), "sales_promo": getRandomInt(100, 700), "sales_discount": getRandomInt(100, 700)},
				{'username': 'userB', "order_total": getRandomInt(100, 700), "order_food": getRandomInt(100, 700), "order_bar": getRandomInt(100, 700), "order_promo": getRandomInt(100, 700), "order_discount": getRandomInt(100, 700), "sales_total": getRandomInt(100, 700), "sales_food": getRandomInt(100, 700), "sales_bar": getRandomInt(100, 700), "sales_promo": getRandomInt(100, 700), "sales_discount": getRandomInt(100, 700)},
				{'username': 'userC', "order_total": getRandomInt(100, 700), "order_food": getRandomInt(100, 700), "order_bar": getRandomInt(100, 700), "order_promo": getRandomInt(100, 700), "order_discount": getRandomInt(100, 700), "sales_total": getRandomInt(100, 700), "sales_food": getRandomInt(100, 700), "sales_bar": getRandomInt(100, 700), "sales_promo": getRandomInt(100, 700), "sales_discount": getRandomInt(100, 700)}
			],
			"graph": {
				"promo": [
					{label: '01/01/2021', data: getRandomInt(1, 20)},
					{label: '01/02/2021', data: getRandomInt(1, 20)},
					{label: '01/03/2021', data: getRandomInt(1, 20)},
					{label: '01/04/2021', data: getRandomInt(1, 20)},
					{label: '01/05/2021', data: getRandomInt(1, 20)},
					{label: '01/06/2021', data: getRandomInt(1, 20)},
					{label: '01/07/2021', data: getRandomInt(1, 20)}
				],
				"discount": [
					{label: '01/01/2021', data: getRandomInt(1, 20)},
					{label: '01/02/2021', data: getRandomInt(1, 20)},
					{label: '01/03/2021', data: getRandomInt(1, 20)},
					{label: '01/04/2021', data: getRandomInt(1, 20)},
					{label: '01/05/2021', data: getRandomInt(1, 20)},
					{label: '01/06/2021', data: getRandomInt(1, 20)},
					{label: '01/07/2021', data: getRandomInt(1, 20)}
				]
			}
		}
		// ------------------------------------------------------
		setDashboardData(res);
	};



	return (
		<ContextFilter.Provider value={{ 
									stateStart: [startDate, setStartDate], 
									stateEnd: [endDate, setEndDate], 
									valueInitialStore: store, 
									stateCurrentStore: [selectedStore, setSelectedStore], 
									stateVisible: [visible, setVisible],
									stateDashboardData: [dashboardData, setDashboardData],
									funcDisableFilters: setDisable, 
									funcEnableFilters: setEnable,
									funcUpdateData: updateData
								  }}
		>
			{props.children}
		</ContextFilter.Provider>
	);
}

export default ContextFilterProvider;

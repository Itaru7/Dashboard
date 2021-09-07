import { useContext } from 'react';
import { ContextFilter } from '../ContextFilter';
import styles from './StyleRadioButtons.module.css'


function RadioButtons(){
	const { stateStart, stateEnd, stateVisible, funcUpdateData } = useContext(ContextFilter);
	const setStartDate = stateStart[1];
	const setEndDate = stateEnd[1];
	const currentVisibleStatus = stateVisible[0];
	const updateData = funcUpdateData;

	// Get Date, Month, Year of Today.
	const today = new Date();
	const thisyear = today.getFullYear();
	const thismonth = today.getMonth();
	const thisdate = today.getDate();

	const thisYear = async() => {
		setStartDate(new Date('01/01/' + thisyear));
		setEndDate(today - 1);
		await updateData();
	};
		
	const thisMonth = async() => {
		setStartDate(new Date(thisyear, thismonth, 1));
		setEndDate(today - 1);
		await updateData();
	}

	const thisWeek = async() => {
		let thisweekStart = thisdate - today.getDay();
		setStartDate(new Date(thisyear, thismonth, thisweekStart));
		setEndDate(today - 1);
		await updateData();
	}

	const yesterday = async() => {
		setStartDate(today - 1);
		setEndDate(today - 1);
		await updateData();
	}

	const lastYear = async() => {
		setStartDate(new Date(thisyear - 1, 0, 1));
        setEndDate(new Date(thisyear - 1, 11, 31));
		await updateData();
	}

	const lastMonth = async() => {
		setStartDate(new Date(thisyear, thismonth - 1, 1));
        setEndDate(new Date(thisyear, thismonth, 0));
		await updateData();
	}

	const lastWeek = async() => {
		let lastweekStart = thisdate - today.getDay() - 7;
        let lastweekEnd = lastweekStart + 6;
		setStartDate(new Date(thisyear, thismonth, lastweekStart));
        setEndDate(new Date(thisyear, thismonth, lastweekEnd));
		await updateData();
	}

	function other() {
		console.log('other');
	}

	return (
		<section className={styles.kintoneCustomizeHeaderOption}>
			<ul className={styles.mainul}>
				<li className={styles.mainli}>
					<label>
						<input type='radio' name='timeScale' id='li1' onChange={thisYear} disabled={ currentVisibleStatus }  />
						<span>This year</span>
					</label>
				</li>
				<li className={styles.mainli}>
					<label>
						<input type='radio' name='timeScale' id='li2' onChange={thisMonth} disabled={ currentVisibleStatus } />
						<span>This month</span>
					</label>
				</li>
				<li className={styles.mainli}>
					<label>
						<input type='radio' name='timeScale' id='li3' onChange={thisWeek} disabled={ currentVisibleStatus } />
						<span>This week</span>
					</label>
				</li>
				<li className={styles.mainli}>
					<label>
						<input type='radio' name='timeScale' id='li4' onChange={yesterday} disabled={ currentVisibleStatus } />
						<span>Yesterday</span>
					</label>
				</li>
				<li className={styles.mainli}>
					<label>
						<input type='radio' name='timeScale' id='li5' onChange={lastWeek} defaultChecked disabled={ currentVisibleStatus } />
						<span>Last week</span>
					</label>
				</li>
				<li className={styles.mainli}>
					<label>
						<input type='radio' name='timeScale' id='li6' onChange={lastMonth} disabled={ currentVisibleStatus } />
						<span>Last month</span>
					</label>
				</li>
				<li className={styles.mainli}>
					<label>
						<input type='radio' name='timeScale' id='li7' onChange={lastYear} disabled={ currentVisibleStatus } />
						<span>Last year</span>
					</label>
				</li>
				<li className={styles.mainli}>
					<label>
						<input type='radio' name='timeScale' id='li8' onChange={other} disabled={ currentVisibleStatus } />
						<span>Other</span>
					</label>
				</li>
			</ul>
		</section>
	);
}

export default RadioButtons;

import { useContext} from 'react';
import { ContextFilter } from '../ContextFilter';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import styles from './StyleDatePicker.module.css'

function DataPicker() {
	const { stateStart, stateEnd, stateVisible } = useContext(ContextFilter);
	const [ startDate, setStartDate ] = stateStart;
	const [ endDate, setEndDate ] = stateEnd;
	const visible = stateVisible[0];

	return (
		<div className={styles.datepick}>
			<div className={styles.pickerBox}><label className={styles.dateLabel}>Start Date:</label><DatePicker selected={ startDate } onChange={ (date) => setStartDate(date) } disabled={ visible } className={styles.dateInput}/></div>
			<div className={styles.pickerBox}><label className={styles.dateLabel}>End Date:</label><DatePicker selected={ endDate } onChange={ (date) => setEndDate(date) } disabled={ visible } className={styles.dateInput}/></div>
		</div>
	);
}

export default DataPicker;

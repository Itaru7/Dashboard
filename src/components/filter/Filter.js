import RadioButtons from './radio_buttons/RadioButtons';
import DataPicker from './datepicker/DatePicker';
import SelectStoreDropdown from './dropdown/SelectStoreDropdown';
import SearchButton from './search_button/SearchButton';
import styles from './StyleFilter.module.css'

function Filter(){
	return (
		<div className={styles.kintoneCustomize}>
			<RadioButtons />
			<div className={styles.rightComponent}>
				<div className={styles.date}>
					<DataPicker />
					<SearchButton />
				</div>
				<SelectStoreDropdown />
			</ div>
		</ div>
	);
}

export default Filter;

import config from '../../../config.json';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import { useContext } from 'react';
import { ContextFilter } from '../ContextFilter';
import styles from './StyleSelectStoreDropdown.module.css'

function SelectStoreDropdown(){

	const { valueInitialStore, stateCurrentStore, funcUpdateData, stateVisible } = useContext(ContextFilter);
	const initialStore = valueInitialStore;
	const setSelectedStore = stateCurrentStore[1];
	const updateData = funcUpdateData;
	const visible = stateVisible[0];
	const defaultOption = initialStore;
	const options = [];
	// Here handles the permission to display in the dropdown.
	// HQ privillage shows all the stores in the dropdown.
	// Other privillage shows only the store they belong.
	if (initialStore === 'HQ'){
		Object.entries(config.config_stores).map(([key, value]) => {
			options.push({value: key, label: value});
			return '';
		});
	}
	else{
		Object.entries(config.config_stores).map(([key, value]) => {
			if (key.includes(initialStore)){
				options.push({value: key, label: value});	
			}
			return '';
		});
	}
	
	const updateCurrentStore = async (e) => {
		setSelectedStore(e.value);
	    await updateData();	
	}
	
	return (
		<div className={styles.storeDropdown}>
			<label className={styles.storeLabel}>Store: </label>
			<Dropdown options={ options } value={ defaultOption } onChange={ updateCurrentStore } disabled={ visible } className={styles.dropdown}/>
		</div>
	);
}

export default SelectStoreDropdown;

import { useContext } from 'react';
import { ContextFilter } from '../ContextFilter';
import styles from './StyleSearchButton.module.css'

function SearchButton(){
	const { stateVisible, funcUpdateData } = useContext(ContextFilter);
	const visible = stateVisible[0];
	const updateData = funcUpdateData;
	
	const onSearch = async() => {
		await updateData();
	};	
	
	return (
		<div className={styles.button}>
			<button onClick={ onSearch } disabled={ visible }>Search</button>
		</ div>
	);
}

export default SearchButton;

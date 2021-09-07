import { useContext } from 'react';
import { ContextFilter } from '../../../filter/ContextFilter';
import styles from './StyleAvgServTime.module.css';

function AvgServTime() {
	const { stateDashboardData } = useContext(ContextFilter);
	const dashboardData = stateDashboardData[0];

	return (
		<div>
			<table className={styles.table}>
				<tbody>
					<tr>
						<th className={styles.tHead}>Average Serving Time</th>
					</tr>
					<tr>
						<td className={styles.tBody}>{ dashboardData['avg_serv_time']}</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
}

export default AvgServTime;

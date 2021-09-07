import { useContext} from 'react';
import { ContextFilter } from '../../../filter/ContextFilter';
import styles from './StyleTransactionSummary.module.css';

function TransactionSummary() {
	const { stateDashboardData } = useContext(ContextFilter);
	const dashboardData = stateDashboardData[0];

	return (
		<div>
			<table>
				<tbody>
				<tr>
					<td rowSpan="2" className={`${styles.category} ${styles.bold}`} >Total Order</td>
					<td colSpan="5" className={`${styles.category} ${styles.bold}`}>Food Order</td>
					<td rowSpan="2" className={`${styles.category} ${styles.bold}`}>Bar Order</td>
				</tr>
				<tr>
					<td className={styles.category}>Total Order</td>
					<td className={styles.category}>Kiosk Order</td>
					<td className={styles.category}>% Usage</td>
					<td className={styles.category}>POS Order</td>
					<td className={styles.category}>% Usage</td>
				</tr>
				<tr>
					<td className={styles.detail}>{ dashboardData['order_num_total']}</td>
					<td className={styles.detail}>{ dashboardData['order_num_total_food']}</td>
					<td className={styles.detail}>{ dashboardData['order_num_kiosk_food']}</td>
					<td className={styles.detail}>{ dashboardData['order_usage_kiosk_food']}%</td>
					<td className={styles.detail}>{ dashboardData['order_num_pos_food']}</td>
					<td className={styles.detail}>{ dashboardData['order_usage_pos_food']}%</td>
					<td className={styles.detail}>{ dashboardData['order_num_total_bar']}</td>
				</tr>
				</tbody>
			</table>
		</div>
	);
}

export default TransactionSummary;

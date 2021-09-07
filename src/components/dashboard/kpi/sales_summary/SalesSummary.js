import { useContext } from 'react';
import { ContextFilter } from '../../../filter/ContextFilter';
import styles from './StyleSalesSummary.module.css';

function SalesSummary() {
	const { stateDashboardData } = useContext(ContextFilter);
	const dashboardData = stateDashboardData[0];

	return (
		<div>
			<table>
				<tbody>
					<tr>
						<td className={styles.category}>Total Sales</td>
						<td className={styles.category}>Food Sales</td>
						<td className={styles.category}>Bar Sales</td>
					</tr>
					<tr>
						<td className={styles.detail}>$ { dashboardData['sales_total'] }</td>
						<td className={styles.detail}>$ { dashboardData['sales_total_food'] }</td>
						<td className={styles.detail}>$ { dashboardData['sales_total_bar'] }</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
}

export default SalesSummary;

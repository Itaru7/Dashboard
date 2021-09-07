import { useContext} from 'react';
import { ContextFilter } from '../../filter/ContextFilter';
import styles from './StyleSalesTableByUsers.module.css';

function SalesTableByUsers() {
	const { stateDashboardData } = useContext(ContextFilter);
	const dashboardData = stateDashboardData[0];

	return (
		<div>
			<table>
				<tbody>
					<tr className={styles.headerColor}>
						<td colSpan="11">Promo & Discount Usage by Users</td>
					</tr>
					<tr className={styles.headerColor}>
						<td> </td>
						<td colSpan="5">Number of Orders</td>
						<td colSpan="5">Sales Amount</td>
					</tr>
					<tr className={styles.headerColor}>
						<td>Users</td>
						<td>Total</td>
						<td>Food</td>
						<td>Bar</td>
						<td>Promo</td>
						<td>Discount</td>
						<td>Total</td>
						<td>Food</td>
						<td>Bar</td>
						<td>Promo</td>
						<td>Discount</td>
					</tr>
					{ dashboardData['usage_by_users'].map((v, i) => {
						return (
							<tr key={i}>
								<td>{v['username']}</td>
								<td>{v['order_total']}</td>
								<td>{v['order_food']}</td>
								<td>{v['order_bar']}</td>
								<td>{v['order_promo']}</td>
								<td>{v['order_discount']}</td>
								<td>${v['sales_total']}</td>
								<td>${v['sales_food']}</td>
								<td>${v['sales_bar']}</td>
								<td>${v['sales_promo']}</td>
								<td>${v['sales_discount']}</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</div>
	);
}

export default SalesTableByUsers;

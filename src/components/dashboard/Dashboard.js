import KPI from "./kpi/KPI";
import SalesTableByUsers from "./sales_table_by_users/SalesTableByUsers";
import PromoDiscountGraph from "./graph/PromoDiscountGraph";

function Dashboard() {
	return (
		<div>
			<KPI />
			<SalesTableByUsers />
			<PromoDiscountGraph />
		</div>
	);
}

export default Dashboard;

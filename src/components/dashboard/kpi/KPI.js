import AvgServTime from "./avg_serv_time/AvgServTime";
import TransactionSummary from "./transaction_summary/TransactionSummary";
import SalesSummary from "./sales_summary/SalesSummary";
import styles from './StyleKPI.module.css'

function KPI() {
	return (
		<div className={styles.kpi}>
            <AvgServTime />
            <TransactionSummary />
            <SalesSummary />
		</div>
	);
}

export default KPI;

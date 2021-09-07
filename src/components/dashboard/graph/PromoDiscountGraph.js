import { useContext} from 'react';
import { ContextFilter } from '../../filter/ContextFilter';
import CanvasJSReact from "../../../lib/canvasjs.react";
let CanvasJSChart = CanvasJSReact.CanvasJSChart;

function PromoDiscountGraph() {
	const { stateDashboardData } = useContext(ContextFilter);
	const dashboardData = stateDashboardData[0];

	const promoData = []
    for (let i = 0; i < dashboardData['graph']['promo'].length; i++){
        let data = dashboardData['graph']['promo'][i]
        promoData.push({label: data['label'], y: data['data']});
    }

    const discountData = []
    for (let i = 0; i < dashboardData['graph']['discount'].length; i++){
        let data = dashboardData['graph']['discount'][i]
        discountData.push({label: data['label'], y: data['data']});
    }

	const options = {
      title: {
        text: "Promo & Discount Usage"
      },
      data: [{
                type: "stackedColumn",
                dataPoints: promoData
       },
      {
                type: "stackedColumn",
                dataPoints: discountData
       }]
   }

	return (
		<div>
			<CanvasJSChart options = {options} />
		</div>
	);
}

export default PromoDiscountGraph;

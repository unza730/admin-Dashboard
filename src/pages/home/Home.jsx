import Feature from '../featureinfo/FeatureInfo';
import LatestSalesOrder from '../latestsalesorder/LatestSalesOrder';
import PurchaseOrder from '../purchaseorder/PurchaseOrder';
import TopSellingProduct from '../topsellingproducts/TopSellingProducts';
import './home.css';

export default function Home() {
    return (
        <div className="home">
            <Feature />
            <div className="productsection">
            <LatestSalesOrder />
                <PurchaseOrder />
                <TopSellingProduct />
            </div>
        </div>
    )
}
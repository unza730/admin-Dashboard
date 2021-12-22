import { Table, Button } from 'react-bootstrap';
import './latest.css';

export default function LatestSalesOrder() {
    return (
        <div className="product">
            <div className="pro">
       
            <div className="heading">Latest Sales orders - By sales Channels</div>

            <Table responsive="sm">
                 <thead>
                    <tr className="roww">
                        <th>Order Id</th>
                        <th>Customer</th>
                        <th>Fullfillment Status</th>
                        <th>Payment status</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>

                    <tr>
                        <td>$0083</td>
                        <td>Emest Gaboyan</td>
                            <td> <Button variant="outline-primary" size="sm">fullfiled</Button>{' '}</td>
                            <td><Button variant="outline-secondary" size="sm">Paid</Button>{' '}</td>
                        <td>$300</td>
                    </tr>
                    <tr>
                        <td>$0083</td>
                        <td>Emest Gaboyan</td>
                            <td><Button variant="outline-danger" size="sm">Cancelled</Button>{' '}</td>
                            <td><Button variant="outline-info" size="sm">Partially Paid</Button>{' '}</td>
                        <td>$100</td>
                    </tr>
                    <tr >
                        <td>$0083</td>
                        <td>Emest Gaboyan</td>
                            <td><Button variant="outline-dark" size="sm">Partially Fullfilled</Button>{' '}</td>
                            <td><Button variant="outline-dark" size="sm">Refunded</Button>{' '}</td>
                        <td>$200</td>
                    </tr>
                    <tr >
                        <td>$0083</td>
                        <td>Emest Gaboyan</td>
                            <td><Button variant="outline-warning" size="sm">Unfullfiled</Button>{' '}</td>
                            <td><Button variant="outline-warning" size="sm">Pending</Button>{' '}</td>
                        <td>$500</td>
                    </tr>
                    <tr >
                        <td>$0083</td>
                        <td>Emest Gaboyan</td>
                            <td><Button variant="outline-secondary" size="sm">Draft</Button>{' '}</td>
                            <td><Button variant="outline-dark" size="sm">Partial Refund</Button>{' '}</td>
                        <td>$600</td>
                    </tr>
                </tbody>
                </Table>
                </div>
        </div>
    )
}
import './purchase.css';
import { Card } from 'react-bootstrap';

export default function PurchaseOrder() {
    return (
        <div className="purchaseorder">
        <Card className="cardd" style={{ width: '16rem', borderRadius:"15px" }}>
            <Card.Body>
                
    <Card.Title>Purchase Orders</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                    <div className="purchasetitle">
                 <span className="purchasetitleleft">Received Orders</span>
                 <span className="purchasetitleright">$20</span>
                    </div>
                    <div className="purchasetitle">
                <span className="purchasetitleleft">Total Cost(USD)</span>
                <span className="purchasetitleright">$4600</span>
             </div>
                </Card.Subtitle>
    <Card.Text>
     <div className="line"></div>
            <div className="incomingpurchaseorders">
                <h6>Incoming Purchase Orders</h6>
                <ul>
                    <li>
                        <div className="amount"> #P00005
                            <span className="am">$1200</span>
                        </div>
                     <div className="name">Ernest Gaboyan</div>
                    </li>
                    <li>
                        <div className="amount"> #P00006
                            <span className="am">$1000</span>
                        </div>
                        <div className="name">Ernest Gaboyan</div>
                    </li>
                    <li>
                        <div className="amount"> #P00005
                            <span className="am">$200</span>
                        </div>
                        <div className="name">Ernest Gaboyan</div>
                    </li>
                    <li>
                        <div className="amount">
                            <span>#P00005</span> 
                            <span className="am">$1200</span>
                        </div>
                        <div className="name">Ernest Gaboyan</div>
                    </li>
                    <li>
                        <div className="amount"> #P00005</div>
                        <span className="am">$1200</span>
                        <div className="name">Ernest Gaboyan</div>
                    </li>
                </ul>
            </div>
    </Card.Text>
    
  </Card.Body>
            </Card>
        </div>
        
        // <div className="purchaseorder">
        //     <div className="purchasetitle">
        //         <span className="purchasetitleleft">Received Orders</span>
        //         <span className="purchasetitleright">$20</span>
        //     </div>
        //     <div className="purchasetitle">
        //         <span className="purchasetitleleft">Total Cost(USD)</span>
        //         <span className="purchasetitleright">$4600</span>
        //     </div>
        //     <div className="line"></div>
        //     <div className="incomingpurchaseorders">
        //         <h6>Incoming Purchase Orders</h6>
        //         <ul>
        //             <li>
        //                 <div className="amount"> #P00005
        //                     <span className="am">$1200</span>
        //                 </div>
        //              <div className="name">Ernest Gaboyan</div>
        //             </li>
        //             <li>
        //                 <div className="amount"> #P00006
        //                     <span className="am">$1000</span>
        //                 </div>
        //                 <div className="name">Ernest Gaboyan</div>
        //             </li>
        //             <li>
        //                 <div className="amount"> #P00005
        //                     <span className="am">$200</span>
        //                 </div>
        //                 <div className="name">Ernest Gaboyan</div>
        //             </li>
        //             <li>
        //                 <div className="amount">
        //                     <span>#P00005</span> 
        //                     <span className="am">$1200</span>
        //                 </div>
        //                 <div className="name">Ernest Gaboyan</div>
        //             </li>
        //             <li>
        //                 <div className="amount"> #P00005</div>
        //                 <span className="am">$1200</span>
        //                 <div className="name">Ernest Gaboyan</div>
        //             </li>
        //         </ul>
        //     </div>
        //     </div>
    )
}

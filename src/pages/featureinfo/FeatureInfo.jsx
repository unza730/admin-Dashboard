import './featureinfo.css';
import { ArrowUpward } from "@material-ui/icons";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import SubjectIcon from '@mui/icons-material/Subject';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import CameraOutdoorIcon from '@mui/icons-material/CameraOutdoor';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import CleanHandsIcon from '@mui/icons-material/CleanHands';

export default function Feature() {
    return (
        <div className="featured">
            <div className="featuredItem">
                <span className="featuredTitle">To be Fulfilled</span>
                <span className="featuredright"><SubjectIcon /></span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$56</span>
                   
                    <span className="featuredMoneyRate">
                        -11.4 <ArrowForwardIcon className="featuredIcon negative" />
                    </span>
                </div>
                <span className="featuredSub">Quality</span>
            </div>
            <div className="featuredItem">
                <span className="featuredTitle">To be invoiced</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$24</span>
                    <span className="featuredMoneyRate">
                         <ArrowForwardIcon className="featuredIcon negative" />
                    </span>
                </div>
                <span className="featuredSub">Quality</span>
            </div>
            <div className="featuredItem">
                <span className="featuredTitle">Completed</span>
                <span className="featuredright"><CheckCircleOutlineIcon /></span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$2,225</span>
                    <span className="featuredMoneyRate">
                        +2.4 <ArrowForwardIcon className="featuredIcon" />
                    </span>
                </div>
                <span className="featuredSub">Quality</span>
            </div>
            <div className="featuredItem">
                <span className="featuredTitle">Assigned to me</span>
                <span className="featuredright"><AssignmentIndIcon /></span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$2,225</span>
                    <span className="featuredMoneyRate">
                        +2.4 <ArrowForwardIcon className="featuredIcon" />
                    </span>
                </div>
                <span className="featuredSub">Compared to last month</span>
            </div>
        {/* </div>
         <div className="featured"> */}
            <div className="featuredItem">
                <span className="featuredleft"><CameraOutdoorIcon /></span>
                <span className="featuredTitle">Out of Stock products</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$2,415</span>
                    <span className="featuredMoneyRate">
                        -11.4 <ArrowForwardIcon className="featuredIcon negative" />
                    </span>
                </div>
                <span className="featuredSub">Compared to last month</span>
            </div>
            <div className="featuredItem">
                <span className="featuredleft"><ProductionQuantityLimitsIcon /></span>
                <span className="featuredTitle">All Products</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$4,415</span>
                    <span className="featuredMoneyRate">
                        -1.4 <ArrowForwardIcon className="featuredIcon negative" />
                    </span>
                </div>
                <span className="featuredSub">Compared to last month</span>
            </div>
            <div className="featuredItem">
                <span className="featuredleft"><Inventory2Icon /></span>
                <span className="featuredTitle">Archieved Products</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$2,225</span>
                    <span className="featuredMoneyRate">
                        +2.4 <ArrowUpward className="featuredIcon" />
                    </span>
                </div>
                <span className="featuredSub">Compared to last month</span>
            </div>
            <div className="featuredItem">
                <span className="featuredleft"><CleanHandsIcon /></span>
                <span className="featuredTitle">Quantity On Hand</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$2,225</span>
                    <span className="featuredMoneyRate">
                        +2.4 <ArrowUpward className="featuredIcon" />
                    </span>
                </div>
                <span className="featuredSub">Compared To last one</span>
            </div>
        </div>
    )
}
import  Linechart  from "../LineChart"
import Piechart from "../PieChart";
import { IoMdInformationCircleOutline } from "react-icons/io";

import "./index.css"

const Dashboard =props=>{
    return (
        <div className="graph_content">
            <div className="line_chart_container">
                            <div className="content">
                                <div className="title_content">
                                    <h1 className="title">Sales Vs Orders</h1>
                                    <IoMdInformationCircleOutline className="icon" />
                                </div>
                                <hr className="hr-line" />
                                <Linechart/>
                            </div>
            </div>
            <div className="pie_chart_container">
                            <div className="content">
                                <div className="title_content">
                                    <h1 className="title">Portion of Sales</h1>
                                    <IoMdInformationCircleOutline className="icon" />
                            </div>
                            <hr className="hr-line-pie" /> 
                            <Piechart/>
                            <div className="ident">
                                <div className="row">
                                <div className="woo_conent">
                                </div>
                                <p className="name">WooCommerce Store</p>
                                </div>
                                <div className="row">
                                <div className="shopify_conent">
                                </div>
                                <p className="name">Shopify Store</p>
                                </div>
                                
                            </div>
                            </div>
                            
                            
            </div>
          
        </div>
        
    )
}

export default Dashboard
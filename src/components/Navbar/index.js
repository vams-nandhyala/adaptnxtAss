
import {Component} from 'react'
import TabItem from '../TabItem'
import Dashboard from '../Dashboard';
import Orders from '../Orders';
import Inventory from '../Inventory';
import Returns from '../Returns';
import Customers from "../Customers"
import Shipping from "../Shipping"
import Channel from "../Channel"
import Integrations from "../Integrations"


import "./index.css"

const tabsList = [
    {tabId: 'DASHBOARD', displayText: 'Dashboard'},
    {tabId: 'INVENTOTY', displayText: 'Inventory'},
    {tabId: 'ORDER', displayText: 'Order'},
    {tabId: 'Returns', displayText: 'Returns'},
    {tabId: 'CUSTOMERS', displayText: 'Customers'},
    {tabId: 'SHIPPING', displayText: 'Shipping'},
    {tabId: 'CHANNEL', displayText: 'Channel'},
    {tabId: 'INTEGRATIONS', displayText: 'Integrations'}
  ]

class Navbar extends Component{
    state={
        activeTabId: tabsList[0].tabId,
        activeDisplayText:tabsList[0].displayText
    }

    setActiveTabId = tabId => {
        this.setState({activeTabId: tabId})
        
      }

    setActiveTabDisplay=displayText=>{
        this.setState({activeDisplayText:displayText})
    }
    
    renderDashboard=()=>{
        return (<Dashboard/>)
    }

    onRenderProfileStatus = () => {
        const {activeDisplayText} = this.state 
        switch (activeDisplayText) {
          case "Dashboard":
            return <Dashboard/>
          case "Inventory":
            return <Inventory/>
          case "Order":
            return <Orders/>
          case "Returns":
            return <Returns/>
          case "Customers":
            return <Customers/>
          case "Shipping":
            return <Shipping/>
          case "Channel":
            return <Channel/>
          case "Integrations":
            return <Integrations/>
          default:
            return null
        }
      }
    render(){
        const {activeTabId,activeDisplayText} = this.state
        return(
            <div className="main_container">
                <div className="nav_bar_container">
                    <ul className="tabs-list">
                        {tabsList.map(eachTab => (
                            <TabItem
                                key={eachTab.tabId}
                                tabDetails={eachTab}
                                setActiveTabId={this.setActiveTabId}
                                setActiveTabDisplay={this.setActiveTabDisplay}
                                isActive={activeTabId === eachTab.tabId}
                            />
                            ))}
                        </ul>
                        <select className="input_content">
                            <option className="option">Calculators</option>
                        </select>
                        <select className="input_content">
                            <option className="option">Reports</option>
                        </select>
                        <select className="input_content">
                            <option className="option">Account</option>
                        </select>
                </div>
                <div className="content">
                    <div className="top_content_heading">
                        <div className="heading-content">
                            <h1 className="heading">{activeDisplayText}</h1>
                        </div>
                    </div>
                    {this.onRenderProfileStatus()}
                    
                    
                </div>
            </div>
               
        )
    }
}

export default Navbar
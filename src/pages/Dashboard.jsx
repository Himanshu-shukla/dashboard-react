import React, {useEffect} from 'react'

import { Link } from 'react-router-dom'

import ReactApexChart from 'react-apexcharts'
import Chart from 'react-apexcharts'

import { useSelector } from 'react-redux'

import StatusCard from '../components/status-card/StatusCard'

import Table from '../components/table/Table'
import first from '../assets/images/first.png'
import second from '../assets/images/second.png'
import Badge from '../components/badge/Badge'
import statusCards from '../assets/JsonData/status-card-data.json'

const chartOptions = {
    series: [{
        name: 'Dat',
        data: [0,0,0,0,0,0,0,90,0,0,0,0]
    }],
    options: {
        color: ['#6ab04c', '#2980b9'],
        chart: {
            background: 'transparent'
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'smooth'
        },
        xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        },
        legend: {
            position: 'top'
        },
        grid: {
            show: false
        },
        title :{
            text: "Overview"
        },
        subtitle :{
            text: "Monthly Earning"
        }
    }
}

function PieChart() {
    const chartOptions = {
      plotOptions: {
        pie: {
          expandOnClick: false,
          customScale: 0.8, // Adjust this value to create a ring-like circle
        },
      },
      title: {
        text: 'Customer',
        align: 'center',
        margin: 5,
        offsetY: 20,
        style: {
          fontSize: '20px',
        },
      },
      subtitle: {
        text: 'Customers that buy products',
        align: 'center',
        offsetY: 50,
        style: {
          fontSize: '14px',
        },
      },
      dataLabels: {
        enabled: false,
      },
    };
  
    const chartSeries = [65, 35];
  
    return (
      <div className="pie-chart">
        <ReactApexChart
          options={chartOptions}
          series={chartSeries}
          type="donut"
          width="100%"
        />
      </div>
    );
  }


const latestOrders = {
    body: [
        {
            id: "#OD1711",
            title: "Abstract 3D",
            subtitle:"Lorel ipsum dolor sit amet, consectetur",
            stock: "32 in stock",
            price: "$45.99",
            totalSales: "20",
            pic: first,
        },
        {
            id: "#OD1712",
            title: "Sarphens Illustration",
            subtitle:"Lorel ipsum dolor sit amet, consectetur",
            stock: "32 in stock",
            price: "$45.99",
            totalSales: "20",
            pic: second,
        }
    ]
}

const orderStatus = {
    "shipping": "primary",
    "pending": "warning",
    "paid": "success",
    "refund": "danger"
}

const renderOrderHead = (item, index) => {
    <div className='row'>
    <input
      type="text"
      placeholder="Product Name"
    />
    <input
      type="text"   
      placeholder="Stock"
    />
    <input
      type="text"
      placeholder="Price"
    />
    <input
      type="text"
      placeholder="Total Sales"
    />
  </div>
}

const renderOrderBody = (item, index) => (
    <tr key={index}>
      <td>
        <div className="table-row-left">
          <img src={item.pic} alt="Product" style={{    borderRadius: '10%',height: "50px"}}/>
        </div>
      </td>
      <td>
        <div className="table-row-right">
          <strong>{item.title}</strong>
          <p className="subtitle">{item.subtitle}</p>
        </div>
      </td>
      <td>{item.stock}</td>
      <td>{item.price}</td>
      <td>{item.totalSales}</td>
      <td>
        <Badge type={orderStatus[item.status]} content={item.status} />
      </td>
    </tr>
  );
  

const Dashboard = () => {

    const themeReducer = useSelector(state => state.ThemeReducer.mode)

    return (
        <div>
            <h2 className="page-header">Dashboard</h2>
                    <div className="row">
                        {
                            statusCards.map((item, index) => (
                                <div className="col-sm-12 col-md-6 col-lg-3 col-xl-3" key={index}>
                                    <StatusCard
                                        icon={item.icon}
                                        count={item.count}
                                        title={item.title}
                                        text={item.text}
                                        trend={item.trend}
                                    />
                                </div>
                            ))
                        }
                        </div>
              <div className="row" style={{height:"50vh"}}>
                <div className="col-7">
                    <div className="card full-height">
                        {/* chart */}
                        <Chart
                            options={themeReducer === 'theme-mode-dark' ? {
                                ...chartOptions.options,
                                theme: { mode: 'dark'}
                            } : {
                                ...chartOptions.options,
                                theme: { mode: 'light'}
                            }}
                            series={chartOptions.series}
                            type='bar'
                            height='100%'
                        />
                    </div>
                </div>
                <div className="col-5">
                    <PieChart />
                </div>
                </div>
                <div className="row">
                <div className="col-12">
                    <div className="card">
                        <div className="card__header">
                            <h3>Product Sell</h3>
                        </div>
                        <div className="card__body">
                            <Table
                                renderHead={(item, index) => renderOrderHead(item, index)}
                                bodyData={latestOrders.body}
                                renderBody={(item, index) => renderOrderBody(item, index)}
                            />
                        </div>
                        <div className="card__footer">
                            <Link to='/'>view all</Link>
                        </div>
                    </div>
                </div>
            </div>
            </div>
    )
}

export default Dashboard

import React from 'react'
import './Main.css';
import Card from "../components/cards/Card";
import Chart_left from '../components/charts/charts_left/Chart_left';
import Chart_right from '../components/charts/charts_right/Chart_right';



const Main = () => {
    const cards = [
        {
            cardColor: "card_ligth_blue",
            cardText: "Income",
            ammount: "500,000"
        },
        {
            cardColor: " card_cian",
            cardText: "Pronosticated",
            ammount: "500,000"
        },
        {
            cardColor: "card_gray",
            cardText: "Users",
            ammount: "500,000"
        },
        {
            cardColor: "card_ligth_red",
            cardText: "Test",
            ammount: "500,000"
        },
    
    
    
    
    ]
    return (
        <main>
            <div className='main__container'>
                <div className='main__title'>
                    {/* <img src={chartImage} alt="logo" /> */}
                    <div className='main__greeting'>
                        <h1>Hello User</h1>
                        <p>Welcome to your dashboard</p>
                    </div>
                </div>

                <div className="main__cards">
                    <Card
                        text={"Number of scanned tickets"}
                        quantity={"320"}
                        optStyles={"fa fa-user-o fa-2x text-lightblue"}
                    />

                    <Card
                        text={"Number of people in the event"}
                        quantity={"320"}
                        optStyles={"fa fa-calendar fa-2x text-red"}
                    />

                    <Card
                        text={"Number of tickets"}
                        quantity={"320"}
                        optStyles={"fa fa-camera fa-2x text-lightblue"}
                    />

                    <Card
                        text={"Number of scanners"}
                        quantity={"320"}
                        optStyles={"fa fa-thumbs-up fa-2x text-green"}
                    />
                </div>


                <div className="charts">

                    <Chart_left reportName={"Daily Report"} reportNameDetail={"Dominican Republic"} />
                    <Chart_right  chartName={"Test"} chartNameDetail ={"Test"} cards ={cards}/>


                </div>


            </div>
        </main>
    )
}

export default Main


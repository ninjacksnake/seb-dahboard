import React from 'react'
import './Main.css';
// import chartImage from '../../assets/hello.svg';
import Chart from '../charts/Chart';


const Main = () => {
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

                    <div className="card">
                        <i className="fa fa-user-o fa-2x text-lightblue"></i>
                        <div className="card_inner">
                            <p className='text-primary-p'>Number of scanned tickets</p>
                            <span className="font-bold text-title">450</span>
                        </div>
                    </div>

                    <div className="card">
                        <i className="fa fa-calendar fa-2x text-red"></i>
                        <div className="card_inner">
                            <p className='text-primary-p'>Number of tickets</p>
                            <span className="font-bold text-title">1000</span>
                        </div>
                    </div>

                    <div className="card">
                        <i className="fa fa-camera fa-2x text-lightblue"></i>
                        <div className="card_inner">
                            <p className='text-primary-p'>Number of tickets</p>
                            <span className="font-bold text-title">1000</span>
                        </div>
                    </div>

                    <div className="card">
                        <i className='fa fa-thumbs-up fa-2x text-green'></i>
                        <div className="card_inner">
                            <p className="text-primary-p">Number of scanners</p>
                            <span className="font-bold text-title">250</span>
                        </div>
                    </div>

                    <div className="charts">
                        <div className="charts__left">
                            <div className="charts__left__title">
                                <div>
                                    <h1>Daily Reports</h1>
                                    <p>Dominican Republic</p>
                                </div>
                                <i className="fa fa-use"></i>
                            </div>
                            <Chart />
                        </div>

                        <div className="charts__right">
                            <div className="charts__right__title">
                                <div>
                                    <h1>Status Reports</h1>
                                    <p>Dominican Republic</p>
                                </div>
                                <i className="fa fa-use"></i>
                            </div>

                            <div className="charts__right__cards">
                               
                                <div className='card1'>
                                    <h1>Income</h1>
                                    <p>$500,000</p>
                                </div>

                                <div className='card2'>
                                    <h1>Pronosticated</h1>
                                    <p>$500,000</p>
                                </div>

                                <div className='card3'>
                                    <h1>Peak</h1>
                                    <p>$500,000</p>
                                </div>

                                <div className='card4'>
                                    <h1>Users</h1>
                                    <p>5</p>
                                </div>
                            
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </main>
    )
}

export default Main
import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "react-tabs/style/react-tabs.css";
import Clock from './clock';
class ControlledTabs extends Component {
    constructor() {
        super();
        this.state = { tabIndex: 0 };
    }

    render() {
        return (
            <div>
                <div className=" col-md-offset-2 col-md-10" >
                    <div className="card car-bord">
                        <div className="card-header card-pad">

                            <div className="nav ">

                                <Tabs selectedIndex={this.state.tabIndex} onSelect={tabIndex => this.setState({ tabIndex })} className="tab-widt" >
                                    <h6 className="perform-surveillence float-left"  >OTT Performance Surveillence</h6>
                                    <img src={require('../assets/clockwise.png')} className="img-wid float-left" />
                                    <TabList >

                                        <Tab><a className="aFont">overall</a></Tab>
                                        <Tab><a className="aFont">Instant Messaging</a></Tab>
                                        <Tab><a className="aFont">Social Network</a></Tab>
                                        <Tab><a className="aFont">Software</a></Tab>
                                        <Tab><a className="aFont">Web</a></Tab>
                                        <Tab><a className="aFont">Streaming</a></Tab>
                                    </TabList>
                                    <TabPanel>
                                        <div className="card-body">
                                            <div className="container">
                                                <div className="row">
                                                    <div className="col-md-2">
                                                        <div className="card card-mar3">
                                                           <Clock />
                                                        </div>
                                                        <div className="card card-mar4">
                                                           <Clock />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-10">
                                                        <table className="table borderless">
                                                            <thead>


                                                                <tr>
                                                                    <th></th>
                                                                    <th>Instant Message</th>
                                                                    <th>Social Network Software</th>
                                                                    <th>Web</th>
                                                                    <th>Streaming</th>

                                                                </tr>




                                                            </thead>
                                                            <tbody>

                                                                <tr>

                                                                    <td className="sub-col">Data Volume</td>
                                                                    <td className="pad-bar">
                                                                        <p className="m-0 p-sty"><b>16.78GB</b></p>
                                                                        <div className="progress prog-bar3">
                                                                            <div className="progress-bar bg-success progress-bar-striped progress-bar-animated prog-ba" ></div>
                                                                        </div></td>
                                                                    <td className="pad-bar">
                                                                        <p className="m-0 p-sty"><b>16.78GB</b></p><div className="progress prog-bar3">
                                                                            <div className="progress-bar bg-success progress-bar-striped progress-bar-animated prog-ba" ></div>
                                                                        </div></td>
                                                                    <td className="pad-bar">
                                                                        <p className="m-0 p-sty"><b>16.78GB</b></p><div className="progress prog-bar3">
                                                                            <div className="progress-bar bg-success  progress-bar-striped progress-bar-animated prog-ba" ></div>
                                                                        </div></td>
                                                                    <td className="pad-bar">
                                                                        <p className="m-0 p-sty"><b>16.78GB</b></p><div className="progress prog-bar3">
                                                                            <div className="progress-bar bg-warning progress-bar-striped progress-bar-animated prog-ba" ></div>
                                                                        </div></td>


                                                                </tr>
                                                                <tr>
                                                                    <td className="sub-col">Ul Larency</td>
                                                                    <td className="pad-bar">
                                                                        <p className="m-0 p-sty"><b>16.78GB</b></p><div className="progress prog-bar3">
                                                                            <div className="progress-bar   bg-warning progress-bar-striped progress-bar-animated prog-ba" ></div>
                                                                        </div></td>
                                                                    <td className="pad-bar"> <p className="m-0 p-sty"><b>16.78GB</b></p><div className="progress prog-bar3">
                                                                        <div className="progress-bar  bg-warning  progress-bar-striped progress-bar-animated prog-ba" ></div>
                                                                    </div></td>
                                                                    <td className="pad-bar"> <p className="m-0 p-sty"><b>16.78GB</b></p><div className="progress prog-bar3">
                                                                        <div className="progress-bar  bg-warning  progress-bar-striped progress-bar-animated prog-ba" ></div>
                                                                    </div></td>
                                                                    <td className="pad-bar"> <p className="m-0 p-sty"><b>16.78GB</b></p><div className="progress prog-bar3">
                                                                        <div className="progress-bar   bg-success  progress-bar-striped progress-bar-animated prog-ba" ></div>
                                                                    </div></td>


                                                                </tr>
                                                                <tr>
                                                                    <td className="sub-col">ReTransmission</td>
                                                                    <td className="pad-bar"> <p className="m-0 p-sty"><b>16.78GB</b></p><div className="progress prog-bar3">
                                                                        <div className="progress-bar bg-success progress-bar-striped progress-bar-animated prog-ba" ></div>
                                                                    </div></td>
                                                                    <td className="pad-bar"> <p className="m-0 p-sty"><b>16.78GB</b></p><div className="progress prog-bar3">
                                                                        <div className="progress-bar bg-success progress-bar-striped progress-bar-animated prog-ba" ></div>
                                                                    </div></td>
                                                                    <td className="pad-bar"> <p className="m-0 p-sty"><b>16.78GB</b></p><div className="progress prog-bar3">
                                                                        <div className="progress-bar  bg-danger progress-bar-striped progress-bar-animated prog-ba" ></div>
                                                                    </div></td>
                                                                    <td className="pad-bar"> <p className="m-0 p-sty"><b>16.78GB</b></p><div className="progress prog-bar3">
                                                                        <div className="progress-bar bg-success progress-bar-striped progress-bar-animated prog-ba" ></div>
                                                                    </div></td>


                                                                </tr>
                                                                <tr>
                                                                    <td className="sub-col">DL Thoughtput</td>
                                                                    <td className="pad-bar"> <p className="m-0 p-sty"><b>16.78GB</b></p><div className="progress prog-bar3">
                                                                        <div className="progress-bar progress-bar-striped progress-bar-animated prog-ba" ></div>
                                                                    </div></td>
                                                                    <td className="pad-bar"><p className="m-0 p-sty"><b>16.78GB</b></p><div className="progress prog-bar3">
                                                                        <div className="progress-bar bg-success progress-bar-striped progress-bar-animated prog-ba" ></div>
                                                                    </div></td>
                                                                    <td className="pad-bar"> <p className="m-0 p-sty"><b>16.78GB</b></p><div className="progress prog-bar3">
                                                                        <div className="progress-bar bg-danger progress-bar-striped progress-bar-animated prog-ba" ></div>
                                                                    </div></td>
                                                                    <td className="pad-bar"> <p className="m-0 p-sty"><b>16.78GB</b></p><div className="progress prog-bar3">
                                                                        <div className="progress-bar bg-danger progress-bar-striped progress-bar-animated prog-ba" ></div>
                                                                    </div></td>


                                                                </tr>

                                                            </tbody>
                                                        </table>
                                                        <table className="table borderless" >
                                                            <tbody className="te-lef">
                                                                <tr>
                                                                    <td className="sub-col">Data Volume</td>

                                                                </tr>
                                                                <tr>
                                                                    <td className="sub-col">UL Latency</td>

                                                                </tr>
                                                                <tr>
                                                                    <td className="sub-col">ReTransmission</td>

                                                                </tr>
                                                                <tr>
                                                                    <td className="sub-col">DL Throughput</td>

                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </TabPanel>
                                    <TabPanel>
                                        <div className="card-body">
                                            <div className="container">
                                                <div className="row">
                                                    <div className="col-md-2">
                                                        <div className="card card-mar">
                                                            <Clock />
                                                        </div>
                                                        <div className="card card-mar2">
                                                           <Clock />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-10">
                                                        <table className="table borderless">
                                                            <thead>
                                                                <tr>
                                                                    <th>   </th>
                                                                    <th>   </th>
                                                                    <th className="th-pad">   <img src={require('../assets/wts3.png')} className=" img2" />
                                                                        <label>Whatsup</label></th>
                                                                    <th>   <img src={require('../assets/wechat.jpg')} className=" img2" />
                                                                        <label>We Chat</label></th>
                                                                    <th>   <img src={require('../assets/viberimg.png')} className=" img3" /> <label>Viber</label></th>

                                                                    <th>  <img src={require('../assets/facebook.png')} className=" img4" /> <label>Facebook</label></th>
                                                                    <th>   <img src={require('../assets/line2.png')} className="img1" /> <label>Line</label></th>
                                                                    <th>  <img src={require('../assets/kakao.png')} className="img1 " /> <label>kakaoTalk</label></th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>

                                                                <tr>

                                                                    <td className="sub-col">Data Volume</td>
                                                                    <td></td>

                                                                    <td ><p className="m-0 p-sty"><b>16.78GB</b></p><div className="progress prog-ba2">
                                                                        <div className="progress-bar bg-success progress-bar-striped progress-bar-animated prog-ba" ></div>
                                                                    </div></td>
                                                                    <td><p className="m-0 p-sty"><b>16.78GB</b></p><div className="progress prog-ba2">
                                                                        <div className="progress-bar bg-success  progress-bar-striped progress-bar-animated prog-ba" ></div>
                                                                    </div></td>
                                                                    <td><p className="m-0 p-sty"><b>16.78GB</b></p><div className="progress prog-ba2">
                                                                        <div className="progress-bar bg-warning progress-bar-striped progress-bar-animated prog-ba" ></div>
                                                                    </div></td>
                                                                    <td><p className="m-0 p-sty"><b>16.78GB</b></p><div className="progress prog-ba2">
                                                                        <div className="progress-bar bg-success  progress-bar-striped progress-bar-animated prog-ba" ></div>
                                                                    </div></td>
                                                                    <td><p className="m-0 p-sty"><b>16.78GB</b></p><div className="progress prog-ba2">
                                                                        <div className="progress-bar  bg-success  progress-bar-striped progress-bar-animated prog-ba" ></div>
                                                                    </div></td>
                                                                    <td><p className="m-0 p-sty"><b>16.78GB</b></p><div className="progress prog-ba2">
                                                                        <div className="progress-bar bg-danger progress-bar-striped progress-bar-animated prog-ba" ></div>
                                                                    </div></td>

                                                                </tr>
                                                                <tr>
                                                                    <td className="sub-col">Ul Larency</td>
                                                                    <td></td>

                                                                    <td><p className="m-0 p-sty"><b>16.78GB</b></p><div className="progress prog-ba2">
                                                                        <div className="progress-bar  bg-warning  progress-bar-striped progress-bar-animated prog-ba" ></div>
                                                                    </div></td>
                                                                    <td><p className="m-0 p-sty"><b>16.78GB</b></p><div className="progress prog-ba2">
                                                                        <div className="progress-bar  bg-warning  progress-bar-striped progress-bar-animated prog-ba" ></div>
                                                                    </div></td>
                                                                    <td><p className="m-0 p-sty"><b>16.78GB</b></p><div className="progress prog-ba2">
                                                                        <div className="progress-bar   bg-success  progress-bar-striped progress-bar-animated prog-ba" ></div>
                                                                    </div></td>
                                                                    <td><p className="m-0 p-sty"><b>16.78GB</b></p><div className="progress prog-ba2">
                                                                        <div className="progress-bar   bg-success  progress-bar-striped progress-bar-animated prog-ba" ></div>
                                                                    </div></td>
                                                                    <td><p className="m-0 p-sty"><b>16.78GB</b></p><div className="progress prog-ba2">
                                                                        <div className="progress-bar  bg-success  progress-bar-striped progress-bar-animated prog-ba" ></div>
                                                                    </div></td>
                                                                    <td><p className="m-0 p-sty"><b>16.78GB</b></p><div className="progress prog-ba2">
                                                                        <div className="progress-bar   bg-warning progress-bar-striped progress-bar-animated prog-ba" ></div>
                                                                    </div></td>

                                                                </tr>
                                                                <tr>
                                                                    <td className="sub-col">ReTransmission</td>
                                                                    <td></td>

                                                                    <td><p className="m-0 p-sty"><b>16.78GB</b></p><div className="progress prog-ba2">
                                                                        <div className="progress-bar bg-success progress-bar-striped progress-bar-animated prog-ba" ></div>
                                                                    </div></td>
                                                                    <td><p className="m-0 p-sty"><b>16.78GB</b></p><div className="progress prog-ba2">
                                                                        <div className="progress-bar  bg-danger progress-bar-striped progress-bar-animated prog-ba" ></div>
                                                                    </div></td>
                                                                    <td><p className="m-0 p-sty"><b>16.78GB</b></p><div className="progress prog-ba2">
                                                                        <div className="progress-bar bg-success progress-bar-striped progress-bar-animated prog-ba" ></div>
                                                                    </div></td>
                                                                    <td><p className="m-0 p-sty"><b>16.78GB</b></p><div className="progress prog-ba2">
                                                                        <div className="progress-bar bg-success progress-bar-striped progress-bar-animated prog-ba" ></div>
                                                                    </div></td>
                                                                    <td><p className="m-0 p-sty"><b>16.78GB</b></p><div className="progress prog-ba2">
                                                                        <div className="progress-bar  bg-success progress-bar-striped progress-bar-animated prog-ba" ></div>
                                                                    </div></td>
                                                                    <td><p className="m-0 p-sty"><b>16.78GB</b></p><div className="progress prog-ba2">
                                                                        <div className="progress-bar bg-success progress-bar-striped progress-bar-animated prog-ba" ></div>
                                                                    </div></td>

                                                                </tr>
                                                                <tr>
                                                                    <td className="sub-col">DL Thoughtput</td>
                                                                    <td></td>

                                                                    <td><p className="m-0 p-sty"><b>16.78GB</b></p><div className="progress prog-ba2">
                                                                        <div className="progress-bar bg-success progress-bar-striped progress-bar-animated prog-ba" ></div>
                                                                    </div></td>
                                                                    <td><p className="m-0 p-sty"><b>16.78GB</b></p><div className="progress prog-ba2">
                                                                        <div className="progress-bar bg-danger progress-bar-striped progress-bar-animated prog-ba" ></div>
                                                                    </div></td>
                                                                    <td><p className="m-0 p-sty"><b>16.78GB</b></p><div className="progress prog-ba2">
                                                                        <div className="progress-bar bg-danger progress-bar-striped progress-bar-animated prog-ba" ></div>
                                                                    </div></td>
                                                                    <td><p className="m-0 p-sty"><b>16.78GB</b></p><div className="progress prog-ba2">
                                                                        <div className="progress-bar bg-danger progress-bar-striped progress-bar-animated prog-ba" ></div>
                                                                    </div></td>
                                                                    <td> <p className="m-0 p-sty"><b>16.78GB</b></p><div className="progress prog-ba2">
                                                                        <div className="progress-bar bg-warning progress-bar-striped progress-bar-animated prog-ba" ></div>
                                                                    </div></td>
                                                                    <td> <p className="m-0 p-sty"><b>16.78GB</b></p><div className="progress prog-ba2">
                                                                        <div className="progress-bar bg-danger progress-bar-striped progress-bar-animated prog-ba" ></div>
                                                                    </div></td>

                                                                </tr>

                                                            </tbody>
                                                        </table>
                                                        <table className="table borderless" >
                                                            <tbody className="te-lef">
                                                                <tr>
                                                                    <td className="sub-col">Data Volume</td>

                                                                </tr>
                                                                <tr>
                                                                    <td className="sub-col">UL Latency</td>

                                                                </tr>
                                                                <tr>
                                                                    <td className="sub-col">ReTransmission</td>

                                                                </tr>
                                                                <tr>
                                                                    <td className="sub-col">DL Throughput</td>

                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </TabPanel>
                                </Tabs>
                            </div>

                        </div>





                    </div>

                </div>
            </div>
        );
    }
}

export default ControlledTabs;
import './HomeDesign.css'
import { useState, useEffect } from 'react'
import axios from 'axios';
import AccessToken from './genrateToken';
import Listing from './UserListing';
import StateListing from './StateListing';
import AreaListing from './AreaListing';
import AddressListing from './AddressListing';
import PoliticalPartyListing from './PoliticalParty';
import ElectionListing from './ElectionList';
import BoothListing from './BoothList';
import EvmMachineListing from './EvmMachineList';
import VoteListing from './VoteListing';
import SaveUserData from './PostUserData';
import SaveStateData from './PostStateData';
import SaveAreaData from './PostAreaData';
import SaveAddressData from './PostAddressData';
import SavePoliticalPartyData from './PostPoliticalParty';
import SaveElectionData from './PostElection';
import SaveBoothData from './PostBooth';
import SaveEvmMachineData from './PostEvm';
import SaveVote from './PostVoteData';
import { Outlet, Link } from "react-router-dom";

export default function HomeDesign() {
    const [userData, setUserData] = useState([]);
    const [statelist, setStateDataList] = useState([])
    const [arealist, setAreaList] = useState([])
    const [addresslist, setAddressList] = useState([])
    const [politicalPartyList, setpoliticalPartyList] = useState([])
    const [electionlist, setelctionlist] = useState([])
    const [boothlist, setboothlist] = useState([])
    const [evmmachine, setevmmachine] = useState([])
    const [votelist, setVote] = useState([])
    const [saveUserClick, setsaveUserClick] = useState(false)
    const [saveState, setSavestate] = useState(false)
    const [saveArea, setSaveArea] = useState(false)
    const [saveAddress, setSaveAddress] = useState(false)
    const [savePoliticalParty, setsavePoliticalParty] = useState(false)
    const [saveEelction, setSaveelection] = useState(false)
    const [SaveBooth, setSaveBooth] = useState(false)
    const [saveEvmMachine, setSaveEvmMachine] = useState(false)
    const [saveVote, setSaveVote] = useState(false)

    const BASE_URL = "http://127.0.0.1:8000/en/api/v1/";
    const headers = { 'Authorization': 'Bearer ' + localStorage.getItem("access_token") };

    const GetUserList = () => {
        axios.get(BASE_URL + 'users/', { headers })
            .then(function (response) {
                const get_response = response.data["results"];
                setUserData(get_response)
            })
            .catch((err) => {
                if (err.response["data"].code === "token_not_valid") {
                    AccessToken()
                }
                else {
                    console.log(err.response["data"].detail)
                }
            });
    }
    const GetStateList = () => {
        axios.get(BASE_URL + 'state/', { headers })
            .then(function (response) {
                const get_response = response.data["results"];

                setStateDataList(get_response)
            })
            .catch((err) => {
                console.log(err)
                // if(err.response["data"].code === "token_not_valid")
                // {
                //     AccessToken()
                // }
                // else{
                //     console.log(err.response["data"].detail)
                // }
            });
    }
    const GetAreaList = () => {
        axios.get(BASE_URL + 'area/', { headers })
            .then(function (response) {
                const get_response = response.data["results"];
                setAreaList(get_response)
            })
            .catch((err) => {
                if (err.response["data"].code === "token_not_valid") {
                    AccessToken()
                }
                else {
                    console.log(err.response["data"].detail)
                }
            });
    }
    const GetAddressList = () => {
        axios.get(BASE_URL + 'address/', { headers })
            .then(function (response) {
                const get_response = response.data["results"];
                setAddressList(get_response)
            })
            .catch((err) => {
                if (err.response["data"].code === "token_not_valid") {
                    AccessToken()
                }
                else {
                    console.log(err.response["data"].detail)
                }
            });
    }
    const GetPoliticalParty = () => {
        axios.get(BASE_URL + 'political-party/', { headers })
            .then(function (response) {
                const get_response = response.data["results"];
                setpoliticalPartyList(get_response)
            })
            .catch((err) => {
                if (err.response["data"].code === "token_not_valid") {
                    AccessToken()
                }
                else {
                    console.log(err.response["data"].detail)
                }
            });
    }
    const GetElectionList = () => {
        axios.get(BASE_URL + 'elections/', { headers })
            .then(function (response) {
                const get_response = response.data["results"];
                setelctionlist(get_response)
            })
            .catch((err) => {
                if (err.response["data"].code === "token_not_valid") {
                    AccessToken()
                }
                else {
                    console.log(err.response["data"].detail)
                }
            });
    }
    const GetBoothList = () => {
        axios.get(BASE_URL + 'booth/', { headers })
            .then(function (response) {
                const get_response = response.data["results"];
                setboothlist(get_response)
            })
            .catch((err) => {
                if (err.response["data"].code === "token_not_valid") {
                    AccessToken()
                }
                else {
                    console.log(err.response["data"].detail)
                }
            });
    }
    const GetEvmMachineList = () => {
        axios.get(BASE_URL + 'evm-machine/', { headers })
            .then(function (response) {
                const get_response = response.data["results"];
                setevmmachine(get_response)
            })
            .catch((err) => {
                if (err.response["data"].code === "token_not_valid") {
                    AccessToken()
                }
                else {
                    console.log(err.response["data"].detail)
                }
            });
    }
    const GetVoteList = () => {
        axios.get(BASE_URL + 'vote/', { headers })
            .then(function (response) {
                const get_response = response.data["results"];
                setVote(get_response)
            })
            .catch((err) => {
                if (err.response["data"].code === "token_not_valid") {
                    AccessToken()
                }
                else {
                    console.log(err.response["data"].detail)
                }
            });
    }
    const SaveUser = () => {
        setsaveUserClick(true)
        setSavestate(false)
        setSaveArea(false)
        setSaveAddress(false)
        setsavePoliticalParty(false)
        setSaveelection(false)
        setSaveBooth(false)
        setSaveEvmMachine(false)
        setSaveVote(false)
    }
    const SaveState = () => {
        setSavestate(true)

        setsaveUserClick(false)
        setSaveArea(false)
        setSaveAddress(false)
        setsavePoliticalParty(false)
        setSaveelection(false)
        setSaveBooth(false)
        setSaveEvmMachine(false)
        setSaveVote(false)
    }
    const SaveArea = () => {
        setSaveArea(true)

        setSavestate(false)
        setsaveUserClick(false)
        setSaveAddress(false)
        setsavePoliticalParty(false)
        setSaveelection(false)
        setSaveBooth(false)
        setSaveEvmMachine(false)
        setSaveVote(false)
    }
    const SaveAddress = () => {
        setSaveAddress(true)

        setSavestate(false)
        setsaveUserClick(false)
        setsavePoliticalParty(false)
        setSaveelection(false)
        setSaveBooth(false)
        setSaveEvmMachine(false)
        setSaveVote(false)
    }
    const PoliticalParty = () =>
    {
        setsavePoliticalParty(true)

        setSaveAddress(false)

        setSavestate(false)
        setsaveUserClick(false)
        setSaveelection(false)
        setSaveBooth(false)
        setSaveEvmMachine(false)
        setSaveVote(false)

    }
    const addElection = ()=>
    {
        setSaveelection(true)

        setsavePoliticalParty(false)
        setSaveAddress(false)
        setSavestate(false)
        setsaveUserClick(false)
        setSaveBooth(false)
        setSaveEvmMachine(false)
        setSaveVote(false)

    }
    const addBooth =()=>
    {
        setSaveBooth(true)

        setSaveelection(false)

        setsavePoliticalParty(false)
        setSaveAddress(false)
        setSavestate(false)
        setsaveUserClick(false)
        setSaveEvmMachine(false)
        setSaveVote(false)
    }
    const addEvmMachine = ()=>
    {
        setSaveEvmMachine(true)

        setSaveBooth(false)
        setSaveelection(false)
        setsavePoliticalParty(false)
        setSaveAddress(false)
        setSavestate(false)
        setsaveUserClick(false)
        setSaveVote(false)
    }
    const addVote = ()=>
    {
        setSaveVote(true)

        setSaveEvmMachine(true)

        setSaveBooth(false)
        setSaveelection(false)
        setsavePoliticalParty(false)
        setSaveAddress(false)
        setSavestate(false)
        setsaveUserClick(false)
    }
    return <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
            <div className="container">
                <a className="navbar-brand">Election</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item active">
                            <a className="nav-link text-dark">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-dark">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-dark">Services</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-dark" >Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

        <header>
            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active" style={{ backgroundImage: 'url("https://plus.unsplash.com/premium_photo-1663126358968-3f6e02d1373b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZWxlY3Rpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60")' }}>
                        <div className="carousel-caption">
                            <h3 className="text-dark">"A man without a vote is a man without protection"</h3>
                            <h5 className="text-dark">"Democracy cannot succeed unless those who express their choice are prepared to choose wisely. The real safeguard of democracy, therefore, is education."</h5>
                        </div>
                    </div>
                    <div className="carousel-item" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1534293230397-c067fc201ab8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZWxlY3Rpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60")' }}>
                        <div className="carousel-caption">
                            <h3>"Our lives begin to end the day we become silent about things that matter."</h3>
                            <h5 >"All voting is a sort of gaming, like checkers or backgammon, with a slight moral tinge to it, a playing with right and wrong."</h5>
                        </div>
                    </div>
                    <div className="carousel-item" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1621541780385-7641d3c3b472?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGVsZWN0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60")' }}>
                        <div className="carousel-caption">
                            <h3 className="text-dark">"A vote is like a rifle; its usefulness depends upon the character of the user."</h3>
                            <h5 className="text-dark">"Our lives begin to end the day we become silent about things that matter."</h5>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </header>

        <section className="py-5">
            {/* get user listing api data showing here */}
            <div className='row'>
                <button className="col btn btn-success ms-3 ps-3" onClick={GetUserList}>User List</button>
                <button className=" col ms-3" onClick={SaveUser}>Add user</button>
                {saveUserClick && <SaveUserData />}
            </div>
            <table className="table table-hover m-3">
                       
                <thead>
                    <tr>
                        
                        <th>id</th>
                        <th>username</th>
                        <th>date_of_birth</th>
                        <th>living_from</th>
                    </tr>
                </thead>

                {userData.map((a,index) => (
                    <Listing key={index} username={a.username} id={index+1} DOB={a.date_of_birth} livin_from={a.living_from}></Listing>
                ))
                }
            </table>

            {/* state list  */}
            <div className='row'>
                <button className="col btn btn-success ms-3" onClick={GetStateList}>State List</button>
                <button className=" col ms-3" onClick={SaveState}>Add State</button>
                {saveState && <SaveStateData />}
            </div>
            <table className=" table table-hover m-3">
                <thead>
                    <tr>
                        <th>id</th>
                        <th>name</th>
                    </tr>
                </thead>
                {statelist.map((a,index) => (
                    <StateListing key={index} name={a.name} id={a.id}></StateListing>
                ))
                }
            </table>


            {/* area list  */}
            <div className='row'>
                <button className="col btn btn-success ms-3" onClick={GetAreaList}>Area List</button>
                <button className=" col  ms-3" onClick={SaveArea}>Add Area</button>
                {saveArea && <SaveAreaData />}
            </div>
            <table className="table table-hover m-3">
                <thead>
                    <tr>
                        <th>id</th>
                        <th>area</th>
                        <th>City</th>
                        <th>State</th>
                        <th>pincode</th>
                    </tr>
                </thead>
                {arealist.map((a, index) => (
                    <AreaListing key={a.id} id={a.id} area={a.name} pincode={a.pincode} city={a.get_cities.name}
                        state={a.get_cities.get_state.name} ></AreaListing>
                ))
                }
            </table>



            {/* address list  */}
            <div className='row'>
                <button className="col btn btn-success ms-3" onClick={GetAddressList}>Address List</button>
                <button className=" col ms-3" onClick={SaveAddress}>Add Address</button>
                {saveAddress && <SaveAddressData />}
            </div>
            <table className="table table-hover m-3">
                <thead>
                    <tr>
                        <th>id</th>
                        <th>street_name</th>
                        <th>area</th>
                        <th>City</th>
                        <th>State</th>
                        <th>Country</th>
                        <th>Pincode</th>
                    </tr>
                </thead>
                {addresslist.map((a,index) => (
                    <AddressListing key={index} id={a.id} street_name={a.street_name} area={a.get_area.name} pincode={a.get_area.pincode} city={a.get_area.get_cities.name}
                        state={a.get_area.get_cities.get_state.name} country={a.get_country.name}></AddressListing>
                ))
                }
            </table>


            {/* political party */}
            <div className='row'>
                <button className="col btn btn-success ms-3" onClick={GetPoliticalParty}>Political party List</button>
                <button className=" col ms-3" onClick={PoliticalParty}>Add Political Party</button>
                {savePoliticalParty && <SavePoliticalPartyData />}
            </div>
            <table className="table table-hover m-3">
                <thead>
                    <tr>
                        <th>id</th>
                        <th>name</th>
                        <th>Chairman name</th>
                        <th>Country</th>
                        <th>symbol</th>
                    </tr>
                </thead>
                {politicalPartyList.map((a, index) => (
                    <PoliticalPartyListing key={index} id={a.id} symbol={a.symbol} name={a.name} chairman={a.chairman_details.username} country={a.country_details.name}></PoliticalPartyListing>
                ))
                }
            </table>


            {/* election party */}
            <div className='row'>
                <button className="col btn btn-success ms-3" onClick={GetElectionList}>ElectionList</button>
                <button className=" col  ms-3" onClick={addElection}>Add Election</button>
                {saveEelction && <SaveElectionData />}
            </div>
            <table className="table table-hover m-3">
                <thead>
                    <tr>
                        <th>id</th>
                        <th>name</th>
                        <th>opening_date</th>
                        <th>closing_date</th>

                    </tr>
                </thead>
                {electionlist.map((a, index) => (
                    <ElectionListing key={index} id={a.id} name={a.name} opening_date={a.opening_date} closing_date={a.closing_date}></ElectionListing>
                ))
                }
            </table>

            {/* booth party */}
            <div className='row'>
                <button className="col btn btn-success ms-3" onClick={GetBoothList}>BoothList</button>
                <button className=" col ms-3" onClick={addBooth}>Add Booth</button>  
                {SaveBooth && <SaveBoothData />}  
            </div>
            <table className="table table-hover m-3">
                <thead>
                    <tr>
                        <th>id</th>
                        <th>belong_to_area</th>
                        <th>city</th>
                        <th>Pincode</th>
                        <th>state</th>
                    </tr>
                </thead>
                {boothlist.map((a, index) => (
                    <BoothListing key={index} id={a.id} area={a.belong_to_area.name} pincode={a.belong_to_area.pincode} city={a.belong_to_area.get_cities.name} state={a.belong_to_area.get_cities.get_state.name}></BoothListing>
                ))
                }
            </table>

            {/* EVM Machine party */}
            <div className='row'>
                <button className=" col btn btn-success ms-3" onClick={GetEvmMachineList}>evm machine booth list</button>
                <button className=" col ms-3" onClick={addEvmMachine}>Add Evm machine</button>
                {saveEvmMachine && <SaveEvmMachineData />}
            </div>

            <table className="table table-hover m-3">
                <thead>
                    <tr>
                        <th>id</th>
                        <th>belong_to_area</th>
                        <th>city</th>
                        <th>Pincode</th>
                        <th>state</th>
                    </tr>
                </thead>
                {evmmachine.map((a,index) => (
                    <EvmMachineListing key={index} id={a.id}></EvmMachineListing>
                ))
                }
            </table>

            {/* Vote list */}
            <div className='row'>
                <button className="col btn btn-success ms-3" onClick={GetVoteList}>Vote list</button>
                <button className=" col ms-3" onClick={addVote}>Add Vote</button>
                {saveVote && <SaveVote />}
            </div>
            <table className="table table-hover m-3">
                <thead>
                    <tr>
                        <th>id</th>
                        <th>username</th>
                        <th>is_voted</th>
                    </tr>
                </thead>
                {votelist.map((a, index) => (
                    <VoteListing key={index} id={a.id} username={a.voter_details.username} vote={a.vote}></VoteListing>
                ))
                }
            </table>
        </section>
    </>
}

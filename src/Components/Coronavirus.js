import React,{useEffect,useState} from 'react';
import axios from 'axios'

const Coronavirus = ()=>{

    const [stats, setStats] = useState();
  
    useEffect(()=>{
      async function fetchData(){
        let res = await axios.get("https://corona.lmao.ninja/countries/BD",{
          headers: {
            "Access-Control-Allow-Origin": "*"
          }
        });
  
        setStats(res.data);
      }
  
      fetchData();
    },[]);
  
    if(!stats){
      return (
        <div className="App">
          <div className="container">
            <div className="row">
              <div className="col-12 text-center">
                  <h5>লোড হচ্ছে, অপেক্ষা করুন...</h5>
              </div>
            </div>
          </div>
        </div>
      )
    }else{
      return(
        <div className="App text-center">
            <div className="container">
                <div className="row mb-5">
                    <div className="col-12">
                    <img width='100' src={'https://bestanimations.com/Flags/Asia/bangladesh/bangladesh-flag-waving-gif-animation-19.gif'} alt="BD"/>
                        <h2 className="mt-3">
                          করোনা ভাইরাস
                          <span style={{color:"#ff5252"}}> লাইভ </span>
                          আপডেট (বাংলাদেশ)
                        </h2>
                        <h6>সর্বশেষ আপডেটঃ {new Date(stats.updated).toUTCString()}</h6>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-10 m-auto">
                        <div className="row mtn-30">
                            <div className="col-sm-6 col-lg-4">
                                <div className="stats-block">
                                    <h3>{stats.cases.toLocaleString("bn-BD")}</h3>
                                    <h5>সর্বমোট আক্রান্ত</h5>
                                </div>
                            </div>

                            <div className="col-sm-6 col-lg-4">
                                <div className="stats-block">
                                    <h3>{stats.deaths.toLocaleString("bn-BD")}</h3>
                                    <h5>সর্বমোট মৃত্যু হয়েছে</h5>
                                </div>
                            </div>

                            <div className="col-sm-6 col-lg-4">
                                <div className="stats-block">
                                    <h3>{stats.recovered.toLocaleString("bn-BD")}</h3>
                                    <h5>সুস্থ হয়েছেন</h5>
                                </div>
                            </div>

                            <div className="col-sm-6 col-lg-4">
                                <div className="stats-block">
                                    <h3>{stats.todayCases.toLocaleString("bn-BD")}</h3>
                                    <h5>আজকে আক্রান্ত হয়েছে</h5>
                                </div>
                            </div>

                            <div className="col-sm-6 col-lg-4">
                                <div className="stats-block">
                                    <h3>{stats.todayDeaths.toLocaleString("bn-BD")}</h3>
                                    <h5>আজকে মৃত্যু হয়েছে</h5>
                                </div>
                            </div>

                            <div className="col-sm-6 col-lg-4">
                                <div className="stats-block">
                                    <h3>{stats.active.toLocaleString("bn-BD")}</h3>
                                    <h5>বর্তমানে আক্রান্ত আছেন</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row text-center">
                    <div className="col-12">
                      <p className="mt-5">
                        Made with <span style={{color:"red"}}>❤</span><span> By </span>
                         <a href="https://github.com/rajuahammadfans" target="_blank" rel="noopener noreferrer">
                          Raju Ahammad.
                          </a>
                      </p>
                    </div>
                </div>
            </div>
        </div>
      );
    }
  }

  export default Coronavirus
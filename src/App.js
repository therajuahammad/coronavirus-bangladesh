import React,{useEffect,useState} from 'react';

const App = ()=>{

  const [stats, setStats] = useState();

  useEffect(()=>{
    async function fetchData(){
      let data = await fetch("https://covid19.mathdro.id/api/countries/BD").then(res=> res.json()).catch(err=>console.log(err))

      setStats(data);
    }

    fetchData();
  },[])

  if(!stats){
    return (
      <div className="App">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
                <h5>Loading...</h5>
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
                <h2>Coronavirus Update In Bangladesh</h2>
                <h6 className="mt-3">Last Update: {new Date(stats.lastUpdate).toUTCString()}</h6>
              </div>
            </div>

            <div className="row mtn-30">
              <div className="col-sm-6 col-lg-3">
                <div className="stats-block">
                  <h3>{stats.confirmed.value}</h3>
                  <h5>Total Infected</h5>
                </div>
              </div>

              <div className="col-sm-6 col-lg-3">
                <div className="stats-block">
                  <h3>{stats.recovered.value}</h3>
                  <h5>Recovered</h5>
                </div>
              </div>

              <div className="col-sm-6 col-lg-3">
                <div className="stats-block">
                  <h3>{stats.deaths.value}</h3>
                  <h5>Deaths</h5>
                </div>
              </div>

              <div className="col-sm-6 col-lg-3">
                <div className="stats-block">
                  <h3>{stats.confirmed.value - (stats.deaths.value + stats.recovered.value)}</h3>
                  <h5>Currently Sick</h5>
                </div>
              </div>
            </div>
          </div>
      </div>
    );
  }
}

export default App;

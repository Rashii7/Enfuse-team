import './App.css';
import { useState } from 'react';
import Dashboard from './pages/dashboard';
import Header from './component/Header';
import Footer from './component/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from './component/Sidebar';
import { apiInstance } from './config/axios';


function App() {
  const [data, setData] = useState({
    filters: "",
    weeks: ""
  })
  const [chartURL, setChartUrl] = useState();
  const [recycleData, setRecycleData] = useState();
  const [recycleChart, setRecycleChart] = useState()

  // ["All", 'MetroBus', "Bus Excluding dublin Metro Bus", 'Rail']
  const getMetro = (week) => {
    const payload = { "week": week }
    return apiInstance.post('/metroBus', payload)
  }

  const getBus = (week) => {
    const payload = { "week": week }
    return apiInstance.post('/getBus', payload)
  }

  const getall = (week) => {
    const payload = { "week": week }
    return apiInstance.post('/getAll', payload)
  }

  const getrail = (week) => {
    const payload = { "week": week }
    return apiInstance.post('/rail', payload)
  }

  const getRecycleData = () => {
    const total_waste = apiInstance.get('/total-waste-data')
    const chart = apiInstance.get('/totalwasteChart', { responseType: 'blob' })
    const recycleChart = apiInstance.get('/recycleWasteChart', { responseType: 'blob' })
    return Promise.allSettled([total_waste, chart, recycleChart])
  }


  const handleSubmit = async () => {
    console.log(data)
    const { filters, weeks } = data;


    if (!weeks || !filters) {
      alert('filter and weeks is required')
    }
    let result = ''
    if (filters === "MetroBus") {
      result = await getMetro(weeks)
    } else if (filters === "Bus Excluding dublin Metro Bus") {
      result = await getBus(weeks)
    } else if (filters === "Rails") {
      result = await getrail(weeks)
    } else if (filters === "Recycle") {
      const [json_res, chart, recycleChart] = await getRecycleData()
      // console.log(json_res, chart.value.data, recycleChart.value.data, JSON.parse(json_res.value.data.data),)
      const chartURL = URL.createObjectURL(chart.value.data)
      setChartUrl(chartURL)
      setRecycleData(JSON.parse(json_res.value.data.data))
      setRecycleChart(URL.createObjectURL(recycleChart.value.data))
    } else {
      // await Promise.allSettled[getBus(weeks), getMetro(weeks), getrail(weeks)]
      result = await getall(weeks)
    }

    console.log("result", result)
  }

  return (
    <div className="App">
      <Header />
      <main
        className='min-vh-100'
        style={{ background: "#F2F2F2" }}
      >
        <div
          className="px-4 py-4 d-flex justify-content-between"
        >
          <div className="w-25 p-3 shadow-sm bg-white">
            <Sidebar setData={setData} data={data} submit={handleSubmit} />
          </div>
          <div
            className={`w-75 p-3 pl-3 main-content-wrapper`}
          >
            <Dashboard
              chartURL={chartURL}
              recycleData={recycleData}
              recycleChart={recycleChart}
            />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;

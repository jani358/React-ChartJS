import { useState } from "react";
import "./App.css";
import BarChart from "./components/BarChart";
import LineChart from "./components/LineChart";
import PieChart from "./components/PieChart";
import { UserData } from "./Data";

function App() {
  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.year),
    datasets: [
      {
        label: "Users",
        data: UserData.map((data) => data.userGain),
        backgroundColor: [
          "rgba(5,192,192,6)",
          "#ecf0f1",
          "#63D68A",
          "#f3ba2f",
          "#285738",
        ],
        borderColor: "black",
        borderWidth: 4,
      },
    ],
  });

 

  return (
    <div className="App">
      <div style={{ width: 700 }}>
        <BarChart chartData={userData} />
      </div>
      <div style={{ width: 700 }}>
        <LineChart chartData={userData} />
      </div>
      <div style={{ width: 700 }}>
        <PieChart chartData={userData} />
      </div>
    </div>
  );
}

export default App;
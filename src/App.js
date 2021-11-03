import LineChart from "./components/LineChart";
import { Container } from "react-bootstrap";

function App() {
  const months = [
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const chartData1 = {
    labels: months,
    datasets: [
      {
        label: "tweek",
        data: [1254, 1323, 1153, 1491, 1445, 1432, 1244, 1435, 1112, 1354],
        fill: "origin",
        backgroundColor: "rgb(55, 209, 89, 0.16)",
        borderColor: "rgb(55, 209, 89)",
        borderWidth: 1,
        smooth: true,
      },
      {
        label: "value",
        data: [1432, 1244, 1485, 1212, 1354, 1254, 1323, 1153, 1471, 1445],
        fill: "origin",
        smooth: true,
        backgroundColor: "rgb(9, 151, 242, 0.22)",
        borderColor: "rgb(9, 151, 242)",
        borderWidth: 3,
      },
    ],
  };
  const chartData2 = {
    labels: months,
    datasets: [
      {
        data: [1432, 1244, 1485, 1212, 1354, 1254, 1323, 1153, 1471, 1445],
        fill: "origin",
        smooth: true,
        backgroundColor: "rgb(9, 151, 242, 0.22)",
        borderColor: "rgb(9, 151, 242)",
        borderWidth: 3,
      },
    ],
  };
  const chartData3 = {
    labels: months,
    datasets: [
      {
        label: "value",
        data: [1432, 1244, 1485, 1212, 1354, 1254, 1323, 1153, 1471, 1445],
        fill: "origin",
        smooth: true,
        backgroundColor: "rgb(255, 103, 70, 0.4)",
        borderColor: "rgb(255, 103, 70)",
        borderWidth: 3,
      },
    ],
  };
  return (
    <Container>
      <LineChart
        title="Sqft. Performance"
        subTitle="Shows revenue versus sqft."
        data={chartData1}
      />
      <LineChart
        title="New Lease Compliance"
        subTitle="Percentage month/month"
        data={chartData2}
      />
      <LineChart
        title="Historical Offered"
        subTitle="Asking rents Vs Applications"
        data={chartData3}
      />
    </Container>
  );
}

export default App;

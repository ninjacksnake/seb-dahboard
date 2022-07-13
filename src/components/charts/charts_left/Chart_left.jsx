import  "./Chart_left.css";
import Chart from '../../charts/Chart';

const Chart_left = ({reportName, reportNameDetail }) => {

const  data = [{ name: '8-12', uv: 50, pv: 2400, amt: 2400 },
  { name: '13-17', uv: 80, pv: 4567, amt: 2400 },
  { name: '17-21', uv: 200, pv: 2400, amt: 2400 },
];

  return (
    <div className="charts__left">
    <div className="charts__left__title">
        <div>
            <h1>{reportName}</h1>
            <p>{reportNameDetail}</p>
        </div>
        <i className="fa fa-use">$</i>
    </div>
    <Chart data={data} />
</div>
  )
}

export default Chart_left
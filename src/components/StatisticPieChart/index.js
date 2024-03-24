import {PieChart, Pie, Legend, Cell} from 'recharts'
import './index.css'

const StatisticPieChart = props => {
  const {recentMatchesData} = props
  let won = 0
  let lost = 0
  let drawn = 0
  console.log(recentMatchesData.length)
  console.log(recentMatchesData)
  for (let i = 0; i < recentMatchesData.length; i += 1) {
    if (recentMatchesData[i].matchStatus === 'Won') {
      won += 1
    } else if (recentMatchesData[i].matchStatus === 'Lost') {
      lost += 1
    } else {
      drawn += 1
    }
  }

  const matchData = [
    {
      count: won,
      language: 'Won',
    },
    {
      count: lost,
      language: 'Lost',
    },
    {
      count: drawn,
      language: 'Drawn',
    },
  ]
  // console.log(matchData)
  return (
    <div className="charts">
      <PieChart width={1000} height={400}>
        <Pie
          cx="40%"
          cy="50%"
          data={matchData}
          startAngle={0}
          endAngle={360}
          innerRadius="40%"
          outerRadius="70%"
          dataKey="count"
          label
        >
          <Cell name="Won" fill="green" />
          <Cell name="Lost" fill="red" />
          <Cell name="Drawn" fill="gray" />
        </Pie>
        <Legend
          iconType="circle"
          layout="vertical"
          verticalAlign="middle"
          align="right"
          wrapperStyle={{fontSize: '25px'}}
        />
      </PieChart>
    </div>
  )
}

export default StatisticPieChart

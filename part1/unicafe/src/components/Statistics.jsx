import StatisticLine from "./StatisticLine";

function Statistics({good, neutral, bad}) {
	const getAll = (good + neutral + bad)


	return getAll !== 0 
    ? <ShowContent good={good} bad={bad} neutral={neutral} getAll={getAll} /> 
    : <div>No feedback given</div>
}

function ShowContent({good, neutral, bad, getAll}) {
	const getPositive  = getAll === 0 
		? 0 
		: (good / getAll) * 100;
  
	const getAverage = getAll === 0 
    ? 0 
    : (good - bad) / getAll;

  return (
    <main>
      <h2>Statistics</h2>
      <table>
        <tbody>
          <StatisticLine label="good" val={good} />
          <StatisticLine label="neutral" val={neutral} />
          <StatisticLine label="bad" val={bad} />
          <StatisticLine label="all" val={getAll} />
          <StatisticLine label="average" val={getAverage} />
          <StatisticLine label="positive" val={getPositive} />
        </tbody>
      </table>
    </main>
  )
}

export default Statistics
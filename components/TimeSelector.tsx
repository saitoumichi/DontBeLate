import React from 'react'

interface TimeSelectorProps {
  selectedTimeRange: string | null
  onTimeRangeSelect: (timeRange: string) => void
}

const TimeSelector: React.FC<TimeSelectorProps> = ({ 
  selectedTimeRange, 
  onTimeRangeSelect 
}) => {
  const timeRanges = [
    '5:00-7:00',
    '7:00-9:00',
    '9:00-11:00',
    '11:00-13:00',
    '13:00-15:00',
    '15:00-17:00',
    '17:00-19:00',
    '19:00-21:00',
    '21:00-23:00',
    '23:00-24:00'
  ]

  return (
    <section id="hours">
      <table>
        <thead>
          <tr>
            <th><h3>何時台かを選択してください</h3></th>
          </tr>
        </thead>
        <tbody>
          {timeRanges.map((timeRange) => (
            <tr key={timeRange}>
              <td>
                <h4 
                  className={`${selectedTimeRange === timeRange ? 'selected' : ''} cursor-pointer`}
                  onClick={() => onTimeRangeSelect(timeRange)}
                >
                  {timeRange}
                </h4>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  )
}

export default TimeSelector 
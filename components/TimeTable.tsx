import React from 'react'

interface TimeTableProps {
  direction: 'outbound' | 'return' | null
  timeRange: string | null
}

const TimeTable: React.FC<TimeTableProps> = ({ direction, timeRange }) => {
  return (
    <section id="timeTable">
      <h4>Time Table</h4>
      {direction && timeRange && (
        <div>
          <p>選択された方向: {direction === 'outbound' ? '行き' : '帰り'}</p>
          <p>選択された時間帯: {timeRange}</p>
          {/* ここに実際のタイムテーブルデータを表示 */}
        </div>
      )}
    </section>
  )
}

export default TimeTable 
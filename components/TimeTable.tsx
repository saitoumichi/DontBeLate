'use client'
import React from 'react'
import {useRouter} from 'next/navigation'

// この部分で、受け取るプロパティの型を定義します
interface TimeTableProps {
  direction: 'outbound' | 'return' | null
  timeRange: string | null
}

const TimeTable: React.FC<TimeTableProps> = ({ direction, timeRange }) => {
  const router = useRouter()

  return (
    <section id="timeTable">
      <h4 className="TimeTable absolute left-2 bottom-2">
        <button onClick={() => router.push('/alltable')}>Time Table</button></h4>
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
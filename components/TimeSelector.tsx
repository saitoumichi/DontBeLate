'use client'
import React from 'react'

type TimeSelectorProps = {
  selectedTimeRange: string | null;
  onTimeRangeSelect: (value: string | null) => void;
};

const timetable = {
  outbound_zikoku: ['04:00-','06:00-','08:00-','10:00-', '12:00-', '14:00-','16:00-','18:00-','20:00-','22:00-','24:00-',],
  outbound_iki: ['05:16-\n05:43-\n05:57-', '06:23-\n06:34-\n06:45-\n06:58-\n07:16-\n07:27-\n07:36-\n07:47-\n07:58-','08:12-\n08:24-\n08:30-\n08:40-\n08:53-\n09:12-\n09:30-\n09:49-',
  '10:03-\n10:18-\n10:33-\n10:47-\n11:02-\n11:17-\n11:32-\n11:47-',
  '12:02-\n12:17-\n12:32-\n12:47-\n13:02-\n13:17-\n13:32-\n13:47-',
  '14:02-\n14:17-\n14:32-\n14:47-\n15:02-\n15:17-\n15:32-\n15:47-',
  '16:02-\n16:17-\n16:32-\n16:48-\n17:03-\n17:18-\n17:33-\n17:49-',
  '18:04-\n18:19-\n18:34-\n18:49-\n19:04-\n19:19-\n19:34-\n19:49-',
  '20:04-\n20:19-\n20:34-\n20:49-\n21:04-\n21:19-\n21:34-\n21:49-',
  '22:04-\n22:19-\n22:34-\n22:51-\n23:11-\n23:31-\n23:51-',
  '24:12-'],
  return_zikoku: ['04:59-\n05:21-\n05:45-\n05:56-',
    '06:06-\n06:20-\n06:27-\n06:39-\n06:48-\n06:59-\n07:10-\n07:20-\n07:32-\n07:41-\n07:50-\n07:50-\n07:59-',
    '08:15-\n08:29-\n08:46-\n09:01-\n09:16-\n09:31-\n09:47-',
    '10:02-\n10:17-\n10:32-\n10:47-\n11:02-\n11:17-\n11:32-\n11:47-',
    '12:02-\n12:17-\n12:32-\n12:47-\n13:02-\n13:17-\n13:32-\n13:47-',
    '14:02-\n14:17-\n14:32-\n14:47-\n15:02-\n15:17-\n15:32-\n15:45-',
    '16:02-\n16:15-\n16:31-\n16:46-\n17:00-\n17:16-\n17:31-\n17:46-',
    '18:00-\n18:15-\n18:31-\n18:45-\n19:00-\n19:15-\n19:30-\n19:46-',
    '20:01-\n20:16-\n20:32-\n20:46-\n21:01-\n21:21-\n21:41-',
    '22:02-\n22:31-\n23:00-\n23:10-',
    '帰れまてん']
}

const TimeSelector: React.FC<TimeSelectorProps> = ({ selectedTimeRange, onTimeRangeSelect }) => {
  const maxLength = Math.max(
    timetable.outbound_zikoku.length,
    timetable.outbound_iki.length,
    timetable.return_zikoku.length
  )
  return (
    <section className="mt-6 px-4">
        <div className="flex justify-center">
      <h2 className="flex items-center justify-center w-80 text-xl bg-lime-600 h-10 font-bold mb-4 rounded">
        Time Table
        </h2>
        </div>
      <table className="mx-auto mt-1 mb-4">
        <thead className="bg-yellow-300">
          <tr>
            <th className="border px-4 py-2">時刻</th>
            <th className="border px-4 py-2">行き</th>
            <th className="border px-4 py-2">帰り</th>
          </tr>
        </thead>
        <tbody>
          {Array.from({ length: maxLength }).map((_, i) => (
            <tr key={i}>
              <td className="border px-4 py-2 text-center">
                {timetable.outbound_zikoku[i] || '-'}
              </td>
              <td className="border px-4 py-2 text-center">
              {timetable.outbound_iki[i]
              ? timetable.outbound_iki[i].split('\n').map((line, idx) => (
              <React.Fragment key={idx}>
              {line}
              <br />
              </React.Fragment>
              ))
              : '-'}
              </td>
              <td className="border px-4 py-2 text-center">
              {timetable.return_zikoku[i]
              ? timetable.return_zikoku[i].split('\n').map((line, idx) => (
              <React.Fragment key={idx}>
              {line}
              <br />
              </React.Fragment>
              ))
              : '-'}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  )
}

export default TimeSelector 
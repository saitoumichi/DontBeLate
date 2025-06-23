'use client'

import React from 'react'

const timeTable = {
  zikoku_5: ['18:00-','20:00-','22:00-'],
  kaeri_5: ['19:15-\n19:30-\n19:46-',
    '20:01-\n20:16-\n20:32-\n20:46-\n21:01-\n21:21-\n21:41-',
    '22:02-\n22:31-\n23:00-\n23:10-'],
}

const TimeSelector: React.FC = () => {
  const maxLength = Math.max(
    timeTable.zikoku_5.length,
    timeTable.kaeri_5.length
  )

  return (
    <section className="mt-6 px-4">
      <div className="flex justify-center">
        <h2 className="flex items-center justify-center w-80 text-xl bg-lime-600 h-10 font-bold mt-5 mb-4 rounded">
          Time Table
        </h2>
      </div>
      <table className="mx-auto mt-4 mb-4">
        <thead className="bg-yellow-300">
          <tr>
            <th className="border px-4 py-2">時刻</th>
            <th className="border px-4 py-2">行き</th>
          </tr>
        </thead>
        <tbody>
          {Array.from({ length: maxLength }).map((_, i) => (
            <tr key={i}>
              <td className="border px-4 py-2 text-center">
                {timeTable.zikoku_5[i] || '-'}
              </td>
              <td className="border px-4 py-2 text-center">
                {timeTable.kaeri_5[i]
                  ? timeTable.kaeri_5[i].split('\n').map((line, idx) => (
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

export default function OneGenPage() {

  return (
    <main>
      <TimeSelector />
    </main>
  );
}
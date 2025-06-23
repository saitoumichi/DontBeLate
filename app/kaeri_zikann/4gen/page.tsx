'use client'

import React from 'react'

const timeTable = {
  zikoku_4: ['16:00-','18:00-'],
  kaeri_4: ['17:00-\n17:16-\n17:31-\n17:46-',
    '18:00-\n18:15-\n18:31-\n18:45-\n19:00-'],
}

const TimeSelector: React.FC = () => {
  const maxLength = Math.max(
    timeTable.zikoku_4.length,
    timeTable.kaeri_4.length
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
                {timeTable.zikoku_4[i] || '-'}
              </td>
              <td className="border px-4 py-2 text-center">
                {timeTable.kaeri_4[i]
                  ? timeTable.kaeri_4[i].split('\n').map((line, idx) => (
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
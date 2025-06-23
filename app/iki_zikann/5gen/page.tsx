'use client'

import React from 'react'

const timeTable = {
  zikoku_5: ['14:00-'],
  iki_5: ['15:02-\n15:17-\n15:32-\n15:47-'],
}

const TimeSelector: React.FC = () => {
  const maxLength = Math.max(
    timeTable.zikoku_5.length,
    timeTable.iki_5.length
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
                {timeTable.iki_5[i]
                  ? timeTable.iki_5[i].split('\n').map((line, idx) => (
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
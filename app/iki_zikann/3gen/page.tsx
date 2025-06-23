'use client'

import React from 'react'


const timeTable = {
  zikoku_3: ['10:00-', '12:00-'],
  iki_3: [  '10:03-\n10:18-\n10:33-\n10:47-\n11:02-\n11:17-\n11:32-\n11:47-',
  '12:02-\n12:17-'],
}

const TimeSelector: React.FC = () => {
  const maxLength = Math.max(
    timeTable.zikoku_3.length,
    timeTable.iki_3.length
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
                {timeTable.zikoku_3[i] || '-'}
              </td>
              <td className="border px-4 py-2 text-center">
                {timeTable.iki_3[i]
                  ? timeTable.iki_3[i].split('\n').map((line, idx) => (
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
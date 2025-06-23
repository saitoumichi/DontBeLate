'use client'
import React, { useState } from 'react'
import TimeSelector from '@/components/TimeSelector'

export default function TimeTablePage() {
  const [selectedTimeRange, setSelectedTimeRange] = useState<string | null>(null)

  return (
    <main>
      <TimeSelector 
        selectedTimeRange={selectedTimeRange}
        onTimeRangeSelect={setSelectedTimeRange}
      />
    </main>
  )
}
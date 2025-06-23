'use client'

import { useState } from 'react'
import DirectionSelector from '@/components/DirectionSelector'
import TimeTable from '@/components/TimeTable'
import Footer from '@/components/Footer'

export default function Home() {
  const [selectedDirection, setSelectedDirection] = useState<'outbound' | 'return' | null>(null)
  const [selectedTimeRange, setSelectedTimeRange] = useState<string | null>(null)

  return (
    <div className="App">
      
      <main>
        {/* <Navigation /> */}
        
        <DirectionSelector 
          selectedDirection={selectedDirection}
          onDirectionSelect={setSelectedDirection}
        />
        
        <TimeTable 
          direction={selectedDirection}
          timeRange={selectedTimeRange}
        />
      </main>

      <Footer />
    </div>
  )
} 
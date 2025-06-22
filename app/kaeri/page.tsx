'use client'

import React from 'react'
import { useRouter } from 'next/navigation'

interface DirectionSelectorProps {
  selectedDirection: 'outbound' | 'return' | null
  onDirectionSelect: (direction: 'outbound' | 'return') => void
}

const DirectionSelector: React.FC<DirectionSelectorProps> = ({ 
  selectedDirection, 
  onDirectionSelect 
}) => {
  const router = useRouter()

  const handleClick = (direction: 'outbound' | 'return') => {
    onDirectionSelect(direction)
    if (direction === 'outbound') {
      router.push('/gozen')
    } else {
      router.push('/gogo')
    }
  }
  return (
    <section id="go" className="mt-10 flex justify-center">
      <table className="border-none border-collapse">
        <thead>
          <tr>
            <th className="border-none"><h3>午前か午後か選択してください</h3></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border-none flex flex-col items-center">
              <h4 
                className={`gozen ${selectedDirection === 'outbound' ? 'selected' : ''} cursor-pointer mt-8 mb-8 font-bold text-sm`}
                onClick={() => handleClick('outbound')}
              >
                午前
              </h4>
              <h4 
                className={`gogo ${selectedDirection === 'return' ? 'selected' : ''} cursor-pointer font-bold text-sm`}
                onClick={() => handleClick('return')}
              >
                午後
              </h4>
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  )
}

export default DirectionSelector
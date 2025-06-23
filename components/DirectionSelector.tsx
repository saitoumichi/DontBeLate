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
  const router = useRouter();

  const handleClick = (direction: 'outbound' | 'return') => {
    onDirectionSelect(direction)
    if (direction === 'outbound') {
      router.push('/iki&kaeri/iki')
    } else {
      router.push('iki&kaeri/kaeri')
    }
  }
  return (
    <section id="go" className="mt-24 flex justify-center">
      <table className="border-none border-collapse">
        <thead>
          <tr>
            <th className="border-none"><h3>行きか帰りかを選択して下さい</h3></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border-none flex flex-col items-center">
              <h4 
                className={`iki ${selectedDirection === 'outbound' ? 'selected' : ''} cursor-pointer mt-8 mb-8 font-bold text-sm`}
                onClick={() => handleClick('outbound')}
              >
                行き
              </h4>
              <h4 
                className={`kaeri ${selectedDirection === 'return' ? 'selected' : ''} cursor-pointer font-bold text-sm`}
                onClick={() => handleClick('return')}
              >
                帰り
              </h4>
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  )
}

export default DirectionSelector 
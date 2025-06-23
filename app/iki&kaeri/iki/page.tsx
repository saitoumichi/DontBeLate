'use client'

import React,{useState} from 'react'
import { useRouter } from 'next/navigation'

const IkiPage = () => {
  const [selectedDirection, setSelectedDirection] = useState<'outbound' | 'return' | null>(null)
  const router = useRouter();

  const handleDirectionSelect = (direction: 'outbound' | 'return') => {
    setSelectedDirection(direction)
    if (direction === 'outbound') {
      router.push('/iki_gozen&gogo/gozen')
    } else {
      router.push('/iki_gozen&gogo/gogo')
    }
  }
  return (
    <section id="go" className="mt-24 flex justify-center">
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
                onClick={() => handleDirectionSelect('outbound')}
              >
                午前
              </h4>
              <h4 
                className={`gogo ${selectedDirection === 'return' ? 'selected' : ''} cursor-pointer font-bold text-sm`}
                onClick={() => handleDirectionSelect('return')}
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

export default IkiPage
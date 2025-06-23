'use client'

import React,{useState} from 'react'
import { useRouter } from 'next/navigation'

const ZikanPage = () => {
  const [selectedDirection, setSelectedDirection] = useState<'outbound' | 'return' | null>(null)
  const router = useRouter();

  const handleDirectionSelect = (direction: 'outbound' | 'return') => {
    setSelectedDirection(direction)
    if (direction === 'outbound') {
      router.push('/iki_zikann/1gen')
    } else {
      router.push('/iki_zikann/2gen')
    }
  }

  return (
    <section className="mt-24 flex justify-center">
      <table className="border-none border-collapse">
        <thead>
          <tr>
            <th className="border-none"><h3>何限かを選択してください</h3></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border-none flex flex-col items-center">
              <h4 
                className={`1gen ${selectedDirection === 'outbound' ? 'selected' : ''} cursor-pointer flex items-center justify-center mt-8 mb-8 rounded-2xl font-bold text-sm w-60 h-12 bg-fuchsia-400`}
                onClick={() => handleDirectionSelect('outbound')}
              >
                1限
              </h4>
              <h4 
                className={`2gen ${selectedDirection === 'return' ? 'selected' : ''} cursor-pointer flex items-center justify-center mb-6 rounded-2xl font-bold text-sm w-60 h-12 bg-pink-400`}
                onClick={() => handleDirectionSelect('return')}
              >
                2限
              </h4>
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  )
}

export default ZikanPage
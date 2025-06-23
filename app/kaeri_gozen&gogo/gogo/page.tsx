'use client'

import React,{useState} from 'react'
import { useRouter } from 'next/navigation'

const GoGoNoPage = () => {
  const [selectedDirection, setSelectedDirection] = useState<'3gen' | '4gen' | '5gen' | null>(null)
  const router = useRouter();

  const handleDirectionSelect = (direction: '3gen' | '4gen' | '5gen') => {
    setSelectedDirection(direction)
    if (direction === '3gen') {
      router.push('/kaeri_zikann/3gen')
    } else if(direction === '4gen') {
      router.push('/kaeri_zikann/4gen')
    } else if(direction === '5gen') {
      router.push('/kaeri_zikann/5gen')
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
                className={`3gen ${selectedDirection === '3gen' ? 'selected' : ''} cursor-pointer flex items-center justify-center mt-6 mb-8 rounded-2xl font-bold text-sm w-60 h-12 bg-rose-400`}
                onClick={() => handleDirectionSelect('3gen')}
              >
                3限
              </h4>
              <h4 
                className={`4gen ${selectedDirection === '4gen' ? 'selected' : ''} cursor-pointer flex items-center justify-center mb-6 rounded-2xl font-bold text-sm w-60 h-12 bg-red-400`}
                onClick={() => handleDirectionSelect('4gen')}
              >
                4限
              </h4>
              <h4 
                className={`5gen ${selectedDirection === '5gen' ? 'selected' : ''} cursor-pointer flex items-center justify-center mb-6 rounded-2xl font-bold text-sm w-60 h-12 bg-orange-400`}
                onClick={() => handleDirectionSelect('5gen')}
              >
                5限
              </h4>
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  )
}

export default GoGoNoPage
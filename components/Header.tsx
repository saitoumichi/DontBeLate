'use client'
import { useRouter } from 'next/navigation'

const Header: React.FC = () => {
  const router = useRouter()
  return (
    <header className="bg-[#ffc0cb] h-[100px] md:bg-yellow-300 relative">
      <h1 className="m-0 absolute left-3 top-4 text-4xl font-bold">
        <span className="text-[#0000ff]">電車</span>
        <span className="text-[#a52a2a]">の</span>
        <span className="text-[#8a2be2]">時間</span>
      </h1>
      <h5 className="absolute right-0 bottom-0 p-[7px] text-xs text-[#800080]">
        <a
          href="https://www.google.co.jp/maps/@34.996224,135.725056,13z?hl=ja&entry=ttu&g_ep=EgoyMDI1MDYxMS4wIKXMDSoASAFQAw%3D%3D"
          target="_blank"
          rel="noopener noreferrer"
        >
          直接調べたかったらどうぞ→ [ Googleマップ ]
        </a>
      </h5>
      <h5 className="absolute right-2 top-2 text-[#808000] font-bold">
      <nav className="space-x-4 text-xs">
      <button onClick={() => router.push('/')}>時間の確認</button>
      <button onClick={() => router.push('/contact')}>お問い合わせ</button>
      </nav>
      </h5>
    </header>
  )
}

export default Header 
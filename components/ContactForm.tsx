import React, { useState } from 'react'

interface FormData {
  name: string
  email: string
  content: string
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    content: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('送信されたデータ:', formData)
    // ここで実際の送信処理を実装
  }

  return (
    <section id="form" className="mt-24 flex justify-center">
      <form onSubmit={handleSubmit}>
        <div>
          <h5 className="font-bold text-center bg-green-300 mb-1 px-2 py-1 rounded">お名前をどうぞ↓</h5>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="例：齋藤未智"
            className="rounded text-center bg-yellow-300 w-60 mt-1 mb-1 px-2 py-1 rounded"
          />
        </div>
        <div>
          <h5 className="font-bold text-center bg-green-300 mt-1 mb-1 px-2 py-1 rounded">メールアドレスもどうぞ↓</h5>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="例：ms20054869tv@docomo.ne.jp"
            className="rounded text-center bg-yellow-300 w-60 mt-1 mb-1 px-2 py-1 rounded"
          />
        </div>
        <div>
          <h5 className="font-bold text-center bg-green-300 mt-1 mb-1 px-2 py-1 rounded">何があったんですかね↓</h5>
          <textarea
            id="content"
            name="content"
            value={formData.content}
            onChange={handleInputChange}
            placeholder="例：目的地に接続できません😭"
            className="rounded text-center bg-yellow-300 w-60 mt-1 mb-1 px-2 py-1 rounded"
          />
        </div>
        <div>
          <button type="submit" className="font-bold rounded w-60 text-center bg-blue-300 mt-8 mb-1 px-2 py-1 rounded">ここ押すと送信できるよ😃</button>
        </div>
      </form>
    </section>
  )
}

export default ContactForm 
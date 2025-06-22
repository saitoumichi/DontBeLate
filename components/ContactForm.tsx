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
    <section id="form">
      <form onSubmit={handleSubmit}>
        <div>
          <h5>お名前をどうぞ</h5>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="例：齋藤未智"
          />
        </div>
        <div>
          <h5>メールアドレスもどうぞ</h5>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="例：ms20054869tv@docomo.ne.jp"
          />
        </div>
        <div>
          <h5>何があったんですかね</h5>
          <textarea
            id="content"
            name="content"
            value={formData.content}
            onChange={handleInputChange}
            placeholder="例：目的地に接続できません"
          />
        </div>
        <div>
          <button type="submit">ここ押すと送信できちゃうよ</button>
        </div>
      </form>
    </section>
  )
}

export default ContactForm 
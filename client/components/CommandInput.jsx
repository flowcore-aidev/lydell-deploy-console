import React, { useState } from 'react'
import { sendPrompt } from '../services/api'

export default function CommandInput({ onResponse }) {
  const [prompt, setPrompt] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!prompt.trim()) return
    setLoading(true)
    const result = await sendPrompt(prompt)
    onResponse(result)
    setPrompt('')
    setLoading(false)
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3 mt-6">
      <textarea
        rows="3"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="What do you want to build?"
        className="w-full p-3 border border-gray-300 rounded"
      />
      <button
        type="submit"
        className="bg-black text-white py-2 px-4 rounded hover:bg-gray-900"
        disabled={loading}
      >
        {loading ? 'Building...' : 'Build Now'}
      </button>
    </form>
  )
}

import React, { useState } from 'react'
import CommandInput from './components/CommandInput'
import DeployLogs from './components/DeployLogs'

export default function App() {
  const [response, setResponse] = useState(null)

  return (
    <div className="min-h-screen bg-white text-black p-8 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Lydell Deploy Console</h1>
      <p className="text-gray-600 mb-6">Type a command below to build features using GPT.</p>
      <CommandInput onResponse={setResponse} />
      <DeployLogs response={response} />
    </div>
  )
}

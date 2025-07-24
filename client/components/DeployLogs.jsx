import React from 'react'

export default function DeployLogs({ response }) {
  if (!response) return null
  return (
    <div className="mt-6 bg-gray-100 p-4 rounded">
      <h2 className="font-semibold mb-2">GPT Response:</h2>
      <pre className="whitespace-pre-wrap text-sm">{JSON.stringify(response, null, 2)}</pre>
    </div>
  )
}

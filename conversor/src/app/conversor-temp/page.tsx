'use client'
import { useState, useEffect } from 'react'

export default function ConversorTemperatura() {
  const [celsius, setCelsius] = useState('')
  const [fahrenheit, setFahrenheit] = useState('')

  useEffect(() => {
    if (document.activeElement?.id === 'celsius') {
      const c = parseFloat(celsius)
      setFahrenheit(isNaN(c) ? '' : ((c * 9/5) + 32).toFixed(2))
    }
  }, [celsius])

  useEffect(() => {
    if (document.activeElement?.id === 'fahrenheit') {
      const f = parseFloat(fahrenheit)
      setCelsius(isNaN(f) ? '' : (((f - 32) * 5/9).toFixed(2)))
    }
  }, [fahrenheit])

  return (
    <main className="p-8 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">Conversor de Temperatura</h1>

      <label className="block mb-2">
        Celsius (°C):
        <input
          id="celsius"
          type="number"
          value={celsius}
          onChange={e => setCelsius(e.target.value)}
          className="mt-1 w-full p-2 border rounded"
        />
      </label>

      <label className="block mt-4">
        Fahrenheit (°F):
        <input
          id="fahrenheit"
          type="number"
          value={fahrenheit}
          onChange={e => setFahrenheit(e.target.value)}
          className="mt-1 w-full p-2 border rounded"
        />
      </label>
    </main>
  )
}

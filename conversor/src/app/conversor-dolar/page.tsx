'use client'
import { useState, useEffect } from 'react'

export default function ConversorDolar() {
  const cotacao = 5.84
  const [dolar, setDolar] = useState('')
  const [real, setReal] = useState('')

  useEffect(() => {
    if (document.activeElement?.id === 'dolar') {
      const valor = parseFloat(dolar)
      setReal(isNaN(valor) ? '' : (valor * cotacao).toFixed(2))
    }
  }, [dolar])

  useEffect(() => {
    if (document.activeElement?.id === 'real') {
      const valor = parseFloat(real)
      setDolar(isNaN(valor) ? '' : (valor / cotacao).toFixed(2))
    }
  }, [real])

  return (
    <main className="p-8 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">Conversor Dólar --- Real</h1>
      <p className="mb-4 text-sm text-gray-600">Cotação fixa: 1 USD = R$ 5,84 (14/04/2025)</p>

      <label className="block mb-2">
        Dólares (USD):
        <input
          id="dolar"
          type="number"
          value={dolar}
          onChange={e => setDolar(e.target.value)}
          className="mt-1 w-full p-2 border rounded"
        />
      </label>

      <label className="block mt-4">
        Reais (BRL):
        <input
          id="real"
          type="number"
          value={real}
          onChange={e => setReal(e.target.value)}
          className="mt-1 w-full p-2 border rounded"
        />
      </label>
    </main>
  )
}

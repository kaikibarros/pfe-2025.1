'use client'
import { useState, useEffect } from 'react'

export default function ConversorMedidas() {
  const [metros, setMetros] = useState('')
  const [pes, setPes] = useState('')
  const [polegadas, setPolegadas] = useState('')

  useEffect(() => {
    if (document.activeElement?.id === 'metros') {
      const m = parseFloat(metros)
      setPes(isNaN(m) ? '' : (m * 3.28084).toFixed(2))
      setPolegadas(isNaN(m) ? '' : (m * 39.3701).toFixed(2))
    }
  }, [metros])

  useEffect(() => {
    if (document.activeElement?.id === 'pes') {
      const p = parseFloat(pes)
      const m = isNaN(p) ? '' : (p / 3.28084).toFixed(2)
      setMetros(m)
      setPolegadas(isNaN(p) ? '' : (parseFloat(m) * 39.3701).toFixed(2))
    }
  }, [pes])

  useEffect(() => {
    if (document.activeElement?.id === 'polegadas') {
      const po = parseFloat(polegadas)
      const m = isNaN(po) ? '' : (po / 39.3701).toFixed(2)
      setMetros(m)
      setPes(isNaN(po) ? '' : (parseFloat(m) * 3.28084).toFixed(2))
    }
  }, [polegadas])

  return (
    <main className="p-8 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">Conversor de Medidas</h1>

      <label className="block mb-2">
        Metros:
        <input
          id="metros"
          type="number"
          value={metros}
          onChange={e => setMetros(e.target.value)}
          className="mt-1 w-full p-2 border rounded"
        />
      </label>

      <label className="block mt-4">
        Pés:
        <input
          id="pes"
          type="number"
          value={pes}
          onChange={e => setPes(e.target.value)}
          className="mt-1 w-full p-2 border rounded"
        />
      </label>

      <label className="block mt-4">
        Polegadas:
        <input
          id="polegadas"
          type="number"
          value={polegadas}
          onChange={e => setPolegadas(e.target.value)}
          className="mt-1 w-full p-2 border rounded"
        />
      </label>
    </main>
  )
}


// segunda opção

// 'use client'
// import { useState } from 'react'

// export default function ConversorMedidas() {
//   const [metros, setMetros] = useState('')

//   // Conversões diretas
//   const metrosFloat = parseFloat(metros)
//   const pes = isNaN(metrosFloat) ? '' : (metrosFloat * 3.28084).toFixed(2)
//   const polegadas = isNaN(metrosFloat) ? '' : (metrosFloat * 39.3701).toFixed(2)

//   return (
//     <main className="p-8 max-w-md mx-auto">
//       <h1 className="text-2xl font-bold mb-4">Conversor de Medidas</h1>

//       <label className="block mb-2">
//         Metros:
//         <input
//           type="number"
//           value={metros}
//           onChange={e => setMetros(e.target.value)}
//           className="mt-1 w-full p-2 border rounded"
//         />
//       </label>

//       <p className="mt-4">Pés: {pes}</p>
//       <p>Polegadas: {polegadas}</p>
//     </main>
//   )
// }

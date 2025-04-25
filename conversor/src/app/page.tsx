import Link from "next/link";

export default function Home() {
  return (
    <main className="p-8 max-w-xl mx-auto">
    <h1 className="text-3xl font-bold mb-4">Conversores de Unidades</h1>
    <p className="mb-6 font-bold">
      Este aplicativo permite converter valores entre diferentes unidades, como moeda, temperatura e comprimento.
      Selecione abaixo o tipo de conversão desejado.
    </p>

    <nav className="space-y-2">
     <Link href="/sobre" className="text-gray-200 underline block p-1">Sobre o Desenvolvedor</Link>
      <Link href="/conversor-dolar" className="text-gray-200 underline block p-1">Conversor Dólar ↔ Real</Link>
      <Link href="/conversor-temp" className="text-gray-200 underline block p-1">Conversor Temperatura (°C ↔ °F)</Link>
      <Link href="/conversor-medidas"   className="text-gray-200 underline block p-1">Conversor Metros ↔ Pés / Polegadas</Link>
    </nav>
  </main>
  );
}                                                                                                                                                                                                                                    

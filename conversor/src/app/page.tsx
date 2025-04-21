import Link from "next/link";

export default function Home() {
  return (
    <main className="p-8 max-w-xl mx-auto">
    <h1 className="text-3xl font-bold mb-4">Conversores de Unidades</h1>
    <p className="mb-6">
      Este aplicativo permite converter valores entre diferentes unidades, como moeda, temperatura e comprimento.
      Selecione abaixo o tipo de conversão desejado.
    </p>

    <nav className="space-y-2">
      <Link href="/sobre" className="text-blue-600 underline block">Sobre o Desenvolvedor</Link>
      <Link href="/conversor-dolar" className="text-blue-600 underline block">Conversor Dólar ↔ Real</Link>
      <Link href="/conversor-temperatura" className="text-blue-600 underline block">Conversor Temperatura (°C ↔ °F)</Link>
      <Link href="/conversor-medidas" className="text-blue-600 underline block">Conversor Metros ↔ Pés / Polegadas</Link>
    </nav>
  </main>
  );
}                                                                                                                                                                                                                                                

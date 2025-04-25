import Link from "next/link";
export default function Sobre (){
    return (
        <main>
            <div className="flex flex-col items-center justify-center min-h screen">
                <h1 className="text-3xl p-5 10 font-bold ">Sobre</h1>
            <img  className="w-100 h-100 p-5 rounded-xl border-2 border-gray-400" src ="/imagens/kaiki.jpg" alt="kaiki"></img>
            <p className="p-3 ">
                Olá, me chamo Kaiki, atualmente estou cursando sistemas para internet. <br />Desenvolvi essa aplicação para colcoar em prática meus conhecimentos de React e Tailwind.
            </p>

            <Link href="/" className="text-gray-200 underline block p-1">Voltar para a páginal inicial</Link>
            </div>
        </main>
    )
}

import { url } from "inspector";
import Image from "next/image";
import logo from "../../public/SDSync - Logo.png";

export default function Home() {
  return (
    <main className="w-full">
      <nav className="primaria border p-4 text-white">Início</nav>
      <section className="bg-white my-10 flex justify-center">
        <Image src={logo} width={550} height={550} alt="SDSyncLogo" />
      </section>
      <section className="secundaria p-20 flex justify-evenly items-center">
        <div>Bem Vindo!</div>
        <div className="text-center flex flex-col gap-4">
          <h3>ACESSE NOSSA PLATAFORMA: </h3>
          <a href="http://app.sdsync.com.br" className="font-bold">
            <h1 className="text-5xl border-4 text-white border-white rounded-lg p-3 hover:bg-white hover:text-[--primaria]">
              APP SDSYNC
            </h1>
          </a>
        </div>
      </section>
      <section className="primaria text-white p-20 flex justify-evenly">
        <div>Bem Vindo!</div>
      </section>
      <footer className="bg-gray-300 p-20 flex justify-center">@mextech</footer>
    </main>
  );
}

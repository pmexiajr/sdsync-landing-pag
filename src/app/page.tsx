import { url } from "inspector";
import Image from "next/image";
import logo from "../../public/SDSync - Logo.png";

export default function Home() {
  return (
    <main className="w-full">
      <nav className="primaria border p-4">Início</nav>
      <section className="bg-white my-10 flex justify-center">
        <Image src={logo} width={550} height={550} alt="SDSyncLogo" />
      </section>
      <section className="secundaria p-20 flex justify-evenly">
        <div>Bem Vindo!</div>
        <div>
          <a href="http://app.sdsync.com.br" className="font-bold">
            APP SDSYNC
          </a>
        </div>
      </section>
      <footer className="bg-gray-300 p-20 flex justify-center">@mextech</footer>
    </main>
  );
}

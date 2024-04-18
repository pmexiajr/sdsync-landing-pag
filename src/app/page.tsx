import { url } from "inspector";
import Image from "next/image";
import logo from "../../public/SDSync - Logo.png";

export default function Home() {
  return (
    <main className="w-full">
      <section className="automacaoBg  bg-center h-[100svh] flex flex-col justify-center items-center">
        <div className="w-full h-full opacityBg flex justify-center items-center">
          <div className="w-[80%] py-20">
            <Image
              src={logo}
              width={1000}
              height={1000}
              alt="SDSyncLogo"
              className="w-full"
            />
          </div>
        </div>
      </section>
      <section className="secundaria p-20 flex justify-evenly items-center ">
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

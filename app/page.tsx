// pages/index.js
import Image from "next/image";
import Link from "next/link";

const Home = () => {
  return (
    <main className="min-h-screen flex flex-col justify-between mt-12 pt-4">
      <section className="relative bg-cover bg-center lg:h-[91vh] h-[50vh] flex items-center justify-center">
        <div className="absolute inset-0 bg-[url('/background.png')] bg-cover bg-center opacity-20"></div>
        <div className="container relative z-10 mx-auto text-center">
        <h1 className="lg:text-[80px] text-[30px] font-bold mb-2 text-green-800">GerakPeduli</h1>
            <p className="lg:text-[27px] text-[17px] text-black max-w-2xl mx-auto">
              Sistem digital berbasis teknologi modern yang meningkatkan respons bencana dengan pelacakan, penugasan, dan distribusi bantuan real-time, serta pengambilan keputusan berbasis data.
          </p>
        </div>
      </section>

    </main>
  );
};

export default Home;
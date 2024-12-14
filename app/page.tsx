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


      <section id="Subjects" className="container mx-auto px-4 py-8">
        <div className="flex justify-center">
            <h2 className="text-3xl font-bold mb-6 ">Choose a Subject</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

            <Link href="/simulation" className="bg-gray-100 text-black rounded-lg shadow-lg p-6 hover:bg-blue-700 hover:text-white transition">
              <div className="relative w-full h-64 overflow-hidden rounded-lg"> 
                <Image
                  src="/background.png"
                  alt="Ohm&apos;s Law"
                  layout="fill" 
                  objectFit="cover"
                />
              </div>
              <h3 className="text-2xl font-semibold mb-2 pt-2">Ohm&apos;s Law</h3>
              <p>Explore the principles of Ohm&apos;s Law with our interactive virtual lab.</p>
            </Link>
          </div>
      </section>

      <section className="bg-gray-100 py-8 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Testimonials</h2>
          <p className="text-lg italic text-gray-700 max-w-2xl mx-auto">
          &quot;This virtual lab has been a game-changer for my understanding of physics! Highly recommend it to anyone looking to deepen their knowledge.&quot;
          </p>
          <p className="text-lg italic text-gray-700 max-w-2xl mx-auto mt-4">
          &quot;An amazing resource for students and educators alike. The simulations are interactive and easy to understand.&quot;
          </p>
        </div>
      </section>
    </main>
  );
};

export default Home;
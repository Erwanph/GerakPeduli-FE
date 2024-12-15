'use client'
import React from 'react';
import { Globe, Zap, Shield, Award, Users, MapPin, FileText } from 'lucide-react';
import { useState } from 'react';
import Link from "next/link";
import Image from 'next/image';

const Home = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [activeStudy, setActiveStudy] = useState(0);
  const caseStudies = [
    {
      title: "Gempa Cianjur, November 2022",
      location: "Cianjur, Jawa Barat",
      description: "Respons cepat dengan koordinasi efektif yang membantu 2.500 korban dalam 48 jam pertama.",
      impact: [
        "Distribusi 10 ton logistik",
        "Pendirian 25 tenda darurat",
        "Evakuasi medis untuk 150 korban"
      ],
      image: "/gempacianjur.jpeg"
    },
    {
      title: "Banjir Bandang Flores, April 2023",
      location: "Kabupaten Flores Timur, NTT",
      description: "Mobilisasi relawan dan sumber daya terstruktur untuk pemulihan pasca bencana.",
      impact: [
        "Bantuan untuk 3.000 keluarga",
        "Rekonstruksi 50 rumah",
        "Penyediaan air bersih dan sanitasi"
      ],
      image: "/api/placeholder/600/400"
    }
  ];

  const features = [
    {
      icon: <Globe className="w-12 h-12 text-green-700" />,
      title: "Koordinasi Global",
      description: "Platform terintegrasi untuk komunikasi lintas wilayah dalam penanganan bencana."
    },
    {
      icon: <Zap className="w-12 h-12 text-green-700" />,
      title: "Respons Cepat",
      description: "Sistem pintar untuk mobilisasi sumber daya dan relawan dalam waktu singkat."
    },
    {
      icon: <Shield className="w-12 h-12 text-green-700" />,
      title: "Keamanan Terjamin",
      description: "Perlindungan data dan privasi dengan teknologi keamanan mutakhir."
    },
    {
      icon: <FileText className="w-12 h-12 text-green-700" />,
      title: "Dokumentasi Komprehensif",
      description: "Pencatatan akurat dan transparan setiap tahap penanganan bencana."
    }
  ];


  return (
    <main className="min-h-screen flex flex-col justify-between mt-12 pt-6 bg-white">
      <section className="relative bg-cover bg-center lg:h-[91vh] h-[50vh] text-black pt-4">
        <div className="absolute inset-0 bg-[url('/background.png')] bg-cover bg-center opacity-20"></div>

        <div className="container mx-auto px-4 py-20 grid md:grid-cols-2 gap-12 items-center relative z-10">
          <div>
            <Image src="/logo_nobg.png" alt="GerakPeduli" width={150} height={150} />
            <h1 className="text-5xl font-bold mb-6 pt-6">GerakPeduli</h1>
            <p className="text-xl mb-8 opacity-90">
              Sistem digital canggih untuk koordinasi dan respons bencana, merevolusi cara kita menangani keadaan darurat melalui teknologi terintegrasi.
            </p>
            <div className="flex space-x-4">
              <Link href="/signup" className="bg-white text-green-800 px-6 py-3 rounded-full font-semibold hover:bg-green-100 transition-colors">
                Daftar Relawan
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="bg-white/60 p-6 rounded-xl border border-white/100 hover:bg-white/100 transition-all"
              >
                <div className="mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm opacity-80">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <Users className="w-16 h-16 mx-auto text-green-700 mb-4" />
              <h3 className="text-4xl font-bold text-green-800 mb-2">5000+</h3>
              <p className="text-gray-600">Relawan Terdaftar</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <MapPin className="w-16 h-16 mx-auto text-green-700 mb-4" />
              <h3 className="text-4xl font-bold text-green-800 mb-2">30+</h3>
              <p className="text-gray-600">Wilayah Operasi</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <Award className="w-16 h-16 mx-auto text-green-700 mb-4" />
              <h3 className="text-4xl font-bold text-green-800 mb-2">95%</h3>
              <p className="text-gray-600">Efektivitas Respons</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-green-900 mb-6">Teknologi Canggih untuk Kemanusiaan</h2>
              <p className="text-xl text-gray-700 mb-8">
                GerakPeduli menggunakan teknologi terkini seperti geolokasi, kecerdasan buatan, dan analitika data untuk mengoptimalkan setiap tahap penanganan bencana.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <Zap className="mr-4 text-green-700" />
                  <span>Pelacakan Real-Time</span>
                </li>
                <li className="flex items-center">
                  <Shield className="mr-4 text-green-700" />
                  <span>Keamanan Data Mutakhir</span>
                </li>
                <li className="flex items-center">
                  <Globe className="mr-4 text-green-700" />
                  <span>Koordinasi Terintegrasi</span>
                </li>
              </ul>
            </div>

            <div className="bg-green-100 rounded-xl p-8">
  <div className="container mx-auto px-4">
    {/* Title */}
    <h2 className="text-center text-3xl font-bold mb-6 text-green-900">Alur Sistem GerakPeduli</h2>
    
    {/* Diagram */}
    <div className="bg-green-50 p-8 rounded-xl">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 300" className="w-full">
        {/* Disaster Detection */}
        <circle cx="100" cy="150" r="60" fill="#22c55e" className="opacity-80" />
        <text x="100" y="145" textAnchor="middle" fill="#ffffff" fontWeight="bold" fontSize="15px">
          Deteksi
        </text>
        <text x="100" y="165" textAnchor="middle" fill="#ffffff" fontWeight="bold" fontSize="15px">
          Bencana
        </text>

        {/* Data Collection */}
        <circle cx="300" cy="150" r="60" fill="#22c55e" className="opacity-80" />
        <text x="300" y="145" textAnchor="middle" fill="#ffffff" fontWeight="bold" fontSize="15px">
          Pengumpulan
        </text>
        <text x="300" y="165" textAnchor="middle" fill="#ffffff" fontWeight="bold" fontSize="15px">
          Data
        </text>

        {/* Resource Allocation */}
        <circle cx="500" cy="150" r="60" fill="#22c55e" className="opacity-80" />
        <text x="500" y="145" textAnchor="middle" fill="#ffffff" fontWeight="bold" fontSize="15px">
          Alokasi
        </text>
        <text x="500" y="165" textAnchor="middle" fill="#ffffff" fontWeight="bold" fontSize="15px">
          Sumber Daya
        </text>

        {/* Monitoring */}
        <circle cx="700" cy="150" r="60" fill="#22c55e" className="opacity-80" />
        <text x="700" y="155" textAnchor="middle" fill="#ffffff" fontWeight="bold" fontSize="15px">
          Pemantauan
        </text>

        {/* Connecting Arrows */}
        <line x1="160" y1="150" x2="240" y2="150" stroke="#22c55e" strokeWidth="4" />
        <line x1="360" y1="150" x2="440" y2="150" stroke="#22c55e" strokeWidth="4" />
        <line x1="560" y1="150" x2="640" y2="150" stroke="#22c55e" strokeWidth="4" />
      </svg>
    </div>
  </div>
</div>


          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-green-900">Studi Kasus Respons Bencana</h2>
          
          {/* Detailed Case Study View */}
          <div className="mt-16 bg-white rounded-xl p-12 shadow-lg">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-3xl font-bold mb-4 text-green-900">
                  {caseStudies[activeStudy].title}
                </h3>
                <p className="text-gray-700 mb-6">
                  {caseStudies[activeStudy].description}
                </p>
                <div>
                  <h4 className="text-xl font-semibold mb-3 text-green-800">Dampak Langsung:</h4>
                  <ul className="space-y-2">
                    {caseStudies[activeStudy].impact.map((item, idx) => (
                      <li key={idx} className="flex items-center text-gray-700">
                        <Zap className="mr-2 text-green-700" size={20} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="rounded-xl overflow-hidden shadow-lg">
                <img 
                  src={caseStudies[activeStudy].image} 
                  alt={caseStudies[activeStudy].title} 
                  className="w-full h-96 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
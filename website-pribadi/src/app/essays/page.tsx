import type { Metadata } from "next";
import Image, { StaticImageData } from 'next/image';
import Image1 from '../../../public/images/Pimnas.jpg';
import Image2 from '../../../public/images/Moderator.jpg';

export const metadata: Metadata={
  title:'Esai',
  description: 'Halaman Esai',
  openGraph: {
    title: 'Esai',
    description: 'Halaman Esai',
  },
};

export default function essays(){
  return(
    <div className="flex flex-col pb-30 justify center ">
      <header>
        <h1 className="text-center font-bold text-4xl text-white">Esai</h1>
        <p className="text-center font-serif text-1xl text-white">Kumpulan esai yang telah saya buat</p>
      </header>
      <div className="text-center flex flex-row gap-10 mt-19">
      <div className="bg-white shadow-2xl rounded-3xl p-6 max-w-lg text-center border border-gray-300 col-span-1 flex flex-col items-center">
        <div className="font-bold font-mono text-black text-2xl mt-1 p-3">
          PENGALAMAN SAYA
        </div>
        <Image src={Image1} alt="Foto Profil" width={180} height={180} className="w-40 h-40 rounded-3xl border-4 border-purple-700 shadow-lg"
        />
        <h1 className="text-3xl font-extrabold text-black mt-4">
          Lolos Pendanaan dan PIMNAS
        </h1>
        <p className="font-semibold text-black-900 text-1xl mt-2">
          Pekan Ilmiah Mahasiswa Nasional Tahun 2024
        </p>
        <p className="font-bold text-purple-900 text-1xl mt-2">
        Universitar Airlangga Surabaya
        </p>
        <p className="text-black-900 mt-4 leading-relaxed text-justify">
         Hallo semuanya. Tahun 2024 merupakan tahun yang sangat berkesan bagi saya, dikarenakan saya pertama kali lolos untuk pendanaan PKM
         Lalu dilanjut dengan pengumuman lolos Pekan Ilmiah Mahasiswa Nasional yang dilaksanakan di Unviersitas Airlangga Suarabaya...
        </p>
    </div>
      <div className="bg-white shadow-2xl rounded-3xl p-6 max-w-lg text-center border border-gray-300 col-span-1 flex flex-col items-center">
        <div className="font-bold font-mono text-black text-2xl mt-1 p-3">
          PENGALAMAN SAYA
        </div>
        <Image src={Image2} alt="Foto Profil" width={180} height={180} className="w-40 h-40 rounded-3xl border-4 border-purple-700 shadow-lg"
        />
        <h1 className="text-3xl font-extrabold text-black mt-4">
          Moderator
        </h1>
        <p className="font-semibold text-black-900 text-1xl mt-2">
          Pembekalan Mahasiswa Baru Politeknik Negeri Malang Penerima KIP-Kuliah Merdeka Tahun 2023
        </p>
        <p className="font-bold text-purple-900 text-1xl mt-2">
          Gedung Aula Pertamina Politeknik Negeri Malang
        </p>
        <p className="text-black-900 mt-4 leading-relaxed text-justify">
          Salah satu moment paling berharga bagi saya yaitu dapat duduk bersama dalam satu panggung dengan Ketua Puslabdik Kemendikbud Ristek RI dan Direktur III Politeknik Negeri Malang serta salah satu motivator hebat Saudari Elvin...
        </p>
    </div>
      </div>
  </div>
  );
}
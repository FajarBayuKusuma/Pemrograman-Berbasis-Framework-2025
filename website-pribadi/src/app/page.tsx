import type { Metadata } from "next";
import Image, { StaticImageData } from 'next/image';
import Image1 from '../../public/images/aku.jpg';
import Image2 from '../../public/images/SafeDrive.jpg';
import Image3 from '../../public/images/FMD).png';
import Image4 from '../../public/images/logo BKM A3.jpg';

export const metadata: Metadata={
  title:'Tentang Saya',
  description: 'Halaman Tentang Saya',
  openGraph: {
    title: 'Tentang Saya',
    description: 'Halaman tentang saya.',
  },
};

export default function Home() {
  return (
    <div className="grid grid-cols-3 gap-6 px-6 py-10 shadow-2xl pl-60">
      {/* Kotak kanan profile */}
      <div className="bg-white shadow-2xl rounded-3xl p-6 max-w-lg text-center border border-gray-300 col-span-1 flex flex-col items-center">
        <div className="font-bold font-mono text-black text-2xl mt-1 p-3">
          PROFIL SAYA
        </div>
        <Image src={Image1} alt="Foto Profil" width={180} height={180} className="rounded-full border-4 border-purple-700 shadow-lg"
        />
        <h1 className="text-3xl font-extrabold text-black mt-4">
          Fajar Bayu Kusuma
        </h1>
        <p className="font-semibold text-black-900 text-1xl mt-2">
          Mahasiswa D-IV Teknik Informatika Politeknik Negeri Malang
        </p>
        <p className="font-bold text-purple-900 text-1xl mt-2">
          System Analyst and Mobile Development
        </p>
        <p className="text-black-900 mt-4 leading-relaxed text-justify">
          Saya adalah mahasiswa semester 6 prodi D-IV Teknik Informatika Politeknik Negeri Malang. 
          Saya memiliki ketertarikan pada bagian System Analyst dan juga pada pengembangan aplikasi Mobile.
          Selama kuliah saya juga tertarik dengan berbagai kegiatan kepanitian baik dari kampus maupun organisasi
        </p>
      </div>

      {/* Kotak 2 & 3 (Bagian kanan, dibuat grid dalamnya) */}
      <div className="col-span-2 grid grid-rows-1 gap-6">
      {/* Kotak 2 */}
      <div className="bg-white shadow-2xl rounded-3xl p-2 max-w-4xl text-center border border-gray-300 flex flex-row items-center justify-center gap-2">
        <div className="text-center">
          <div className="font-bold text-black text-2xl p-2 font-mono">
            PENGALAMAN ORGANISASI
          </div>
          <div className="text-left flex flex-row gap-10">
            <div className="w-[400] bg-white shadow-2xl rounded-3xl p-2 max-w-4xl text-center border border-gray-300 flex flex-col gap-5">
             
              {/* Formadiksi Polinema */}
              <div className="flex flex-row items-center gap-4 w-full">
                <Image src={Image3} alt="Foto Forma" width={150} height={150} className="w-32 h-32 rounded-full border-4 border-purple-700 shadow-lg" />
                  <div className="text-left">
                    <h1 className=" text-1xl font-bold text-purple-700">FORMADIKSI POLINEMA</h1>
                    <p className="text-0xl text-black">
                      Forum Mahasiswa Bidikmisi KIP/Kuliah dan Afirmasi Pendidikan Politeknik Negeri Malang</p>
                  </div>
              </div>
              <div className="text-0xl text-justify mt-2 text-grey-600">
                Formadiksi Polinema adalah forum yang menghimpun seluruh mahasiswa aktif penerima KIP Kuliah dan Afirmasi Pendidikan yang ada di Polinema
                yang bertujuan untuk meningkatkan skill akademik dan non akademik, menyampaikan aspirasi kepada pembina melalui berbagai program kerja.
              </div>
              <div className="font-bold text-0xl text-center leading-tight text-black">
                Jabatan
              </div>
              <div className="text-0xl text-left text-black leading-tight">
              - Badan Pengurus Harian (Sekretaris Satu) Periode 2023/2024
              </div>
              <div className="text-0.5xl text-left text-black leading-tight">
              - Badan Pengurus Harian (Wakil Ketua Umum) Periode 2024/2025
              </div>
            </div>
           
           {/* BKM */}
            <div className="w-[400] bg-white shadow-2xl rounded-3xl p-2 max-w-4xl text-center border border-gray-300 flex flex-col gap-5">
              <div className="flex flex-row items-center gap-4 w-full">
                <Image src={Image4} alt="Foto BKM" width={150} height={150} className="w-32 h-32 rounded-full border-4 border-purple-700 shadow-lg" />
                  <div className="text-left">
                    <h1 className="text-1xl font-bold text-purple-700">BKM POLINEMA</h1>
                    <p className="text-0xl text-black">
                      Bhakti Karya Mahasiswa Politeknik Negeri Malang</p>
                  </div>
              </div>
              <div className="text-0xl text-justify mt-2 text-grey-600">
                BKM Polinema adalah salah satu organisasi yang ada di Politeknik Negeri Malang berfokus pada bidang sosial dan kesehatan masyarakat.
                BKM berfokus pada kegiatan sosial seperti pengabdian desa, kegiatan galang donasi bencana, dan juga bidang kesehatan seperti kegiatan donor darah, sosialisasi kesehatan untuk umum
              </div>
              <div className="font-bold text-0xl text-center leading-tight text-black">
                Jabatan
              </div>
              <div className="text-0xl text-left text-black leading-tight">
              - Departemen Hubungan Masyarakat (Organization Commite) Periode 2023/2024
              </div>
              <div className="text-0.5xl text-left text-black leading-tight">
              - Departemen Hubungan Masyarakat (Sterring Commite) Periode 2024/2025
              </div>
            </div>

          </div>
        </div>
      </div>

        {/* Kotak 3 */}
      </div>
    </div>
  );
}

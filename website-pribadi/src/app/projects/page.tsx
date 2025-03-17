import type { Metadata } from "next"; 
import Image, { StaticImageData } from 'next/image';
import Image1 from '../../../public/images/Logo Posyandu.png';
import Image2 from '../../../public/images/logo.png';

export const metadata: Metadata={
  title:'Project Saya',
  description: 'Halaman Tentang Projects',
  openGraph: {
    title: 'Projects Saya',
    description: 'Halaman tentang Projects Saya.',
  },
};


export default function projects(){
  return(
    <div className="justify center">
          <div className="mt-16 px-8">
      <header>
        <h1 className="font-bold text-4xl text-center text-white">Projek Saya</h1>
        <p className="text-base mt-6 text-center text-white"> Berikut merupakan beberapa proyek yang telah saya buat</p>
      </header>
      <div className="mt-16 ">
        <h2 className="text-2xl text-bold text-white">Aplikasi</h2>
        <ul className="pb-30 grid grid-cols-2 md:grid-clos-2 lg:grid-cols-4 gap-x-12 gap-y-16 mt-8 justify-center">
            <ProjectItem name="Aplikasi 1" url="https://github.com/hbbspace/POSLINE" urlDisplay="Posyandu" imageSrc={Image1}/>
            <ProjectItem name="Aplikasi 2" url="https://github.com/SafeDriveApp" urlDisplay="Safe Drive" imageSrc={Image2}/>
        </ul>
      </div>
    </div>
    </div>
  );
}

type ProjectItemProps ={
    name: string;
    url: string;
    urlDisplay: string;
    imageSrc: StaticImageData;
}

function ProjectItem({name, url, urlDisplay, imageSrc}: ProjectItemProps){
    return(
        <li>
            <a href={url}>
                <div className = " item-center bg-white max-w-sw rounded-3xl overflow-hidden shadow-lg w-[400] h-[400]">
                    <Image className="w-100 h-60" src={imageSrc} alt={name}/>
                    <div className="px- py-4">
                        <div className="font-bold text-xl mb-2">{name}</div>
                    </div>
                    <div className="px-6 py-4">
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                            {urlDisplay}
                        </span>
                    </div>
                </div>
            </a>
        </li>
    )
}
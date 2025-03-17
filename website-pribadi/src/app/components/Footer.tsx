type FooterLinkProps = {
    text: string;
    url: string;
};

function FooterLink({ text, url}: FooterLinkProps){
    return <a className="transition hover:text-teal-500" href={url}>{text}</a>;
}

export default function Footer(){
    return(
        <footer className="mt-auto pt-10 px-8 pb-16 border-t">
            <div className="flex justify-between gap-20">
                <div className="flex gap-6 text-sm font-medium text-white">
                    <FooterLink text="Tentang Saya" url= "/"/>
                    <FooterLink text="Proyek" url= "/projects"/>
                    <FooterLink text="Esai" url= "/essays"/>
                </div>
                <p className="text-sm text-white">@ 2025 Fajar Bayu Kusuma. All right reserved.</p>
            </div>
        </footer>
    )
}

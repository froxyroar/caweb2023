import VideoPlayer from '@/components/Videoplayer';
import About from '@/components/About';
import Course from'@/components/Course';
import Benefit from '@/components/Benefit';
import SdanK from '@/components/SyaratKetentuan';
import Berkas from '@/components/Berkas';
import Daftar from '@/components/Daftar';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
        <div>
          <VideoPlayer />
        </div>
        <div>
          <About />
        </div>
        <div>
          <Benefit />
        </div>
        <div>
          <Course />
        </div>
        <div>
          <SdanK />
        </div>
        <div>
          <Berkas />
        </div>
        <div>
        <Daftar />
        </div>
        <div>
          <Footer />
        </div>
    </main>
  );
}
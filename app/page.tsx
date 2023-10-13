import { Button } from '@/components/ui/button';
import VideoPlayer from '@/components/Videoplayer';
import About from '@/components/About';
import Course from'@/components/Course';

export default function Home() {
  return (
    <main>
      <section>
        <div>
          <VideoPlayer />
        </div>
        <div>
          <About />
        </div>
        <div>
        <h1 className="text-5xl font-bold mb-4 text-white text-center">
          What will you learn?
        </h1>
          <Course />
        </div>
        
        <div className='p-24'>
          <Button>Daftar</Button>
        </div>
      </section>
    </main>
  );
}
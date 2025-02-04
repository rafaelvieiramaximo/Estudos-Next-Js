// app/page.tsx
import Carousel from './Carousel/Carousel';

export default function Home() {
  return (
    <div>
      <header className="bg-blue-600 text-white text-center p-4 text-xl font-bold">
        Meu Site com Carrossel
      </header>
      <main className="p-4">
        <Carousel />
      </main>
    </div>
  );
}

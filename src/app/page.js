import Image from "next/image";
import Categorey from '/components/categorey';

export default function Home() {
  return (
    <>
      
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
          <Categorey />
      </main>
    </>
  );
}

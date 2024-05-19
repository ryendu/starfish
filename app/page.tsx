import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <h1>Starfish are a type of fish.</h1>

        {/* image gallery */}
        <div className="flex flex-col items-center justify-between w-full">
          <div className="flex flex-col items-center justify-between w-full">
            <Image
              src="/starfish-1.jpg"
              alt="Starfish 1"
              width={160}
              height={120}
            />
            <p>Starfish 1</p>
          </div>
          <div className="flex flex-col items-center justify-between w-full">
            <Image
              src="/starfish-2.jpg"
              alt="Starfish 2"
              width={160}
              height={120}
            />
            <p>Starfish 2</p>
          </div>
          <div className="flex flex-col items-center justify-between w-full">
            <Image
              src="/starfish-3.jpg"
              alt="Starfish 3"
              width={160}
              height={120}
            />
            <p>Starfish 3</p>
          </div>
        </div>
      </div>
    </main>
  );
}

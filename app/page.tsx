import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <h1>Starfish are a type of fish too!!!</h1>

        {/* image gallery */}
        <div className="flex flex-col items-center justify-between w-full">
          <div className="flex flex-col items-center justify-between w-full">
            <Image
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Fromia_monilis_%28Seastar%29.jpg/440px-Fromia_monilis_%28Seastar%29.jpg"
              alt="Starfish 1"
              width={160}
              height={120}
            />
            <p>Starfish 1</p>
          </div>
          <div className="flex flex-col items-center justify-between w-full">
            <Image
              src="https://www.thoughtco.com/thmb/LpGwtdlbtCRWp1rGfnA6jpWSVxY=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/close-up-of-orange-starfish-on-sand-489010151-59847f7f22fa3a0010518acc.jpg"
              alt="Starfish 2"
              width={160}
              height={120}
            />
            <p>Starfish 2</p>
          </div>
          <div className="flex flex-col items-center justify-between w-full">
            <Image
              src="https://www.thoughtco.com/thmb/HaRuKvPSwaHW6D-pC6GhBEeuWCs=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/starfish-and-purple-sea-urchin-510809471-571e3f555f9b58857dfcf727.jpg"
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

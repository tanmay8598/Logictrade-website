"use client";
import Image from "next/image";

export default function OurMediaPresence() {
  return (
    <section className="bg-black text-white py-12">
      <div className="container mx-auto px-6 lg:px-20">
        <h2 className="text-2xl lg:text-4xl font-bold text-center mb-10">
          Our Media Presence
        </h2>
        <div className="flex flex-col md:flex-row items-center justify-evenly">
          <div className="w-full lg:w-auto flex flex-col flex-wrap justify-around lg:justify-end gap-6">
            <div className="flex flex-row">
              <Image src="/round.png" alt="Live Mint" width={120} height={50} />
              <Image
                src="/round.png"
                alt="Hindustan Times"
                width={120}
                height={50}
              />
              <Image
                src="/round.png"
                alt="Business Standard"
                width={120}
                height={50}
              />
            </div>
            <div className="flex flex-row">
              <Image src="/round.png" alt="Live Mint" width={120} height={50} />
              <Image
                src="/round.png"
                alt="Hindustan Times"
                width={120}
                height={50}
              />
              <Image
                src="/round.png"
                alt="Business Standard"
                width={120}
                height={50}
              />
            </div>
          </div>

          <div className="w-full lg:w-1/3 flex justify-center">
            <Image
              src="/map.png"
              alt="Media logos"
              width={300}
              height={300}
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

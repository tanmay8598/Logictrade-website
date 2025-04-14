"use client";
import Image from "next/image";

export default function OurMediaPresence() {
  return (
    <section className="bg-black text-white py-12">
      <div className="container mx-auto px-6 lg:px-20">
        <h2 className="text-2xl lg:text-4xl font-bold text-center mb-10">
          Press Features
        </h2>
        <div className="flex flex-col md:flex-row items-center justify-evenly">
          <div className="w-full lg:w-auto flex flex-col flex-wrap justify-around lg:justify-end gap-6">
            <div className="flex flex-row justify-center lg:gap-10 gap-4  ">
              <Image
                src="/cnn.png"
                alt="Live Mint"
                sizes="(max-width: 768px) 80px, (max-width: 1024px) 100px, 120px"
                className="w-20 sm:w-20 md:w-28 lg:w-32 h-auto rounded-xl"
                width={0}
                height={0}
              />
              <Image
                src="/dainikJagran.png"
                alt="Hindustan Times"
                width={0}
                height={0}
                sizes="(max-width: 768px) 80px, (max-width: 1024px) 100px, 120px"
                className="w-20 sm:w-20 md:w-28 lg:w-32 h-auto rounded-xl"
              />
              <Image
                src="/bbc.jpeg"
                alt="Business Standard"
                width={0}
                height={0}
                sizes="(max-width: 768px) 80px, (max-width: 1024px) 100px, 120px"
                className="w-20 sm:w-20 md:w-28 lg:w-32 h-auto rounded-xl"
              />
            </div>
            <div className="flex flex-row justify-center gap-4 lg:gap-10">
              <Image
                src="/dainikBhasker.png"
                alt="Live Mint"
                width={0}
                height={0}
                sizes="(max-width: 768px) 80px, (max-width: 1024px) 100px, 120px"
                className="w-20 sm:w-20 md:w-28 lg:w-32 h-auto rounded-xl"
              />
              <Image
                src="/theTribune.png"
                alt="Hindustan Times"
                width={0}
                height={0}
                sizes="(max-width: 768px) 80px, (max-width: 1024px) 100px, 120px"
                className="w-20 sm:w-20 md:w-28 lg:w-32 h-auto rounded-xl"
              />
              <Image
                src="/toi.png"
                alt="Business Standard"
                width={0}
                height={0}
                sizes="(max-width: 768px) 80px, (max-width: 1024px) 100px, 120px"
                className="w-20 sm:w-20 md:w-28 lg:w-32 h-auto rounded-xl"
              />
            </div>
          </div>

          <div className="w-full lg:w-1/3 flex mt-10 lg:mt-0 justify-center">
            <Image
              src="/map.png"
              alt="Media logos"
              width={300}
              height={300}
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

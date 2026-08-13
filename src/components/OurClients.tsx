import React from 'react';

type Client = {
  id: number;
  name: string;
  logo: string;
  url: string;
};

const clients: Client[] = [
  {
    id: 1,
    name: "Godrej Interio",
    logo: "https://placehold.co/180x70/111111/FFFFFF?text=GODREJ+INTERIO",
    url: "#",
  },
  {
    id: 2,
    name: "D'Decor",
    logo: "https://placehold.co/180x70/111111/FFFFFF?text=D'DECOR",
    url: "#",
  },
  {
    id: 3,
    name: "Sleepwell",
    logo: "https://placehold.co/180x70/111111/FFFFFF?text=SLEEPWELL",
    url: "#",
  },
  {
    id: 4,
    name: "Pepperfry",
    logo: "https://placehold.co/180x70/111111/FFFFFF?text=PEPPERFRY",
    url: "#",
  },
  {
    id: 5,
    name: "Urban Ladder",
    logo: "https://placehold.co/180x70/111111/FFFFFF?text=URBAN+LADDER",
    url: "#",
  },
  {
    id: 6,
    name: "Stanley Lifestyles",
    logo: "https://placehold.co/180x70/111111/FFFFFF?text=STANLEY",
    url: "#",
  },
  {
    id: 7,
    name: "Royal Enfield",
    logo: "https://placehold.co/180x70/111111/FFFFFF?text=ROYAL+ENFIELD",
    url: "#",
  },
  {
    id: 8,
    name: "Tata Auto Interiors",
    logo: "https://placehold.co/180x70/111111/FFFFFF?text=TATA+MOTORS",
    url: "#",
  },
];

export default function OurClients() {
  const marquee = [...clients, ...clients];

  return (
    <section className=" bg-[#EDE8E3]/60">
      <div className="mx-auto  ">
        <div className="">
          <div className="flex flex-col lg:flex-row items-center">

            {/* Left Header Box */}
            <div className="w-full lg:w-[300px] px-8 py-8 sm:px-10 sm:py-10 border-b lg:border-b-0 lg:border-r border-gray-100 shrink-0">
              <span className="text-xs font-button uppercase tracking-widest text-[#C67C4E] font-bold block mb-2">
                Trusted Partners
              </span>
              <h2 className="text-3xl sm:text-[42px] font-bold leading-tight text-[#111]">
                Our Clients
              </h2>
              {/* <p className="mt-3 text-[#666] leading-relaxed text-base sm:text-lg font-sans">
                Trusted by leading businesses & OEM manufacturers across India.
              </p> */}
            </div>

            {/* Right Infinite Marquee Container */}
            <div className="relative flex-1 overflow-hidden py-8 w-full">
              {/* Fade Gradients */}
              {/* <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-24 bg-gradient-to-r from-white to-transparent z-20" />
              <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-24 bg-gradient-to-l from-white to-transparent z-20" /> */}

              <div className="group">
                <div className="flex w-max animate-client-marquee group-hover:[animation-play-state:paused]">
                  {marquee.map((client, index) => (
                    <a
                      key={`${client.id}-${index}`}
                      href={client.url}
                      onClick={(e) => {
                        if (client.url === '#') e.preventDefault();
                      }}
                      className="mx-3 sm:mx-4 shrink-0 transition-transform duration-300 hover:scale-105"
                      title={client.name}
                    >
                      <div className=" transition-all duration-300 flex items-center justify-center p-4">
                        <img
                          src={client.logo}
                          alt={client.name}
                          width={140}
                          height={65}
                          className="object-contain rounded-lg max-h-[65px] transition-opacity duration-300 hover:opacity-90 hover:shadow-[0_12px_28px_rgba(0,0,0,0.12)]"
                        />
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

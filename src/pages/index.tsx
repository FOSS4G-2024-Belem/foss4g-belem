import Head from "next/head";
import HomepageBanner from "@/images/homepage-one-banner.jpg";
import AboutFoss4g from "@/images/about-foss4g.png";
import Objects from "@/images/objects.png";
import ArrowBrown from "@/images/arrow-brown.png";
import Countdown from "react-countdown";
import Image from "next/image";
import { DiJavascript } from "react-icons/di";

export default function IndexPage() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>

      {/* Banner section */}

      <section
        className="relative flex items-center justify-center sm:-mt-48 bg-center bg-cover bg-no-repeat py-[100px] sm:py-[250px] [clip-path:polygon(0_0,100%_1%,100%_100%,0_91%)]"
        style={{
          backgroundImage: `url(${HomepageBanner.src})`,
        }}
      >
        <div className="font-ubuntu text-white grid grid-cols-1 min-h-48 max-w-6xl w-full p-4 sm:p-4">
          <Countdown
            date="2024-12-02"
            renderer={({ days, hours, minutes, seconds }) => (
              <div className="grid grid-cols-4 max-w-72 sm:max-w-96 -ml-2 sm:ml-0">
                <div className="p-1 sm:p-2">
                  <div className="flex items-center justify-center font-bold aspect-square text-2xl sm:text-4xl sm:p-3 shadow-xl rounded-full border-2 border-[#7c7491]">
                    {days}
                  </div>
                  <div className="text-center">days</div>
                </div>
                <div className="p-1 sm:p-2">
                  <div className="flex items-center justify-center font-bold aspect-square text-2xl sm:text-4xl sm:p-3 shadow-xl rounded-full border-2 border-[#7c7491]">
                    {hours}
                  </div>
                  <div className="text-center">hours</div>
                </div>
                <div className="p-1 sm:p-2">
                  <div className="flex items-center justify-center font-bold aspect-square text-2xl sm:text-4xl sm:p-3 shadow-xl rounded-full border-2 border-[#7c7491]">
                    {minutes}
                  </div>
                  <div className="text-center">minutes</div>
                </div>
                <div className="p-1 sm:p-2">
                  <div className="flex items-center justify-center font-bold aspect-square text-2xl sm:text-4xl sm:p-3 shadow-xl rounded-full border-2 border-[#7c7491]">
                    {seconds}
                  </div>
                  <div className="text-center">seconds</div>
                </div>
              </div>
            )}
          />
          <div className="font-ubuntu">
            <div
              className="text-[#ff6600] text-[3rem] sm:text-[5.5rem] [font-weight:500] -mb-2 sm:-mb-4"
              style={{ textShadow: "3.5px 6.062px 0px rgba(0, 0, 0, 0.1)" }}
            >
              FOSS4G 2024
            </div>
            <div
              className="text-white italic text-[2.3rem] sm:text-[4.625rem] [font-weight:400]"
              style={{ textShadow: "3.5px 6.062px 0px rgba(0, 0, 0, 0.1)" }}
            >
              BELÉM, BRASIL
            </div>

            <div
              className="text-white text-xl my-4"
              style={{ textShadow: "3.5px 6.062px 0px rgba(0, 0, 0, 0.1)" }}
            >
              02-08 December 2024
            </div>

            <div className="text-white [font-size:1.3rem] leading-7 italic [max-width:600px]">
              &quot;In the heart of the Amazon, Belém, geospatial technology
              transcends borders, revealing a map of unlimited possibilities...&quot;
            </div>
          </div>
        </div>
        <div
          className="absolute bg-no-repeat opacity-50 top-0 left-0 right-0 bottom-0 -z-10"
          style={{
            backgroundImage: `url(${Objects.src})`,
          }}
        ></div>
        <div
          className="absolute opacity-60 top-0 left-0 right-0 bottom-0 -z-10"
          style={{
            background: `linear-gradient(-45deg, #1e5799 0%, #1d1546 0%, #1a0b25 100%, #207cca 100%), url(${Objects.src})`,
          }}
        ></div>
      </section>

      {/* About FOSS4G */}

      <section className="relative flex items-center justify-center">
        <div className="flex flex-col sm:flex-row space-y-10 sm:space-y-0 sm:space-x-20 max-w-6xl w-full p-4">
          <div className="hidden sm:block">
            <Image
              className="w-auto h-[240px]"
              src={AboutFoss4g}
              alt="About FOSS4G"
            />
          </div>
          <div className="sm:max-w-md">
            <div className="font-ubuntu text-[2.5rem] [font-weight:500]">
              About FOSS4G
            </div>
            <div className="w-[60px] h-[3px] bg-[#ff6600] mt-1"></div>
            <div className="mt-8">
              Join the fascinating world of the FOSS4G international conference,
              where innovation and collaboration converge to drive the future of
              geoinformation. At this unmissable event, leaders and enthusiasts
              of geospatial technology come together to explore the latest
              trends in open source software.
            </div>
            <div className="mt-8">
              Discover how the powerful combination of open source freedom and
              geoinformatics is transforming the way we visualize, analyze, and
              understand our world. Don&apos;t miss the opportunity to be part of
              this cartographic revolution!
            </div>
            <div className="inline-block text-white px-10 py-3 mt-8 rounded button bg-[#ff6600]">
              LEARN MORE
            </div>
          </div>
          <div>
            <Image
              className="h-[45px] w-auto"
              src={ArrowBrown}
              alt="Brown Arrow"
            />
            <iframe
              className="aspect-video mt-8 max-w-[480px]"
              width="100%"
              height="255"
              src="https://www.youtube.com/embed/VTou906-Kj8?si=0bJSKN8ZlqAXg_1i"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
          </div>
        </div>
      </section>
      <section className="relative flex items-center justify-center">
        <div className="grid grid-cols-1 max-w-6xl w-full p-4">NEW SECTION</div>
      </section>
    </>
  );
}

import type { NextPage } from "next";
import CustomProse from "../components/CustomProse/CustomProse";
import Footer from "../components/Footer/Footer";
import { useCallback, useEffect, useState } from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import { backgroundScrollAnimations } from "../animations/scroll";
import { useFeatureContext } from "../context/featureContext";
import RenderMDXContent from "../content/content";
import NavBar from "../components/NavBar/NavBar";
import Goals from "../components/Goals/Goals";
import Metrics from "../components/Metrics/Metrics";
import ListBigDots from "../components/ListBigDots/ListBigDots";
import HowItWorksStep from "../components/HowItWorksStep/HowItWorksStep";
import PlanCard from "../components/PlanCard/PlanCard";
import ContactSection from "../components/ContactSection";
import { useWindowContext } from "../context/windowContext";

const DynamicSaturn = dynamic(
  () => import("../threejs/components/Saturn/Saturn"),
  {
    suspense: false,
    ssr: false,
  }
);

const Home: NextPage = () => {
  const features = useFeatureContext();
  useEffect(() => {
    const cleanup2 = backgroundScrollAnimations(`[data-gsap="bg"]`);
    return () => {
      cleanup2();
    };
  }, []);
  const [playTerminal, setPlayTerminal] = useState<boolean>(false);

  const playerScrollCallback = useCallback(
    (entry: IntersectionObserverEntry) => {
      if (entry.isIntersecting) {
        setPlayTerminal(true);
      } else {
        setPlayTerminal(false);
      }
    },
    []
  );

  // set big and small p sizes
  const bigP =
    "[&_.big-p]:text-base [&_.big-p]:text-base [&_.big-p]:md:text-lg [&_.big-p]:lg:text-xl [&_.big-p]:font-black [&_.big-p]:leading-5 [&_.big-p]:lg:leading-6 [&_.big-p]:lg:mb-2  [&_.big-p]:xl:my-3";
  const smallP =
    "[&_.small-p]:!my-0 [&_.small-p]:!text-xs [&_.small-p]:!leading-3 [&_.small-p]:md:!text-xs [&_.small-p]:lg:!text-base [&_.small-p]:my-0";

  // define player height and width rows
  const window = useWindowContext();
  const [playerCols, setplayerCols] = useState<string>();
  const [playerRows, setplayerRows] = useState<string>();
  const widthToCols = 5.4;
  const heightToRows = 11.93333333333;

  useEffect(() => {
    const playerElement = document.getElementById("player");
    if (playerElement) {
      setplayerCols((playerElement.clientWidth / widthToCols).toFixed(0));
      setplayerRows((playerElement.clientHeight / heightToRows).toFixed(0));
    }
  }, [window, setplayerCols, setplayerRows]);

  return (
    <>
      <Head>
        <title>Filecoin Saturn | The Web3 CDN</title>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="theme-color" content="#ffffff" />
        <meta
          name="description"
          content="Filecoin Saturn is revolutionizing Web3 content delivery"
        />
      </Head>
      <div className="mx-auto w-full overflow-hidden relative">
        <div
          data-gsap="bg"
          className="fixed -z-50 inset-x-0 -top-1 h-[150%] bg-sat-blue-4 inset-0 "
        ></div>
        <NavBar
          languageSwitcher={false}
          backdropBlur={features.backdropBlur}
          contentId="general.navbar"
        />
        <div id="start" className="w-full h-0"></div>
        <div className="w-full mx-auto relative">
          <div className="mx-auto max-w-xl xs:px-10 md:max-w-4xl lg:max-w-[70rem] sm:mx-auto px-6 md:px-12 mt-8 sm:mt-0 md:pb-12 h-full flex flex-col justify-end ">
            <div className="max-h-[16.5rem] h-[90vh] min-h-[14rem] md:h-[90vh] md:min-h-[10rem] md:max-h-[20rem] lg:h-[55vh] lg:min-h-[5rem] lg:max-h-[14rem] "></div>
            <div
              data-gsap="animate-children"
              className="font- max-w-sm xs:max-w-md sm:max-w-md md:max-w-4xl lg:max-w-7xl  mr-auto relative"
            >
              <h1 className="text-white font-inter text-5xl lg:text-6xl font-black mt-4 mb-8">
                Filecoin Saturn is revolutionizing Web3 content delivery
              </h1>
              <p className="text-slate-400 text-xl lg:text-2xl">
                Speed up your decentralized applications on IPFS and Filecoin
                with Filecoin Saturn.
              </p>
              <div className="absolute -inset-x-[110%] -inset-y-[60%] -z-10 opacity-50 bg-gradient-radial from-black via-transparent to-transparent bg-cover"></div>
            </div>
            <Metrics contentId="index.metrics.metrics" />
            <div
              data-gsap="animate-children"
              className="font- max-w-sm xs:max-w-md sm:max-w-md md:max-w-4xl lg:max-w-7xl  mr-auto relative"
            >
              <p className="text-slate-400 text-lg">
              Thank you to everyone who has participated as a node provider in the Saturn network. Beginning June 1, 2024, we are transitioning our focus as a team to enhance fast storage and retrievals for Filecoin. Please connect with us on <a href="https://filecoinproject.slack.com/archives/C06SFMDMUAU" className="hover:underline font-inter font-semibold">Filecoin Slack</a> if you have any questions about this exciting new direction.
              </p>
            </div>
          </div>
          <div
            className={` absolute -z-20 inset-0 bottom-[30%] md:bottom-[25%] lg:bottom-[25%]`}
          >
            <Suspense fallback={null}>
              <DynamicSaturn />
            </Suspense>
          </div>
          <div className="animate-fadeFast absolute opacity-30 -z-30 inset-x-0 bottom-0 rotate-6 -translate-y-1/2 sm:-translate-y-1/4 -translate-x-1/4 md:-translate-y-1/2 lg:-translate-x-1/3 xl:-translate-y-0">
            <img src="hero-background.png" className="w-full" />
          </div>
        </div>

        <div id="what-is-saturn" className="mt-[10rem]"></div>
        <div className="px-6 xs:px-10 md:px-12 w-full max-w-xl md:max-w-4xl lg:max-w-[70rem] mx-auto">
          <div
            data-gsap="animate-children"
            className="grid grid-cols-[repeat(auto-fill,minmax(400px,1fr))] gap-10 items-center justify-center my-8 "
          >
            <img
              className=""
              src="/saturn_black_white.svg"
              alt="saturn_black_white"
            />
            <div className="min-w-[400px] text-left">
              <h1 className="text-white font-inter text-5xl lg:text-6xl font-black mt-4 mb-8">
                What is Saturn
              </h1>
              <div className="text-lg text-slate-400">
                <p className="mb-4">
                  Filecoin Saturn is the premier native Web3 CDN, focusing on
                  the rapid acceleration of content-addressed data on IPFS and
                  Filecoin. Thanks to Saturn, websites and decentralized
                  applications can efficiently serve billions of users. A
                  standout feature of this accelerated data is its
                  verifiability, ensuring heightened security for users.
                </p>
                <p className="mb-4">
                  The speed and efficiency of Saturn is attributed to its dense,
                  expansive network of trustless and permissionless nodes. This
                  density, combined with the permissionless nature of the
                  network, ensures users are always in proximity to a node,
                  resulting in lightning-fast data retrievals and minimal
                  latency. Driven by crypto-incentives, these nodes consistently
                  deliver traffic with optimal performance. Ultimately, dApps
                  receive content more swiftly at a lowered cost, while node
                  operators are rewarded in cryptocurrency.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div id="vision" className="scroll-mt-24 mt-[10rem]"></div>
        <div className="w-full relative">
          <div className="px-6 xs:px-10 md:px-12 w-full max-w-xl md:max-w-4xl lg:max-w-[70rem] mx-auto">
            <div
              data-gsap="animate-children"
              className="text-left w-full lg:my-12"
            >
              <h1 className="text-center text-white font-inter text-5xl lg:text-6xl font-black mt-4 mb-8">
                Vision
              </h1>
            </div>
            <div className="px-2 w-full lg:px-0">
              <Goals
                backdropBlur={features.backdropBlur}
                contentId="index.our-vision.content.content"
              />
            </div>
            <div className="absolute -z-40 mix-blend-lighten w-full max-w-[15rem] md:max-w-6xl -translate-x-1/2 -translate-y-3/4 xs:translate-x-[10%] rotate-0 ">
              <img
                src="green-planet.webp"
                className="w-full min-h-[35rem] min-w-[35rem] xs:min-w-[40rem] xs:min-h-[40rem] max-h-[100rem]"
              />
            </div>
          </div>
        </div>

        <div id="how-it-works" className="mt-[10rem]"></div>
        <div className="px-6 xs:px-10 md:px-12 w-full max-w-xl md:max-w-4xl lg:max-w-[70rem] mx-auto">
          <h1 className="text-center text-white font-inter text-5xl lg:text-6xl font-black mt-4 mb-6">
            Accelerate your content-addressable data with the Saturn Web3 CDN
          </h1>
          <p className="text-center text-slate-400 text-xl lg:text-2xl mb-20">
            Speed up your decentralized applications on IPFS and Filecoin with
            Filecoin Saturn. The next generation Web3 CDN.
          </p>
          <div className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-10 justify-center">
            <HowItWorksStep
              title="Create an account"
              subtitle="Easy to get started. Try out today without any cost."
              steps={[
                "1 TB free balance per month",
                "Flexible pricing as you grow",
                "Credit Card payments supported",
              ]}
            />
            <HowItWorksStep
              title="Integrate Saturn"
              subtitle="A step-by-step guide will assist you with the integration process."
              steps={[
                "Create Integration",
                "Install client",
                "Test your integration",
              ]}
            />
            <HowItWorksStep
              title="Accelerate your content"
              subtitle="Ready to speed up your content-addressable data retrievals."
              steps={["Performant", "Cost-effective", "Verifiable"]}
            />
          </div>
        </div>

        <div id="pricing" className="scroll-mt-24 mt-[10rem]"></div>
        <div className="px-6 xs:px-10 md:px-12 w-full max-w-xl md:max-w-4xl lg:max-w-[70rem] mx-auto">
          <h1 className="text-center text-white font-inter text-5xl lg:text-6xl font-black mt-4 mb-8">
            Simple, transparent pricing
          </h1>
          <p className="text-center text-slate-400 text-xl lg:text-2xl mb-20">
            Our pricing options are designed to suit your evolving needs,
            offering you complete flexibility to start with minimal commitment
            and providing predictable bundles as your business expands.
          </p>
          <div className="flex flex-wrap gap-10 justify-center">
            <PlanCard
              planName="Flexible plan"
              bandwidthAmount="1TB"
              price="Free"
              overagePrice="Excess at $0.01/GB"
            />
            <PlanCard
              planName="Business plan"
              bandwidthAmount="25TB"
              price="$200/month"
              overagePrice="Excess at $0.01/GB"
            />
            <PlanCard
              planName="Enterprise plan"
              bandwidthAmount="25TB+"
              price="Special Pricing"
            />
          </div>
        </div>

        <div id="roadmap" className="scroll-mt-24 mt-[10rem]"></div>
        <div className="px-6 xs:px-10 md:px-12 w-full max-w-xl md:max-w-4xl lg:max-w-[70rem] mx-auto">
          <div className="flex flex-col items-center">
            <h1 className="text-center text-white font-inter text-5xl lg:text-6xl font-black mt-4 mb-12">
              Roadmap
            </h1>
            <div>
              <ListBigDots backdropBlur={features.backdropBlur}>
                <div className="mt-1">
                  <h5 className="text-white text-4xl font-bold">Dec 2022</h5>
                  <p className="text-slate-400 text-lg">
                    Launch publicly; anyone can run a Saturn L1 node.
                  </p>
                </div>
                <div className="mt-1">
                  <h5 className="text-white text-4xl font-bold">Mar 2023</h5>
                  <p className="text-slate-400 text-lg">
                    Scale the L1 network. Achieve sub-second TTFB for IPFS
                    content globally.
                  </p>
                </div>
                <div className="mt-1">
                  <h5 className="text-white text-4xl font-bold">Apr 2023</h5>
                  <p className="text-slate-400 text-lg">
                    Open beta test for Saturn customers.
                  </p>
                </div>
                <div className="mt-1">
                  <h5 className="text-white text-4xl font-bold">May 2023</h5>
                  <p className="text-slate-400 text-lg">
                    Saturn node operators receive payouts via FVM smart
                    contract.
                  </p>
                </div>
                <div className="mt-1">
                  <h5 className="text-white text-4xl font-bold">Jul 2023</h5>
                  <p className="text-slate-400 text-lg">
                    Saturn L1 nodes cache miss directly to Filecoin Storage
                    Providers and IPFS.
                  </p>
                </div>
                <div className="mt-1">
                  <h5 className="text-white text-4xl font-bold">Aug 2023</h5>
                  <p className="text-slate-400 text-lg">
                    Launch the{" "}
                    <a href="https://explorer.saturn.tech/">Saturn Explorer</a>,
                    a geospatial visualization of the Saturn network.
                  </p>
                </div>
                <div className="mt-1">
                  <h5 className="text-white text-4xl font-bold">Nov 2023</h5>
                  <p className="text-slate-400 text-lg">
                    Launch the Saturn Customer Portal for customers to integrate
                    and accelerate their content with Saturn.
                  </p>
                </div>
                <div className="mt-1">
                  <h5 className="text-white text-4xl font-bold">Dec 2023</h5>
                  <p className="text-slate-400 text-lg">
                    Private Beta for Websites. Interested? Sign up&nbsp;
                    <a href="https://tally.so/r/mRo7xp">here</a>!
                  </p>
                </div>
              </ListBigDots>
              <CustomProse
                overrides={`my-2 opacity-50 ml-8 md:ml-12 prose-p:!my-0 prose-p:!text-xs prose-p:!leading-3 prose-p:md:!text-xs prose-p:lg:!text-sm prose-p:my-0 prose-p:max-w-sm prose-p:md:max-w-4xl prose-p:lg:max-w-[70rem] max-w-sm md:max-w-4xl lg:max-w-[70rem]`}
                overridesParent="max-w-xl md:max-w-4xl lg:max-w-[70rem]"
              >
                <RenderMDXContent contentId="index.roadmap.footnote.default" />
              </CustomProse>
            </div>
          </div>
        </div>
        {/* 2023/01/25: saturn hiring currently on pause. hide 'Join Us' jobs section */}
        {/*
        <div id="joinus" className='w-full h-0'></div>
        <div data-io="joinus" className=''></div>
        <div className='-mt-12 md:-mt-48 px-6 xs:px-10 md:px-12 w-full max-w-xl md:max-w-4xl lg:max-w-[70rem] mx-auto'>
          <div data-gsap="animate-children" className='text-left w-full my-8 sm:flex sm:space-x-4 md:space-x-8 lg:space-x-24  '>
              <div className='grow shrink-0 lg:text-right sm:w-48 md:w-72 lg:w-full lg:max-w-sm '>
              <CustomProse overrides='prose-h1:my-3.5 prose-h1:sm:my-3 prose-h1:md:my-1'>
                  <RenderMDXContent contentId='index.join-us.intro.default' />
              </CustomProse>
              </div>
              <div>
              <CustomProse overrides='prose-p:my-6 prose-p:mt-3.5 prose-p:mb-[1.125rem] prose-p:sm:mr-1 prose-p:md:mr-0 prose-p:md:mb-[1.4375rem] prose-p:lg:mt-[1.375rem] prose-p:lg:mb-8' >
                  <RenderMDXContent contentId='index.join-us.description.default' />
              </CustomProse>
              <div className='flex -mx-1 flex-col space-y-3 md:space-y-[0.9375rem] lg:space-y-[1.1875rem]'>
                  <Modal3 backdropBlur={features.backdropBlur} contentId="index.join-us.jobs[0]" >
                    <RenderMDXContent contentId='index.join-us.jobs[0].default' />
                  </Modal3>
                  <Modal3 backdropBlur={features.backdropBlur} contentId="index.join-us.jobs[1]" >
                    <RenderMDXContent contentId='index.join-us.jobs[1].default' />
                  </Modal3>
                  <Modal3 backdropBlur={features.backdropBlur} contentId="index.join-us.jobs[2]" >
                    <RenderMDXContent contentId='index.join-us.jobs[2].default' />
                  </Modal3>
              </div>
              </div>
          </div>
        </div>
        */}

        <ContactSection features={features} />
        <Footer
          backdropBlur={features.backdropBlur}
          contentId="general.footer"
        />
      </div>
    </>
  );
};
export default Home;

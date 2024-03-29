import type { NextPage } from "next";
import CustomProse from "../components/CustomProse/CustomProse";
import Footer from "../components/Footer/Footer";
import { useCallback, useEffect, useState } from "react";
import Head from "next/head";
import { backgroundScrollAnimations } from "../animations/scroll";
import { useFeatureContext } from "../context/featureContext";
import RenderMDXContent from "../content/content";
import NavBar from "../components/NavBar/NavBar";
import Button16 from "../components/Button16/Button16";
import BackgroundWrapper from "../components/BackgroundWrapper/BackgroundWrapper";
import TotalEarnings from "../components/TotalEarnings/TotalEarnings";
import Button17 from "../components/Button17/Button17";
import AsciinemaPlayer from "../components/AsciinemaPlayer/AsciinemaPlayer";
import IntersectionObserverWrapper from "../components/IntersectionObserverWrapper/IntersectionObserverWrapper";
import ContactSection from "../components/ContactSection";
import { useWindowContext } from "../context/windowContext";

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
          content="Join the Saturn Network and start earning Filecoin!"
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

        <div id="setupyournode" className='mt-[10rem]'></div>
        <div className='w-full max-w-7xl mx-auto relative'>
          <div className='px-6 xs:px-10 md:px-12 w-full max-w-xl md:max-w-4xl lg:max-w-[70rem] mx-auto relative'>
            <img src="/saturn-node.webp" alt="" className='mix-blend-lighten hidden -z-40 md:block h-60 lg:h-[22rem] xl:h-[27rem] absolute top-0 right-0 translate-x-[40%] lg:translate-x-[45%] lg:-translate-y-[10%] xl:-translate-y-1/4 xl:translate-x-1/2' />
            <div data-gsap="animate-children" className='text-left w-full my-8  '>
              <div className=' lg:text-left underline-offset-2  '>
                <CustomProse overrides='prose-p:!text-slate-400 prose-h1:my-3.5 prose-p:mt-3.5 prose-h1:sm:my-0 prose-h1:lg:max-w-[60rem] prose-h5:md:my-0 lg:max-w-[60rem] prose-p:md:mb-4 prose-p:lg:mb-8  prose-p:sm:mt-1.5 prose-p:md:mt-3' overridesParent='max-w-[60rem]'>
                  <RenderMDXContent contentId='index.set-up-your-node.title.default' />
                  <RenderMDXContent contentId='index.set-up-your-node.subtitle.default' />
                </CustomProse>
                <div className={`my-8 md:my-14 lg:my-16 xl:my-16 -mx-3 xs:-mx-6 xs:px-8 md:-mx-8 px-3 sm:px-8 py-2 md:px-14 md:py-0 lg:px-[3.225rem] lg:-mx-[3.315rem] xl:-mx-20 xl:px-[3.315rem] rounded-2xl md:rounded-3xl ${features.backdropBlur ? ` supports-blur:bg-sat-grad-blue-green-1-10 supports-blur:backdrop-blur-md  bg-sat-grad-blue-green-1-10-fallback-2 ` : `bg-sat-grad-blue-green-1-10-fallback-2 `}`}>
                  <CustomProse overrides={`prose-p:!text-slate-400 max-w-xl md:max-w-4xl lg:max-w-[70rem] prose-h1:lg:my-5 prose-h3:lg:!mt-0 prose-h3:xl:!my-0 prose-h3:xl:!mb-5  prose-h3:px-2 prose-h3:sm:px-0 prose-h3:md:!mb-3 prose-h6:md:font-black prose-h6:md:leading-none prose-p:mt-0 prose-p:mb-6 prose-p:md:mb-5 prose-p:md:text-base prose-p:lg:mb-6 prose-p:xl:mb-8 py-6 pt-3 sm:pt-2 sm:pb-3`} overridesParent=' max-w-xl md:max-w-4xl lg:max-w-[70rem]'>
                    <div className='sm:hidden'>
                      <RenderMDXContent contentId='index.set-up-your-node.description.title.default' />
                    </div>
                    <div className='flex flex-col relative sm:flex-row-reverse sm:space-x-reverse sm:space-x-8 md:space-x-reverse md:space-x-14  sm:justify-between w-full'>
                      <IntersectionObserverWrapper
                        targetCallbacks={new Map([["player", playerScrollCallback]])}
                        threshold={[0,1]}
                        margin="0px 0px 0px 0px"
                      />
                      <div id='player' data-io="player" className='p-2 lg:max-w-h-[22rem]  md:p-4 bg-[#121314] rounded-2xl my-4 md:my-8 lg:my-12 md:rounded-3xl overflow-hidden h-80 sm:h-auto w-full sm:w-1/2 [&_.control-bar]:hidden'>
                        <AsciinemaPlayer className='w-full lg:max-h-[22rem] h-full' src="/filecoin-saturn-setup-2.cast" cols={playerCols} rows={playerRows} idleTimeLimit={3} preload={true} fit="width" speed={1} autoPlay play={playTerminal} />
                      </div>
                      <div className='sm:w-1/2 sm:py-3 px-2 md:px-2 md:py-5 md:pb-7 md:pl-3 lg:py-12 xl:py-[3.225rem] xl:pl-5'>
                        <div className='hidden sm:block'>
                          <RenderMDXContent contentId='index.set-up-your-node.description.title.default' />
                        </div>
                        <RenderMDXContent contentId='index.set-up-your-node.description.text.default' />
                        <Button16 target='_blank' contentId='index.set-up-your-node.description.button.cta[0]' />
                        <CustomProse overrides='prose-p:!my-4 prose-p:!text-xs prose-p:md:!text-xs prose-p:lg:!text-sm'>
                          <RenderMDXContent contentId='index.set-up-your-node.description.join.default' />
                        </CustomProse>
                      </div>
                    </div>
                  </CustomProse>
                </div>
                <CustomProse  overrides={`${bigP} ${smallP} prose-strong:!text-slate-400 prose-ul:!text-slate-400
                 prose-p:my-2 prose-p:md:text-lg prose-p:lg:text-2xl prose-ul:!px-[0.8rem] prose-li:px-0 prose-li:leading-5 prose-li:lg:leading-6 prose-li:my-2 prose-strong:!leading-tight prose-li:lg:my-3 prose-strong:antialiased max-w-xl md:max-w-4xl lg:max-w-[70rem] prose-a:underline-offset-2 prose-strong:sm:text-xs prose-h3:md:!mb-4 `}
                overridesParent='max-w-xl md:max-w-4xl lg:max-w-[70rem]' >
                  <RenderMDXContent contentId='index.set-up-your-node.requirements.title.default' />
                  <div className='md:flex md:space-x-16 lg:space-x-16 md:justify-between md:items-start space-y-4 sm:space-y-4 md:space-y-0'>
                    <div className='grow'>
                      <RenderMDXContent contentId='index.set-up-your-node.requirements.description.title[0].default' />
                      <BackgroundWrapper color='10' backdropBlur={features.backdropBlur}>
                        <RenderMDXContent contentId='index.set-up-your-node.requirements.description[0].default' />
                      </BackgroundWrapper>
                    </div>
                    <div className='grow'>
                      <RenderMDXContent contentId='index.set-up-your-node.requirements.description.title[1].default' />
                      <BackgroundWrapper color='10' backdropBlur={features.backdropBlur}>
                        <RenderMDXContent contentId='index.set-up-your-node.requirements.description[1].default' />
                      </BackgroundWrapper>
                    </div>
                  </div>
                </CustomProse>
              </div>
            </div>
          </div>
          <div className='absolute max-w-6xl -z-50 rotate-0 opacity-60 -translate-x-1/2 sm:translate-x-0 sm:-translate-y-1/4 top-0 md:translate-y-0 lg:-translate-x-1/4 md:translate-x-0 xl:-translate-x-[5%] '>
            <img src="hero-background.png" className='w-full min-h-[45rem] min-w-[40rem] '/>
          </div>
          <div className='absolute -z-50 mix-blend-lighten top-1/2 translate-y-1/4 md:inset-0 rotate-180 sm:-translate-y-0 md:translate-y-[20%] opacity-30 '>
            <img src="hero-background.png" className='w-full min-w-[20rem] min-h-[40rem]'/>
          </div>
        </div>

        <div id="calculateyourearnings" className='mt-[10rem]'></div>
        <div className='w-full mx-auto relative max-w-xl md:max-w-4xl lg:max-w-[70rem] '>
          <div className='w-full absolute h-[115%] md:h-[130%] lg:h-[135%] -z-40 mb-8'>
          <div className='bg-filecoin-bg-logo bg-cover xs:bg-contain lg:bg-contain md:max-w-2xl lg:max-w-3xl xl:max-w-4-xl mx-auto bg-center opacity-30 md:bg-cover blur-md bg-no-repeat h-full -mt-16'></div>
          </div>
          <div className='bg-sat-grad-black-1 opacity-100 w-full h-[120%] -translate-y-[15%] -z-40 mb-4  xs:-translate-y-1/4 md:-translate-y-[15%] md:h-[140%] lg:h-[150%] absolute  '></div>
          <div className='px-4 xs:px-10 md:px-12 max-w-xl md:max-w-4xl lg:max-w-[70rem] mx-auto '>
            <div data-gsap="animate-children" className='text-left w-full px-2 sm:flex sm:space-x-4 md:space-x-8 lg:space-x-24'>
                <div className='grow shrink-0 lg:text-right sm:w-48 md:w-72 lg:w-[28rem] md:mt-1'>
                <CustomProse overrides='prose-h1:sm:leading-[2rem] prose-h1:sm:my-0 prose-h1:lg:my-0 prose-h1:xl:my-0 sm:first-line:[&_h1]:text-base sm:first-line:[&_h1]:font-inter sm:first-line:[&_h1]:font-black sm:first-line:[&_h1]:text-white sm:first-line:[&_h1]:my-2 md:first-line:[&_h1]:my-6 sm:first-line:[&_h1]:text-[1.625rem] md:first-line:[&_h1]:text-4xl lg:first-line:[&_h1]:text-6xl sm:first-line:[&_h1]:leading-tight' >
                    <RenderMDXContent contentId='index.calculateyourearnings.title.default' />
                </CustomProse>
                </div>
                <div className='sm:mt-1 md:mt-0'>
                  <CustomProse overrides='prose-p:!text-slate-400 prose-p:md:my-2 prose-p:lg:my-4'>
                    <RenderMDXContent contentId='index.calculateyourearnings.description.default' />
                  </CustomProse>
                </div>
            </div>
            <TotalEarnings contentId="index.calculateyourearnings" ></TotalEarnings>
            <div className='px-4'>
              <CustomProse overrides={`prose-p:!text-slate-400 prose-p:!my-0 prose-p:!text-xs prose-p:!leading-3 prose-p:md:!text-xs prose-p:lg:!text-sm prose-p:my-0 prose-p:max-w-sm prose-p:md:max-w-4xl prose-p:lg:max-w-[70rem] max-w-sm md:max-w-4xl lg:max-w-[70rem]`} overridesParent='max-w-xl md:max-w-4xl lg:max-w-[70rem]'>
                <RenderMDXContent contentId='index.calculateyourearnings.footnote.default' />
              </CustomProse>
            </div>
          </div>
        </div>
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

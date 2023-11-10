import { featureType } from '../context/featureContext'
import Button17 from "./Button17/Button17";

type Props = {
  features: featureType;
};

export default function ContactSection({ features }: Props) {
  return (
    <div id="contact" className="mt-[10rem]">
      <div className="w-full max-w-7xl mx-auto relative">
        <div className="px-6 xs:px-10 md:px-12 w-full max-w-xl md:max-w-4xl lg:max-w-[70rem] mx-auto">
          <div
            data-gsap="animate-children"
            className="w-full my-8 text-center"
          >
            <h1 className="text-white font-inter text-5xl lg:text-6xl font-black mt-4 mb-8">
              Get in touch!
            </h1>
            <div className="relative">
              <p className="text-slate-400 text-xl lg:text-2xl mb-6">
                Curious about Saturn? Whether you're a potential customer,
                node provider, or have any questions, we invite you to join
                our vibrant community and be a part of the conversation!
              </p>
              <div className="flex justify-center gap-10">
                <Button17
                  backdropBlur={features.backdropBlur}
                  contentId={"index.contact.join[0].button"}
                />
                <Button17
                  backdropBlur={features.backdropBlur}
                  contentId={"index.contact.join[1].button"}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

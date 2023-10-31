type Props = {
  title: string;
  subtitle: string;
  steps: string[];
  imgURL?: string;
  reversed?: boolean;
};

export default function HowDoesItWorkStep({
  title,
  subtitle,
  steps,
  reversed = false,
}: Props) {
  return (
    <div
      className={`flex flex-wrap justify-center my-20 ${
        reversed ? "flex-row-reverse" : ""
      }`}
    >
      <div className="flex flex-col basis-1/2 min-w-[300px] text-white">
        <h3 className="text-2xl mb-4">{title}</h3>
        <p className="text-slate-400 mb-4">{subtitle}</p>
        {steps.map((step) => (
          <div className="flex items-center" key={step}>
            <div
              data-gsap="animate"
              className="rounded-full p-2 relative mb-2 md:my-2 lg:my-4 w-fit will-change-transform bg-slate-100 mr-4"
            >
              <img
                alt="checkmark"
                src="check-icon.svg"
                className="bg-contain bg-no-repeat bg-center h-5 w-5 md:h-6 md:w-6 lg:h-8 lg:w-8"
              ></img>
            </div>
            <div>{step}</div>
          </div>
        ))}
      </div>
      <div className="flex justify-center items-center basis-1/2 text-white">
        TODO: placeholder img
      </div>
    </div>
  );
}

type Props = {
  title: string;
  subtitle: string;
  steps: string[];
  imgURL?: string;
  reversed?: boolean;
};

export default function HowItWorksStep({
  title,
  subtitle,
  steps,
  reversed = false,
}: Props) {
  return (
    <div className={`min-w-[250px]`}>
      <div className="flex flex-col text-white">
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
                className="bg-contain bg-no-repeat bg-center h-3 w-3 md:h-4 md:w-4 lg:h-6 lg:w-6"
              ></img>
            </div>
            <div>{step}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

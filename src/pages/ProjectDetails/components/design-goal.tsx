import ArrowCurve from '/public/assets/icons/Curve.svg';

export const DesignGoalSection = () => {
  return (
    <section className="grid gap-6 px-4">
      <h1 className="text-[40px]/[52px] w-9/12 -tracking-smaller font-medium gradient-text">
        Goal of the Design
      </h1>

      <div className="grid gap-4">
        <p className="text-sm/[150%] text-grey-9">
          The primary goal of the design for Maxwell EV Charging was to create a
          seamless, intuitive, and eco-conscious user experience that removes
          friction from the EV charging process while promoting sustainable
          mobility.
        </p>

        <div className="grid gap-2">
          <p className="text-sm/[150%] text-grey-9">
            Specifically, the design aimed to:
          </p>
          <div className="px-4 grid gap-2">
            <Goal
              keyword="Simplify discovery"
              text="of nearby charging stations through a real-time, map-based interface."
            />
            <Goal
              keyword="Streamline"
              text=" session management by offering live updates, estimated costs, and charging progress."
            />
            <Goal
              keyword="Promote trust and adoption"
              text=" by delivering a visually clean, responsive, and accessible interface."
            />
            <Goal
              keyword="Support scalability "
              text="through a modular design system that can evolve with more features and users over time."
            />
          </div>
        </div>

        <p className="text-sm/[150%] text-grey-9">
          In essence, the design was built to empower EV users with control,
          clarity, and confidence, making the transition to electric smoother
          and more rewarding.
        </p>
      </div>
    </section>
  );
};

const Goal = ({ keyword, text }: { keyword: string; text: string }) => {
  return (
    <div className="flex items-start gap-2">
      <img src={ArrowCurve} />
      <p className="text-sm/[150%] text-grey-9 font-normal">
        <span className="font-bold">{keyword} </span>
        {text}
      </p>
    </div>
  );
};

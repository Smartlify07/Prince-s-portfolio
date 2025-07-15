export const MessageSection = () => {
  return (
    <section className="p-4 bg-[#171721] rounded-2xl grid gap-4">
      <header className="gap-2">
        <h1 className="text-xl font-medium gradient-text -tracking-smaller">
          Send Me a Message
        </h1>
        <p className="text-sm/[150%] text-grey-9">
          Please fill out the form below with your query or message. I am
          committed to responding to all inquiries within 24 hours or sooner.
        </p>
      </header>
    </section>
  );
};

export const Form = () => {
  return (
    <form className="flex flex-col gap-4">
      <div className="pt-3 flex flex-col gap-2.5"></div>
    </form>
  );
};

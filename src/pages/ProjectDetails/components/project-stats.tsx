export const ProjectStats = () => {
  const stats = [
    {
      title: 'My Role',
      description: 'UI/UX Designer',
    },

    { title: 'Duration', description: '10 Weeks' },
    {
      title: 'Industry',
      description: 'HR Tech / Recruitment',
    },
    {
      title: 'Platform',
      description: 'Responsive Web App',
    },
  ];
  return (
    <section className="flex items-center justify-between gap-10 border-b border-b-grey-4/60 min-h-[131px] font-geist">
      {stats.map((stat) => (
        <ProjectStatCard {...stat} key={stat.title} />
      ))}
    </section>
  );
};

const ProjectStatCard = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <div className="flex flex-col gap-3">
      <h1 className="gradient-text text-2xl font-medium -tracking-smaller">
        {title}
      </h1>
      <p className="text-grey-9 text-base">{description}</p>
    </div>
  );
};

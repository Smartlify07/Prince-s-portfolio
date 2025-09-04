import Badge from '@/ui/badge';

const OverviewSection = () => {
  return (
    <section className="flex flex-col gap-10 pb-10 border-b border-b-grey-4/60">
      <Badge
        shadowSize="small"
        className="text-[#EDEDEB] text-base font-medium self-start"
      >
        Problem
      </Badge>

      <div className="flex flex-col gap-4">
        <h1 className="text-[40px]/[52px] font-medium linear-gradient-text-1 -tracking-smaller">
          Project Overview
        </h1>
        <p className="text-sm text-grey-9">
          Fashion designers often spend hours sketching ideas, sourcing
          materials, and visualizing outfits on models. This process can be
          slow, expensive, and sometimes stifling to creativity. Many designers
          struggle to quickly explore multiple ideas before committing to a
          concept.
          <br /> <br />
          AORA Fashion AI is a creative companion built to make designing easier
          and more inspiring. It helps fashion designers turn their ideas;
          whether sparked by trends, photos, or just a text prompt, into
          realistic visuals they can work with instantly. By letting users pick
          fabrics, colors, silhouettes, and models, the platform brings concepts
          to life in front, back, and side views. AORA is designed to feel like
          a partner in the creative process, helping designers experiment,
          iterate, and realize their visions faster.
        </p>
      </div>
    </section>
  );
};

export default OverviewSection;

import Badge from '@/ui/badge';
import CaretIcon from '@/../public/assets/icons/Curve.svg';
import DesignHighlightImage from '@/../public/assets/images/projects/design-highlight-2.png';

export const OutcomeSection = () => {
  return (
    <section className="flex flex-col gap-6">
      <div className="flex flex-col gap-11">
        <Badge
          shadowSize="small"
          className="text-[#EDEDEB] text-base font-medium self-start"
        >
          Solution
        </Badge>

        <div className="flex flex-col gap-6">
          <h1 className="text-[40px]/[52px] font-medium linear-gradient-text-1 -tracking-smaller">
            Design Outcome{' '}
          </h1>
          <p className="text-sm text-grey-9">
            AORA Fashion AI streamlines this journey. Designers can start with
            industry trends, upload inspiration photos, or simply type a prompt.
            The AI then generates realistic, multi-angle visuals while allowing
            designers to tweak fabrics, colors, silhouettes, and models. It
            gives them a fast, flexible way to explore ideas without losing the
            creative spark.
            <br /> <br />
            AORA Fashion AI is a creative companion built to make designing
            easier and more inspiring. It helps fashion designers turn their
            ideas; whether sparked by trends, photos, or just a text prompt,
            into realistic visuals they can work with instantly. By letting
            users pick fabrics, colors, silhouettes, and models, the platform
            brings concepts to life in front, back, and side views. AORA is
            designed to feel like a partner in the creative process, helping
            designers experiment, iterate, and realize their visions faster.
          </p>

          <div className="flex flex-col gap-2">
            <h1 className="gradient-text font-medium text-lg linear-gradient-text-1">
              Key Features:
            </h1>

            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2 text-sm text-grey-9">
                <img
                  src={CaretIcon}
                  alt="orange-chevron-down"
                  className="size-2"
                />
                <strong>Automatic conversation capture:</strong>
                <p>Records dentist-patient interactions in real time.</p>
              </div>
              <div className="flex items-center gap-2 text-sm text-grey-9">
                <img
                  src={CaretIcon}
                  alt="orange-chevron-down"
                  className="size-2"
                />
                <strong>Smart categorization:</strong>
                <p>
                  Notes are organized by treatment type like exams, fillings, or
                  extractions.
                </p>
              </div>
              <div className="flex items-center gap-2 text-sm text-grey-9">
                <img
                  src={CaretIcon}
                  alt="orange-chevron-down"
                  className="size-2"
                />
                <strong>Speaker recognition:</strong>
                <p>
                  Differentiates between dentist and patient; allows renaming
                  patients later.
                </p>
              </div>
              <div className="flex items-center gap-2 text-sm text-grey-9">
                <img
                  src={CaretIcon}
                  alt="orange-chevron-down"
                  className="size-2"
                />
                <strong>Summarized highlights:</strong>
                <p>
                  Key medical information is extracted and ready for EHR
                  transfer.
                </p>
              </div>
              <div className="flex items-center gap-2 text-sm text-grey-9">
                <img
                  src={CaretIcon}
                  alt="orange-chevron-down"
                  className="size-2"
                />
                <strong>Time-saving workflow:</strong>
                <p>
                  Reduces manual documentation, letting dentists focus on care.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <img
        src={DesignHighlightImage}
        alt="design-highlight-image"
        className="w-full h-[600px] object-cover rounded-2xl"
      />
      <img
        src={DesignHighlightImage}
        alt="design-highlight-image"
        className="w-full h-[600px] object-cover rounded-2xl"
      />
      <img
        src={DesignHighlightImage}
        alt="design-highlight-image"
        className="w-full h-[600px] object-cover rounded-2xl"
      />
      <img
        src={DesignHighlightImage}
        alt="design-highlight-image"
        className="w-full h-[600px] object-cover rounded-2xl"
      />
    </section>
  );
};

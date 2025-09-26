import Card from '@/ui/card';
import Image from '@/../public/assets/images/services/prince.webp';
import Forward from '@/../public/assets/icons/Forward.svg';
import Button from '@/ui/button';
import { CardStroke } from '@/components/card-stroke';
import { details } from '@/lib/constants';

export const CustomQuestion = () => {
  return (
    <section className=" md:px-0 md:w-4/12 w-full">
      <CardStroke className="rounded-4xl">
        <Card className="shadow-none rounded-4xl border-t-white-opaque bg-[#171721] border-l-white-opaque grid gap-6 border-b-white p-6">
          <div className="inline-block rounded-2xl p-[2px] w-[100px] card-gradient">
            <img
              src={Image}
              alt="Profile"
              className="rounded-2xl object-cover card-gradient h-[125px] w-[100px]"
            />
          </div>
          <div className="grid gap-9">
            <h3 className="font-geist text-xl font-medium -tracking-smaller gradient-text">
              Send {details.firstName} a quick message — whether it’s about
              pricing, timelines, or how we can bring your idea to life. Get
              clear answers fast.
            </h3>
            <Button
              variant="default"
              className="flex w-fit text-sm/[20px] text-grey-opaque items-center gap-2"
            >
              <img src={Forward} />
              Ask Your Question
            </Button>
          </div>
        </Card>
      </CardStroke>
    </section>
  );
};

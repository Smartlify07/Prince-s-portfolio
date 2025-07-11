import Card from '../../../ui/card';
import Image from '../../../../public/assets/images/services/ezekiel.png';
import Forward from '../../../../public/assets/icons/Forward.svg';
import Button from '../../../ui/button';

export const CustomQuestion = () => {
  return (
    <section className="px-4">
      <Card className="shadow-none border-t-white-opaque bg-[#171721] border-l-white-opaque grid gap-6 border-b-white p-6">
        <div className="rounded-2xl border-2 h-[125px] w-[100px] border-red-500">
          <img src={Image} className="rounded-2xl" />
        </div>
        <div className="grid gap-9">
          <h3 className="font-geist font-medium -tracking-smaller gradient-text">
            Send Ezekiel a quick message — whether it’s about pricing,
            timelines, or how we can bring your idea to life. Get clear answers
            fast.
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
    </section>
  );
};

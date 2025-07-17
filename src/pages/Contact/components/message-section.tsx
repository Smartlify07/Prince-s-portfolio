import Button from '@/ui/button';
import { Input } from '@/ui/input';
import CustomSelect from '@/ui/select';
import { TextArea } from '@/ui/textarea';
import { Plain } from '@solar-icons/react';

export const MessageSection = () => {
  return (
    <section className="p-4 bg-[#171721] rounded-2xl grid gap-4">
      <header className="grid gap-2">
        <h1 className="text-xl font-medium gradient-text -tracking-smaller">
          Send Me a Message
        </h1>
        <p className="text-sm/[150%] text-grey-9">
          Please fill out the form below with your query or message. I am
          committed to responding to all inquiries within 24 hours or sooner.
        </p>
      </header>
      <Form />
    </section>
  );
};

export const Form = () => {
  return (
    <form className="flex flex-col font-geist gap-4">
      <div className="pt-3 flex flex-col gap-2.5 border-t border-dashed border-t-grey-4/50">
        <FormInput type="text" name="name" placeholder="What is your name?" />
        <FormInput
          type="email"
          name="name"
          placeholder="Your email for contact"
        />
        <FormInput type="tel" name="phone" placeholder="Phone number" />
        <FormSelect placeholder="Select work" />
        <FormTextArea name="message" placeholder="Write your message here" />
        <SelectPlan />
        <div className="border-t border-dashed pt-6 border-[rgba(76,76,76,0.50)]">
          <Button variant="default" className="self-start">
            <Plain size={16} />
            Send Email
          </Button>
        </div>
      </div>
    </form>
  );
};

const FormInput = ({
  type,
  name,
  placeholder,
}: {
  type: string;
  name: string;
  placeholder: string;
}) => {
  return (
    <Input
      type={type}
      name={name}
      placeholder={placeholder}
      className="z-10 gradient-input text-[#636363] text-xs font-geist font-medium p-4 w-full"
    />
  );
};

const FormTextArea = ({
  name,
  placeholder,
}: {
  name: string;
  placeholder: string;
}) => {
  return (
    <TextArea
      rows={5}
      cols={5}
      name={name}
      placeholder={placeholder}
      className="z-10 gradient-input text-[#636363] text-xs font-geist font-medium p-4 min-h-[115px] w-full"
    />
  );
};

const SelectPlan = () => {
  return (
    <div className="grid gap-1">
      <div className="flex items-center gap-0.5">
        <p className="text-grey-9 text-sm/[150%] font-geist">
          Which plan are you interested in?
        </p>
        <p className="text-sm/[150%] text-grey-opaque font-medium">
          {' '}
          Learn more
        </p>
      </div>

      <div className="flex flex-wrap items-center gap-y-2 gap-x-4">
        <RadioInput selectedPlan={''} plan="Full Time UI/UX design" />
        <RadioInput selectedPlan={''} plan="Framer Design" />
        <RadioInput selectedPlan={''} plan="Freelance" />
      </div>
    </div>
  );
};

const RadioInput = ({
  selectedPlan,
  plan,
}: {
  selectedPlan: string;
  plan: string;
}) => {
  return (
    <label className="flex items-center cursor-pointer">
      <input
        type="radio"
        name="option"
        value={plan}
        checked={selectedPlan === plan}
        onChange={() => plan}
        className="hidden peer"
      />

      <div className={`flex items-center gap-1`}>
        <div
          className={`size-4 rounded-full border border-grey-9 flex items-center justify-center transition duration-200
    `}
        >
          {selectedPlan === plan && (
            <div className="w-3 h-3 rounded-full bg-grey-9" />
          )}
        </div>
        <span className="text-grey-9 text-sm/[150%] font-geist">{plan}</span>
      </div>
    </label>
  );
};

const FormSelect = ({ placeholder }: { placeholder: string }) => {
  const options = [
    {
      label: 'Design',
      value: 'design',
    },
  ];
  return (
    <CustomSelect
      label="Select project type"
      options={options}
      placeholder={placeholder}
      onChange={(event) => {
        console.log(event);
      }}
    />
  );
};

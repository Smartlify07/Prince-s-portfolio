import { useState } from 'react';
import Button from '@/ui/button';
import { Input } from '@/ui/input';
import CustomSelect from '@/ui/select';
import { TextArea } from '@/ui/textarea';
import { Plain } from '@solar-icons/react';
import { Link } from 'react-router';

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

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mblzvoek';

export const Form = () => {
  const [selectedPlan, setSelectedPlan] = useState('');
  const [selectedWork, setSelectedWork] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [status, setStatus] = useState<
    'idle' | 'loading' | 'success' | 'error'
  >('idle');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    const payload = {
      ...formData,
      selectedPlan,
      selectedWork,
    };

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', phone: '', message: '' });
        setSelectedPlan('');
        setSelectedWork('');
      } else {
        throw new Error('Failed to send');
      }
    } catch {
      setStatus('error');
    }
  };
  const isFormNotComplete = Object.values(formData).some(
    (value) => value === ''
  );

  return (
    <form className="flex flex-col font-geist gap-4" onSubmit={handleSubmit}>
      <div className="pt-3 flex flex-col gap-2.5 border-t border-dashed border-t-grey-4/50">
        <Input
          type="text"
          name="name"
          placeholder="What is your name?"
          value={formData.name}
          onChange={handleChange}
          className="z-10 gradient-input text-[#636363] text-xs font-geist font-medium p-4 w-full"
        />
        <Input
          type="email"
          name="email"
          placeholder="Your email for contact"
          value={formData.email}
          onChange={handleChange}
          className="z-10 gradient-input text-[#636363] text-xs font-geist font-medium p-4 w-full"
        />
        <Input
          type="tel"
          name="phone"
          placeholder="Phone number"
          value={formData.phone}
          onChange={handleChange}
          className="z-10 gradient-input text-[#636363] text-xs font-geist font-medium p-4 w-full"
        />

        <FormSelect
          placeholder="Select work"
          value={selectedWork}
          onChange={setSelectedWork}
        />

        <TextArea
          rows={5}
          cols={5}
          name="message"
          placeholder="Write your message here"
          value={formData.message}
          onChange={handleChange}
          className="z-10 gradient-input text-[#636363] text-xs font-geist font-medium p-4 min-h-[115px] w-full"
        />

        <SelectPlan selectedPlan={selectedPlan} onChange={setSelectedPlan} />

        <div className="border-t border-dashed pt-6 border-[rgba(76,76,76,0.50)]">
          <Button
            variant="default"
            className="self-start"
            type="submit"
            disabled={status === 'loading' || isFormNotComplete}
          >
            {status === 'loading' ? (
              <div className="w-4 h-4 border-[1px] border-white border-b-transparent rounded-full box-border inline-block animate-spin"></div>
            ) : (
              <>
                <Plain size={16} />
                Send Email
              </>
            )}
          </Button>
        </div>
      </div>
    </form>
  );
};

const SelectPlan = ({
  selectedPlan,
  onChange,
}: {
  selectedPlan: string;
  onChange: (plan: string) => void;
}) => {
  return (
    <div className="grid gap-1">
      <div className="flex items-center gap-0.5">
        <p className="text-grey-9 text-sm/[150%] font-geist">
          Which plan are you interested in?
        </p>
        <Link
          to={'/services'}
          className="text-sm/[150%] text-grey-opaque font-medium"
        >
          {' '}
          Learn more
        </Link>
      </div>

      <div className="flex flex-wrap items-center gap-y-2 gap-x-4">
        <RadioInput
          selectedPlan={selectedPlan}
          plan="Full Time UI/UX design"
          onChange={onChange}
        />
        <RadioInput
          selectedPlan={selectedPlan}
          plan="Website Design"
          onChange={onChange}
        />
        <RadioInput
          selectedPlan={selectedPlan}
          plan="Mobile App Design"
          onChange={onChange}
        />
      </div>
    </div>
  );
};

const RadioInput = ({
  selectedPlan,
  plan,
  onChange,
}: {
  selectedPlan: string;
  plan: string;
  onChange: (plan: string) => void;
}) => {
  return (
    <label className="radio-wrapper">
      <input
        type="radio"
        name="option"
        value={plan}
        checked={selectedPlan === plan}
        onChange={() => onChange(plan)}
        className="radio-input"
        style={{ display: 'none' }}
      />

      <div className="radio-outer">
        <div className="radio-gap">
          <div className="radio-inner"></div>
        </div>
      </div>

      <span className="text-grey-9 text-sm/[150%] font-geist">{plan}</span>
    </label>
  );
};

const FormSelect = ({
  placeholder,
  value,
  onChange,
}: {
  placeholder: string;
  value: string;
  onChange: (val: string) => void;
}) => {
  const options = [
    { label: 'Design', value: 'design' },
    { label: 'Development', value: 'development' },
    { label: 'Consulting', value: 'consulting' },
  ];

  return (
    <CustomSelect
      label="Select project type"
      options={options}
      placeholder={placeholder}
      value={value}
      onChange={(val) => onChange(val)}
    />
  );
};

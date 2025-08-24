const PriceBadge = () => {
  return (
    <div className="font-geist self-start inline-flex py-1.5 px-2 text-sm items-center gap-1 rounded-[10px] border border-[rgba(144,144,144,0.07)] bg-[rgba(144,144,144,0.2)]">
      <span className="text-[#909090]">From</span>
      <span className="text-[#EDEDEB] font-semibold leading-[20px] text-sm">
        $1,300
      </span>
    </div>
  );
};

export default PriceBadge;

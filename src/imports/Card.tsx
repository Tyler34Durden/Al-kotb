import svgPaths from "./svg-f4j95bjdc5";

function HomePage() {
  return <div className="absolute h-[8px] left-[152px] top-0 w-0" data-name="HomePage" />;
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[40px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <g id="Icon">
          <path d={svgPaths.pb3cc680} id="Vector" stroke="var(--stroke-0, #13499D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.33333" />
          <path d="M20 36.6667V20" id="Vector_2" stroke="var(--stroke-0, #13499D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.33333" />
          <path d={svgPaths.p1a5a0b80} id="Vector_3" stroke="var(--stroke-0, #13499D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.33333" />
          <path d="M12.5 7.1167L27.5 15.7" id="Vector_4" stroke="var(--stroke-0, #13499D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container() {
  return (
    <div className="absolute bg-[#f6f6f6] box-border content-stretch flex items-center justify-center left-[112px] p-px rounded-[2.68435e+07px] size-[80px] top-[40px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#13499d] border-solid inset-0 pointer-events-none rounded-[2.68435e+07px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]" />
      <Icon />
    </div>
  );
}

function HomePage1() {
  return (
    <div className="absolute h-[31.988px] left-[40px] top-[152px] w-[224px]" data-name="HomePage">
      <p className="absolute font-['Cairo:Bold',_sans-serif] font-bold leading-[32px] left-[112.1px] not-italic text-[#13499d] text-[24px] text-center text-nowrap top-[-0.4px] translate-x-[-50%] whitespace-pre" dir="auto">
        أنظمة التخزين
      </p>
    </div>
  );
}

function HomePage2() {
  return (
    <div className="absolute h-[87.75px] left-[40px] top-[207.99px] w-[224px]" data-name="HomePage">
      <p className="absolute font-['Cairo:Regular',_sans-serif] font-normal leading-[29.25px] left-[112.29px] not-italic text-[#303030] text-[18px] text-center top-[0.6px] translate-x-[-50%] w-[202px]" dir="auto">
        رفوف ثابتة ومتحركة، أنظمة تخزين عالية الكثافة، وحلول مخصصة للمستودعات
      </p>
    </div>
  );
}

function Button() {
  return (
    <div className="absolute bg-white h-[36px] left-[79px] rounded-[6px] top-[357px] w-[146.288px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#13499d] border-[1.6px] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="absolute font-['Cairo:Bold',_sans-serif] font-bold leading-[28px] left-[25.6px] not-italic text-[#13499d] text-[18px] text-nowrap top-[3.8px] whitespace-pre" dir="auto">
        تفاصيل أكثر
      </p>
    </div>
  );
}

function CardContent() {
  return (
    <div className="absolute h-[417px] left-[-0.2px] top-[0.41px] w-[304px]" data-name="CardContent">
      <Container />
      <HomePage1 />
      <HomePage2 />
      <Button />
    </div>
  );
}

export default function Card() {
  return (
    <div className="bg-[rgba(255,255,255,0.8)] relative rounded-[12px] size-full" data-name="Card">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <HomePage />
        <CardContent />
      </div>
      <div aria-hidden="true" className="absolute border border-[#d6d6d6] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)]" />
    </div>
  );
}
import svgPaths from "./svg-uxpem5hjef";

function HomePage() {
  return (
    <div className="absolute h-[31.988px] left-[48px] top-[84px] w-[896px]" data-name="HomePage">
      <p className="absolute font-['Cairo:Medium',_sans-serif] font-medium leading-[32px] left-[448.1px] not-italic text-[#303030] text-[24px] text-center text-nowrap top-[-0.4px] translate-x-[-50%] whitespace-pre" dir="auto">
        نقدم حلولاً شاملة ومتكاملة تلبي احتياجات جميع القطاعات الصناعية والتجارية
      </p>
    </div>
  );
}

function Text() {
  return <div className="absolute bg-amber-500 h-[4px] left-[432px] top-[64px] w-[128px]" data-name="Text" />;
}

function HomePage1() {
  return (
    <div className="absolute h-[60px] left-0 top-0 w-[992px]" data-name="HomePage">
      <p className="absolute font-['Cairo:Black',_sans-serif] font-black leading-[60px] left-[496.15px] not-italic text-[#303030] text-[60px] text-center text-nowrap top-[-0.4px] translate-x-[-50%] whitespace-pre" dir="auto">
        خدماتنا المتميزة
      </p>
      <Text />
    </div>
  );
}

function Container() {
  return (
    <div className="h-[115.988px] relative shrink-0 w-full" data-name="Container">
      <HomePage />
      <HomePage1 />
    </div>
  );
}

function HomePage2() {
  return <div className="absolute bg-amber-500 h-[8px] left-[152px] top-0 w-0" data-name="HomePage" />;
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[40px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <g id="Icon">
          <path d={svgPaths.p1a298880} id="Vector" stroke="var(--stroke-0, #F59E0B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.33333" />
          <path d={svgPaths.p3573b4c0} id="Vector_2" stroke="var(--stroke-0, #F59E0B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute bg-[#f6f6f6] box-border content-stretch flex items-center justify-center left-[112px] p-px rounded-[2.68435e+07px] size-[80px] top-[40px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-amber-500 border-solid inset-0 pointer-events-none rounded-[2.68435e+07px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]" />
      <Icon />
    </div>
  );
}

function HomePage3() {
  return (
    <div className="absolute h-[31.988px] left-[40px] top-[152px] w-[224px]" data-name="HomePage">
      <p className="absolute font-['Cairo:Bold',_sans-serif] font-bold leading-[32px] left-[112.5px] not-italic text-[24px] text-amber-500 text-center text-nowrap top-[-0.4px] translate-x-[-50%] whitespace-pre" dir="auto">
        الصيانة والدعم
      </p>
    </div>
  );
}

function HomePage4() {
  return (
    <div className="absolute h-[87.75px] left-[40px] top-[207.99px] w-[224px]" data-name="HomePage">
      <p className="absolute font-['Cairo:Regular',_sans-serif] font-normal leading-[29.25px] left-[112.04px] not-italic text-[#303030] text-[18px] text-center top-[0.6px] translate-x-[-50%] w-[223px]" dir="auto">
        صيانة دورية وطارئة، قطع غيار أصلية، وعقود صيانة شاملة مع فريق فني متخصص
      </p>
    </div>
  );
}

function Button() {
  return (
    <div className="absolute bg-white h-[36px] left-[78.85px] rounded-[6px] top-[356.74px] w-[146.288px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[1.6px] border-amber-500 border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="absolute font-['Cairo:Bold',_sans-serif] font-bold leading-[28px] left-[25.6px] not-italic text-[18px] text-amber-500 text-nowrap top-[3.8px] whitespace-pre" dir="auto">
        تفاصيل أكثر
      </p>
    </div>
  );
}

function CardContent() {
  return (
    <div className="absolute h-[417px] left-[-0.2px] top-[0.41px] w-[304px]" data-name="CardContent">
      <Container1 />
      <HomePage3 />
      <HomePage4 />
      <Button />
    </div>
  );
}

function Card() {
  return (
    <div className="[grid-area:1_/_1] bg-[rgba(255,255,255,0.8)] relative rounded-[12px] shrink-0" data-name="Card">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <HomePage2 />
        <CardContent />
      </div>
      <div aria-hidden="true" className="absolute border border-[#d6d6d6] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function HomePage5() {
  return <div className="absolute h-[8px] left-[152px] top-0 w-0" data-name="HomePage" />;
}

function Icon1() {
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

function Container2() {
  return (
    <div className="absolute bg-[#f6f6f6] box-border content-stretch flex items-center justify-center left-[112px] p-px rounded-[2.68435e+07px] size-[80px] top-[40px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#13499d] border-solid inset-0 pointer-events-none rounded-[2.68435e+07px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]" />
      <Icon1 />
    </div>
  );
}

function HomePage6() {
  return (
    <div className="absolute h-[31.988px] left-[40px] top-[152px] w-[224px]" data-name="HomePage">
      <p className="absolute font-['Cairo:Bold',_sans-serif] font-bold leading-[32px] left-[112.1px] not-italic text-[#13499d] text-[24px] text-center text-nowrap top-[-0.4px] translate-x-[-50%] whitespace-pre" dir="auto">
        أنظمة التخزين
      </p>
    </div>
  );
}

function HomePage7() {
  return (
    <div className="absolute h-[87.75px] left-[40px] top-[207.99px] w-[224px]" data-name="HomePage">
      <p className="absolute font-['Cairo:Regular',_sans-serif] font-normal leading-[29.25px] left-[112.29px] not-italic text-[#303030] text-[18px] text-center top-[0.6px] translate-x-[-50%] w-[202px]" dir="auto">
        رفوف ثابتة ومتحركة، أنظمة تخزين عالية الكثافة، وحلول مخصصة للمستودعات
      </p>
    </div>
  );
}

function Button1() {
  return (
    <div className="absolute bg-white h-[36px] left-[79px] rounded-[6px] top-[357px] w-[146.288px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#13499d] border-[1.6px] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="absolute font-['Cairo:Bold',_sans-serif] font-bold leading-[28px] left-[25.6px] not-italic text-[#13499d] text-[18px] text-nowrap top-[3.8px] whitespace-pre" dir="auto">
        تفاصيل أكثر
      </p>
    </div>
  );
}

function CardContent1() {
  return (
    <div className="absolute h-[417px] left-[-0.2px] top-[0.41px] w-[304px]" data-name="CardContent">
      <Container2 />
      <HomePage6 />
      <HomePage7 />
      <Button1 />
    </div>
  );
}

function Card1() {
  return (
    <div className="[grid-area:1_/_2] bg-[rgba(255,255,255,0.8)] relative rounded-[12px] shrink-0" data-name="Card">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <HomePage5 />
        <CardContent1 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#d6d6d6] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function HomePage8() {
  return <div className="absolute bg-[#303030] h-[8px] left-[152px] top-0 w-0" data-name="HomePage" />;
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[40px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <g id="Icon">
          <path d={svgPaths.p35776f00} id="Vector" stroke="var(--stroke-0, #303030)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.33333" />
          <path d="M25 30H15" id="Vector_2" stroke="var(--stroke-0, #303030)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.33333" />
          <path d={svgPaths.pec82200} id="Vector_3" stroke="var(--stroke-0, #303030)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.33333" />
          <path d={svgPaths.p38dd7b00} id="Vector_4" stroke="var(--stroke-0, #303030)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.33333" />
          <path d={svgPaths.p2c190400} id="Vector_5" stroke="var(--stroke-0, #303030)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute bg-[#f6f6f6] box-border content-stretch flex items-center justify-center left-[112px] p-px rounded-[2.68435e+07px] size-[80px] top-[40px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#303030] border-solid inset-0 pointer-events-none rounded-[2.68435e+07px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]" />
      <Icon2 />
    </div>
  );
}

function HomePage9() {
  return (
    <div className="absolute h-[31.988px] left-[40px] top-[152px] w-[224px]" data-name="HomePage">
      <p className="absolute font-['Cairo:Bold',_sans-serif] font-bold leading-[32px] left-[112.19px] not-italic text-[#303030] text-[24px] text-center text-nowrap top-[-0.4px] translate-x-[-50%] whitespace-pre" dir="auto">
        معدات المناولة
      </p>
    </div>
  );
}

function HomePage10() {
  return (
    <div className="absolute h-[117px] left-[40px] top-[207.99px] w-[224px]" data-name="HomePage">
      <p className="absolute font-['Cairo:Regular',_sans-serif] font-normal leading-[29.25px] left-[112.49px] not-italic text-[#303030] text-[18px] text-center top-[0.6px] translate-x-[-50%] w-[201px]" dir="auto">
        رافعات شوكية، معدات السحب، ونقالات البضائع من أفضل العلامات التجارية العالمية
      </p>
    </div>
  );
}

function Button2() {
  return (
    <div className="absolute bg-white h-[36px] left-[78.85px] rounded-[6px] top-[356.99px] w-[146.288px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#303030] border-[1.6px] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="absolute font-['Cairo:Bold',_sans-serif] font-bold leading-[28px] left-[25.6px] not-italic text-[#303030] text-[18px] text-nowrap top-[3.8px] whitespace-pre" dir="auto">
        تفاصيل أكثر
      </p>
    </div>
  );
}

function CardContent2() {
  return (
    <div className="absolute h-[416.988px] left-0 top-0 w-[304px]" data-name="CardContent">
      <Container3 />
      <HomePage9 />
      <HomePage10 />
      <Button2 />
    </div>
  );
}

function Card2() {
  return (
    <div className="[grid-area:1_/_3] bg-[rgba(255,255,255,0.8)] h-[416.988px] relative rounded-[12px] shrink-0" data-name="Card">
      <div className="h-[416.988px] overflow-clip relative rounded-[inherit] w-full">
        <HomePage8 />
        <CardContent2 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#d6d6d6] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function Container4() {
  return (
    <div className="gap-[40px] grid grid-cols-[repeat(3,_minmax(0px,_1fr))] grid-rows-[repeat(1,_minmax(0px,_1fr))] h-[416.988px] relative shrink-0 w-full" data-name="Container">
      <Card />
      <Card1 />
      <Card2 />
    </div>
  );
}

function Container5() {
  return (
    <div className="h-[612.975px] relative shrink-0 w-full" data-name="Container">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[80px] h-[612.975px] items-start px-[16px] py-0 relative w-full">
          <Container />
          <Container4 />
        </div>
      </div>
    </div>
  );
}

export default function Section() {
  return (
    <div className="bg-[#f6f6f6] relative size-full" data-name="Section">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col items-start px-[89.2px] py-0 relative size-full">
          <Container5 />
        </div>
      </div>
    </div>
  );
}
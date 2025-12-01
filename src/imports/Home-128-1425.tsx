import svgPaths from "./svg-6r4kubp1do";
import imgContainer from "figma:asset/c94194fcfa8aab9c92709746c4c51f36af118af5.png";
import imgImageWithFallback from "figma:asset/129c758954eacfc216583a48589e9f2bbe3cb934.png";

function Container() {
  return (
    <div className="absolute h-[631.6px] left-0 opacity-20 top-0 w-[1202.4px]" data-name="Container">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[338.44%] left-0 max-w-none top-[-149.62%] w-full" src={imgContainer} />
      </div>
    </div>
  );
}

function Badge() {
  return (
    <div className="absolute bg-[#ffc00e] left-[583.36px] rounded-[6px] top-0" data-name="Badge">
      <div className="box-border content-stretch flex gap-[3px] items-center overflow-clip px-[25px] py-[9px] relative rounded-[inherit]">
        <p className="font-['Cairo:Bold',sans-serif] font-bold leading-[28px] not-italic relative shrink-0 text-[#303030] text-[18px] text-nowrap text-right whitespace-pre" dir="auto">
          الشركة الرائدة في معدات المناولة
        </p>
      </div>
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[6px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function HomePage() {
  return (
    <div className="absolute h-[90px] left-0 top-[90px] w-[896px]" data-name="HomePage">
      <p className="absolute font-['Cairo:Black',sans-serif] font-black leading-[90px] left-[896.09px] not-italic text-[72px] text-nowrap text-right text-white top-[0.6px] translate-x-[-100%] whitespace-pre" dir="auto">
        المناولة والتخزين
      </p>
    </div>
  );
}

function Heading1() {
  return (
    <div className="absolute h-[180px] left-[0.4px] top-[69.6px] w-[896px]" data-name="Heading 1">
      <p className="absolute font-['Cairo:Black',sans-serif] font-black leading-[90px] left-[896.17px] not-italic text-[72px] text-nowrap text-right text-white top-[0.6px] translate-x-[-100%] whitespace-pre" dir="auto">
        حلول متقدمة لمعدات
      </p>
      <HomePage />
    </div>
  );
}

function Paragraph() {
  return (
    <div className="absolute h-[78px] left-[128.4px] top-[281.6px] w-[768px]" data-name="Paragraph">
      <p className="absolute font-['Cairo:Regular',sans-serif] font-normal leading-[39px] left-[768.8px] not-italic text-[24px] text-blue-50 text-right top-[-0.2px] translate-x-[-100%] w-[703px]" dir="auto">
        نوفر أحدث المعدات الصناعية وأنظمة التخزين المتطورة مع خدمات الصيانة والدعم الفني الشامل لجميع القطاعات في ليبيا.
      </p>
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute h-[360px] left-[200.8px] top-[116px] w-[897px]" data-name="Container">
      <Badge />
      <Heading1 />
      <Paragraph />
    </div>
  );
}

function Section() {
  return (
    <div className="bg-gradient-to-b from-[#13499d] h-[589px] overflow-clip relative shrink-0 to-[#0f1629] w-[1202px]" data-name="Section">
      <Container />
      <Container1 />
    </div>
  );
}

function HomePage1() {
  return (
    <div className="absolute h-[72px] left-0 top-0 w-[224px]" data-name="HomePage">
      <p className="absolute font-['Cairo:Bold',sans-serif] font-bold leading-[72px] left-[112.09px] not-italic text-[#303030] text-[72px] text-center text-nowrap top-[0.8px] translate-x-[-50%] whitespace-pre">24/7</p>
    </div>
  );
}

function HomePage2() {
  return (
    <div className="absolute h-[28px] left-0 top-[88px] w-[224px]" data-name="HomePage">
      <p className="absolute font-['Cairo:SemiBold',sans-serif] font-semibold leading-[28px] left-[112.31px] not-italic text-[#303030] text-[20px] text-center text-nowrap top-[0.2px] translate-x-[-50%] whitespace-pre" dir="auto">
        دعم فني
      </p>
    </div>
  );
}

function HomePage3() {
  return <div className="absolute h-[4px] left-[112px] top-[128px] w-0" data-name="HomePage" />;
}

function Container2() {
  return (
    <div className="[grid-area:1_/_1] relative shrink-0" data-name="Container">
      <HomePage1 />
      <HomePage2 />
      <HomePage3 />
    </div>
  );
}

function HomePage4() {
  return (
    <div className="absolute h-[72px] left-0 top-0 w-[224px]" data-name="HomePage">
      <p className="absolute font-['Cairo:Bold',sans-serif] font-bold leading-[72px] left-[112.65px] not-italic text-[#303030] text-[72px] text-center text-nowrap top-[0.8px] translate-x-[-50%] whitespace-pre">50+</p>
    </div>
  );
}

function HomePage5() {
  return (
    <div className="absolute h-[28px] left-0 top-[88px] w-[224px]" data-name="HomePage">
      <p className="absolute font-['Cairo:SemiBold',sans-serif] font-semibold leading-[28px] left-[112.14px] not-italic text-[#303030] text-[20px] text-center text-nowrap top-[0.2px] translate-x-[-50%] whitespace-pre" dir="auto">
        شريك عالمي
      </p>
    </div>
  );
}

function HomePage6() {
  return <div className="absolute bg-[#303030] h-[4px] left-[112px] top-[128px] w-0" data-name="HomePage" />;
}

function Container3() {
  return (
    <div className="[grid-area:1_/_2] relative shrink-0" data-name="Container">
      <HomePage4 />
      <HomePage5 />
      <HomePage6 />
    </div>
  );
}

function HomePage7() {
  return (
    <div className="absolute h-[72px] left-0 top-0 w-[224px]" data-name="HomePage">
      <p className="absolute font-['Cairo:Bold',sans-serif] font-bold leading-[72px] left-[112.71px] not-italic text-[#303030] text-[72px] text-center text-nowrap top-[0.8px] translate-x-[-50%] whitespace-pre">500+</p>
    </div>
  );
}

function HomePage8() {
  return (
    <div className="absolute h-[28px] left-0 top-[88px] w-[224px]" data-name="HomePage">
      <p className="absolute font-['Cairo:SemiBold',sans-serif] font-semibold leading-[28px] left-[112.09px] not-italic text-[#303030] text-[20px] text-center text-nowrap top-[0.2px] translate-x-[-50%] whitespace-pre" dir="auto">
        مشروع مكتمل
      </p>
    </div>
  );
}

function HomePage9() {
  return <div className="absolute h-[4px] left-[112px] top-[128px] w-0" data-name="HomePage" />;
}

function Container4() {
  return (
    <div className="[grid-area:1_/_3] relative shrink-0" data-name="Container">
      <HomePage7 />
      <HomePage8 />
      <HomePage9 />
    </div>
  );
}

function HomePage10() {
  return (
    <div className="absolute h-[72px] left-0 top-0 w-[224px]" data-name="HomePage">
      <p className="absolute font-['Cairo:Bold',sans-serif] font-bold leading-[72px] left-[112.65px] not-italic text-[#303030] text-[72px] text-center text-nowrap top-[0.8px] translate-x-[-50%] whitespace-pre">12+</p>
    </div>
  );
}

function HomePage11() {
  return (
    <div className="absolute h-[28px] left-0 top-[88px] w-[224px]" data-name="HomePage">
      <p className="absolute font-['Cairo:SemiBold',sans-serif] font-semibold leading-[28px] left-[112.1px] not-italic text-[#303030] text-[20px] text-center text-nowrap top-[0.2px] translate-x-[-50%] whitespace-pre" dir="auto">
        سنة من الخبرة
      </p>
    </div>
  );
}

function HomePage12() {
  return <div className="absolute bg-[#303030] h-[4px] left-[112px] top-[128px] w-0" data-name="HomePage" />;
}

function Container5() {
  return (
    <div className="[grid-area:1_/_4] relative shrink-0" data-name="Container">
      <HomePage10 />
      <HomePage11 />
      <HomePage12 />
    </div>
  );
}

function Container6() {
  return (
    <div className="gap-[32px] grid grid-cols-[repeat(4,_minmax(0px,_1fr))] grid-rows-[repeat(1,_minmax(0px,_1fr))] h-[132px] relative shrink-0 w-full" data-name="Container">
      <Container2 />
      <Container3 />
      <Container4 />
      <Container5 />
    </div>
  );
}

function Section1() {
  return (
    <div className="bg-[#f6f6f6] box-border content-stretch flex flex-col h-[292px] items-start pb-0 pt-[80px] px-[105.2px] relative shrink-0 w-[1202.4px]" data-name="Section">
      <Container6 />
    </div>
  );
}

function HomePage13() {
  return (
    <div className="absolute h-[31.988px] left-[48px] top-[84px] w-[896px]" data-name="HomePage">
      <p className="absolute font-['Cairo:Medium',sans-serif] font-medium leading-[32px] left-[448.1px] not-italic text-[#303030] text-[24px] text-center text-nowrap top-[-0.4px] translate-x-[-50%] whitespace-pre" dir="auto">
        نقدم حلولاً شاملة ومتكاملة تلبي احتياجات جميع القطاعات الصناعية والتجارية
      </p>
    </div>
  );
}

function Text() {
  return <div className="absolute bg-[#ffc00e] h-[4px] left-[432px] top-[64px] w-[128px]" data-name="Text" />;
}

function HomePage14() {
  return (
    <div className="absolute h-[60px] left-0 top-0 w-[992px]" data-name="HomePage">
      <p className="absolute font-['Cairo:Black',sans-serif] font-black leading-[60px] left-[496.15px] not-italic text-[#303030] text-[60px] text-center text-nowrap top-[-0.4px] translate-x-[-50%] whitespace-pre" dir="auto">
        خدماتنا المتميزة
      </p>
      <Text />
    </div>
  );
}

function Container7() {
  return (
    <div className="h-[115.988px] relative shrink-0 w-full" data-name="Container">
      <HomePage13 />
      <HomePage14 />
    </div>
  );
}

function HomePage15() {
  return <div className="absolute bg-[#ffc00e] h-[8px] left-[152px] top-0 w-0" data-name="HomePage" />;
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[40px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <g id="Icon">
          <path d={svgPaths.p1a298880} id="Vector" stroke="var(--stroke-0, #FFC00E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.33333" />
          <path d={svgPaths.p3573b4c0} id="Vector_2" stroke="var(--stroke-0, #FFC00E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container8() {
  return (
    <div className="absolute bg-[#f6f6f6] box-border content-stretch flex items-center justify-center left-[112px] p-px rounded-[2.68435e+07px] size-[80px] top-[40px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#ffc00e] border-solid inset-0 pointer-events-none rounded-[2.68435e+07px]" />
      <Icon />
    </div>
  );
}

function HomePage16() {
  return (
    <div className="absolute h-[31.988px] left-[40px] top-[152px] w-[224px]" data-name="HomePage">
      <p className="absolute font-['Cairo:Bold',sans-serif] font-bold leading-[32px] left-[112.5px] not-italic text-[#ffc00e] text-[24px] text-center text-nowrap top-[-0.4px] translate-x-[-50%] whitespace-pre" dir="auto">
        الصيانة والدعم
      </p>
    </div>
  );
}

function HomePage17() {
  return (
    <div className="absolute h-[87.75px] left-[40px] top-[207.99px] w-[224px]" data-name="HomePage">
      <p className="absolute font-['Cairo:Regular',sans-serif] font-normal leading-[29.25px] left-[112.04px] not-italic text-[#303030] text-[18px] text-center top-[0.6px] translate-x-[-50%] w-[223px]" dir="auto">
        صيانة دورية وطارئة، قطع غيار أصلية، وعقود صيانة شاملة مع فريق فني متخصص
      </p>
    </div>
  );
}

function Button() {
  return (
    <div className="absolute bg-white h-[36px] left-[78.85px] rounded-[6px] top-[356.74px] w-[146.288px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#ffc00e] border-[1.6px] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="absolute font-['Cairo:Bold',sans-serif] font-bold leading-[28px] left-[25.6px] not-italic text-[#ffc00e] text-[18px] text-nowrap top-[3.8px] whitespace-pre" dir="auto">
        تفاصيل أكثر
      </p>
    </div>
  );
}

function CardContent() {
  return (
    <div className="absolute h-[417px] left-[-0.2px] top-[0.41px] w-[304px]" data-name="CardContent">
      <Container8 />
      <HomePage16 />
      <HomePage17 />
      <Button />
    </div>
  );
}

function Card() {
  return (
    <div className="[grid-area:1_/_1] bg-[rgba(255,255,255,0.8)] relative rounded-[12px] shrink-0" data-name="Card">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <HomePage15 />
        <CardContent />
      </div>
      <div aria-hidden="true" className="absolute border border-[#d6d6d6] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function HomePage18() {
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

function Container9() {
  return (
    <div className="absolute bg-[#f6f6f6] box-border content-stretch flex items-center justify-center left-[112px] p-px rounded-[2.68435e+07px] size-[80px] top-[40px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#13499d] border-solid inset-0 pointer-events-none rounded-[2.68435e+07px]" />
      <Icon1 />
    </div>
  );
}

function HomePage19() {
  return (
    <div className="absolute h-[31.988px] left-[40px] top-[152px] w-[224px]" data-name="HomePage">
      <p className="absolute font-['Cairo:Bold',sans-serif] font-bold leading-[32px] left-[112.1px] not-italic text-[#13499d] text-[24px] text-center text-nowrap top-[-0.4px] translate-x-[-50%] whitespace-pre" dir="auto">
        أنظمة التخزين
      </p>
    </div>
  );
}

function HomePage20() {
  return (
    <div className="absolute h-[87.75px] left-[40px] top-[207.99px] w-[224px]" data-name="HomePage">
      <p className="absolute font-['Cairo:Regular',sans-serif] font-normal leading-[29.25px] left-[112.29px] not-italic text-[#303030] text-[18px] text-center top-[0.6px] translate-x-[-50%] w-[202px]" dir="auto">
        رفوف ثابتة ومتحركة، أنظمة تخزين عالية الكثافة، وحلول مخصصة للمستودعات
      </p>
    </div>
  );
}

function Button1() {
  return (
    <div className="absolute bg-white h-[36px] left-[79px] rounded-[6px] top-[357px] w-[146.288px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#13499d] border-[1.6px] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="absolute font-['Cairo:Bold',sans-serif] font-bold leading-[28px] left-[25.6px] not-italic text-[#13499d] text-[18px] text-nowrap top-[3.8px] whitespace-pre" dir="auto">
        تفاصيل أكثر
      </p>
    </div>
  );
}

function CardContent1() {
  return (
    <div className="absolute h-[417px] left-[-0.2px] top-[0.41px] w-[304px]" data-name="CardContent">
      <Container9 />
      <HomePage19 />
      <HomePage20 />
      <Button1 />
    </div>
  );
}

function Card1() {
  return (
    <div className="[grid-area:1_/_2] bg-[rgba(255,255,255,0.8)] relative rounded-[12px] shrink-0" data-name="Card">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <HomePage18 />
        <CardContent1 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#d6d6d6] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function HomePage21() {
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

function Container10() {
  return (
    <div className="absolute bg-[#f6f6f6] box-border content-stretch flex items-center justify-center left-[112px] p-px rounded-[2.68435e+07px] size-[80px] top-[40px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#303030] border-solid inset-0 pointer-events-none rounded-[2.68435e+07px]" />
      <Icon2 />
    </div>
  );
}

function HomePage22() {
  return (
    <div className="absolute h-[31.988px] left-[40px] top-[152px] w-[224px]" data-name="HomePage">
      <p className="absolute font-['Cairo:Bold',sans-serif] font-bold leading-[32px] left-[112.19px] not-italic text-[#303030] text-[24px] text-center text-nowrap top-[-0.4px] translate-x-[-50%] whitespace-pre" dir="auto">
        معدات المناولة
      </p>
    </div>
  );
}

function HomePage23() {
  return (
    <div className="absolute h-[117px] left-[40px] top-[207.99px] w-[224px]" data-name="HomePage">
      <p className="absolute font-['Cairo:Regular',sans-serif] font-normal leading-[29.25px] left-[112.49px] not-italic text-[#303030] text-[18px] text-center top-[0.6px] translate-x-[-50%] w-[201px]" dir="auto">
        رافعات شوكية، معدات السحب، ونقالات البضائع من أفضل العلامات التجارية العالمية
      </p>
    </div>
  );
}

function Button2() {
  return (
    <div className="absolute bg-white h-[36px] left-[78.85px] rounded-[6px] top-[356.99px] w-[146.288px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#303030] border-[1.6px] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="absolute font-['Cairo:Bold',sans-serif] font-bold leading-[28px] left-[25.6px] not-italic text-[#303030] text-[18px] text-nowrap top-[3.8px] whitespace-pre" dir="auto">
        تفاصيل أكثر
      </p>
    </div>
  );
}

function CardContent2() {
  return (
    <div className="absolute h-[416.988px] left-0 top-0 w-[304px]" data-name="CardContent">
      <Container10 />
      <HomePage22 />
      <HomePage23 />
      <Button2 />
    </div>
  );
}

function Card2() {
  return (
    <div className="[grid-area:1_/_3] bg-[rgba(255,255,255,0.8)] h-[416.988px] relative rounded-[12px] shrink-0" data-name="Card">
      <div className="h-[416.988px] overflow-clip relative rounded-[inherit] w-full">
        <HomePage21 />
        <CardContent2 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#d6d6d6] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function Container11() {
  return (
    <div className="gap-[40px] grid grid-cols-[repeat(3,_minmax(0px,_1fr))] grid-rows-[repeat(1,_minmax(0px,_1fr))] h-[416.988px] relative shrink-0 w-full" data-name="Container">
      <Card />
      <Card1 />
      <Card2 />
    </div>
  );
}

function Container12() {
  return (
    <div className="h-[612.975px] relative shrink-0 w-full" data-name="Container">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[80px] h-[612.975px] items-start px-[16px] py-0 relative w-full">
          <Container7 />
          <Container11 />
        </div>
      </div>
    </div>
  );
}

function Section2() {
  return (
    <div className="bg-[#f6f6f6] box-border content-stretch flex flex-col h-[667px] items-start px-[89.2px] py-0 relative shrink-0 w-[1202px]" data-name="Section">
      <Container12 />
    </div>
  );
}

function Heading2() {
  return (
    <div className="h-[40px] relative shrink-0 w-full" data-name="Heading 2">
      <p className="absolute font-['Cairo:Bold',sans-serif] font-bold leading-[40px] left-[496.44px] not-italic text-[#303030] text-[36px] text-center text-nowrap top-[-0.4px] translate-x-[-50%] whitespace-pre" dir="auto">
        القطاعات التي نخدمها
      </p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Cairo:Regular',sans-serif] font-normal leading-[28px] left-[496.1px] not-italic text-[#303030] text-[20px] text-center text-nowrap top-[0.2px] translate-x-[-50%] whitespace-pre" dir="auto">
        خبرة متخصصة في مختلف المجالات الصناعية والتجارية
      </p>
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] h-[84px] items-start relative shrink-0 w-full" data-name="Container">
      <Heading2 />
      <Paragraph1 />
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Cairo:SemiBold',sans-serif] font-semibold leading-[24px] left-[91.14px] not-italic text-[#303030] text-[16px] text-center text-nowrap top-[-0.2px] translate-x-[-50%] whitespace-pre" dir="auto">
        البناء والتشييد
      </p>
    </div>
  );
}

function Container14() {
  return (
    <div className="[grid-area:1_/_1] bg-white relative rounded-[8px] shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#d6d6d6] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col items-start pb-0 pt-[24px] px-[24px] relative size-full">
          <Paragraph2 />
        </div>
      </div>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Cairo:SemiBold',sans-serif] font-semibold leading-[24px] left-[91.25px] not-italic text-[#303030] text-[16px] text-center text-nowrap top-[-0.2px] translate-x-[-50%] whitespace-pre" dir="auto">
        النفط والغاز
      </p>
    </div>
  );
}

function Container15() {
  return (
    <div className="[grid-area:1_/_2] bg-white relative rounded-[8px] shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#d6d6d6] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col items-start pb-0 pt-[24px] px-[24px] relative size-full">
          <Paragraph3 />
        </div>
      </div>
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Cairo:SemiBold',sans-serif] font-semibold leading-[24px] left-[91.15px] not-italic text-[#303030] text-[16px] text-center text-nowrap top-[-0.2px] translate-x-[-50%] whitespace-pre" dir="auto">
        الشحن واللوجستيات
      </p>
    </div>
  );
}

function Container16() {
  return (
    <div className="[grid-area:1_/_3] bg-white relative rounded-[8px] shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#d6d6d6] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col items-start pb-0 pt-[24px] px-[24px] relative size-full">
          <Paragraph4 />
        </div>
      </div>
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Cairo:SemiBold',sans-serif] font-semibold leading-[24px] left-[91.17px] not-italic text-[#303030] text-[16px] text-center text-nowrap top-[-0.2px] translate-x-[-50%] whitespace-pre" dir="auto">
        الطيران المدني
      </p>
    </div>
  );
}

function Container17() {
  return (
    <div className="[grid-area:1_/_4] bg-white relative rounded-[8px] shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#d6d6d6] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col items-start pb-0 pt-[24px] px-[24px] relative size-full">
          <Paragraph5 />
        </div>
      </div>
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Cairo:SemiBold',sans-serif] font-semibold leading-[24px] left-[91.36px] not-italic text-[#303030] text-[16px] text-center text-nowrap top-[-0.2px] translate-x-[-50%] whitespace-pre" dir="auto">
        الخدمات البحرية
      </p>
    </div>
  );
}

function Container18() {
  return (
    <div className="[grid-area:2_/_1] bg-white relative rounded-[8px] shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#d6d6d6] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col items-start pb-0 pt-[24px] px-[24px] relative size-full">
          <Paragraph6 />
        </div>
      </div>
    </div>
  );
}

function Paragraph7() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Cairo:SemiBold',sans-serif] font-semibold leading-[24px] left-[91.13px] not-italic text-[#303030] text-[16px] text-center text-nowrap top-[-0.2px] translate-x-[-50%] whitespace-pre" dir="auto">
        المستودعات
      </p>
    </div>
  );
}

function Container19() {
  return (
    <div className="[grid-area:2_/_2] bg-white relative rounded-[8px] shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#d6d6d6] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col items-start pb-0 pt-[24px] px-[24px] relative size-full">
          <Paragraph7 />
        </div>
      </div>
    </div>
  );
}

function Paragraph8() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Cairo:SemiBold',sans-serif] font-semibold leading-[24px] left-[91.46px] not-italic text-[#303030] text-[16px] text-center text-nowrap top-[-0.2px] translate-x-[-50%] whitespace-pre" dir="auto">
        المتاجر الكبرى
      </p>
    </div>
  );
}

function Container20() {
  return (
    <div className="[grid-area:2_/_3] bg-white relative rounded-[8px] shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#d6d6d6] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col items-start pb-0 pt-[24px] px-[24px] relative size-full">
          <Paragraph8 />
        </div>
      </div>
    </div>
  );
}

function Paragraph9() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Cairo:SemiBold',sans-serif] font-semibold leading-[24px] left-[91.08px] not-italic text-[#303030] text-[16px] text-center text-nowrap top-[-0.2px] translate-x-[-50%] whitespace-pre" dir="auto">
        المصانع والإنتاج
      </p>
    </div>
  );
}

function Container21() {
  return (
    <div className="[grid-area:2_/_4] bg-white relative rounded-[8px] shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#d6d6d6] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col items-start pb-0 pt-[24px] px-[24px] relative size-full">
          <Paragraph9 />
        </div>
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="gap-[24px] grid grid-cols-[repeat(4,_minmax(0px,_1fr))] grid-rows-[repeat(2,_minmax(0px,_1fr))] h-[168px] relative shrink-0 w-full" data-name="Container">
      <Container14 />
      <Container15 />
      <Container16 />
      <Container17 />
      <Container18 />
      <Container19 />
      <Container20 />
      <Container21 />
    </div>
  );
}

function Section3() {
  return (
    <div className="bg-[#f6f6f6] box-border content-stretch flex flex-col gap-[64px] h-[476px] items-start pb-0 pt-[60px] px-[105.2px] relative shrink-0 w-[1202.4px]" data-name="Section">
      <Container13 />
      <Container22 />
    </div>
  );
}

function Heading4() {
  return (
    <div className="h-[40px] relative shrink-0 w-full" data-name="Heading 2">
      <p className="absolute font-['Cairo:Bold',sans-serif] font-bold leading-[40px] left-[472.5px] not-italic text-[#303030] text-[36px] text-nowrap text-right top-[-0.4px] translate-x-[-100%] whitespace-pre" dir="auto">
        لماذا تختار القطب؟
      </p>
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p3eeeaa80} id="Vector" stroke="var(--stroke-0, #303030)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p2f14bd80} id="Vector_2" stroke="var(--stroke-0, #303030)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Container23() {
  return (
    <div className="bg-white relative rounded-[2.68435e+07px] shrink-0 size-[48px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#303030] border-solid inset-0 pointer-events-none rounded-[2.68435e+07px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center p-px relative size-[48px]">
        <Icon3 />
      </div>
    </div>
  );
}

function Heading3() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Cairo:SemiBold',sans-serif] font-semibold leading-[28px] left-[408.09px] not-italic text-[#303030] text-[18px] text-nowrap text-right top-[-0.2px] translate-x-[-100%] whitespace-pre" dir="auto">
        جودة معتمدة عالمياً
      </p>
    </div>
  );
}

function Paragraph10() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Cairo:Regular',sans-serif] font-normal leading-[24px] left-[408.69px] not-italic text-[#303030] text-[16px] text-right top-[-0.2px] translate-x-[-100%] w-[395px]" dir="auto">
        شهادات ISO 9001:2015 وضمانات شاملة على جميع المنتجات والخدمات
      </p>
    </div>
  );
}

function Container24() {
  return (
    <div className="h-[84px] relative shrink-0 w-[408px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[8px] h-[84px] items-start relative w-[408px]">
        <Heading3 />
        <Paragraph10 />
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="content-stretch flex gap-[16px] h-[84px] items-start justify-end relative shrink-0 w-full" data-name="Container">
      <Container23 />
      <Container24 />
    </div>
  );
}

function Icon4() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p1d820380} id="Vector" stroke="var(--stroke-0, #13499D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p27451300} id="Vector_2" stroke="var(--stroke-0, #13499D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p2981fe00} id="Vector_3" stroke="var(--stroke-0, #13499D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p161d4800} id="Vector_4" stroke="var(--stroke-0, #13499D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Container26() {
  return (
    <div className="bg-white relative rounded-[2.68435e+07px] shrink-0 size-[48px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#13499d] border-solid inset-0 pointer-events-none rounded-[2.68435e+07px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center p-px relative size-[48px]">
        <Icon4 />
      </div>
    </div>
  );
}

function Heading5() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Cairo:SemiBold',sans-serif] font-semibold leading-[28px] left-[408.36px] not-italic text-[#303030] text-[18px] text-nowrap text-right top-[-0.2px] translate-x-[-100%] whitespace-pre" dir="auto">
        فريق خبراء متخصص
      </p>
    </div>
  );
}

function Paragraph11() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Cairo:Regular',sans-serif] font-normal leading-[24px] left-[408px] not-italic text-[#303030] text-[16px] text-nowrap text-right top-[-0.2px] translate-x-[-100%] whitespace-pre" dir="auto">
        مهندسون وفنيون مدربون على أحدث التقنيات والمعايير العالمية
      </p>
    </div>
  );
}

function Container27() {
  return (
    <div className="h-[60px] relative shrink-0 w-[407.575px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[8px] h-[60px] items-start relative w-[407.575px]">
        <Heading5 />
        <Paragraph11 />
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="h-[60px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row justify-end size-full">
        <div className="box-border content-stretch flex gap-[16px] h-[60px] items-start justify-end pl-0 pr-[0.425px] py-0 relative w-full">
          <Container26 />
          <Container27 />
        </div>
      </div>
    </div>
  );
}

function Icon5() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p3f3d8e00} id="Vector" stroke="var(--stroke-0, #FFC00E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Container29() {
  return (
    <div className="bg-white relative rounded-[2.68435e+07px] shrink-0 size-[48px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#ffc00e] border-solid inset-0 pointer-events-none rounded-[2.68435e+07px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center p-px relative size-[48px]">
        <Icon5 />
      </div>
    </div>
  );
}

function Heading6() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Cairo:SemiBold',sans-serif] font-semibold leading-[28px] left-[384.43px] not-italic text-[#303030] text-[18px] text-nowrap text-right top-[-0.2px] translate-x-[-100%] whitespace-pre" dir="auto">
        دعم على مدار الساعة
      </p>
    </div>
  );
}

function Paragraph12() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Cairo:Regular',sans-serif] font-normal leading-[24px] left-[384px] not-italic text-[#303030] text-[16px] text-right top-[-0.2px] translate-x-[-100%] w-[384px]" dir="auto">
        خدمة عملاء متاحة 24/7 مع استجابة سريعة لحالات الطوارئ
      </p>
    </div>
  );
}

function Container30() {
  return (
    <div className="h-[60px] relative shrink-0 w-[383.925px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[8px] h-[60px] items-start relative w-[383.925px]">
        <Heading6 />
        <Paragraph12 />
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div className="h-[60px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row justify-end size-full">
        <div className="box-border content-stretch flex gap-[16px] h-[60px] items-start justify-end pl-0 pr-[24.075px] py-0 relative w-full">
          <Container29 />
          <Container30 />
        </div>
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] h-[252px] items-start relative shrink-0 w-full" data-name="Container">
      <Container25 />
      <Container28 />
      <Container31 />
    </div>
  );
}

function Container33() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] h-[316px] items-start left-[520px] top-[34px] w-[472px]" data-name="Container">
      <Heading4 />
      <Container32 />
    </div>
  );
}

function ImageWithFallback() {
  return (
    <div className="absolute h-[384px] left-0 rounded-[8px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] top-0 w-[472px]" data-name="ImageWithFallback">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[8px]">
        <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[8px]" />
        <img alt="" className="absolute max-w-none object-50%-50% object-cover rounded-[8px] size-full" src={imgImageWithFallback} />
      </div>
    </div>
  );
}

function Container34() {
  return <div className="absolute bg-[rgba(15,22,41,0.2)] h-[384px] left-0 rounded-[8px] top-0 w-[472px]" data-name="Container" />;
}

function Container35() {
  return (
    <div className="absolute h-[384px] left-0 top-0 w-[472px]" data-name="Container">
      <ImageWithFallback />
      <Container34 />
    </div>
  );
}

function Section4() {
  return (
    <div className="h-[384px] relative shrink-0 w-[992px]" data-name="Section">
      <Container33 />
      <Container35 />
    </div>
  );
}

function HomePage24() {
  return (
    <div className="bg-[#f6f6f6] content-stretch flex flex-col gap-[23px] h-[2548px] items-center relative shrink-0 w-full" data-name="HomePage">
      <Section />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
    </div>
  );
}

function Heading7() {
  return (
    <div className="absolute h-[40px] left-[105.2px] top-[80px] w-[992px]" data-name="Heading 2">
      <p className="absolute font-['Cairo:Bold',sans-serif] font-bold leading-[40px] left-[496.46px] not-italic text-[#303030] text-[36px] text-center text-nowrap top-[-0.4px] translate-x-[-50%] whitespace-pre" dir="auto">
        هل أنت مستعد للارتقاء بعملك؟
      </p>
    </div>
  );
}

function Paragraph13() {
  return (
    <div className="absolute h-[28px] left-[265.2px] top-[136px] w-[672px]" data-name="Paragraph">
      <p className="absolute font-['Cairo:Regular',sans-serif] font-normal leading-[28px] left-[336.05px] not-italic text-[#303030] text-[20px] text-center text-nowrap top-[0.2px] translate-x-[-50%] whitespace-pre" dir="auto">
        تواصل معنا اليوم للحصول على استشارة مجانية وعرض أسعار مخصص لاحتياجاتك
      </p>
    </div>
  );
}

function Icon6() {
  return (
    <div className="absolute left-[24px] size-[16px] top-[12px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_123_1253)" id="Icon">
          <path d={svgPaths.p26187580} id="Vector" stroke="var(--stroke-0, #13499D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_123_1253">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Button3() {
  return (
    <a
      href="https://wa.me/218911286734"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="فتح محادثة واتساب"
      className="absolute bg-[#f6f6f6] h-[40px] left-[calc(50%-0.2px)] rounded-[6px] top-0 translate-x-[-50%] w-[188px] inline-flex items-center justify-center"
      data-name="Button"
    >
      <div aria-hidden="true" className="absolute border border-[#13499d] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <Icon6 />
      <span className="font-['Cairo:SemiBold',sans-serif] font-semibold leading-[20px] not-italic text-[#13499d] text-[16px] whitespace-pre" dir="auto">
        اتصل بنا الآن
      </span>
    </a>
  );
}

function Container36() {
  return (
    <div className="absolute h-[40px] left-[105.2px] top-[196px] w-[992px]" data-name="Container">
      <Button3 />
    </div>
  );
}

function Section5() {
  return (
    <div className="bg-[#f6f6f6] h-[316px] relative shrink-0 w-full" data-name="Section">
      <Heading7 />
      <Paragraph13 />
      <Container36 />
    </div>
  );
}

function App() {
  return (
    <div className="content-stretch flex flex-col h-[2864px] items-start overflow-clip relative shrink-0 w-[1202px]" data-name="App">
      <HomePage24 />
      <Section5 />
    </div>
  );
}

export default function Home() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative size-full" data-name="Home">
      <App />
    </div>
  );
}
import svgPaths from "./svg-i910emt9ax";
import imgImageWithFallback2 from "figma:asset/e5e1ac4762811128ad8fb8b0a3a1945b6ac8c387.png";

function Frame2() {
  return (
    <div className="absolute h-[8px] left-[213.79px] top-[239.18px] w-[62px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 62 8">
        <g id="Frame 2">
          <circle cx="4" cy="4" fill="var(--fill-0, #FFC00E)" id="Ellipse 1" r="4" />
          <circle cx="22" cy="4" fill="var(--fill-0, #D9D9D9)" id="Ellipse 2" r="4" />
          <circle cx="40" cy="4" fill="var(--fill-0, #D9D9D9)" id="Ellipse 3" r="4" />
          <circle cx="58" cy="4" fill="var(--fill-0, #D9D9D9)" id="Ellipse 4" r="4" />
        </g>
      </svg>
    </div>
  );
}

function ImageWithFallback2() {
  return (
    <div className="absolute h-[256px] left-0 overflow-clip top-0 w-[489.788px]" data-name="ImageWithFallback2">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImageWithFallback2} />
      <Frame2 />
    </div>
  );
}

function Button() {
  return (
    <button className="absolute bg-[rgba(255,255,255,0.9)] box-border content-stretch cursor-pointer flex gap-[8px] items-center justify-center left-[16px] overflow-visible p-0 rounded-[6px] size-[36px] top-[16px]" data-name="Button">
      <p className="font-['Cairo:Medium','Noto_Sans:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#1a1a1a] text-[14px] text-nowrap whitespace-pre">✕</p>
    </button>
  );
}

function Container() {
  return (
    <div className="h-[256px] relative shrink-0 w-full" data-name="Container">
      <ImageWithFallback2 />
      <Button />
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Cairo:Regular',sans-serif] font-normal leading-[20px] left-[158px] not-italic text-[#4a5565] text-[14px] text-right top-[-0.2px] translate-x-[-100%] w-[158px]" dir="auto">
        العميل: الشركة الليبية للنفط
      </p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Cairo:Regular',sans-serif] font-normal leading-[20px] left-[157.65px] not-italic text-[#4a5565] text-[14px] text-right top-[-0.2px] translate-x-[-100%] w-[84px]" dir="auto">
        المكان: البريقة
      </p>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Cairo:Regular',sans-serif] font-normal leading-[20px] left-[158px] not-italic text-[#4a5565] text-[14px] text-right top-[-0.2px] translate-x-[-100%] w-[70px]" dir="auto">
        السنة: 2022
      </p>
    </div>
  );
}

function Container1() {
  return (
    <div className="h-[60px] relative shrink-0 w-[157.375px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[60px] items-start relative w-[157.375px]">
        <Paragraph />
        <Paragraph1 />
        <Paragraph2 />
      </div>
    </div>
  );
}

function Heading2() {
  return (
    <div className="absolute h-[31.988px] left-0 top-0 w-[236.012px]" data-name="Heading 2">
      <p className="absolute font-['Cairo:Bold',sans-serif] font-bold leading-[32px] left-[237px] not-italic text-[#0f1629] text-[24px] text-nowrap text-right top-[-0.4px] translate-x-[-100%] whitespace-pre" dir="auto">
        مجمع البريقة الصناعي
      </p>
    </div>
  );
}

function Badge2() {
  return (
    <div className="absolute bg-blue-100 h-[21.587px] left-[160.3px] rounded-[6px] top-[42.79px] w-[75.713px]" data-name="Badge2">
      <div className="h-[21.587px] overflow-clip relative rounded-[inherit] w-[75.713px]">
        <p className="absolute font-['Cairo:Medium',sans-serif] font-medium leading-[16px] left-[67.8px] not-italic text-[#0f1629] text-[12px] text-nowrap text-right top-[1.8px] translate-x-[-100%] whitespace-pre" dir="auto">
          النفط والغاز
        </p>
      </div>
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Container2() {
  return (
    <div className="h-[64.375px] relative shrink-0 w-[236.012px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[64.375px] relative w-[236.012px]">
        <Heading2 />
        <Badge2 />
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex h-[64.375px] items-start justify-between relative shrink-0 w-[425.788px]" data-name="Container">
      <Container1 />
      <Container2 />
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="h-[196px] relative shrink-0 w-[426px]" data-name="Paragraph">
      <p className="absolute font-['Cairo:Regular',sans-serif] font-normal h-[343px] leading-[24px] left-[425.79px] not-italic text-[#4a5565] text-[16px] text-right top-[-0.69px] translate-x-[-100%] w-[413px]" dir="auto">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
    </div>
  );
}

function Text() {
  return (
    <div className="h-[24px] relative shrink-0 w-[154.663px]" data-name="Text">
      <p className="absolute font-['Cairo:Regular',sans-serif] font-normal leading-[24px] left-[155px] not-italic text-[#4a5565] text-[16px] text-nowrap text-right top-[-0.2px] translate-x-[-100%] whitespace-pre" dir="auto">
        معدات مقاومة للانفجار
      </p>
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p33ed6f00} id="Vector" stroke="var(--stroke-0, #0F1629)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M12.5 15H7.5" id="Vector_2" stroke="var(--stroke-0, #0F1629)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p2f5b2980} id="Vector_3" stroke="var(--stroke-0, #0F1629)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p76e7200} id="Vector_4" stroke="var(--stroke-0, #0F1629)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.pce04cf0} id="Vector_5" stroke="var(--stroke-0, #0F1629)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function ListItem() {
  return (
    <div className="[grid-area:1_/_1] content-stretch flex gap-[8px] items-center justify-end relative self-start shrink-0" data-name="List Item">
      <Text />
      <Icon />
    </div>
  );
}

function Text1() {
  return (
    <div className="h-[24px] relative shrink-0 w-[130.887px]" data-name="Text">
      <p className="absolute font-['Cairo:Regular',sans-serif] font-normal leading-[24px] left-[131px] not-italic text-[#4a5565] text-[16px] text-nowrap text-right top-[-0.2px] translate-x-[-100%] whitespace-pre" dir="auto">
        أنظمة أمان متقدمة
      </p>
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p33ed6f00} id="Vector" stroke="var(--stroke-0, #0F1629)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M12.5 15H7.5" id="Vector_2" stroke="var(--stroke-0, #0F1629)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p2f5b2980} id="Vector_3" stroke="var(--stroke-0, #0F1629)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p76e7200} id="Vector_4" stroke="var(--stroke-0, #0F1629)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.pce04cf0} id="Vector_5" stroke="var(--stroke-0, #0F1629)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function ListItem1() {
  return (
    <div className="[grid-area:1_/_2] content-stretch flex gap-[8px] items-center justify-end relative self-start shrink-0" data-name="List Item">
      <Text1 />
      <Icon1 />
    </div>
  );
}

function Text2() {
  return (
    <div className="h-[24px] relative shrink-0 w-[191.387px]" data-name="Text">
      <p className="absolute font-['Cairo:Regular',sans-serif] font-normal leading-[24px] left-[192px] not-italic text-[#4a5565] text-[16px] text-nowrap text-right top-[-0.2px] translate-x-[-100%] whitespace-pre" dir="auto">
        برنامج تدريب شامل للموظفين
      </p>
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p112e9300} id="Vector" stroke="var(--stroke-0, #0F1629)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M12.5 15H7.5" id="Vector_2" stroke="var(--stroke-0, #0F1629)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p39df9d00} id="Vector_3" stroke="var(--stroke-0, #0F1629)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p133fd540} id="Vector_4" stroke="var(--stroke-0, #0F1629)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p32f4c840} id="Vector_5" stroke="var(--stroke-0, #0F1629)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function ListItem2() {
  return (
    <div className="[grid-area:2_/_2] content-stretch flex gap-[8px] items-center justify-end relative shrink-0" data-name="List Item">
      <Text2 />
      <Icon2 />
    </div>
  );
}

function ProjectsPage() {
  return (
    <div className="gap-[12px] grid grid-cols-[repeat(2,_minmax(0px,_1fr))] grid-rows-[repeat(3,_minmax(0px,_1fr))] h-[96px] relative shrink-0 w-[426px]" data-name="ProjectsPage">
      <ListItem />
      <ListItem1 />
      <ListItem2 />
    </div>
  );
}

function Container4() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col items-end size-full">
        <div className="box-border content-stretch flex flex-col gap-[24px] items-end p-[32px] relative w-full">
          <Container3 />
          <Paragraph3 />
          <p className="font-['Cairo:SemiBold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[#1a1a1a] text-[20px] text-nowrap whitespace-pre" dir="auto">
            الحلول
          </p>
          <ProjectsPage />
        </div>
      </div>
    </div>
  );
}

export default function Container5() {
  return (
    <div className="bg-white relative rounded-[8px] size-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <Container />
        <Container4 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#d6d6d6] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}
function Heading2() {
  return (
    <div className="h-[36px] relative shrink-0 w-full" data-name="Heading 2">
      <p className="absolute font-['Cairo:Bold',sans-serif] font-bold leading-[36px] left-[496.11px] not-italic text-[#0f1629] text-[30px] text-center text-nowrap top-[-0.4px] translate-x-[-50%] whitespace-pre" dir="auto">
        الهيكل الإداري
      </p>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] h-[80px] items-start relative shrink-0 w-full" data-name="Container">
      <Heading2 />
    </div>
  );
}

function Container1() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[28px] left-[176.15px] not-italic text-[20px] text-center text-nowrap text-white top-[-2.2px] translate-x-[-50%] whitespace-pre">Union President</p>
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute bg-[#003366] box-border content-stretch flex flex-col h-[60px] items-start left-[224px] pb-0 pt-[16px] px-[16px] rounded-[10px] top-0 w-[384px]" data-name="Container">
      <Container1 />
    </div>
  );
}

function Container3() {
  return <div className="absolute bg-[#d1d5dc] h-[32px] left-[414px] top-[76px] w-[4px]" data-name="Container" />;
}

function Container4() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[28px] left-[175.75px] not-italic text-[20px] text-center text-nowrap text-white top-[-2.2px] translate-x-[-50%] whitespace-pre">Board of Directors</p>
    </div>
  );
}

function Container5() {
  return (
    <div className="absolute bg-[seagreen] box-border content-stretch flex flex-col h-[60px] items-start left-[224px] pb-0 pt-[16px] px-[16px] rounded-[10px] top-[124px] w-[384px]" data-name="Container">
      <Container4 />
    </div>
  );
}

function Container6() {
  return <div className="absolute bg-[#d1d5dc] h-[32px] left-[414px] top-[200px] w-[4px]" data-name="Container" />;
}

function Container7() {
  return (
    <div className="absolute bg-white h-[57.6px] left-0 rounded-[10px] top-0 w-[266.663px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#d6d6d6] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[24px] left-[133.65px] not-italic text-[16px] text-center text-neutral-950 text-nowrap top-[14.6px] translate-x-[-50%] whitespace-pre">Financial Department</p>
    </div>
  );
}

function Container8() {
  return (
    <div className="absolute bg-white h-[57.6px] left-[282.66px] rounded-[10px] top-0 w-[266.663px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#d6d6d6] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[24px] left-[134.28px] not-italic text-[16px] text-center text-neutral-950 text-nowrap top-[14.6px] translate-x-[-50%] whitespace-pre">Technical Department</p>
    </div>
  );
}

function Container9() {
  return (
    <div className="absolute bg-white h-[57.6px] left-[565.33px] rounded-[10px] top-0 w-[266.675px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#d6d6d6] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[24px] left-[133.78px] not-italic text-[16px] text-center text-neutral-950 text-nowrap top-[14.6px] translate-x-[-50%] whitespace-pre">Membership Department</p>
    </div>
  );
}

function Container10() {
  return (
    <div className="absolute h-[57.6px] left-0 top-[248px] w-[832px]" data-name="Container">
      <Container7 />
      <Container8 />
      <Container9 />
    </div>
  );
}

function Container11() {
  return (
    <div className="h-[305.6px] relative shrink-0 w-full" data-name="Container">
      <Container2 />
      <Container3 />
      <Container5 />
      <Container6 />
      <Container10 />
    </div>
  );
}

function Container12() {
  return (
    <div className="box-border content-stretch flex flex-col h-[369.6px] items-start pb-0 pt-[32px] px-[32px] relative rounded-[10px] shrink-0 w-[896px]" data-name="Container">
      <Container11 />
    </div>
  );
}

export default function Section() {
  return (
    <div className="bg-[#f6f6f6] relative size-full" data-name="Section">
      <div className="flex flex-col items-center size-full">
        <div className="box-border content-stretch flex flex-col items-center px-[105.2px] py-0 relative size-full">
          <Container />
          <Container12 />
        </div>
      </div>
    </div>
  );
}
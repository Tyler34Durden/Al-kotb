import svgPaths from "./svg-u96fq9gvgo";

function Button() {
  return (
    <div className="h-[28px] relative rounded-[2.68435e+07px] shrink-0 w-[46.05px]" data-name="Button">
      <p className="absolute font-['Cairo:Bold',sans-serif] font-bold leading-[28px] left-[47px] not-italic text-[#303030] text-[16px] text-nowrap text-right top-[0.2px] translate-x-[-100%] whitespace-pre" dir="auto">
        تواصل
      </p>
    </div>
  );
}

function Button1() {
  return (
    <div className="h-[28px] relative rounded-[2.68435e+07px] shrink-0 w-[52.563px]" data-name="Button">
      <p className="absolute font-['Cairo:Bold',sans-serif] font-bold leading-[28px] left-[53px] not-italic text-[#303030] text-[16px] text-nowrap text-right top-[0.2px] translate-x-[-100%] whitespace-pre" dir="auto">
        من نحن
      </p>
    </div>
  );
}

function Button2() {
  return (
    <div className="h-[28px] relative rounded-[2.68435e+07px] shrink-0 w-[47.962px]" data-name="Button">
      <p className="absolute font-['Cairo:Bold',sans-serif] font-bold leading-[28px] left-[48px] not-italic text-[#303030] text-[16px] text-nowrap text-right top-[0.2px] translate-x-[-100%] whitespace-pre" dir="auto">
        الميديا
      </p>
    </div>
  );
}

function Button3() {
  return (
    <div className="h-[28px] relative rounded-[2.68435e+07px] shrink-0 w-[64.388px]" data-name="Button">
      <p className="absolute font-['Cairo:Bold',sans-serif] font-bold leading-[28px] left-[65px] not-italic text-[#303030] text-[16px] text-nowrap text-right top-[0.2px] translate-x-[-100%] whitespace-pre" dir="auto">
        المشاريع
      </p>
    </div>
  );
}

function Button4() {
  return (
    <div className="h-[28px] relative rounded-[2.68435e+07px] shrink-0 w-[58.263px]" data-name="Button">
      <p className="absolute font-['Cairo:Bold',sans-serif] font-bold leading-[28px] left-[59px] not-italic text-[#303030] text-[16px] text-nowrap text-right top-[0.2px] translate-x-[-100%] whitespace-pre" dir="auto">
        الخدمات
      </p>
    </div>
  );
}

function Button5() {
  return (
    <div className="absolute h-[28px] left-0 top-0 w-[46.788px]" data-name="Button">
      <p className="absolute font-['Cairo:Bold',sans-serif] font-bold leading-[28px] left-[47px] not-italic text-[#303030] text-[16px] text-nowrap text-right top-[0.2px] translate-x-[-100%] whitespace-pre" dir="auto">
        الحلول
      </p>
    </div>
  );
}

function Button6() {
  return <div className="absolute bg-[rgba(255,255,255,0)] h-[31px] left-0 top-0 w-[46.788px]" data-name="Button" />;
}

function Container() {
  return (
    <div className="h-[28px] relative shrink-0 w-[46.788px]" data-name="Container">
      <Button5 />
      <Button6 />
    </div>
  );
}

function Button7() {
  return (
    <div className="h-[28px] relative rounded-[2.68435e+07px] shrink-0 w-[62.2px]" data-name="Button">
      <p className="absolute font-['Cairo:Bold',sans-serif] font-bold leading-[28px] left-[63px] not-italic text-[#303030] text-[16px] text-nowrap text-right top-[0.2px] translate-x-[-100%] whitespace-pre" dir="auto">
        المنتجات
      </p>
    </div>
  );
}

function Button8() {
  return (
    <div className="h-[28px] relative shrink-0 w-[59.225px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#13499d] border-[0px_0px_2.5px] border-solid bottom-[-2.5px] left-0 pointer-events-none right-0 top-0" />
      <p className="absolute font-['Cairo:Bold',sans-serif] font-bold leading-[28px] left-[60px] not-italic text-[16px] text-amber-500 text-nowrap text-right top-[0.2px] translate-x-[-100%] whitespace-pre" dir="auto">
        الرئيسية
      </p>
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute content-stretch flex gap-[37px] items-center left-[166.84px] top-[29.5px]" data-name="Container">
      <Button />
      <Button1 />
      <Button2 />
      <Button3 />
      <Button4 />
      <Container />
      <Button7 />
      <Button8 />
    </div>
  );
}

function Svgg() {
  return (
    <div className="h-[68.704px] relative shrink-0 w-[212.708px]" data-name="svgg">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 213 69">
        <g id="svgg">
          <g id="path0">
            <path d={svgPaths.pded5400} fill="#F59E0B" />
            <path d={svgPaths.p1ad51e40} fill="#F59E0B" />
            <path clipRule="evenodd" d={svgPaths.pf388480} fill="#488ECB" fillRule="evenodd" />
            <path d={svgPaths.p1fb98800} fill="#13499D" />
            <path d={svgPaths.p391f2800} fill="#F59E0B" />
            <path d={svgPaths.p2f6f7b80} fill="#F59E0B" />
            <path clipRule="evenodd" d={svgPaths.p312fe480} fill="var(--fill-0, black)" fillRule="evenodd" />
            <path d={svgPaths.p1bce4900} fill="#F59E0B" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[10px] items-start left-[975px] overflow-clip px-[2px] py-px top-[calc(50%+0.352px)] translate-y-[-50%] w-[218.11px]" data-name="Container">
      <Svgg />
    </div>
  );
}

export default function HeaderContent() {
  return (
    <div className="bg-white relative size-full" data-name="HeaderContent">
      <Container1 />
      <Container2 />
    </div>
  );
}
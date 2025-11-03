import imgRectangle1 from "figma:asset/a13f97e68db9d7160f6dd8a116b6e52b12ef7019.png";

function Button() {
  return (
    <div className="h-[28px] relative rounded-[2.68435e+07px] shrink-0 w-[47.2px]" data-name="Button">
      <p className="absolute font-['Cairo:Bold',_sans-serif] font-bold leading-[28px] left-[0.2px] not-italic text-[#303030] text-[16px] text-nowrap top-0 whitespace-pre" dir="auto">
        تواصل
      </p>
    </div>
  );
}

function Button1() {
  return (
    <div className="h-[28px] relative rounded-[2.68435e+07px] shrink-0 w-[53.013px]" data-name="Button">
      <p className="absolute font-['Cairo:Bold',_sans-serif] font-bold leading-[28px] left-[0.01px] not-italic text-[#303030] text-[16px] text-nowrap top-0 whitespace-pre" dir="auto">
        من نحن
      </p>
    </div>
  );
}

function Button2() {
  return (
    <div className="h-[28px] relative rounded-[2.68435e+07px] shrink-0 w-[56.15px]" data-name="Button">
      <p className="absolute font-['Cairo:Bold',_sans-serif] font-bold leading-[28px] left-[0.15px] not-italic text-[#303030] text-[16px] text-nowrap top-0 whitespace-pre" dir="auto">
        الشركاء
      </p>
    </div>
  );
}

function Button3() {
  return (
    <div className="h-[28px] relative rounded-[2.68435e+07px] shrink-0 w-[48px]" data-name="Button">
      <p className="absolute font-['Cairo:Bold',_sans-serif] font-bold leading-[28px] left-0 not-italic text-[#303030] text-[16px] text-nowrap top-0 whitespace-pre" dir="auto">
        الميديا
      </p>
    </div>
  );
}

function Button4() {
  return (
    <div className="h-[28px] relative rounded-[2.68435e+07px] shrink-0 w-[65px]" data-name="Button">
      <p className="absolute font-['Cairo:Bold',_sans-serif] font-bold leading-[28px] left-0 not-italic text-[#303030] text-[16px] text-nowrap top-0 whitespace-pre" dir="auto">
        المشاريع
      </p>
    </div>
  );
}

function Button5() {
  return (
    <div className="h-[28px] relative rounded-[2.68435e+07px] shrink-0 w-[59.087px]" data-name="Button">
      <p className="absolute font-['Cairo:Bold',_sans-serif] font-bold leading-[28px] left-[0.09px] not-italic text-[#303030] text-[16px] text-nowrap top-0 whitespace-pre" dir="auto">
        الخدمات
      </p>
    </div>
  );
}

function Button6() {
  return (
    <div className="h-[28px] relative rounded-[2.68435e+07px] shrink-0 w-[47px]" data-name="Button">
      <p className="absolute font-['Cairo:Bold',_sans-serif] font-bold leading-[28px] left-0 not-italic text-[#303030] text-[16px] text-nowrap top-0 whitespace-pre" dir="auto">
        الحلول
      </p>
    </div>
  );
}

function Button7() {
  return (
    <div className="h-[28px] relative rounded-[2.68435e+07px] shrink-0 w-[63.275px]" data-name="Button">
      <p className="absolute font-['Cairo:Bold',_sans-serif] font-bold leading-[28px] left-[0.28px] not-italic text-[#303030] text-[16px] text-nowrap top-0 whitespace-pre" dir="auto">
        المنتجات
      </p>
    </div>
  );
}

function Button8() {
  return (
    <div className="h-[28px] relative shrink-0 w-[60px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#13499d] border-[0px_0px_3px] border-solid bottom-[-3px] left-0 pointer-events-none right-0 shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] top-0" />
      <p className="absolute font-['Cairo:Bold',_sans-serif] font-bold leading-[28px] left-0 not-italic text-[16px] text-amber-500 text-nowrap top-0 whitespace-pre" dir="auto">
        الرئيسية
      </p>
    </div>
  );
}

function Navigation() {
  return (
    <div className="absolute content-stretch flex gap-[37px] items-center justify-end left-[calc(50%-39.637px)] top-[29.5px] translate-x-[-50%]" data-name="Navigation">
      <Button />
      <Button1 />
      <Button2 />
      <Button3 />
      <Button4 />
      <Button5 />
      <Button6 />
      <Button7 />
      <Button8 />
    </div>
  );
}

function Image() {
  return (
    <div className="absolute h-[72px] left-[985px] overflow-clip top-[4px] w-[202px]" data-name="Image (شركة القطب)">
      <div className="absolute h-[76px] left-[16px] top-[2px] w-[197px]">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[400%] left-[-26.15%] max-w-none top-[-156%] w-[153.85%]" src={imgRectangle1} />
        </div>
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="absolute h-[80px] left-0 top-0 w-[1202px]" data-name="Header">
      <Navigation />
      <Image />
    </div>
  );
}

export default function Header1() {
  return (
    <div className="bg-[rgba(246,246,246,0.95)] relative size-full" data-name="Header">
      <div aria-hidden="true" className="absolute border-[0px_0px_1.6px] border-amber-500 border-solid inset-0 pointer-events-none" />
      <Header />
    </div>
  );
}
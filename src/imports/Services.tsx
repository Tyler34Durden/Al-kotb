import svgPaths from "./svg-iesjveorhc";
import imgImage from "figma:asset/a13f97e68db9d7160f6dd8a116b6e52b12ef7019.png";
import imgContainer from "figma:asset/03f677eaac17d26b0938bff53039ae1d04a0d40c.png";
import imgFooter from "figma:asset/6a6aac02d7ce97285caf02c874b49e2286ff4655.png";

function Container() {
  return (
    <div className="absolute h-[80px] left-0 top-0 w-[1202.4px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#ffc00e] border-[0px_0px_1.6px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

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
    <div className="h-[28px] relative shrink-0 w-[58.263px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#13499d] border-[0px_0px_2.4px] border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Cairo:Bold',sans-serif] font-bold leading-[28px] left-[59px] not-italic text-[16px] text-amber-500 text-nowrap text-right top-[0.2px] translate-x-[-100%] whitespace-pre" dir="auto">
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

function Container1() {
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
    <div className="h-[28px] relative rounded-[2.68435e+07px] shrink-0 w-[59.225px]" data-name="Button">
      <p className="absolute font-['Cairo:Bold',sans-serif] font-bold leading-[28px] left-[60px] not-italic text-[#303030] text-[16px] text-nowrap text-right top-[0.2px] translate-x-[-100%] whitespace-pre" dir="auto">
        الرئيسية
      </p>
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute content-stretch flex gap-[37px] items-center left-[166.84px] top-[29.5px]" data-name="Container">
      <Button />
      <Button1 />
      <Button2 />
      <Button3 />
      <Button4 />
      <Container1 />
      <Button7 />
      <Button8 />
    </div>
  );
}

function Image() {
  return (
    <div className="h-[304px] relative shrink-0 w-full" data-name="Image (شركة القطب)">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage} />
    </div>
  );
}

function Image1() {
  return (
    <div className="box-border content-stretch flex flex-col h-[76px] items-start overflow-clip pb-0 relative shrink-0 w-full" data-name="Image">
      <Image />
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute box-border content-stretch flex flex-col h-[72px] items-start left-[985px] overflow-clip pb-0 pl-[16px] pt-[2px] top-[4px] w-[202px]" data-name="Container">
      <Image1 />
    </div>
  );
}

function HeaderContent() {
  return (
    <div className="absolute h-[80px] left-0 top-0 w-[1202px]" data-name="HeaderContent">
      <Container2 />
      <Container3 />
    </div>
  );
}

function Header() {
  return (
    <div className="bg-[rgba(246,246,246,0.95)] h-[80px] relative shrink-0 w-[1202px]" data-name="Header">
      <Container />
      <HeaderContent />
    </div>
  );
}

function Container4() {
  return (
    <div className="absolute h-[252px] left-[0.2px] opacity-20 top-0 w-[1202px]" data-name="Container">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[847.97%] left-0 max-w-none top-[-556.53%] w-full" src={imgContainer} />
      </div>
    </div>
  );
}

function Heading1() {
  return (
    <div className="absolute h-[48px] left-[201.2px] top-[64px] w-[896px]" data-name="Heading 1">
      <p className="absolute font-['Cairo:Bold',sans-serif] font-bold leading-[48px] left-[896.16px] not-italic text-[48px] text-nowrap text-right text-white top-[0.2px] translate-x-[-100%] whitespace-pre" dir="auto">
        خدماتنا المتميزة
      </p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="absolute h-[28px] left-[201.2px] top-[128px] w-[896px]" data-name="Paragraph">
      <p className="absolute font-['Cairo:Regular',sans-serif] font-normal leading-[28px] left-[896.81px] not-italic text-[20px] text-blue-100 text-nowrap text-right top-[0.2px] translate-x-[-100%] whitespace-pre" dir="auto">
        خدمات شاملة ومتكاملة تغطي جميع احتياجاتك من التوريد والتركيب إلى الصيانة والدعم الفني
      </p>
    </div>
  );
}

function Section() {
  return (
    <div className="absolute bg-gradient-to-b from-[#13499d] h-[252px] left-[-0.2px] to-[#0f1629] top-0 w-[1202.4px]" data-name="Section">
      <Container4 />
      <Heading1 />
      <Paragraph />
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[28px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
        <g id="Icon">
          <path d={svgPaths.p12cc5000} id="Vector" stroke="var(--stroke-0, #303030)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
          <path d="M17.5 21H10.5" id="Vector_2" stroke="var(--stroke-0, #303030)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
          <path d={svgPaths.p3a5ba480} id="Vector_3" stroke="var(--stroke-0, #303030)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
          <path d={svgPaths.pa689e00} id="Vector_4" stroke="var(--stroke-0, #303030)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
          <path d={svgPaths.p26ea4300} id="Vector_5" stroke="var(--stroke-0, #303030)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container5() {
  return (
    <div className="bg-[#f6f6f6] relative rounded-[2.68435e+07px] shrink-0 size-[56px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#303030] border-solid inset-0 pointer-events-none rounded-[2.68435e+07px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center p-px relative size-[56px]">
        <Icon />
      </div>
    </div>
  );
}

function CardTitle() {
  return (
    <div className="h-[28px] relative shrink-0 w-[205.85px]" data-name="CardTitle">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[28px] relative w-[205.85px]">
        <p className="absolute font-['Cairo:Regular',sans-serif] font-normal leading-[28px] left-[206px] not-italic text-[#303030] text-[20px] text-nowrap text-right top-[0.2px] translate-x-[-100%] whitespace-pre" dir="auto">
          التوريد والتركيب والتشغيل
        </p>
      </div>
    </div>
  );
}

function ServicesPage() {
  return (
    <div className="absolute box-border content-stretch flex gap-[16px] h-[56px] items-center justify-end left-[24px] pl-0 pr-[152.55px] py-0 top-[24px] w-[430.4px]" data-name="ServicesPage">
      <Container5 />
      <CardTitle />
    </div>
  );
}

function ServicesPage1() {
  return (
    <div className="absolute h-[24px] left-[24px] top-[102px] w-[430.4px]" data-name="ServicesPage">
      <p className="absolute font-['Cairo:SemiBold',sans-serif] font-semibold leading-[24px] left-[431.01px] not-italic text-[#303030] text-[16px] text-nowrap text-right top-[-0.2px] translate-x-[-100%] whitespace-pre" dir="auto">
        خدمة شاملة من التوريد حتى التشغيل في جميع أنحاء ليبيا
      </p>
    </div>
  );
}

function CardHeader() {
  return (
    <div className="h-[126px] relative shrink-0 w-[478.4px]" data-name="CardHeader">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[126px] relative w-[478.4px]">
        <ServicesPage />
        <ServicesPage1 />
      </div>
    </div>
  );
}

function Icon1() {
  return (
    <div className="absolute left-0 size-[20px] top-[2px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_122_835)" id="Icon">
          <path d={svgPaths.p35700380} id="Vector" stroke="var(--stroke-0, #00C950)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3fe63d80} id="Vector_2" stroke="var(--stroke-0, #00C950)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
        <defs>
          <clipPath id="clip0_122_835">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text() {
  return (
    <div className="absolute h-[24px] left-[28px] top-0 w-[162.9px]" data-name="Text">
      <p className="absolute font-['Cairo:Regular',sans-serif] font-normal leading-[24px] left-[163px] not-italic text-[#4a5565] text-[16px] text-nowrap text-right top-[-0.2px] translate-x-[-100%] whitespace-pre" dir="auto">
        توريد من المصانع مباشرة
      </p>
    </div>
  );
}

function ListItem() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <Icon1 />
      <Text />
    </div>
  );
}

function Icon2() {
  return (
    <div className="absolute left-0 size-[20px] top-[2px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_122_835)" id="Icon">
          <path d={svgPaths.p35700380} id="Vector" stroke="var(--stroke-0, #00C950)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3fe63d80} id="Vector_2" stroke="var(--stroke-0, #00C950)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
        <defs>
          <clipPath id="clip0_122_835">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text1() {
  return (
    <div className="absolute h-[24px] left-[28px] top-0 w-[172.738px]" data-name="Text">
      <p className="absolute font-['Cairo:Regular',sans-serif] font-normal leading-[24px] left-[173px] not-italic text-[#4a5565] text-[16px] text-nowrap text-right top-[-0.2px] translate-x-[-100%] whitespace-pre" dir="auto">
        تركيب بأيدي فنيين مختصين
      </p>
    </div>
  );
}

function ListItem1() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <Icon2 />
      <Text1 />
    </div>
  );
}

function Icon3() {
  return (
    <div className="absolute left-0 size-[20px] top-[2px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_122_835)" id="Icon">
          <path d={svgPaths.p35700380} id="Vector" stroke="var(--stroke-0, #00C950)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3fe63d80} id="Vector_2" stroke="var(--stroke-0, #00C950)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
        <defs>
          <clipPath id="clip0_122_835">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text2() {
  return (
    <div className="absolute h-[24px] left-[28px] top-0 w-[169.363px]" data-name="Text">
      <p className="absolute font-['Cairo:Regular',sans-serif] font-normal leading-[24px] left-[170px] not-italic text-[#4a5565] text-[16px] text-nowrap text-right top-[-0.2px] translate-x-[-100%] whitespace-pre" dir="auto">
        تدريب الفريق على التشغيل
      </p>
    </div>
  );
}

function ListItem2() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <Icon3 />
      <Text2 />
    </div>
  );
}

function Icon4() {
  return (
    <div className="absolute left-0 size-[20px] top-[2px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_122_835)" id="Icon">
          <path d={svgPaths.p35700380} id="Vector" stroke="var(--stroke-0, #00C950)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3fe63d80} id="Vector_2" stroke="var(--stroke-0, #00C950)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
        <defs>
          <clipPath id="clip0_122_835">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text3() {
  return (
    <div className="absolute h-[24px] left-[28px] top-0 w-[162.725px]" data-name="Text">
      <p className="absolute font-['Cairo:Regular',sans-serif] font-normal leading-[24px] left-[163px] not-italic text-[#4a5565] text-[16px] text-nowrap text-right top-[-0.2px] translate-x-[-100%] whitespace-pre" dir="auto">
        ضمان شامل لمدة عامين
      </p>
    </div>
  );
}

function ListItem3() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <Icon4 />
      <Text3 />
    </div>
  );
}

function Icon5() {
  return (
    <div className="absolute left-0 size-[20px] top-[2px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_122_835)" id="Icon">
          <path d={svgPaths.p35700380} id="Vector" stroke="var(--stroke-0, #00C950)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3fe63d80} id="Vector_2" stroke="var(--stroke-0, #00C950)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
        <defs>
          <clipPath id="clip0_122_835">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text4() {
  return (
    <div className="absolute h-[24px] left-[28px] top-0 w-[161.125px]" data-name="Text">
      <p className="absolute font-['Cairo:Regular',sans-serif] font-normal leading-[24px] left-[162px] not-italic text-[#4a5565] text-[16px] text-nowrap text-right top-[-0.2px] translate-x-[-100%] whitespace-pre" dir="auto">
        تغطية جميع المدن الليبية
      </p>
    </div>
  );
}

function ListItem4() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <Icon5 />
      <Text4 />
    </div>
  );
}

function ServicesPage2() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[168px] items-start relative shrink-0 w-full" data-name="ServicesPage">
      <ListItem />
      <ListItem1 />
      <ListItem2 />
      <ListItem3 />
      <ListItem4 />
    </div>
  );
}

function Icon6() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_122_816)" id="Icon">
          <path d={svgPaths.p26187580} id="Vector" stroke="var(--stroke-0, #F6F6F6)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_122_816">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Button9() {
  return (
    <div className="bg-[#13499d] relative rounded-[6px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[167px] py-[8px] relative w-full">
          <Icon6 />
          <p className="font-['Cairo:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[14px] text-nowrap text-white whitespace-pre" dir="auto">
            طلب الخدمة الآن
          </p>
        </div>
      </div>
    </div>
  );
}

function CardContent3() {
  return (
    <div className="h-[383.175px] relative shrink-0 w-[478.4px]" data-name="CardContent3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[24px] h-[383.175px] items-start px-[24px] py-0 relative w-[478.4px]">
        <ServicesPage2 />
        <Button9 />
      </div>
    </div>
  );
}

function Card3() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col gap-[24px] h-[404px] items-start left-[512px] p-[0.8px] rounded-[12px] top-0 w-[480px]" data-name="Card3">
      <div aria-hidden="true" className="absolute border-[#d6d6d6] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <CardHeader />
      <CardContent3 />
    </div>
  );
}

function Icon7() {
  return (
    <div className="relative shrink-0 size-[28px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
        <g id="Icon">
          <path d={svgPaths.p10452500} id="Vector" stroke="var(--stroke-0, #303030)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
          <path d={svgPaths.p25c6f00} id="Vector_2" stroke="var(--stroke-0, #303030)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container6() {
  return (
    <div className="bg-[#f6f6f6] relative rounded-[2.68435e+07px] shrink-0 size-[56px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#303030] border-solid inset-0 pointer-events-none rounded-[2.68435e+07px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center p-px relative size-[56px]">
        <Icon7 />
      </div>
    </div>
  );
}

function CardTitle1() {
  return (
    <div className="h-[28px] relative shrink-0 w-[168.8px]" data-name="CardTitle">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[28px] relative w-[168.8px]">
        <p className="absolute font-['Cairo:Regular',sans-serif] font-normal leading-[28px] left-[169px] not-italic text-[#303030] text-[20px] text-nowrap text-right top-[0.2px] translate-x-[-100%] whitespace-pre" dir="auto">
          الصيانة والدعم الفني
        </p>
      </div>
    </div>
  );
}

function ServicesPage3() {
  return (
    <div className="absolute box-border content-stretch flex gap-[16px] h-[56px] items-center justify-end left-[24px] pl-0 pr-[189.6px] py-0 top-[24px] w-[430.4px]" data-name="ServicesPage">
      <Container6 />
      <CardTitle1 />
    </div>
  );
}

function ServicesPage4() {
  return (
    <div className="absolute h-[24px] left-[24px] top-[102px] w-[430.4px]" data-name="ServicesPage">
      <p className="absolute font-['Cairo:SemiBold',sans-serif] font-semibold leading-[24px] left-[431px] not-italic text-[#303030] text-[16px] text-nowrap text-right top-[-0.2px] translate-x-[-100%] whitespace-pre" dir="auto">
        صيانة دورية وطارئة مع عقود صيانة مرنة
      </p>
    </div>
  );
}

function CardHeader1() {
  return (
    <div className="h-[126px] relative shrink-0 w-[478.4px]" data-name="CardHeader">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[126px] relative w-[478.4px]">
        <ServicesPage3 />
        <ServicesPage4 />
      </div>
    </div>
  );
}

function Icon8() {
  return (
    <div className="absolute left-0 size-[20px] top-[2px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_122_826)" id="Icon">
          <path d={svgPaths.p15eed500} id="Vector" stroke="var(--stroke-0, #00C950)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3fe63d80} id="Vector_2" stroke="var(--stroke-0, #00C950)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
        <defs>
          <clipPath id="clip0_122_826">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text5() {
  return (
    <div className="absolute h-[24px] left-[28px] top-0 w-[129.413px]" data-name="Text">
      <p className="absolute font-['Cairo:Regular',sans-serif] font-normal leading-[24px] left-[130px] not-italic text-[#4a5565] text-[16px] text-nowrap text-right top-[-0.2px] translate-x-[-100%] whitespace-pre" dir="auto">
        صيانة دورية مجدولة
      </p>
    </div>
  );
}

function ListItem5() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <Icon8 />
      <Text5 />
    </div>
  );
}

function Icon9() {
  return (
    <div className="absolute left-0 size-[20px] top-[2px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_122_826)" id="Icon">
          <path d={svgPaths.p15eed500} id="Vector" stroke="var(--stroke-0, #00C950)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3fe63d80} id="Vector_2" stroke="var(--stroke-0, #00C950)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
        <defs>
          <clipPath id="clip0_122_826">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text6() {
  return (
    <div className="absolute h-[24px] left-[28px] top-0 w-[153.3px]" data-name="Text">
      <p className="absolute font-['Cairo:Regular',sans-serif] font-normal leading-[24px] left-[154px] not-italic text-[#4a5565] text-[16px] text-nowrap text-right top-[-0.2px] translate-x-[-100%] whitespace-pre" dir="auto">
        استجابة سريعة للطوارئ
      </p>
    </div>
  );
}

function ListItem6() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <Icon9 />
      <Text6 />
    </div>
  );
}

function Icon10() {
  return (
    <div className="absolute left-0 size-[20px] top-[2px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_122_826)" id="Icon">
          <path d={svgPaths.p15eed500} id="Vector" stroke="var(--stroke-0, #00C950)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3fe63d80} id="Vector_2" stroke="var(--stroke-0, #00C950)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
        <defs>
          <clipPath id="clip0_122_826">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text7() {
  return (
    <div className="absolute h-[24px] left-[28px] top-0 w-[134.938px]" data-name="Text">
      <p className="absolute font-['Cairo:Regular',sans-serif] font-normal leading-[24px] left-[135px] not-italic text-[#4a5565] text-[16px] text-right top-[-0.2px] translate-x-[-100%] w-[135px]" dir="auto">
        فريق فني متاح 24/7
      </p>
    </div>
  );
}

function ListItem7() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <Icon10 />
      <Text7 />
    </div>
  );
}

function Icon11() {
  return (
    <div className="absolute left-0 size-[20px] top-[2px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_122_826)" id="Icon">
          <path d={svgPaths.p15eed500} id="Vector" stroke="var(--stroke-0, #00C950)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3fe63d80} id="Vector_2" stroke="var(--stroke-0, #00C950)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
        <defs>
          <clipPath id="clip0_122_826">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text8() {
  return (
    <div className="absolute h-[24px] left-[28px] top-0 w-[125.188px]" data-name="Text">
      <p className="absolute font-['Cairo:Regular',sans-serif] font-normal leading-[24px] left-[126px] not-italic text-[#4a5565] text-[16px] text-nowrap text-right top-[-0.2px] translate-x-[-100%] whitespace-pre" dir="auto">
        تقارير صيانة مفصلة
      </p>
    </div>
  );
}

function ListItem8() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <Icon11 />
      <Text8 />
    </div>
  );
}

function Icon12() {
  return (
    <div className="absolute left-0 size-[20px] top-[2px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_122_826)" id="Icon">
          <path d={svgPaths.p15eed500} id="Vector" stroke="var(--stroke-0, #00C950)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3fe63d80} id="Vector_2" stroke="var(--stroke-0, #00C950)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
        <defs>
          <clipPath id="clip0_122_826">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text9() {
  return (
    <div className="absolute h-[24px] left-[28px] top-0 w-[160.9px]" data-name="Text">
      <p className="absolute font-['Cairo:Regular',sans-serif] font-normal leading-[24px] left-[161px] not-italic text-[#4a5565] text-[16px] text-nowrap text-right top-[-0.2px] translate-x-[-100%] whitespace-pre" dir="auto">
        ضمان على جميع الأعمال
      </p>
    </div>
  );
}

function ListItem9() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <Icon12 />
      <Text9 />
    </div>
  );
}

function ServicesPage5() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[168px] items-start relative shrink-0 w-full" data-name="ServicesPage">
      <ListItem5 />
      <ListItem6 />
      <ListItem7 />
      <ListItem8 />
      <ListItem9 />
    </div>
  );
}

function Icon13() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_122_816)" id="Icon">
          <path d={svgPaths.p26187580} id="Vector" stroke="var(--stroke-0, #F6F6F6)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_122_816">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Button10() {
  return (
    <div className="bg-[#13499d] relative rounded-[6px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[167px] py-[8px] relative w-full">
          <Icon13 />
          <p className="font-['Cairo:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[14px] text-nowrap text-white whitespace-pre" dir="auto">
            طلب الخدمة الآن
          </p>
        </div>
      </div>
    </div>
  );
}

function CardContent4() {
  return (
    <div className="h-[252px] relative shrink-0 w-[478.4px]" data-name="CardContent3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[24px] h-[252px] items-start px-[24px] py-0 relative w-[478.4px]">
        <ServicesPage5 />
        <Button10 />
      </div>
    </div>
  );
}

function Card4() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col gap-[24px] items-start left-0 p-[0.8px] rounded-[12px] top-0 w-[480px]" data-name="Card3">
      <div aria-hidden="true" className="absolute border-[#d6d6d6] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <CardHeader1 />
      <CardContent4 />
    </div>
  );
}

function Icon14() {
  return (
    <div className="relative shrink-0 size-[28px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
        <g id="Icon">
          <path d={svgPaths.pe386d00} id="Vector" stroke="var(--stroke-0, #303030)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container7() {
  return (
    <div className="bg-[#f6f6f6] relative rounded-[2.68435e+07px] shrink-0 size-[56px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#303030] border-solid inset-0 pointer-events-none rounded-[2.68435e+07px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center p-px relative size-[56px]">
        <Icon14 />
      </div>
    </div>
  );
}

function CardTitle2() {
  return (
    <div className="h-[28px] relative shrink-0 w-[191.625px]" data-name="CardTitle">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[28px] relative w-[191.625px]">
        <p className="absolute font-['Cairo:Regular',sans-serif] font-normal leading-[28px] left-[192px] not-italic text-[#303030] text-[20px] text-nowrap text-right top-[0.2px] translate-x-[-100%] whitespace-pre" dir="auto">
          توريد قطع الغيار الأصلية
        </p>
      </div>
    </div>
  );
}

function ServicesPage6() {
  return (
    <div className="absolute box-border content-stretch flex gap-[16px] h-[56px] items-center justify-end left-[24px] pl-0 pr-[166.775px] py-0 top-[24px] w-[430.4px]" data-name="ServicesPage">
      <Container7 />
      <CardTitle2 />
    </div>
  );
}

function ServicesPage7() {
  return (
    <div className="absolute h-[24px] left-[24px] top-[102px] w-[430.4px]" data-name="ServicesPage">
      <p className="absolute font-['Cairo:SemiBold',sans-serif] font-semibold leading-[24px] left-[430.6px] not-italic text-[#303030] text-[16px] text-nowrap text-right top-[-0.2px] translate-x-[-100%] whitespace-pre" dir="auto">
        مخزون دائم من قطع الغيار الأصلية مع ضمان الجودة
      </p>
    </div>
  );
}

function CardHeader2() {
  return (
    <div className="h-[126px] relative shrink-0 w-[478.4px]" data-name="CardHeader">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[126px] relative w-[478.4px]">
        <ServicesPage6 />
        <ServicesPage7 />
      </div>
    </div>
  );
}

function Icon15() {
  return (
    <div className="absolute left-0 size-[20px] top-[2px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_122_835)" id="Icon">
          <path d={svgPaths.p35700380} id="Vector" stroke="var(--stroke-0, #00C950)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3fe63d80} id="Vector_2" stroke="var(--stroke-0, #00C950)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
        <defs>
          <clipPath id="clip0_122_835">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text10() {
  return (
    <div className="absolute h-[24px] left-[28px] top-0 w-[137.6px]" data-name="Text">
      <p className="absolute font-['Cairo:Regular',sans-serif] font-normal leading-[24px] left-[138px] not-italic text-[#4a5565] text-[16px] text-right top-[-0.2px] translate-x-[-100%] w-[138px]" dir="auto">
        قطع غيار أصلية 100%
      </p>
    </div>
  );
}

function ListItem10() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <Icon15 />
      <Text10 />
    </div>
  );
}

function Icon16() {
  return (
    <div className="absolute left-0 size-[20px] top-[2px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_122_835)" id="Icon">
          <path d={svgPaths.p35700380} id="Vector" stroke="var(--stroke-0, #00C950)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3fe63d80} id="Vector_2" stroke="var(--stroke-0, #00C950)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
        <defs>
          <clipPath id="clip0_122_835">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text11() {
  return (
    <div className="absolute h-[24px] left-[28px] top-0 w-[127.625px]" data-name="Text">
      <p className="absolute font-['Cairo:Regular',sans-serif] font-normal leading-[24px] left-[128px] not-italic text-[#4a5565] text-[16px] text-nowrap text-right top-[-0.2px] translate-x-[-100%] whitespace-pre" dir="auto">
        مخزون دائم ومتجدد
      </p>
    </div>
  );
}

function ListItem11() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <Icon16 />
      <Text11 />
    </div>
  );
}

function Icon17() {
  return (
    <div className="absolute left-0 size-[20px] top-[2px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_122_835)" id="Icon">
          <path d={svgPaths.p35700380} id="Vector" stroke="var(--stroke-0, #00C950)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3fe63d80} id="Vector_2" stroke="var(--stroke-0, #00C950)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
        <defs>
          <clipPath id="clip0_122_835">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text12() {
  return (
    <div className="absolute h-[24px] left-[28px] top-0 w-[164.875px]" data-name="Text">
      <p className="absolute font-['Cairo:Regular',sans-serif] font-normal leading-[24px] left-[165px] not-italic text-[#4a5565] text-[16px] text-nowrap text-right top-[-0.2px] translate-x-[-100%] whitespace-pre" dir="auto">
        توصيل سريع لجميع المدن
      </p>
    </div>
  );
}

function ListItem12() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <Icon17 />
      <Text12 />
    </div>
  );
}

function Icon18() {
  return (
    <div className="absolute left-0 size-[20px] top-[2px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_122_835)" id="Icon">
          <path d={svgPaths.p35700380} id="Vector" stroke="var(--stroke-0, #00C950)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3fe63d80} id="Vector_2" stroke="var(--stroke-0, #00C950)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
        <defs>
          <clipPath id="clip0_122_835">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text13() {
  return (
    <div className="absolute h-[24px] left-[28px] top-0 w-[156.588px]" data-name="Text">
      <p className="absolute font-['Cairo:Regular',sans-serif] font-normal leading-[24px] left-[157px] not-italic text-[#4a5565] text-[16px] text-nowrap text-right top-[-0.2px] translate-x-[-100%] whitespace-pre" dir="auto">
        ضمان شامل على القطع
      </p>
    </div>
  );
}

function ListItem13() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <Icon18 />
      <Text13 />
    </div>
  );
}

function Icon19() {
  return (
    <div className="absolute left-0 size-[20px] top-[2px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_122_835)" id="Icon">
          <path d={svgPaths.p35700380} id="Vector" stroke="var(--stroke-0, #00C950)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3fe63d80} id="Vector_2" stroke="var(--stroke-0, #00C950)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
        <defs>
          <clipPath id="clip0_122_835">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text14() {
  return (
    <div className="absolute h-[24px] left-[28px] top-0 w-[91.287px]" data-name="Text">
      <p className="absolute font-['Cairo:Regular',sans-serif] font-normal leading-[24px] left-[92px] not-italic text-[#4a5565] text-[16px] text-nowrap text-right top-[-0.2px] translate-x-[-100%] whitespace-pre" dir="auto">
        أسعار تنافسية
      </p>
    </div>
  );
}

function ListItem14() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <Icon19 />
      <Text14 />
    </div>
  );
}

function ServicesPage8() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[168px] items-start relative shrink-0 w-full" data-name="ServicesPage">
      <ListItem10 />
      <ListItem11 />
      <ListItem12 />
      <ListItem13 />
      <ListItem14 />
    </div>
  );
}

function Icon20() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_122_816)" id="Icon">
          <path d={svgPaths.p26187580} id="Vector" stroke="var(--stroke-0, #F6F6F6)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_122_816">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Button11() {
  return (
    <div className="bg-[#13499d] relative rounded-[6px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[167px] py-[8px] relative w-full">
          <Icon20 />
          <p className="font-['Cairo:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[14px] text-nowrap text-white whitespace-pre" dir="auto">
            طلب الخدمة الآن
          </p>
        </div>
      </div>
    </div>
  );
}

function CardContent5() {
  return (
    <div className="relative shrink-0 w-[478.4px]" data-name="CardContent3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[24px] items-start p-[24px] relative w-[478.4px]">
        <ServicesPage8 />
        <Button11 />
      </div>
    </div>
  );
}

function Card5() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col gap-[24px] items-start left-[512px] p-[0.8px] rounded-[12px] top-[451px] w-[480px]" data-name="Card3">
      <div aria-hidden="true" className="absolute border-[#d6d6d6] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <CardHeader2 />
      <CardContent5 />
    </div>
  );
}

function Icon21() {
  return (
    <div className="relative shrink-0 size-[28px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
        <g id="Icon">
          <path d={svgPaths.p184ba090} id="Vector" stroke="var(--stroke-0, #303030)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
          <path d={svgPaths.pcd80870} id="Vector_2" stroke="var(--stroke-0, #303030)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
          <path d={svgPaths.p36197298} id="Vector_3" stroke="var(--stroke-0, #303030)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
          <path d={svgPaths.p5d36b00} id="Vector_4" stroke="var(--stroke-0, #303030)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container8() {
  return (
    <div className="bg-[#f6f6f6] relative rounded-[2.68435e+07px] shrink-0 size-[56px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#303030] border-solid inset-0 pointer-events-none rounded-[2.68435e+07px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center p-px relative size-[56px]">
        <Icon21 />
      </div>
    </div>
  );
}

function CardTitle3() {
  return (
    <div className="h-[28px] relative shrink-0 w-[229.163px]" data-name="CardTitle">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[28px] relative w-[229.163px]">
        <p className="absolute font-['Cairo:Regular',sans-serif] font-normal leading-[28px] left-[230px] not-italic text-[#303030] text-[20px] text-nowrap text-right top-[0.2px] translate-x-[-100%] whitespace-pre" dir="auto">
          الاستشارات التقنية والتصميم
        </p>
      </div>
    </div>
  );
}

function ServicesPage9() {
  return (
    <div className="absolute box-border content-stretch flex gap-[16px] h-[56px] items-center justify-end left-[24px] pl-0 pr-[129.237px] py-0 top-[24px] w-[430.4px]" data-name="ServicesPage">
      <Container8 />
      <CardTitle3 />
    </div>
  );
}

function ServicesPage10() {
  return (
    <div className="absolute h-[24px] left-[24px] top-[102px] w-[430.4px]" data-name="ServicesPage">
      <p className="absolute font-['Cairo:SemiBold',sans-serif] font-semibold leading-[24px] left-[431.13px] not-italic text-[#303030] text-[16px] text-nowrap text-right top-[-0.2px] translate-x-[-100%] whitespace-pre" dir="auto">
        تصميم المخازن والورش وتحسين مسارات الحركة وأحمال الرفوف
      </p>
    </div>
  );
}

function CardHeader3() {
  return (
    <div className="h-[126px] relative shrink-0 w-[478.4px]" data-name="CardHeader">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[126px] relative w-[478.4px]">
        <ServicesPage9 />
        <ServicesPage10 />
      </div>
    </div>
  );
}

function Icon22() {
  return (
    <div className="absolute left-0 size-[20px] top-[2px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_122_826)" id="Icon">
          <path d={svgPaths.p15eed500} id="Vector" stroke="var(--stroke-0, #00C950)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3fe63d80} id="Vector_2" stroke="var(--stroke-0, #00C950)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
        <defs>
          <clipPath id="clip0_122_826">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text15() {
  return (
    <div className="absolute h-[24px] left-[28px] top-0 w-[176.15px]" data-name="Text">
      <p className="absolute font-['Cairo:Regular',sans-serif] font-normal leading-[24px] left-[177px] not-italic text-[#4a5565] text-[16px] text-nowrap text-right top-[-0.2px] translate-x-[-100%] whitespace-pre" dir="auto">
        تصميم تخطيط المستودعات
      </p>
    </div>
  );
}

function ListItem15() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <Icon22 />
      <Text15 />
    </div>
  );
}

function Icon23() {
  return (
    <div className="absolute left-0 size-[20px] top-[2px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_122_826)" id="Icon">
          <path d={svgPaths.p15eed500} id="Vector" stroke="var(--stroke-0, #00C950)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3fe63d80} id="Vector_2" stroke="var(--stroke-0, #00C950)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
        <defs>
          <clipPath id="clip0_122_826">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text16() {
  return (
    <div className="absolute h-[24px] left-[28px] top-0 w-[142.913px]" data-name="Text">
      <p className="absolute font-['Cairo:Regular',sans-serif] font-normal leading-[24px] left-[143px] not-italic text-[#4a5565] text-[16px] text-nowrap text-right top-[-0.2px] translate-x-[-100%] whitespace-pre" dir="auto">
        تحسين مسارات الحركة
      </p>
    </div>
  );
}

function ListItem16() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <Icon23 />
      <Text16 />
    </div>
  );
}

function Icon24() {
  return (
    <div className="absolute left-0 size-[20px] top-[2px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_122_826)" id="Icon">
          <path d={svgPaths.p15eed500} id="Vector" stroke="var(--stroke-0, #00C950)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3fe63d80} id="Vector_2" stroke="var(--stroke-0, #00C950)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
        <defs>
          <clipPath id="clip0_122_826">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text17() {
  return (
    <div className="absolute h-[24px] left-[28px] top-0 w-[135.4px]" data-name="Text">
      <p className="absolute font-['Cairo:Regular',sans-serif] font-normal leading-[24px] left-[136px] not-italic text-[#4a5565] text-[16px] text-nowrap text-right top-[-0.2px] translate-x-[-100%] whitespace-pre" dir="auto">
        حساب أحمال الرفوف
      </p>
    </div>
  );
}

function ListItem17() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <Icon24 />
      <Text17 />
    </div>
  );
}

function Icon25() {
  return (
    <div className="absolute left-0 size-[20px] top-[2px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_122_826)" id="Icon">
          <path d={svgPaths.p15eed500} id="Vector" stroke="var(--stroke-0, #00C950)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3fe63d80} id="Vector_2" stroke="var(--stroke-0, #00C950)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
        <defs>
          <clipPath id="clip0_122_826">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text18() {
  return (
    <div className="absolute h-[24px] left-[28px] top-0 w-[100.325px]" data-name="Text">
      <p className="absolute font-['Cairo:Regular',sans-serif] font-normal leading-[24px] left-[101px] not-italic text-[#4a5565] text-[16px] text-nowrap text-right top-[-0.2px] translate-x-[-100%] whitespace-pre" dir="auto">
        دراسات الجدوى
      </p>
    </div>
  );
}

function ListItem18() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <Icon25 />
      <Text18 />
    </div>
  );
}

function Icon26() {
  return (
    <div className="absolute left-0 size-[20px] top-[2px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_122_826)" id="Icon">
          <path d={svgPaths.p15eed500} id="Vector" stroke="var(--stroke-0, #00C950)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3fe63d80} id="Vector_2" stroke="var(--stroke-0, #00C950)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
        <defs>
          <clipPath id="clip0_122_826">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text19() {
  return (
    <div className="absolute h-[24px] left-[28px] top-0 w-[105.938px]" data-name="Text">
      <p className="absolute font-['Cairo:Regular',sans-serif] font-normal leading-[24px] left-[106px] not-italic text-[#4a5565] text-[16px] text-nowrap text-right top-[-0.2px] translate-x-[-100%] whitespace-pre" dir="auto">
        تدريب الموظفين
      </p>
    </div>
  );
}

function ListItem19() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <Icon26 />
      <Text19 />
    </div>
  );
}

function ServicesPage11() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[168px] items-start relative shrink-0 w-full" data-name="ServicesPage">
      <ListItem15 />
      <ListItem16 />
      <ListItem17 />
      <ListItem18 />
      <ListItem19 />
    </div>
  );
}

function Icon27() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_122_816)" id="Icon">
          <path d={svgPaths.p26187580} id="Vector" stroke="var(--stroke-0, #F6F6F6)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_122_816">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Button12() {
  return (
    <div className="bg-[#13499d] relative rounded-[6px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[167px] py-[8px] relative w-full">
          <Icon27 />
          <p className="font-['Cairo:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[14px] text-nowrap text-white whitespace-pre" dir="auto">
            طلب الخدمة الآن
          </p>
        </div>
      </div>
    </div>
  );
}

function CardContent6() {
  return (
    <div className="h-[276px] relative shrink-0 w-[478px]" data-name="CardContent3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[46.5px] h-[276px] items-start px-[24px] py-0 relative w-[478px]">
        <ServicesPage11 />
        <Button12 />
      </div>
    </div>
  );
}

function Card6() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col gap-[24px] items-start left-0 p-[0.8px] rounded-[12px] top-[451px] w-[480px]" data-name="Card3">
      <div aria-hidden="true" className="absolute border-[#d6d6d6] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <CardHeader3 />
      <CardContent6 />
    </div>
  );
}

function Section1() {
  return (
    <div className="absolute h-[912px] left-[105px] top-[302px] w-[992px]" data-name="Section">
      <Card3 />
      <Card4 />
      <Card5 />
      <Card6 />
    </div>
  );
}

function Heading2() {
  return (
    <div className="h-[36px] relative shrink-0 w-[187.925px]" data-name="Heading 2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[36px] relative w-[187.925px]">
        <p className="absolute font-['Cairo:Bold',sans-serif] font-bold leading-[36px] left-[188px] not-italic text-[#0f1629] text-[30px] text-nowrap text-right top-[-0.4px] translate-x-[-100%] whitespace-pre" dir="auto">
          خدمة الطوارئ
        </p>
      </div>
    </div>
  );
}

function Icon28() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Icon">
          <path d={svgPaths.p1dee4500} id="Vector" stroke="var(--stroke-0, #FB2C36)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d="M16 10.6667V16" id="Vector_2" stroke="var(--stroke-0, #FB2C36)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d="M16 21.3333H16.0133" id="Vector_3" stroke="var(--stroke-0, #FB2C36)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex gap-[12px] items-center justify-end relative shrink-0 w-[472px]" data-name="Container">
      <Heading2 />
      <Icon28 />
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="flex flex-row items-center justify-end size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-end px-[20px] py-0 relative w-full">
          <p className="font-['Cairo:Regular',sans-serif] font-normal leading-[28px] not-italic relative shrink-0 text-[#4a5565] text-[20px] text-nowrap text-right whitespace-pre" dir="auto">
            خدمة طوارئ على مدار الساعة للحالات الحرجة والتوقفات غير المخططة
          </p>
        </div>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-end relative shrink-0 w-full">
      <Container9 />
      <Paragraph1 />
    </div>
  );
}

function Heading3() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Cairo:SemiBold',sans-serif] font-semibold leading-[24px] left-[164.03px] not-italic text-[#303030] text-[16px] text-nowrap text-right top-[-0.2px] translate-x-[-100%] whitespace-pre" dir="auto">
        خط ساخن
      </p>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Cairo:Regular',sans-serif] font-normal leading-[20px] left-[164px] not-italic text-[#7f7f7f] text-[14px] text-right top-[-0.2px] translate-x-[-100%] w-[164px]" dir="auto">
        متاح 24/7 طوال أيام الأسبوع
      </p>
    </div>
  );
}

function Container10() {
  return (
    <div className="h-[44px] relative shrink-0 w-[163.3px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[44px] items-start relative w-[163.3px]">
        <Heading3 />
        <Paragraph2 />
      </div>
    </div>
  );
}

function Icon29() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p3a2d4980} id="Vector" stroke="var(--stroke-0, #303030)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Container11() {
  return (
    <div className="bg-white box-border content-stretch flex gap-[12px] h-[76px] items-center justify-end pb-0 pl-0 pr-[24px] pt-[3px] relative rounded-[8px] shrink-0 w-[490.333px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#fb2c36] border-[3px_0px_0px] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Container10 />
      <Icon29 />
    </div>
  );
}

function Heading4() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Cairo:SemiBold',sans-serif] font-semibold leading-[24px] left-[163.49px] not-italic text-[#303030] text-[16px] text-nowrap text-right top-[-0.2px] translate-x-[-100%] whitespace-pre" dir="auto">
        فريق خبراء
      </p>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Cairo:Regular',sans-serif] font-normal leading-[20px] left-[163px] not-italic text-[#7f7f7f] text-[14px] text-nowrap text-right top-[-0.2px] translate-x-[-100%] whitespace-pre" dir="auto">
        مهندسون وفنيون معتمدون
      </p>
    </div>
  );
}

function Container12() {
  return (
    <div className="h-[44px] relative shrink-0 w-[162.675px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[44px] items-end relative w-[162.675px]">
        <Heading4 />
        <Paragraph3 />
      </div>
    </div>
  );
}

function Icon30() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p3f3d8e00} id="Vector" stroke="var(--stroke-0, #303030)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Container13() {
  return (
    <div className="bg-white box-border content-stretch flex gap-[12px] h-[76px] items-center justify-end pb-0 pl-0 pr-[24px] pt-[3px] relative rounded-[8px] shrink-0 w-[490.333px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#fb2c36] border-[3px_0px_0px] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Container12 />
      <Icon30 />
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Container11 />
      <Container13 />
    </div>
  );
}

function Icon31() {
  return (
    <div className="absolute left-[24px] size-[16px] top-[12px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_122_803)" id="Icon">
          <path d={svgPaths.p26187580} id="Vector" stroke="var(--stroke-0, #FB2C36)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_122_803">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Button13() {
  return (
    <div className="bg-[#f6f6f6] h-[40px] relative rounded-[6px] shrink-0 w-[188px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#fb2c36] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <Icon31 />
      <p className="absolute font-['Cairo:SemiBold',sans-serif] font-semibold leading-[20px] left-[calc(50%-39px)] not-italic text-[#fb2c36] text-[16px] text-nowrap top-[9.8px] whitespace-pre" dir="auto">
        اتصل بنا الآن
      </p>
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex gap-[16px] items-center justify-center relative shrink-0 w-full" data-name="Container">
      <Button13 />
    </div>
  );
}

function Container16() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[38px] grow h-[290px] items-end min-h-px min-w-px relative shrink-0" data-name="Container">
      <Frame1 />
      <Container14 />
      <Container15 />
    </div>
  );
}

function Section2() {
  return (
    <div className="absolute content-stretch flex h-[278px] items-start justify-between left-[104px] top-[1264px] w-[994px]" data-name="Section">
      <Container16 />
    </div>
  );
}

function ServicesPage12() {
  return (
    <div className="bg-[#f6f6f6] h-[1626px] relative shrink-0 w-full" data-name="ServicesPage">
      <Section />
      <Section1 />
      <Section2 />
    </div>
  );
}

function Footer() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Footer">
      <p className="absolute font-['Cairo:Bold',sans-serif] font-bold leading-[28px] left-[218.71px] not-italic text-[#ffc00e] text-[20px] text-nowrap text-right top-[0.2px] translate-x-[-100%] whitespace-pre" dir="auto">
        معلومات التواصل
      </p>
    </div>
  );
}

function Icon32() {
  return (
    <div className="absolute left-[12px] size-[24px] top-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p27c543b0} id="Vector" stroke="var(--stroke-0, #FFC00E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p2d59bff0} id="Vector_2" stroke="var(--stroke-0, #FFC00E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Footer1() {
  return (
    <div className="absolute font-['Cairo:Medium',sans-serif] font-medium h-[84px] leading-[28px] left-[52px] not-italic text-[18px] text-blue-50 text-right top-[12px] w-[154px]" data-name="Footer">
      <p className="absolute left-[154.71px] text-nowrap top-[-0.2px] translate-x-[-100%] whitespace-pre" dir="auto">
        طرابلس، ليبيا
      </p>
      <p className="absolute left-[154.16px] top-[27.8px] translate-x-[-100%] w-[121px]" dir="auto">
        شارع الجمهورية، المكتب الرئيسي
      </p>
    </div>
  );
}

function Container17() {
  return (
    <div className="absolute h-[108px] left-0 rounded-[8px] top-0 w-[218px]" data-name="Container">
      <Icon32 />
      <Footer1 />
    </div>
  );
}

function Icon33() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p3a2d4980} id="Vector" stroke="var(--stroke-0, #FFC00E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Footer2() {
  return (
    <div className="h-[28px] relative shrink-0 w-[141.9px]" data-name="Footer">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[28px] relative w-[141.9px]">
        <p className="absolute font-['Cairo:Bold',sans-serif] font-bold leading-[28px] left-[142px] not-italic text-[18px] text-blue-50 text-right top-[-0.2px] translate-x-[-100%] w-[142px]">+218 21 123 4567</p>
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="absolute box-border content-stretch flex gap-[16px] h-[52px] items-center justify-end left-0 pl-0 pr-[24.1px] py-0 rounded-[8px] top-[124px] w-[218px]" data-name="Container">
      <Icon33 />
      <Footer2 />
    </div>
  );
}

function Icon34() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p9c60400} id="Vector" stroke="var(--stroke-0, #FFC00E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p2bf8f980} id="Vector_2" stroke="var(--stroke-0, #FFC00E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Footer3() {
  return (
    <div className="h-[28px] relative shrink-0 w-[115.725px]" data-name="Footer">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[28px] relative w-[115.725px]">
        <p className="absolute font-['Cairo:Bold',sans-serif] font-bold leading-[28px] left-[116px] not-italic text-[18px] text-blue-50 text-nowrap text-right top-[-0.2px] translate-x-[-100%] whitespace-pre">info@alqotb.ly</p>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="absolute box-border content-stretch flex gap-[16px] h-[52px] items-center justify-end left-0 pl-0 pr-[50.275px] py-0 rounded-[8px] top-[192px] w-[218px]" data-name="Container">
      <Icon34 />
      <Footer3 />
    </div>
  );
}

function Icon35() {
  return (
    <div className="absolute left-[12px] size-[24px] top-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d="M12 6V12L16 14" id="Vector" stroke="var(--stroke-0, #FFC00E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.pace200} id="Vector_2" stroke="var(--stroke-0, #FFC00E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Footer4() {
  return (
    <div className="absolute font-['Cairo:Medium',sans-serif] font-medium h-[56px] leading-[28px] left-[52px] not-italic text-[18px] text-blue-50 text-right top-[12px] w-[124.875px]" data-name="Footer">
      <p className="absolute left-[125.45px] text-nowrap top-[-0.2px] translate-x-[-100%] whitespace-pre" dir="auto">
        الأحد - الخميس
      </p>
      <p className="absolute left-[125px] top-[27.8px] translate-x-[-100%] w-[125px]" dir="auto">
        8:00 ص - 5:00 م
      </p>
    </div>
  );
}

function Container20() {
  return (
    <div className="absolute h-[80px] left-0 rounded-[8px] top-[260px] w-[218px]" data-name="Container">
      <Icon35 />
      <Footer4 />
    </div>
  );
}

function Footer5() {
  return (
    <div className="h-[340px] relative shrink-0 w-full" data-name="Footer">
      <Container17 />
      <Container18 />
      <Container19 />
      <Container20 />
    </div>
  );
}

function Container21() {
  return (
    <div className="[grid-area:1_/_1] content-stretch flex flex-col gap-[24px] items-start relative shrink-0" data-name="Container">
      <Footer />
      <Footer5 />
    </div>
  );
}

function Footer6() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Footer">
      <p className="absolute font-['Cairo:Bold',sans-serif] font-bold leading-[28px] left-[218.54px] not-italic text-[#ffc00e] text-[20px] text-nowrap text-right top-[0.2px] translate-x-[-100%] whitespace-pre" dir="auto">
        خدماتنا
      </p>
    </div>
  );
}

function Text20() {
  return <div className="absolute bg-[#ffc00e] left-[12px] opacity-0 rounded-[2.68435e+07px] size-[8px] top-[10px]" data-name="Text" />;
}

function Footer7() {
  return (
    <div className="absolute h-[28px] left-0 top-0 w-[218px]" data-name="Footer">
      <Text20 />
      <p className="absolute font-['Cairo:Medium',sans-serif] font-medium leading-[28px] left-[134px] not-italic text-[18px] text-blue-50 text-nowrap text-right top-[-0.2px] translate-x-[-100%] whitespace-pre" dir="auto">
        التوريد والتركيب
      </p>
    </div>
  );
}

function ListItem20() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="List Item">
      <Footer7 />
    </div>
  );
}

function Text21() {
  return <div className="absolute bg-[#ffc00e] left-[12px] opacity-0 rounded-[2.68435e+07px] size-[8px] top-[10px]" data-name="Text" />;
}

function Footer8() {
  return (
    <div className="absolute h-[28px] left-0 top-0 w-[218px]" data-name="Footer">
      <Text21 />
      <p className="absolute font-['Cairo:Medium',sans-serif] font-medium leading-[28px] left-[174px] not-italic text-[18px] text-blue-50 text-nowrap text-right top-[-0.2px] translate-x-[-100%] whitespace-pre" dir="auto">
        الصيانة والدعم الفني
      </p>
    </div>
  );
}

function ListItem21() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="List Item">
      <Footer8 />
    </div>
  );
}

function Text22() {
  return <div className="absolute bg-[#ffc00e] left-[12px] opacity-0 rounded-[2.68435e+07px] size-[8px] top-[10px]" data-name="Text" />;
}

function Footer9() {
  return (
    <div className="absolute h-[28px] left-0 top-0 w-[218px]" data-name="Footer">
      <Text22 />
      <p className="absolute font-['Cairo:Medium',sans-serif] font-medium leading-[28px] left-[155px] not-italic text-[18px] text-blue-50 text-nowrap text-right top-[-0.2px] translate-x-[-100%] whitespace-pre" dir="auto">
        قطع الغيار الأصلية
      </p>
    </div>
  );
}

function ListItem22() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="List Item">
      <Footer9 />
    </div>
  );
}

function Text23() {
  return <div className="absolute bg-[#ffc00e] left-[12px] opacity-0 rounded-[2.68435e+07px] size-[8px] top-[10px]" data-name="Text" />;
}

function Footer10() {
  return (
    <div className="absolute h-[28px] left-0 top-0 w-[218px]" data-name="Footer">
      <Text23 />
      <p className="absolute font-['Cairo:Medium',sans-serif] font-medium leading-[28px] left-[156px] not-italic text-[18px] text-blue-50 text-nowrap text-right top-[-0.2px] translate-x-[-100%] whitespace-pre" dir="auto">
        الاستشارات التقنية
      </p>
    </div>
  );
}

function ListItem23() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="List Item">
      <Footer10 />
    </div>
  );
}

function Text24() {
  return <div className="absolute bg-[#ffc00e] left-[12px] opacity-0 rounded-[2.68435e+07px] size-[8px] top-[10px]" data-name="Text" />;
}

function Footer11() {
  return (
    <div className="absolute h-[28px] left-0 top-0 w-[218px]" data-name="Footer">
      <Text24 />
      <p className="absolute font-['Cairo:Medium',sans-serif] font-medium leading-[28px] left-[152px] not-italic text-[18px] text-blue-50 text-nowrap text-right top-[-0.2px] translate-x-[-100%] whitespace-pre" dir="auto">
        التدريب المتخصص
      </p>
    </div>
  );
}

function ListItem24() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="List Item">
      <Footer11 />
    </div>
  );
}

function Footer12() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[188px] items-start relative shrink-0 w-full" data-name="Footer">
      <ListItem20 />
      <ListItem21 />
      <ListItem22 />
      <ListItem23 />
      <ListItem24 />
    </div>
  );
}

function Container22() {
  return (
    <div className="[grid-area:1_/_2] content-stretch flex flex-col gap-[24px] items-start relative shrink-0" data-name="Container">
      <Footer6 />
      <Footer12 />
    </div>
  );
}

function Footer13() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Footer">
      <p className="absolute font-['Cairo:Bold',sans-serif] font-bold leading-[28px] left-[218.63px] not-italic text-[#ffc00e] text-[20px] text-nowrap text-right top-[0.2px] translate-x-[-100%] whitespace-pre" dir="auto">
        روابط سريعة
      </p>
    </div>
  );
}

function Text25() {
  return <div className="bg-[#ffc00e] opacity-0 rounded-[2.68435e+07px] shrink-0 size-[8px]" data-name="Text" />;
}

function Footer14() {
  return (
    <div className="absolute box-border content-stretch flex items-center justify-between left-0 px-[12px] py-0 top-0 w-[218px]" data-name="Footer">
      <Text25 />
      <p className="font-['Cairo:Medium',sans-serif] font-medium leading-[28px] not-italic relative shrink-0 text-[18px] text-blue-50 text-nowrap text-right whitespace-pre" dir="auto">
        المنتجات
      </p>
    </div>
  );
}

function ListItem25() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="List Item">
      <Footer14 />
    </div>
  );
}

function Text26() {
  return <div className="bg-[#ffc00e] opacity-0 rounded-[2.68435e+07px] shrink-0 size-[8px]" data-name="Text" />;
}

function Footer15() {
  return (
    <div className="absolute box-border content-stretch flex items-center justify-between left-0 px-[12px] py-0 top-0 w-[218px]" data-name="Footer">
      <Text26 />
      <p className="font-['Cairo:Medium',sans-serif] font-medium leading-[28px] not-italic relative shrink-0 text-[18px] text-blue-50 text-nowrap text-right whitespace-pre" dir="auto">
        الحلول
      </p>
    </div>
  );
}

function ListItem26() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="List Item">
      <Footer15 />
    </div>
  );
}

function Text27() {
  return <div className="bg-[#ffc00e] opacity-0 rounded-[2.68435e+07px] shrink-0 size-[8px]" data-name="Text" />;
}

function Footer16() {
  return (
    <div className="absolute box-border content-stretch flex items-center justify-between left-0 px-[12px] py-0 top-0 w-[218px]" data-name="Footer">
      <Text27 />
      <p className="font-['Cairo:Medium',sans-serif] font-medium leading-[28px] not-italic relative shrink-0 text-[18px] text-blue-50 text-nowrap text-right whitespace-pre" dir="auto">
        الخدمات
      </p>
    </div>
  );
}

function ListItem27() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="List Item">
      <Footer16 />
    </div>
  );
}

function Text28() {
  return <div className="bg-[#ffc00e] opacity-0 rounded-[2.68435e+07px] shrink-0 size-[8px]" data-name="Text" />;
}

function Footer17() {
  return (
    <div className="absolute box-border content-stretch flex items-center justify-between left-0 px-[12px] py-0 top-0 w-[218px]" data-name="Footer">
      <Text28 />
      <p className="font-['Cairo:Medium',sans-serif] font-medium leading-[28px] not-italic relative shrink-0 text-[18px] text-blue-50 text-nowrap text-right whitespace-pre" dir="auto">
        المشاريع
      </p>
    </div>
  );
}

function ListItem28() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="List Item">
      <Footer17 />
    </div>
  );
}

function Text29() {
  return <div className="bg-[#ffc00e] opacity-0 rounded-[2.68435e+07px] shrink-0 size-[8px]" data-name="Text" />;
}

function Footer18() {
  return (
    <div className="absolute box-border content-stretch flex items-center justify-between left-0 px-[12px] py-0 top-0 w-[218px]" data-name="Footer">
      <Text29 />
      <p className="font-['Cairo:Medium',sans-serif] font-medium leading-[28px] not-italic relative shrink-0 text-[18px] text-blue-50 text-nowrap text-right whitespace-pre" dir="auto">
        الشركاء
      </p>
    </div>
  );
}

function ListItem29() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="List Item">
      <Footer18 />
    </div>
  );
}

function Footer19() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[188px] items-end relative shrink-0 w-full" data-name="Footer">
      <ListItem25 />
      <ListItem26 />
      <ListItem27 />
      <ListItem28 />
      <ListItem29 />
    </div>
  );
}

function Container23() {
  return (
    <div className="[grid-area:1_/_3] content-stretch flex flex-col gap-[24px] items-end relative shrink-0" data-name="Container">
      <Footer13 />
      <Footer19 />
    </div>
  );
}

function Footer20() {
  return (
    <div className="absolute h-[104px] left-[51.79px] rounded-[12px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] top-0 w-[166.213px]" data-name="Footer">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[12px]">
        <img alt="" className="absolute h-[278.5%] left-[-35.97%] max-w-none top-[-89.25%] w-[174.26%]" src={imgFooter} />
      </div>
    </div>
  );
}

function Footer21() {
  return (
    <div className="absolute h-[117px] left-0 top-[134.4px] w-[218px]" data-name="Footer">
      <p className="absolute font-['Cairo:Medium',sans-serif] font-medium leading-[29.25px] left-[218.95px] not-italic text-[18px] text-blue-50 text-right top-[0.6px] translate-x-[-100%] w-[200px]" dir="auto">
        شركة متخصصة في معدات المناولة والتخزين والحلول الصناعية المتقدمة لجميع القطاعات.
      </p>
    </div>
  );
}

function Icon36() {
  return (
    <div className="absolute left-[16px] size-[16px] top-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p391f9d80} id="Vector" stroke="var(--stroke-0, #FFC00E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button14() {
  return (
    <div className="bg-[#0f1629] relative rounded-[2.68435e+07px] shrink-0 size-[48px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[2.68435e+07px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border relative size-[48px]">
        <Icon36 />
      </div>
    </div>
  );
}

function Icon37() {
  return (
    <div className="absolute left-[16px] size-[16px] top-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_122_379)" id="Icon">
          <path d={svgPaths.p22916300} id="Vector" stroke="var(--stroke-0, #FFC00E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p2dff3180} id="Vector_2" stroke="var(--stroke-0, #FFC00E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M11.6667 4.33333H11.6733" id="Vector_3" stroke="var(--stroke-0, #FFC00E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_122_379">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Button15() {
  return (
    <div className="bg-[#0f1629] relative rounded-[2.68435e+07px] shrink-0 size-[48px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[2.68435e+07px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border relative size-[48px]">
        <Icon37 />
      </div>
    </div>
  );
}

function Icon38() {
  return (
    <div className="absolute left-[16px] size-[16px] top-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p14dc0c00} id="Vector" stroke="var(--stroke-0, #FFC00E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M4 6H1.33333V14H4V6Z" id="Vector_2" stroke="var(--stroke-0, #FFC00E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p342eb800} id="Vector_3" stroke="var(--stroke-0, #FFC00E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button16() {
  return (
    <div className="bg-[#0f1629] relative rounded-[2.68435e+07px] shrink-0 size-[48px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[2.68435e+07px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border relative size-[48px]">
        <Icon38 />
      </div>
    </div>
  );
}

function Footer22() {
  return (
    <div className="absolute box-border content-stretch flex gap-[16px] h-[48px] items-start justify-end left-0 pl-0 pr-[42px] py-0 top-[275.4px] w-[218px]" data-name="Footer">
      <Button14 />
      <Button15 />
      <Button16 />
    </div>
  );
}

function Container24() {
  return (
    <div className="[grid-area:1_/_4] relative shrink-0" data-name="Container">
      <Footer20 />
      <Footer21 />
      <Footer22 />
    </div>
  );
}

function Container25() {
  return (
    <div className="gap-[40px] grid grid-cols-[repeat(4,_minmax(0px,_1fr))] grid-rows-[repeat(1,_minmax(0px,_1fr))] h-[392px] relative shrink-0 w-full" data-name="Container">
      <Container21 />
      <Container22 />
      <Container23 />
      <Container24 />
    </div>
  );
}

function PrimitiveDiv() {
  return <div className="bg-[#ffc00e] h-px shrink-0 w-full" data-name="Primitive.div" />;
}

function Link() {
  return (
    <div className="h-[28px] relative shrink-0 w-[133.463px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[28px] relative w-[133.463px]">
        <p className="absolute font-['Cairo:Medium',sans-serif] font-medium leading-[28px] left-[134px] not-italic text-[18px] text-blue-50 text-nowrap text-right top-[-0.2px] translate-x-[-100%] whitespace-pre" dir="auto">
          سياسة الخصوصية
        </p>
      </div>
    </div>
  );
}

function Link1() {
  return (
    <div className="h-[28px] relative shrink-0 w-[123.912px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[28px] relative w-[123.912px]">
        <p className="absolute font-['Cairo:Medium',sans-serif] font-medium leading-[28px] left-[124px] not-italic text-[18px] text-blue-50 text-nowrap text-right top-[-0.2px] translate-x-[-100%] whitespace-pre" dir="auto">
          الشروط والأحكام
        </p>
      </div>
    </div>
  );
}

function Link2() {
  return (
    <div className="h-[28px] relative shrink-0 w-[114.662px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[28px] relative w-[114.662px]">
        <p className="absolute font-['Cairo:Medium',sans-serif] font-medium leading-[28px] left-[115px] not-italic text-[18px] text-blue-50 text-nowrap text-right top-[-0.2px] translate-x-[-100%] whitespace-pre">ISO 9001:2015</p>
      </div>
    </div>
  );
}

function Footer23() {
  return (
    <div className="h-[28px] relative shrink-0 w-[436.038px]" data-name="Footer">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[32px] h-[28px] items-start justify-end relative w-[436.038px]">
        <Link />
        <Link1 />
        <Link2 />
      </div>
    </div>
  );
}

function Footer24() {
  return (
    <div className="h-[28px] relative shrink-0 w-[342.388px]" data-name="Footer">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[28px] relative w-[342.388px]">
        <p className="absolute font-['Cairo:Medium',sans-serif] font-medium leading-[28px] left-[343px] not-italic text-[18px] text-blue-50 text-right top-[-0.2px] translate-x-[-100%] w-[343px]" dir="auto">
          © 2024 شركة القطب. جميع الحقوق محفوظة.
        </p>
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="content-stretch flex h-[28px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Footer23 />
      <Footer24 />
    </div>
  );
}

function Container27() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[48px] h-[645px] items-start left-[89.2px] pb-0 pt-[64px] px-[16px] top-0 w-[1024px]" data-name="Container">
      <Container25 />
      <PrimitiveDiv />
      <Container26 />
    </div>
  );
}

function Footer25() {
  return (
    <div className="bg-[#0f1629] h-[645px] overflow-clip relative shrink-0 w-full" data-name="Footer">
      <Container27 />
    </div>
  );
}

function App2() {
  return (
    <div className="bg-[#f6f6f6] content-stretch flex flex-col h-[2271px] items-end overflow-clip relative shrink-0 w-full" data-name="App2">
      <ServicesPage12 />
      <Footer25 />
    </div>
  );
}

export default function Services() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative size-full" data-name="services">
      <Header />
      <App2 />
    </div>
  );
}
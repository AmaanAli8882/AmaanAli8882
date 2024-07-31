import LOGO from '../../assets/651bf8aa70c2e1c507e33463_taxonomy-min.webp'

const HeroSection4 = () => {
  return <>
    <div>
        <h1 className="text-center md:pt-10 md:text-[30px] ">Leading customer feedback intelligence for product development teams</h1>
        <div className="flex">
            <div className="">
                <h2 className="text-[#914ac8] md:mx-48 md:mt-20">CENTRALIZE</h2>
                <h1 className="md:text-[45px] md:font-semibold md:mx-40">Consolidate and organize customer feedback in hours not days</h1>
            </div>
            <div className="left-5 md:pe-16 md:me-16 md:pt-20">
            <img src={LOGO} alt="Image" className='' width={1000} />
            </div>
        </div>
    </div>
    <hr className="mx-20 opacity-10 my-12" />
  </>;
};

export default HeroSection4;

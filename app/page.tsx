import Button from "@/components/Button";
import CardMusic from "@/components/CardMusic";
import ListDetailFeatures from "@/components/ListDetailFeatures";
import Navbar from "@/components/Navbar";
import SliderFeedback from "@/components/SliderFeedback";
import SubBab from "@/components/SubBab";
import { getMusicData } from "@/lib/data";
import { ArrowDown, CircleCheckBig, Quote } from "lucide-react";
import Image from "next/image";
import Marquee from "react-fast-marquee";

export default function Home() {
  return (
    <div className="w-full h-full">
      <Navbar />
      <main className="py-24 md:py-8">
        {/* hero */}
        <section id="home" className="px-6 pb-14 md:px-10 flex flex-col md:flex-row md:justify-between md:items-center">
          {/* text hero */}
          <div className="">
            <h1 className="text-3xl font-extrabold md:text-6xl">
              Experience <br />
              Music Like <br />
              <span className="text-[#BC6AFF]">Never Before!</span>
            </h1>
            <p className="text-sm w-4/5 py-3 md:py-6">Discover millions of songs, personalized playlists, and exclusive features for an immersive listening experience.</p>
            <div className="flex items-center gap-4 py-2">
              <Button type="purple">Try free trial</Button>
              <div className="flex items-center gap-2">
                <ArrowDown color="black" size={28} className="p-1 border-2 font-bold border-black rounded-full" />
                <p className="text-sm font-semibold">Explore</p>
              </div>
            </div>
          </div>

          {/* char section */}
          <div className="relative lg:right-14 py-2 flex justify-center items-center">
            <div className="absolute top-5 md:top-28 -z-1 w-80 h-80 bg-primary-gradient blur-[80px] rounded-full"></div>
            <div className="relative w-80 h-80 md:w-[500px] md:h-[500px] animate-fade-top [animation-timeline: view(50% auto)]">
              <Image src={"/images/womenHero.svg"} alt="women hero" fill priority />
            </div>
          </div>
        </section>

        {/* count section */}
        <section className="w-full flex flex-col items-center py-10 md:py-4 gap-16 md:gap-0 md:flex-row md:justify-evenly ">
          {/* ratings avg */}
          <div className="flex items-center gap-2">
            <div className="relative w-7 h-7">
              <Image src={"/images/star-ico.svg"} alt="star" fill />
            </div>
            <div className="flex flex-col">
              <h3 className="text-4xl font-bold">4,9</h3>
              <p className="text-sm">Ratings</p>
            </div>
          </div>
          {/* active users */}
          <div className="flex items-center gap-2">
            <div className="relative w-7 h-7">
              <Image src={"/images/double-person-ico.svg"} alt="double-person" fill />
            </div>
            <div className="flex flex-col">
              <h3 className="text-4xl font-bold">1m+</h3>
              <p className="text-sm">Active users</p>
            </div>
          </div>
          {/* Download avg */}
          <div className="flex items-center gap-2">
            <div className="relative w-7 h-7">
              <Image src={"/images/star-ico.svg"} alt="star" fill />
            </div>
            <div className="flex flex-col">
              <h3 className="text-4xl font-bold">2m+</h3>
              <p className="text-sm">Download</p>
            </div>
          </div>
          {/* top */}
          <div className="flex items-center gap-2">
            <div className="relative w-7 h-7">
              <Image src={"/images/badges-ico.svg"} alt="badges" fill />
            </div>
            <div className="flex flex-col">
              <h3 className="text-4xl font-bold">Top 5</h3>
              <p className="text-sm">In Southeast Asia</p>
            </div>
          </div>
        </section>

        {/* explore section */}
        <section className="py-14">
          <div className="text-center">
            <SubBab>Explore the World of Music</SubBab>
            <p className="py-6">
              Find the Perfect Soundtrack for Every Moment – Whether you're relaxing, working, or on the go,
              <br /> enjoy music that matches your mood and enhances your experience.
            </p>
          </div>

          {/* infinite scroll */}
          <div className="relative flex justify-center w-full">
            <Marquee className="gap-6" pauseOnHover gradient gradientWidth={50}>
              <div className="flex gap-6 py-2">
                {getMusicData.length > 0 &&
                  [...getMusicData, ...getMusicData].map((el, i) => {
                    return <CardMusic key={i} data={el} />;
                  })}
              </div>
            </Marquee>
          </div>
        </section>
        {/* close hero */}

        {/* Features */}
        <section id="features" className="w-full flex flex-col-reverse items-center px-4 py-14 md:flex-row">
          <div className="relative flex items-center justify-center w-full">
            <div className="absolute top-5 md:top-28 -z-1 w-80 h-80 bg-primary-gradient blur-[80px] rounded-full"></div>
            <div className="relative size-80 md:w-[500px] md:h-[500px]">
              <Image src={"/images/features.svg"} alt="women hero" fill />
            </div>
          </div>
          <div className="w-full animate-fade-top [animation-timeline: view(50% auto)]">
            <SubBab>
              Features That Set Us <br />
              Apart
            </SubBab>
            <p className="py-4 md:py-6 md:w-2/4">Experience more than just music streaming with personalized playlists, high-quality audio, and exclusive features tailored to your listening needs.</p>
            {/* list detail */}
            <ListDetailFeatures />
          </div>
        </section>
        {/* close Features */}

        {/* feedback */}
        <section id="feedback" className="py-14">
          <SubBab>
            <p className="ml-4 md:ml-14">
              What Our beloved user <br /> say about us
            </p>
          </SubBab>
          <SliderFeedback />
        </section>
        {/* close feedback */}

        {/* pricing */}
        <section id="pricing" className="px-4 py-14 w-full text-center grid place-items-center">
          <SubBab>
            Go Premium & Unlock <br />
            More!
          </SubBab>
          <div className="flex gap-6 flex-col md:flex-row ">
            {/* price 1 */}
            <div className="flex flex-col rounded-3xl py-8 px-6 bg-white shadow-xl">
              <h4 className="font-semibold px-6 py-3 bg-[#F7BA2E] rounded-2xl w-fit mx-auto">Monthly Plan</h4>
              <p className="text-black/55 text-center py-2">Upgrade to Premium & Enjoy Exclusive Perks</p>
              <p className="py-6 font-semibold text-center">
                <strong className="text-5xl">$4.99</strong>/month
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-2 ">
                  <CircleCheckBig size={22} />
                  <p className="text-xs font-semibold">Unlimited Streaming</p>
                </li>
                <li className="flex items-center gap-2 ">
                  <CircleCheckBig size={22} />
                  <p className="text-xs font-semibold">Ad-Free Experience</p>
                </li>
                <li className="flex items-center gap-2 ">
                  <CircleCheckBig size={22} />
                  <p className="text-xs font-semibold">Offline Listening</p>
                </li>
                <li className="flex items-center gap-2 ">
                  <CircleCheckBig size={22} />
                  <p className="text-xs font-semibold">Hi-Res Audio</p>
                </li>
              </ul>
              <div className="mt-auto self-center">
                <button className=" mt-6 p-2 px-6 rounded-xl text-sm font-semibold bg-secondary-gradient active:scale-95 ">Subscribe</button>
              </div>
            </div>

            {/* price 2 */}
            <div className="flex flex-col rounded-3xl py-8 px-6 bg-gradient-to-r from-[#D6DBF3] to-[#E5CDF8] shadow-xl">
              <h4 className="font-semibold px-6 py-3 bg-[#F7BA2E] rounded-2xl w-fit mx-auto">Monthly Plan</h4>
              <p className="text-black/55 text-center py-2">Upgrade to Premium & Enjoy Exclusive Perks</p>
              <p className="py-6 font-semibold text-center">
                <strong className="text-5xl">$4.99</strong>/month
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-2 ">
                  <span className="text-white">
                    <CircleCheckBig size={22} color="black" className="fill-current" />
                  </span>
                  <p className="text-xs font-semibold">Unlimited Streaming</p>
                </li>
                <li className="flex items-center gap-2 ">
                  <span className="text-white">
                    <CircleCheckBig size={22} color="black" className="fill-current" />
                  </span>
                  <p className="text-xs font-semibold">Ad-Free Experience</p>
                </li>
                <li className="flex items-center gap-2 ">
                  <span className="text-white">
                    <CircleCheckBig size={22} color="black" className="fill-current" />
                  </span>
                  <p className="text-xs font-semibold">Offline Listening</p>
                </li>
                <li className="flex items-center gap-2 ">
                  <span className="text-white">
                    <CircleCheckBig size={22} color="black" className="fill-current" />
                  </span>
                  <p className="text-xs font-semibold">Hi-Res Audio</p>
                </li>
                <li className="flex items-center gap-2 ">
                  <span className="text-white">
                    <CircleCheckBig size={22} color="black" className="fill-current" />
                  </span>
                  <p className="text-xs font-semibold">Save more at $49.99/year</p>
                </li>
              </ul>
              <div className="mt-auto self-center">
                <button className="mt-6 p-2 px-6 rounded-xl text-sm font-semibold bg-white active:scale-95 ">Subscribe</button>
              </div>
            </div>
          </div>
        </section>
        {/* close pricing */}

        {/* Download */}
        <section className="pt-14 relative flex flex-col gap-8 bg-[#E5CDF8]/20 h-[43rem] md:h-[27rem] overflow-hidden md:flex-row md:justify-center">
          <div className="md:w-2/5 px-4">
            <SubBab>Download Now !</SubBab>
            <p className="py-4">Find the Perfect Soundtrack for Every Moment – Whether you're relaxing, working, or on the go, enjoy music that matches your mood and enhances your experience.</p>
            <div className="flex gap-4">
              <Button type="purple">
                Download for <br />
                Android
              </Button>
              <Button type="light">Download for IOS</Button>
            </div>
          </div>
          <div className="relative h-full w-[20rem]   mx-auto md:mx-0">
            <Image src={"/images/iMockup-wavebeat.png"} alt="iMockup-wavebeat" fill className="object-top object-cover" />
          </div>
        </section>
        {/* close pricing */}

        {/* footer */}
        <footer className="pt-14 px-4">
          <div className="flex flex-col md:flex-row md:justify-between">
            <div className="relative w-40 h-16">
              <Image src={"/images/WaveBeat.svg"} alt="WaveBeat" fill />
            </div>
            <span className="flex gap-6 grayscale">
              <svg role="img" viewBox="0 0 24 24" width={"29px"} height={"29px"} xmlns="http://www.w3.org/2000/svg">
                <title>Instagram</title>
                <path d="M7.0301.084c-1.2768.0602-2.1487.264-2.911.5634-.7888.3075-1.4575.72-2.1228 1.3877-.6652.6677-1.075 1.3368-1.3802 2.127-.2954.7638-.4956 1.6365-.552 2.914-.0564 1.2775-.0689 1.6882-.0626 4.947.0062 3.2586.0206 3.6671.0825 4.9473.061 1.2765.264 2.1482.5635 2.9107.308.7889.72 1.4573 1.388 2.1228.6679.6655 1.3365 1.0743 2.1285 1.38.7632.295 1.6361.4961 2.9134.552 1.2773.056 1.6884.069 4.9462.0627 3.2578-.0062 3.668-.0207 4.9478-.0814 1.28-.0607 2.147-.2652 2.9098-.5633.7889-.3086 1.4578-.72 2.1228-1.3881.665-.6682 1.0745-1.3378 1.3795-2.1284.2957-.7632.4966-1.636.552-2.9124.056-1.2809.0692-1.6898.063-4.948-.0063-3.2583-.021-3.6668-.0817-4.9465-.0607-1.2797-.264-2.1487-.5633-2.9117-.3084-.7889-.72-1.4568-1.3876-2.1228C21.2982 1.33 20.628.9208 19.8378.6165 19.074.321 18.2017.1197 16.9244.0645 15.6471.0093 15.236-.005 11.977.0014 8.718.0076 8.31.0215 7.0301.0839m.1402 21.6932c-1.17-.0509-1.8053-.2453-2.2287-.408-.5606-.216-.96-.4771-1.3819-.895-.422-.4178-.6811-.8186-.9-1.378-.1644-.4234-.3624-1.058-.4171-2.228-.0595-1.2645-.072-1.6442-.079-4.848-.007-3.2037.0053-3.583.0607-4.848.05-1.169.2456-1.805.408-2.2282.216-.5613.4762-.96.895-1.3816.4188-.4217.8184-.6814 1.3783-.9003.423-.1651 1.0575-.3614 2.227-.4171 1.2655-.06 1.6447-.072 4.848-.079 3.2033-.007 3.5835.005 4.8495.0608 1.169.0508 1.8053.2445 2.228.408.5608.216.96.4754 1.3816.895.4217.4194.6816.8176.9005 1.3787.1653.4217.3617 1.056.4169 2.2263.0602 1.2655.0739 1.645.0796 4.848.0058 3.203-.0055 3.5834-.061 4.848-.051 1.17-.245 1.8055-.408 2.2294-.216.5604-.4763.96-.8954 1.3814-.419.4215-.8181.6811-1.3783.9-.4224.1649-1.0577.3617-2.2262.4174-1.2656.0595-1.6448.072-4.8493.079-3.2045.007-3.5825-.006-4.848-.0608M16.953 5.5864A1.44 1.44 0 1 0 18.39 4.144a1.44 1.44 0 0 0-1.437 1.4424M5.8385 12.012c.0067 3.4032 2.7706 6.1557 6.173 6.1493 3.4026-.0065 6.157-2.7701 6.1506-6.1733-.0065-3.4032-2.771-6.1565-6.174-6.1498-3.403.0067-6.156 2.771-6.1496 6.1738M8 12.0077a4 4 0 1 1 4.008 3.9921A3.9996 3.9996 0 0 1 8 12.0077" />
              </svg>
              <svg role="img" viewBox="0 0 24 24" width={"29px"} height={"29px"} xmlns="http://www.w3.org/2000/svg">
                <title>Facebook</title>
                <path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z" />
              </svg>
              <svg role="img" viewBox="0 0 24 24" width={"29px"} height={"29px"} xmlns="http://www.w3.org/2000/svg">
                <title>X</title>
                <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
              </svg>
            </span>
          </div>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <p className="py-4">
              Subscribe now to get the latest <br /> music updates, trending hits, and <br /> exclusive offers just for you!
            </p>
            <div className="flex flex-wrap gap-6">
              {Array.from({ length: 3 }).map((_, i) => (
                <ul key={i} className="py-2">
                  <li className="font-semibold">About</li>
                  <li>Our Story</li>
                  <li>Benefit</li>
                  <li>Teams</li>
                  <li>Careers</li>
                </ul>
              ))}
            </div>
          </div>
          <div className="space-y-2 pt-12 flex flex-col md:flex-row md:justify-between md:items-center">
            <div className="flex gap-12">
              <p>Terms & conditions</p>
              <p>Privacy policy</p>
            </div>
            <p>© 2025 leaela. All rights reserved.</p>
          </div>
        </footer>
        {/* close pricing */}
      </main>
    </div>
  );
}

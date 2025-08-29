import Image from "next/image";
import { Inter } from "next/font/google";
import { Button } from "../ui/button";
import { BorderTrail } from "../../../components/motion-primitives/border-trail";
import { FigmaButton } from "../ui/figma-button";

const inter = Inter({ subsets: ["latin"] });

export function Hero() {
  return (
    <section className="relative isolate">
      {/* background glows */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        {/* add GlowOrb components or gradient layers */}
      </div>

      <Image
        src="/heroRight.svg"
        alt="Peeker"
        width={100}
        height={36}
        priority
        className="absolute z-10 right-0 top-[30px] h-[200px] w-[100px] md:h-[350px] md:w-[180px] lg:h-[506px] lg:w-[278px]"
      />

      <div className="absolute right-[-200px] top-[50px] flex h-[500px] w-[300px] flex-col items-center justify-center rounded-md  px-5 py-2 dark:bg-zinc-800">
        <BorderTrail
          style={{
            boxShadow:
              "0px 0px 60px 30px rgb(255 255 255 / 50%), 0 0 100px 60px rgb(0 0 0 / 50%), 0 0 140px 90px rgb(0 0 0 / 50%)",
          }}
          size={50}
          className="bg-linear-to-l from-yellow-500  to-yellow-900"
        />
      </div>

      <div className="absolute left-[-150px] top-[150px] flex h-[500px] w-[300px] flex-col items-center justify-center rounded-md  px-5 py-2 dark:bg-zinc-800">
        <BorderTrail
          style={{
            boxShadow:
              "0px 0px 60px 30px rgb(255 255 255 / 50%), 0 0 100px 60px rgb(0 0 0 / 50%), 0 0 140px 90px rgb(0 0 0 / 50%)",
          }}
          size={50}
          className="bg-linear-to-l from-yellow-500  to-yellow-900"
        />
      </div>

      <Image
        src="/rightBG.svg"
        alt="Peeker"
        width={100}
        height={36}
        priority
        className="absolute right-0 top-[190px] h-[150px] w-[130px] md:h-[250px] md:w-[220px] lg:h-[369px] lg:w-[325px]"
      />
         <Image
        src="/leftBG.svg"
        alt="Peeker"
        width={100}
        height={36}
        priority
        className="absolute left-[-20px] top-[170px] h-[120px] w-[200px] md:h-[200px] md:w-[320px] lg:h-[316px] lg:w-[508px]"
      />

      <Image
        src="/heroLeft.svg"
        alt="Peeker"
        width={100}
        height={36}
        priority
        className="absolute left-[-120px] top-[250px] h-[120px] w-[200px] md:h-[200px] md:w-[320px] lg:h-[316px] lg:w-[508px]"
      />

      <div className="container mx-auto max-w-[1200px] px-4 pt-20 pb-16 text-center">
        <p
          className="mx-auto mb-5 z-20 inline rounded-full px-3 py-1 text-xs text-neutral-300 ring-1 ring-white/10"
          style={{
            background: `
							radial-gradient(27% 93.87% at 15.6% 0%, rgba(218, 182, 243, 0.3) 0%, rgba(0, 0, 0, 0) 100%),
							linear-gradient(180deg, rgba(187, 175, 255, 0) 23.61%, rgba(187, 175, 255, 0.2) 137.5%),
							rgba(187, 175, 255, 0.09)
						`,
            backgroundBlendMode: "screen",
          }}
        >
          Built for Cold Emailers
        </p>

        <h1
          className={`mx-auto z-20 w-[544px] text-center font-medium ${inter.className}
              text-[32px] leading-[40px] md:text-[48px] md:leading-[58px] lg:text-[60px] lg:leading-[73px] tracking-[-0.05em]
              bg-clip-text text-transparent`}
          style={{
            // keep 187.86deg, but avoid pure white
            background:
              "linear-gradient(187.86deg, #FFDDBA 20%, #FFBF7E 55%, #FFE9D2 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Self-Healing Inboxes
        </h1>

        <h1
          className={`ml-48 relative z-20 text-white max-w-[900px] text-balance text-center font-medium leading-[100%] tracking-[-0.05em] ${inter.className} text-[32px] md:text-[48px] lg:text-[60px] flex items-center justify-center gap-3`}
        >
          for Cold Email
          <Image
            src="/mail.svg"
            alt="Peeker"
            width={100}
            height={36}
            priority
            className="ml-2 mt-4 h-[30px] w-[60px] md:h-[40px] md:w-[80px] lg:h-[50px] lg:w-[100px]"
          />
        </h1>

        <p className="mx-auto z-20 mt-4 max-w-[720px] text-pretty text-sm text-neutral-300 px-4">
          Auto-create (Gsuite & MS Azure) inboxes, track deliverability, and
          replace <br className="hidden md:block" />
          burned infrastructure so your outreach stays in the primary inbox,
          never spam.
        </p>

        {/* video mock */}
        <div className="mx-auto mt-12 w-full max-w-[737px] h-[200px] md:h-[250px] lg:h-[300px] rounded-2xl border border-white/10 bg-white/5 p-2 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] backdrop-blur">
          <div className="relative overflow-hidden rounded-xl bg-black/60">
            <Image
              src="/window.svg"
              alt="Product demo"
              fill
              className="object-cover opacity-90"
              priority
            />
          </div>
        </div>
      </div>

      <form className="mx-auto mt-8 flex w-full max-w-md items-center gap-8 border border-white/10 rounded-full">
        <input
          type="email"
          placeholder="Enter your email address"
          className="flex-1 rounded-full border-none bg-[#070707] px-4 py-3 text-sm text-white 0 placeholder:text-neutral-600 placeholder:pl-2 focus:outline-none focus:ring-2 focus:ring-amber-400/50"
          aria-label="Email"
          required
        />
        <FigmaButton className="z-10">
          Get Started
        </FigmaButton>
      </form>

      {/* floating stat cards (hide on small screens) */}
      <div className="pointer-events-none absolute left-6 top-28 hidden lg:block">
        {/* <StatPill label="Healthy" tone="green" /> inside a glass card */}
      </div>
      <div className="pointer-events-none absolute right-6 top-40 hidden lg:block">
        {/* second card */}
      </div>
    </section>
  );
}

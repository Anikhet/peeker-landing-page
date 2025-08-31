import Image from "next/image";
import { Inter } from "next/font/google";
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
        className="absolute z-10 right-0 top-[30px]  h-[120px] w-[60px] sm:h-[150px] sm:w-[75px] md:h-[250px] md:w-[130px] lg:h-[400px] lg:w-[220px] xl:h-[506px] xl:w-[278px] xl:right-0 xl:top-[30px]"
      />

<Image
        src="/rightBG.svg"
        alt="Peeker"
        width={100}
        height={36}
        priority
        className="absolute right-0 top-[190px] h-[80px] w-[70px] sm:h-[100px] sm:w-[85px] md:h-[180px] md:w-[160px] lg:h-[280px] lg:w-[250px] xl:h-[369px] xl:w-[325px] xl:right-0 xl:top-[190px]"
      />
      <Image
        src="/leftBG.svg"
        alt="Peeker"
        width={100}
        height={36}
        priority
        className="absolute left-[-20px] top-[170px] h-[80px] w-[130px] sm:h-[100px] sm:w-[160px] md:h-[150px] md:w-[240px] lg:h-[250px] lg:w-[400px] xl:h-[316px] xl:w-[508px] xl:left-[-20px] xl:top-[170px]"
      />

      <Image
        src="/heroLeft.svg"
        alt="Peeker"
        width={100}
        height={36}
        priority
        className="absolute left-[-120px] top-[250px] h-[80px] w-[130px] sm:h-[100px] sm:w-[160px] md:h-[150px] md:w-[240px] lg:h-[250px] lg:w-[400px] xl:h-[316px] xl:w-[508px] xl:left-[-120px] xl:top-[250px]"
      />


      {/* <div className="absolute right-[-200px] top-[50px] hidden lg:flex h-[500px] w-[300px] flex-col items-center justify-center rounded-md px-5 py-2 dark:bg-zinc-800">
        <BorderTrail
          style={{
            boxShadow:
              "0px 0px 60px 30px rgb(255 255 255 / 50%), 0 0 100px 60px rgb(0 0 0 / 50%), 0 0 140px 90px rgb(0 0 0 / 50%)",
          }}
          size={50}
          className="bg-linear-to-l from-yellow-500  to-yellow-900"
        />
      </div>

      <div className="absolute left-[-150px] top-[150px] hidden lg:flex h-[500px] w-[300px] flex-col items-center justify-center rounded-md px-5 py-2 dark:bg-zinc-800">
        <BorderTrail
          style={{
            boxShadow:
              "0px 0px 60px 30px rgb(255 255 255 / 50%), 0 0 100px 60px rgb(0 0 0 / 50%), 0 0 140px 90px rgb(0 0 0 / 50%)",
          }}
          size={50}
          className="bg-linear-to-l from-yellow-500  to-yellow-900"
        />
      </div> */}


      <div className="container  mx-auto max-w-[1200px] px-4 pt-20 pb-16 text-center">
        <div className="flex flex-col items-center justify-center gap-2">
        {/* <p
          className="mx-auto mb-5 z-20 inline rounded-full px-3 py-1 text-xs text-neutral-300 ring-1 ring-white/10 hero-badge"
        >
          Built for Cold Emailers
        </p> */}
        <Image src="/Hero Section/Eye-brow Text.svg" alt="Peeker" width={100} height={36} priority className=" mx-auto h-[40px] w-[180px] lg:h-[60px] lg:w-[150px] " />

        <h1
          className={`mx-auto z-20 w-full lg:w-[544px] text-center font-medium ${inter.className}
              text-[32px] leading-[40px] lg:text-[60px] lg:leading-[73px] tracking-[-0.05em]
              bg-clip-text text-transparent hero-title-gradient`}
        >
          Self-Healing Inboxes
        </h1>

        <h1
          className={` lg:ml-32 relative z-20 text-white max-w-[900px] text-balance text-center font-medium leading-[100%] tracking-[-0.05em] ${inter.className} text-[32px] lg:text-[60px] flex flex-col lg:flex-row items-center justify-center gap-3`}
        >
          for Cold Email
          <Image
            src="/mail.svg"
            alt="Peeker"
            width={100}
            height={36}
            priority
            className="mt-2 hidden lg:inline lg:mt-4 lg:ml-2 h-[30px] w-[60px] lg:h-[50px] lg:w-[100px]"
          />
        </h1>
        </div>

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
          className="flex-1 rounded-full border-none bg-[#070707] px-4 py-3 text-sm text-white placeholder:text-neutral-600 placeholder:pl-2 focus:outline-none focus:ring-2 focus:ring-amber-400/50"
          aria-label="Email"
          required
        />
        <FigmaButton className="z-10">Get Started</FigmaButton>
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

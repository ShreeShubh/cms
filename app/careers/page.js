import Footer from "@/components/Footer/Footer"
import Header from "@/components/Header/Header"
import Image from "next/image"

const page = () => {
  return (
    <>
      <div className="bg-[url('/careers/banner.png')] h-[480px] bg-cover bg-center pt-5 pb-14">
        <Header />
        <div className="max-w-screen-xl mx-auto mt-32">
          <h1 className="text-5xl font-semibold text-white ">Careers</h1>
        </div>
      </div>

      <div className="max-w-screen-xl mx-auto mt-14 mb-10">
        <div className="space-y-4 text-cms-primary-black text-lg w-4/5">
          <p className="">
            We at CMS know that reaching scale, impact and sustainability of
            social initiatives requires the operation of an eco-system that
            integrates four elements–the capacities of the communities; the
            efficiency of the market; the reach, vision and effectiveness of
            social initiatives; and the power of the state. As catalysts, we
            work with our partners to harness the ecosystem strength for
            accelerated impact, maximisation of the social return of
            initiatives, and creation of shared value. In this journey, the
            staff members play an integral role and we are sure that your
            association with CMS will result in achievement of not just
            organisation goals but also see your dreams converted into reality.
            We also provide you with Economic Stability, Opportunity for
            Intellectual Growth and Learning, Opportunity to work in multiple
            domains and freedom of expression.
          </p>
        </div>
      </div>

      <h2 className="text-3xl text-cms-primary font-semibold ps-24 mb-10">
        Current Openings
      </h2>

      <div className="flex bg-white shadow-lg">
        <div className="bg-cms-primary text-white p-6 w-1/3 relative">
          <h3 className="text-xl font-semibold">
            Marketing and Communications Lead
          </h3>
          <div className="absolute right-[-10px] top-1/2 transform -translate-y-1/2 w-0 h-0 border-t-[20px] border-t-transparent border-b-[20px] border-b-transparent border-l-[10px] border-l-cms-primary"></div>
        </div>
        <div className="flex px-16 py-10 flex-col gap-4">
          <div className="flex w-3/4">
            <div className="flex flex-col items-start space-y-2">
              <div className="w-7 border-b-2 border-cms-primary-green" />
              <p>
                Develop and promote branding initiatives consistent with
                corporate business goals and objectives
              </p>
            </div>
            <div className="flex flex-col items-start space-y-2">
              <div className="w-7 border-b-2 border-cms-primary-green" />
              <p>
                Develop and promote branding initiatives consistent with
                corporate business goals and objectives
              </p>
            </div>
            <div className="flex flex-col items-start space-y-2">
              <div className="w-7 border-b-2 border-cms-primary-green" />
              <p>
                Develop and promote branding initiatives consistent with
                corporate business goals and objectives
              </p>
            </div>
          </div>
          <button className="mt-4 px-4 py-2 self-start border border-cms-primary text-cms-primary hover:bg-purple-100">
            More Details
          </button>
        </div>
      </div>

      <div className="flex bg-white shadow-lg">
        <div className="bg-[#9250AC] text-white p-6 w-1/3 relative">
          <h3 className="text-xl font-semibold">
            Marketing and Communications Lead
          </h3>
          <div className="absolute right-[-10px] top-1/2 transform -translate-y-1/2 w-0 h-0 border-t-[20px] border-t-transparent border-b-[20px] border-b-transparent border-l-[10px] border-l-[#9250AC]"></div>
        </div>
        <div className="flex px-16 py-10 flex-col gap-4">
          <div className="flex w-3/4">
            <div className="flex flex-col items-start space-y-2">
              <div className="w-7 border-b-2 border-cms-primary-green" />
              <p>
                Develop and promote branding initiatives consistent with
                corporate business goals and objectives
              </p>
            </div>
            <div className="flex flex-col items-start space-y-2">
              <div className="w-7 border-b-2 border-cms-primary-green" />
              <p>
                Develop and promote branding initiatives consistent with
                corporate business goals and objectives
              </p>
            </div>
            <div className="flex flex-col items-start space-y-2">
              <div className="w-7 border-b-2 border-cms-primary-green" />
              <p>
                Develop and promote branding initiatives consistent with
                corporate business goals and objectives
              </p>
            </div>
          </div>
          <button className="mt-4 px-4 py-2 self-start border border-cms-primary text-cms-primary hover:bg-purple-100">
            More Details
          </button>
        </div>
      </div>

      <div className="mt-auto">
        <Footer />
      </div>
    </>
  )
}

export default page

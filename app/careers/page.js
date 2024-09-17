import Tab from "@/components/AboutUs/Tab/Tab"
import CareersForm from "@/components/Careers/CareersForm"
import JobListing from "@/components/Careers/JobListing"
import Footer from "@/components/Footer/Footer"
import Header from "@/components/Header/Header"

export function generateMetadata() {
  return {
    title: "Careers | Facilitating scale, impact and sustainability",
    description:
      "Explore careers with CMS for economic stability, intellectual growth and learning and opportunity to work in multiple domains",
    metadataBase: new URL("https://cms.org.in/careers"),
    openGraph: {
      url: "https://cms.org.in/careers",
      title: "Careers | Facilitating scale, impact and sustainability",
      description:
        "Explore careers with CMS for economic stability, intellectual growth and learning and opportunity to work in multiple domains",
      images: [
        {
          url: "/social.png",
          width: 800,
          height: 600,
          alt: "CMS",
        },
      ],
    },
  }
}

const page = () => {
  const desc =
    "We at CMS know that reaching scale, impact and sustainability of social initiatives requires the operation of an eco-system that integrates four elements–the capacities of the communities; the efficiency of the market; the reach, vision and effectiveness of social initiatives; and the power of the state. As catalysts, we work with our partners to harness the ecosystem strength for accelerated impact, maximisation of the social return of initiatives, and creation of shared value. In this journey, the staff members play an integral role and we are sure that your association with CMS will result in achievement of not just organisation goals but also see your dreams converted into reality. We also provide you with Economic Stability, Opportunity for Intellectual Growth and Learning, Opportunity to work in multiple domains and freedom of expression."

  return (
    <>
      <div className="bg-[url('https://s3.ap-south-1.amazonaws.com/com.cg.ivista.mediafiles/cms-origin/cms-website/public/careers/banner.png')] flex flex-col justify-center md:justify-end h-[420px] md:h-[480px] bg-cover bg-center py-10 md:py-16">
        <Header />
        <div className="ps-2 md:ps-24">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white text-center sm:text-left">
            Careers
          </h1>
        </div>
      </div>

      <Tab heading="Join Our Journey" desc={desc} />

      {/* <div className="max-w-screen-xl mx-auto mt-14 mb-10 px-4 md:px-8">
        <div className="space-y-4 text-cms-primary-black text-base md:text-lg w-full md:w-4/5">
          <p>
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
      </div> */}

      {/* <div className="mt-10 mb-5">
        <h2 className="text-3xl text-cms-primary font-semibold ps-24 mb-5">
          Current Openings
        </h2>
        <div className="border border-[#707070] w-56 ms-24" />
      </div> */}

      <JobListing />

      <CareersForm />

      <div className="mt-auto">
        <Footer />
      </div>
    </>
  )
}

export default page

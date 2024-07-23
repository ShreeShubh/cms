import CurrentPath from '@/components/CurrentPath/CurrentPath'
import EmpoweringChange from '@/components/Home/EmpoweringChange/EmpoweringChange'
import FocusArea from '@/components/Home/FocusArea/FocusArea'
import Impact from '@/components/Home/Impact/Impact'
import Partners from '@/components/Home/Partners/Partners'
import Solutions from '@/components/Home/Solutions/Solutions'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <div className="">
        <Image
          src="/socialBusinesses/banner.png"
          width={1366}
          height={340}
          className="w-full"
        />
      </div>
      <CurrentPath />

      <div className="py-12">
        <div className="text-center mb-5">
          <h2 className="text-cms-primary-black text-2xl">
            We are a social investment catalyst that partners with change agents
            to solve <br /> complex societal problems, leveraging our 30 years
            of experience and resources. <br /> We are committed to transforming
            social enterprises and impactful initiatives <br /> aligned with
            Sustainable Development Goals.
          </h2>
        </div>
      </div>

      <EmpoweringChange />
      <Solutions />
      <Impact />
      <FocusArea />
      <Partners />
    </>
  )
}

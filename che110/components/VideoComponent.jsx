import StatCard from "./StatCard";
import Navbar from "./Navbar";
// NOTE: This component is still in development, dummy data will be replaced with live data in future
export default function VideoComponent() {
  return (
    <>
      <div className="bg-video h-screen max-w-screen object-cover object-center relative">
        <div className="absolute inset-0 max-w-7xl mx-auto">
          <div className="relative z-20 "><Navbar /></div>
          <div className="absolute z-30"><h1 className="text-7xl font-semibold text-white mx-auto items-center">Its time to take climate action
</h1></div>
          <div className="absolute bottom-0 mx-auto text-white text-4xl font-bold p-4 rounded-lg z-10 grid grid-cols-3 grid-rows-2 gap-y-10 gap-x-20 mx-auto">
            <StatCard title="Carbon Dioxide" description="parts per million(current)" stat={419} isUp/>
            <StatCard title="Global Temperature" description="°C since preindustrial" stat={1.1} isUp/>
            <StatCard title="Arctic Sea Ice Minimum Extent" description="percentage per decade since 1979" stat={12.6}/>
            <StatCard title="Sea Level" description="inches since january 1993" stat={4}/>
            <StatCard title="Ice Sheets" description="billion metric tons per year" stat={427} isUp/>
            <StatCard title="Ocean Warming" description="parts per million(current)" stat={345} isUp/>
          </div>
        </div>
        <video className="absolute inset-0 object-cover object-center w-full h-full" autoPlay muted loop>
          <source src='climateVideo.mp4' type="video/mp4" />
        </video>
      </div>

    </>
  )
}

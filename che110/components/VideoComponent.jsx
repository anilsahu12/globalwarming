
export default function VideoComponent() {
  return (
    <>
      <div className="bg-video h-screen w-screen object-cover object-center relative">
        <div className="absolute inset-0 flex justify-center items-center">
          <div className="text-white text-4xl font-bold bg-black bg-opacity-50 p-4 rounded-lg">
            Hello, world!
          </div>
        </div>
        <video className="absolute inset-0 object-cover object-center w-full h-full" autoPlay muted loop>
          <source src='climateVideo.mp4' type="video/mp4" />
        </video>
      </div>

    </>
  )
}
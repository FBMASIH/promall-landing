import Head from "./Head";
export default function Main() {
  return (
    <div
      className="flex justify-center "
      style={{ position: "relative", height: "100vh" }}
    >
      <video
        className=" h-full"
        src="/assets/background/banner.mp4"
        autoPlay
        loop
        muted
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover", // پوشش کامل بدون اعوجاج
          zIndex: -1, // قرارگیری در پشت سایر عناصر
        }}
      />

      <Head />
    </div>
  );
}

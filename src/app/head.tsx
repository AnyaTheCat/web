export default function Head() {
  return (
    <>
      <title>猫のアーニャ</title>
      <link rel="icon" href="/favicon.ico" /> 
      
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta name="description" content="Hello world!" />

      {/* Preload Web Fonts */}
      <link rel="preload" href="/fonts/FOTNewRodin Pro L.otf" as="font" type="font/otf" crossOrigin="anonymous" />
      <link rel="preload" href="/fonts/FOTNewRodin Pro M.otf" as="font" type="font/otf" crossOrigin="anonymous" />
      <link rel="preload" href="/fonts/FOTNewRodin Pro B.otf" as="font" type="font/otf" crossOrigin="anonymous" />
      <link rel="preload" href="/fonts/FOTNewRodin Pro DB.otf" as="font" type="font/otf" crossOrigin="anonymous" />
      <link rel="preload" href="/fonts/FOTNewRodin Pro EB.otf" as="font" type="font/otf" crossOrigin="anonymous" />
      <link rel="preload" href="/fonts/FOTNewRodin Pro UB.otf" as="font" type="font/otf" crossOrigin="anonymous" />
    </>
  )
}

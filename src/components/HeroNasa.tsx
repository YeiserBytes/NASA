import useNasa from "../hooks/useNasa";

export default function HeroNasa(): JSX.Element {
  const { nasa, isLoading, formattedDate } = useNasa()

  if (isLoading !== undefined && isLoading) {
    return <h1 className="text-lg">Loading...</h1>;
  }

  if (!nasa) return <></>;
  const { url, media_type, title, copyright, explanation } = nasa;

  return (
    <header className="lg:h-screen lg:flex-row flex flex-col items-center justify-center w-screen min-h-screen px-5 py-5">
      <main className="lg:flex-row flex flex-col items-center justify-center gap-4">
        {media_type === "image" && (
          <div className="flex justify-center items-center max-w-md shadow-lg border-2 border-[#111928]  rounded-lg">
            <img src={url} alt="Foto" className="object-cover w-full h-full rounded-lg" />
          </div>
        )}
        <article className="flex flex-col gap-5 max-w-xl p-5 rounded-xl backdrop-blur-[16px] bg-[#111928ac] backdrop-saturate-[180%] shadow-lg border-2 border-[#111928]">
          <h1 className="font-bold text-2xl text-[#98C1D9]">{title}</h1>
          <div className="flex items-center justify-start gap-3">
            {copyright &&
              <span className="bg-[#98C1D9] text-white text-opacity-80 font-bold rounded px-2 py-1 text-sm">
                {copyright}
              </span>
            }
            <span className="bg-[#EE6C4D] text-white text-opacity-80 font-bold rounded px-2 py-1 text-sm">
              {formattedDate}
            </span>
          </div>
          <p className="text-[#E0FBFC]">{explanation}</p>
        </article>
      </main>
    </header>
  )
}

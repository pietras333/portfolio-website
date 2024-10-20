const Resume = () => {
  return (
    <section className="w-full h-screen flex flex-col bg-[#ebebeb] relative">
      <section className="w-full h-full flex  max-xl:flex-col-reverse">
        <section className="home-left h-full w-1/2 max-md:h-3/4 flex flex-col justify-start items-start pl-32 max-md:pl-0 max-xl:w-full max-md:items-center max-md:justify-start "></section>
        <section className="home-right max-xl:items-center max-xl:w-full max-xl:flex-row max-xl:h-1/6 w-1/2  max-xl:justify-center h-full flex flex-col justify-start items-end relative"></section>
      </section>

      <h2 className="text-4xl font-light flex flex-col justify-center items-center mx-auto absolute top-32 right-0 left-0 w-[300px] max-md:leading-loose max-md:bg-transparent leading-snug bg-[#ebebeb]">
        <caption className="font-normal opacity-50 tracking-widest text-2xl">
          Wendt Piotr
        </caption>
        Résumé
      </h2>
    </section>
  );
};

export default Resume;

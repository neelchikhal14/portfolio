const TimelineView = ({ exp }: { exp: any }) => {
  const totalExp = exp.length ?? 0;

  return (
    <div className="mt-12">
      {exp.map((e: any, idx: number) => (
        <div className="flex flex-col" key={e.idx}>
          <div className="flex">
            <p className="w-44 h-12 rounded-full bg-text-color flex items-center justify-center">
              <span className="text-section-background ">
                {e.fromDate} to {e.to}
              </span>
            </p>
            <div className="flex flex-col items-center pl-5">
              <div className="bg-text-color h-12 w-12 rounded-full flex justify-center items-center">
                <div className="bg-iconic-green h-10 w-10 rounded-full"></div>
              </div>
              {idx < totalExp - 1 && (
                <div>
                  <div className="w-1 h-20 bg-text-color"></div>
                </div>
              )}
            </div>
            <div className="w-80 h-12 flex items-center">
              <div className=" h-1 w-80 border-b-2 border-dashed border-b-text-color"></div>
            </div>
            <div className="w-52 h-16 rounded-full bg-text-color flex flex-col items-center justify-center ml-5">
              <span className="text-section-background font-[900]">
                {e.companyName}
              </span>
              <span className="text-section-background">{e.position}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TimelineView;

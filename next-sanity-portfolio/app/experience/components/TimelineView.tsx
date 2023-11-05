const TimelineView = ({ exp }: { exp: any }) => {
  const totalExp = exp.length ?? 0;

  return (
    <div className="mt-12">
      {exp.map((e: any, idx: number) => (
        <div className="flex flex-col" key={e.idx}>
          <div className="flex">
            <p className="w-56 h-24 sm:w-64 md:w-56 sm:h-20 rounded-full bg-text-color flex items-center justify-center">
              <span className="text-section-background text-center text-[11px] sm:text-sm">
                {e.fromDate} to {e.to}
              </span>
            </p>
            <div className="flex flex-col items-center pl-5">
              <div className="bg-text-color h-6 w-6 sm:h-16 sm:w-16 rounded-full flex justify-center items-center">
                <div className="bg-iconic-green h-5 w-5 sm:h-14 sm:w-14 rounded-full"></div>
              </div>
              {idx < totalExp - 1 && (
                <div>
                  <div className="w-1 h-20 bg-text-color"></div>
                </div>
              )}
            </div>
            <div className="w-10 sm:w-40 md:w-80 h-12 flex items-center">
              <div className="w-10 h-1 sm:w-40 md:w-80 border-b-2 border-dashed border-b-text-color"></div>
            </div>
            <div className="w-56 h-24 sm:w-64 md:w-56 sm:h-20 rounded-full bg-text-color flex flex-col items-center justify-center ml-5">
              <span className="text-section-background font-[900] text-center text-[11px] sm:text-sm md:px-1">
                {e.companyName}
              </span>
              <span className="text-section-background text-center text-[11px] sm:text-sm">
                {e.position}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TimelineView;

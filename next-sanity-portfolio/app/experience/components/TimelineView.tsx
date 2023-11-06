const TimelineView = ({ exp }: { exp: any }) => {
  const totalExp = exp.length ?? 0;

  return (
    <div className="mt-12">
      {exp.map((e: any, idx: number) => (
        <div className="flex flex-col" key={e.idx}>
          <div className="grid grid-rows-[template_rows_auto_1fr]">
            <div className="justify-self-center flex items-center">
              {/* year */}
              <p className="w-24 h-20 rounded-sm bg-text-color flex items-center justify-center sm:w-52 sm:h-16 sm:rounded-full">
                <span className="text-section-background text-center text-sm sm:text-base md:text-lg font-[900]">
                  {e.fromDate} to {e.to}
                </span>
              </p>
              {/* circle design */}
              <div className="flex items-center">
                {/* dotted line */}
                <div className="w-10 h-12 flex items-center">
                  <div className="w-10 h-1 border-b-2 border-dashed border-b-text-color"></div>
                </div>
                {/* circle design */}
                <div>
                  <div className="bg-text-color h-6 w-6 rounded-full flex justify-center items-center sm:w-9 sm:h-9">
                    <div className="bg-iconic-green h-5 w-5 rounded-full sm:w-7 sm:h-7"></div>
                  </div>
                </div>
                {/* dotted line */}
                <div className="w-10 h-12 flex items-center">
                  <div className="w-10 h-1 border-b-2 border-dashed border-b-text-color"></div>
                </div>
              </div>
              {/* company name and position */}
              <div>
                <div className="w-24 h-20 rounded-sm  bg-text-color flex flex-col items-center justify-center sm:w-52 sm:h-16 sm:rounded-full">
                  <span className="text-section-background font-[900] text-center text-xs sm:text-sm md:text-base md:px-1">
                    {e.companyName}
                  </span>
                  <span className="text-section-background text-center text-xs sm:text-sm md:text-base">
                    {e.position}
                  </span>
                </div>
              </div>
            </div>
            {/* vertical stick */}
            <div className="justify-self-center">
              {idx < totalExp - 1 && (
                <div>
                  <div className="w-1 h-20 bg-text-color"></div>
                </div>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TimelineView;

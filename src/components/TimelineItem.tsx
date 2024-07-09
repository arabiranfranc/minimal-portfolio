import React from "react";

interface TimelineProps {
  year: string;
  title: string;
  duration: string;
  details: string;
}

const TimelineItem: React.FC<TimelineProps> = ({
  year,
  title,
  duration,
  details,
}) => {
  return (
    <ol className="flex flex-col md:flex-row relative border-l border-stone-200 dark:border-stone-700">
      <li className="mb-10 relative mt-2">
        <div className="absolute w-3 h-3 bg-stone-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-stone-900 dark:bg-stone=700"></div>
        <div className="flex flex-col md:flex-row items-start gap-4 text-xs md:text-sm">
          <span className="inline-block px-2 py-1 ml-3 font-semibold text-white dark:text-stone-900 bg-stone-900 dark:bg-stone-900 dark:bg-white rounded-md">
            {year}
          </span>
          <div>
            <h3 className="text-lg font-semibold text-stone-900 dark:text-white">
              {title}
            </h3>
            <div className="my-1 text-sm font-normal leading-none text-stone-400 dark:text-stone-500">
              {duration}
            </div>
            <p className="my-2 text-base font-normal text-stone-500 dark:text-stone-400">
              {details}
            </p>
          </div>
        </div>
      </li>
    </ol>
  );
};

export default TimelineItem;

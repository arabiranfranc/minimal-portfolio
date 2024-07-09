import React from "react";
import timeline from "../data/timeline";
import TimelineItem from "./TimelineItem";
import Title from "./Title";

const Timeline: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center my-20 px-4">
      <div className="w-full md:w-7/12 max-w-4xl">
        <Title>Timeline</Title>
        {timeline.map((item) => (
          <TimelineItem
            key={item.year} // Add a key prop for better list rendering
            year={item.year}
            title={item.title}
            duration={item.duration}
            details={item.details}
          />
        ))}
      </div>
    </div>
  );
};

export default Timeline;

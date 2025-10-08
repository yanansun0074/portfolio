import React from "react";
import { projectList } from "../helpers/ProjectList";
import "../styles/TimeGrid.css";

const TimeGrid = () => {
  // Process project data to create timeline data
  const processProjectData = () => {
    const timelineData = {};

    // Initialize years from 2020 to 2025
    for (let year = 2020; year <= 2025; year++) {
      timelineData[year] = {};
      for (let month = 1; month <= 12; month++) {
        timelineData[year][month] = 0;
      }
    }

    // Count projects per month
    projectList.forEach((project) => {
      if (project.date && project.date !== "W.I.P") {
        const [year, month] = project.date.split("-").map(Number);
        if (timelineData[year] && timelineData[year][month] !== undefined) {
          timelineData[year][month]++;
        }
      }
    });

    return timelineData;
  };

  const timelineData = processProjectData();
  const years = Object.keys(timelineData).sort((a, b) => b - a); // Most recent first
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  // Group months into two 6-month periods per year
  const getHalfYearData = (year, half) => {
    const startMonth = half === 1 ? 1 : 7;
    const endMonth = half === 1 ? 6 : 12;
    const halfYearData = {};

    for (let month = startMonth; month <= endMonth; month++) {
      halfYearData[month] = timelineData[year][month] || 0;
    }

    return halfYearData;
  };

  // Calculate max projects in any month for normalization
  const maxProjects = Math.max(
    ...Object.values(timelineData).flatMap((year) => Object.values(year))
  );

  const getIntensity = (count) => {
    if (count === 0) return 0;
    return Math.min(count / Math.max(maxProjects, 1), 1);
  };

  const getColorIntensity = (intensity) => {
    if (intensity === 0) return "#ebedf0"; // Light gray for no activity
    const baseColor = "#4b9cd3"; // Match your portfolio theme color
    const alpha = 0.1 + intensity * 0.9; // Range from 0.1 to 1.0
    return `rgba(75, 156, 211, ${alpha})`;
  };

  return (
    <div className="time-grid-container">
      <div className="time-grid">
        {/* <div className="time-grid-header">
          <h3>Project Timeline</h3>
        </div> */}
        <div className="time-grid-content">
          <div className="year-labels">
            {years.map((year) => (
              <div key={year} className="year-label">
                {year}
              </div>
            ))}
          </div>
          <div className="grid-container">
            {/* <div className="month-labels">
              {months.map((month) => (
                <div key={month} className="month-label">
                  {month}
                </div>
              ))}
            </div> */}
            <div className="contribution-grid">
              {/* For each year, create two rows */}
              {years.map((year) => (
                <div key={year} className="year-group">
                  {/* First row: Jan-Jun */}
                  <div className="half-year-row">
                    {months.slice(0, 6).map((_, monthIndex) => {
                      const month = monthIndex + 1;
                      const count = timelineData[year][month] || 0;
                      const intensity = getIntensity(count);
                      const color = getColorIntensity(intensity);

                      return (
                        <div
                          key={`${year}-${month}`}
                          className="contribution-cell"
                          style={{ backgroundColor: color }}
                          title={`${year}-${month
                            .toString()
                            .padStart(2, "0")}: ${count} project${
                            count !== 1 ? "s" : ""
                          }`}
                        />
                      );
                    })}
                  </div>
                  {/* Second row: Jul-Dec */}
                  <div className="half-year-row">
                    {months.slice(6, 12).map((_, monthIndex) => {
                      const month = monthIndex + 7;
                      const count = timelineData[year][month] || 0;
                      const intensity = getIntensity(count);
                      const color = getColorIntensity(intensity);

                      return (
                        <div
                          key={`${year}-${month}`}
                          className="contribution-cell"
                          style={{ backgroundColor: color }}
                          title={`${year}-${month
                            .toString()
                            .padStart(2, "0")}: ${count} project${
                            count !== 1 ? "s" : ""
                          }`}
                        />
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* <div className="time-grid-legend">
          <span>Less</span>
          <div className="legend-squares">
            {[0, 0.25, 0.5, 0.75, 1].map((intensity, index) => (
              <div
                key={index}
                className="legend-square"
                style={{ backgroundColor: getColorIntensity(intensity) }}
              />
            ))}
          </div>
          <span>More</span>
        </div> */}
      </div>
    </div>
  );
};

export default TimeGrid;

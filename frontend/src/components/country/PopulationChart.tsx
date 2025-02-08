import React, { useMemo } from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import { IPopulationData } from '../../interfaces/ICountry';
import { MESSAGES, CHART_COLORS } from '../../constants';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface PopulationChartProps {
  population: IPopulationData[];
}

const PopulationChart: React.FC<PopulationChartProps> = React.memo(({ population }) => {
  const chartData = useMemo(() => ({
    labels: population.map(p => p.year),
    datasets: [
      {
        label: 'Population',
        data: population.map(p => p.value),
        fill: false,
        borderColor: CHART_COLORS.LINE,
        tension: 0.1,
      },
    ],
  }), [population]);

  const chartOptions = useMemo(() => ({
    maintainAspectRatio: false,
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
        ticks: { 
          color: CHART_COLORS.TEXT,
          font: {
            size: window.innerWidth < 640 ? 10 : 12
          }
        },
        grid: { color: CHART_COLORS.GRID }
      },
      x: {
        ticks: { 
          color: CHART_COLORS.TEXT,
          font: {
            size: window.innerWidth < 640 ? 10 : 12
          },
          maxRotation: 45,
          minRotation: 45
        },
        grid: { color: CHART_COLORS.GRID }
      }
    },
    plugins: {
      legend: {
        labels: { 
          color: CHART_COLORS.TEXT,
          font: {
            size: window.innerWidth < 640 ? 12 : 14
          }
        }
      }
    }
  }), []);

  return (
    <div>
      <h2 className="text-lg sm:text-xl font-semibold text-white mb-4">
        {MESSAGES.HEADERS.POPULATION_OVER_TIME}
      </h2>
      <div className="bg-white bg-opacity-5 rounded-lg p-2 sm:p-4">
        <div className="h-[300px] sm:h-[400px] lg:h-[500px]">
          {population.length > 0 ? (
            <Line 
              data={chartData} 
              options={chartOptions}
            />
          ) : (
            <div className="h-full flex items-center justify-center text-white text-opacity-60 text-sm sm:text-base">
              {MESSAGES.ERRORS.NO_POPULATION_DATA}
            </div>
          )}
        </div>
      </div>
    </div>
  );
});

PopulationChart.displayName = 'PopulationChart';

export default PopulationChart; 
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import TitleCard from '../../../components/Cards/TitleCard';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { actionGetQuantityStatistics } from 'store/actions';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

function BarChart({dateValue}){
  const dispatch = useDispatch();
  const quantityStatistics = useSelector((state) => state.Admin.quantityStatistics)

  useEffect(() => {
    const startDate = new Date(dateValue.startDate);;

    if (startDate) {
      const year = startDate.getFullYear();
      console.log(startDate.getFullYear())

      const month = startDate.getMonth() + 1;
      dispatch(actionGetQuantityStatistics({ month, year }));
    }
  
}, [dispatch, dateValue]);

    const options = {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          }
        },
      };
      
      const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
      
      const data = {
        labels,
        datasets: [
          {
            label: 'Store 1',
            data: labels.map((month, monthIndex) => {
              const salesDataForMonth = quantityStatistics.find((item) => item[0] === monthIndex + 1);
              return salesDataForMonth ? salesDataForMonth[1] : 0;
            }),
            backgroundColor: 'rgba(255, 99, 132, 1)',
          },
          // {
          //   label: 'Store 2',
          //   data: labels.map(() => { return Math.random() * 1000 + 500 }),
          //   backgroundColor: 'rgba(53, 162, 235, 1)',
          // },
        ],
      };

    return(
      <TitleCard title={"No of Orders"} topMargin="mt-2">
            <Bar options={options} data={data} />
      </TitleCard>

    )
}


export default BarChart
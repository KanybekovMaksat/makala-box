import { Container } from '@mui/material';
import { PieChart } from '@mui/x-charts/PieChart';

export function RatingPage() {
  return (
    <Container maxWidth="sm" className="my-20 flex flex-col items-center">
      <h1 className="text-2xl font-bold text-center">Статистика и рейтинг</h1>
      <div className="flex">
        <PieChart
          height={300}
          width={300}
          className="flex  justify-center"
          series={[
            {
              data: [
                { id: 0, value: 20, label: 'series A' },
                { id: 1, value: 20, label: 'series B' },
                { id: 2, value: 20, label: 'series C' },
                { id: 3, value: 20, label: 'series A' },
                { id: 4, value: 60, label: 'series B' },
                { id: 5, value: 20, label: 'series C' },
              ],
              innerRadius: 30,
              outerRadius: 100,
              paddingAngle: 5,
              cornerRadius: 5,
            },
          ]}
          // slotProps={{
          //   legend: {
          //     direction: 'column',
          //     position: { vertical: 'bottom', horizontal: 'left' },
          //     padding: 0,
          //   },
          // }}
          slotProps={{ legend: { hidden: true } }}
        />
        <PieChart
          height={300}
          width={300}
          className="flex  justify-center"
          series={[
            {
              data: [
                { id: 0, value: 20, label: 'series A' },
                { id: 1, value: 20, label: 'series B' },
                { id: 2, value: 20, label: 'series C' },
                { id: 3, value: 20, label: 'series A' },
                { id: 4, value: 60, label: 'series B' },
                { id: 5, value: 20, label: 'series C' },
              ],
              innerRadius: 30,
              outerRadius: 100,
              paddingAngle: 5,
              cornerRadius: 5,
            },
          ]}
          // slotProps={{
          //   legend: {
          //     direction: 'column',
          //     position: { vertical: 'bottom', horizontal: 'left' },
          //     padding: 0,
          //   },
          // }}
          slotProps={{ legend: { hidden: true } }}
        />
        <PieChart
        height={300}
        width={300}
        className='flex  justify-center'
        series={[
          {
            data: [
              { id: 0, value: 20, label: 'series A' },
              { id: 1, value: 20, label: 'series B' },
              { id: 2, value: 20, label: 'series C' },
              { id: 3, value: 20, label: 'series A' },
              { id: 4, value: 60, label: 'series B' },
              { id: 5, value: 20, label: 'series C' },
            ],
            innerRadius: 30,
            outerRadius: 100,
            paddingAngle: 5,
            cornerRadius: 5,
          },
        ]}
        // slotProps={{
        //   legend: {
        //     direction: 'column',
        //     position: { vertical: 'bottom', horizontal: 'left' },
        //     padding: 0,
        //   },
        // }}
        slotProps={{ legend: { hidden: true } }}
      />
      </div>
    </Container>
  );
}

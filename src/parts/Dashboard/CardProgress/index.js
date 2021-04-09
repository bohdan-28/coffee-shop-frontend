import React from 'react'
import style from './cardprogress.module.css'
import { more } from '../../../assets/images'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ReferenceLine,
  ResponsiveContainer,
} from 'recharts';

const data = [
  {
    name: 15,
    income: 10000,
    outcome: -4000,
  },
  {
    name: 16,
    income: 5000,
    outcome: -3000,
  },
  {
    name: 17,
    income: 9800,
    outcome: -8000,
  },
  {
    name: 18,
    income: 9800,
    outcome: -4000,
  },
  {
    name: 19,
    income: 7800,
    outcome: -6000,
  },
  {
    name: 20,
    income: 5800,
    outcome: -2000,
  },
];

function CardProgress() {
  return (
    <div>
      <div className={style['card-progress']}>
        <h5 className={style['title']}>Monthly Report</h5>
        <img className={style['more']} src={more} alt="" />
        <h5 className={style['date']}>15 April - 20 April</h5>

        {/* ============= ISI GRAFIK */}
        <ResponsiveContainer width="100%" height="65%">
          <BarChart
            width={500}
            height={200}
            data={data}
            stackOffset="sign"
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <ReferenceLine y={0} stroke="#000" />
            <Bar dataKey="income" fill="#FFBA33" stackId="stack" />
            <Bar dataKey="outcome" fill="#6A4029" stackId="stack" />
          </BarChart>
        </ResponsiveContainer>

        <div className={style['line']}></div>
        <div className={style['income-indicator']}>
          <h5>Income</h5>
        </div>
        <div className={style['outcome-indicator']}>
          <h5>Outcome</h5>
        </div>
      </div>
    </div>
  )
}

export default CardProgress

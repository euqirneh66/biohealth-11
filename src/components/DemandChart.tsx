import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine, Cell } from 'recharts';
import { motion } from 'framer-motion';

const data = [
  { time: '07:00', patients: 12 },
  { time: '08:00', patients: 25 },
  { time: '09:00', patients: 42 },
  { time: '10:00', patients: 35 },
  { time: '11:00', patients: 18 },
  { time: '12:00', patients: 10 },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    const isOver = payload[0].value > 30;
    return (
      <div className="bg-white p-3 shadow-xl rounded-lg border border-gray-100">
        <p className="text-[10px] font-bold text-gray-400 uppercase mb-1">{label}</p>
        <div className="flex items-center gap-2">
          <span className="text-lg font-black text-gray-800">{payload[0].value}</span>
          <span className="text-[10px] font-medium text-gray-500">Pacientes</span>
        </div>
        {isOver && (
          <p className="text-[9px] font-black text-red-500 uppercase mt-1 flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
            Gargalo Detectado
          </p>
        )}
      </div>
    );
  }
  return null;
};

const DemandChart = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 h-full flex flex-col relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16" />

      <div className="mb-8 relative z-10">
        <h2 className="text-lg font-bold text-gray-800">Previsão de Demanda</h2>
        <div className="flex items-center gap-2 mt-0.5">
            <div className="px-1.5 py-0.5 bg-primary/10 rounded text-[9px] font-black text-primary uppercase">IA Analytics</div>
            <p className="text-xs text-gray-400 font-medium tracking-tight">Próximas 3 horas</p>
        </div>
      </div>

      <div className="flex-1 min-h-[300px] relative z-10">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 20, right: 30, left: -20, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f5f5f5" />
            <XAxis
              dataKey="time"
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#9ca3af', fontSize: 10, fontWeight: 700 }}
              dy={10}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#9ca3af', fontSize: 10, fontWeight: 700 }}
            />
            <Tooltip
              cursor={{ fill: 'rgba(0, 137, 123, 0.03)' }}
              content={<CustomTooltip />}
            />
            <ReferenceLine
              y={30}
              stroke="#00897B"
              strokeDasharray="4 4"
              strokeWidth={2}
              label={{
                position: 'top',
                value: 'CAPACIDADE NOMINAL',
                fill: '#00897B',
                fontSize: 8,
                fontWeight: 900,
                dx: 120
              }}
            />
            <Bar
              dataKey="patients"
              radius={[4, 4, 0, 0]}
              barSize={32}
              animationDuration={1500}
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={entry.patients > 30 ? '#ef4444' : '#00897B'}
                  fillOpacity={entry.patients > 30 ? 0.9 : 0.7}
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-6 pt-4 border-t border-gray-50 flex flex-wrap gap-4 items-center relative z-10">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-primary/70" />
          <span className="text-[9px] font-black text-gray-400 uppercase tracking-widest">Normal</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-red-500" />
          <span className="text-[9px] font-black text-gray-400 uppercase tracking-widest">Alerta de Sobrecarga</span>
        </div>
      </div>
    </motion.div>
  );
};

export default DemandChart;

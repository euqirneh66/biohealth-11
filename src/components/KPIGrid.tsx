import { Brain, MessageSquare, Zap, Clock, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { cn, fadeIn } from '../lib/utils';

interface KPICardProps {
  title: string;
  value: string | number;
  icon: React.ElementType;
  highlight?: string;
  pulse?: boolean;
  iconColor?: string;
  badge?: React.ReactNode;
  delay?: number;
}

const KPICard = ({ title, value, icon: Icon, highlight, pulse, iconColor, badge, delay = 0 }: KPICardProps) => {
  return (
    <motion.div
      variants={fadeIn('up', delay)}
      initial="initial"
      animate="animate"
      whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.05)" }}
      className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col gap-4 relative overflow-hidden"
    >
      {pulse && (
        <div className="absolute top-0 right-0 p-4">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
          </span>
        </div>
      )}

      <div className="flex items-center justify-between">
        <div className={cn("p-2 rounded-lg bg-gray-50 group-hover:bg-primary/10 transition-colors", iconColor)}>
          <Icon size={24} />
        </div>
        {badge}
      </div>

      <div>
        <h3 className="text-sm font-medium text-gray-500">{title}</h3>
        <p className="text-3xl font-bold text-gray-800 mt-1">{value}</p>
      </div>

      {highlight && (
        <div className={cn("text-xs font-bold px-2 py-1 rounded-full w-fit flex items-center gap-1", highlight)}>
          {highlight.includes('blue') ? <Clock size={10}/> : <Zap size={10}/>}
          {highlight.includes('blue') ? 'Otimizado' : 'Ativo'}
        </div>
      )}
    </motion.div>
  );
};

const KPIGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-8 py-6">
      <KPICard
        title="Pacientes Previstos Hoje"
        value="47"
        icon={Brain}
        pulse
        iconColor="text-primary"
        delay={0.1}
      />
      <KPICard
        title="Confirmados (WhatsApp)"
        value="38"
        icon={MessageSquare}
        iconColor="text-green-600"
        badge={<CheckCircle2 size={16} className="text-green-500" />}
        delay={0.2}
      />
      <KPICard
        title="Fila Expressa Ativada"
        value="Sim"
        icon={Zap}
        iconColor="text-yellow-500"
        highlight="bg-green-100 text-green-700"
        delay={0.3}
      />
      <KPICard
        title="Tempo Médio Economizado"
        value="-12 min"
        icon={Clock}
        iconColor="text-blue-500"
        highlight="bg-blue-100 text-blue-700"
        delay={0.4}
      />
    </div>
  );
};

export default KPIGrid;

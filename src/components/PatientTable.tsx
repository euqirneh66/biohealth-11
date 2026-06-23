import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Printer, CheckCircle2, Clock } from 'lucide-react';
import { cn } from '../lib/utils';

const patients = [
  { time: '08:00', name: 'Maria Silva', profile: 'Anticoagulante', status: 'Confirmado' },
  { time: '08:15', name: 'João Santos', profile: 'Quimioterapia', status: 'Confirmado' },
  { time: '08:30', name: 'Ana Costa', profile: 'Nefrologia', status: 'Aguardando' },
  { time: '08:45', name: 'Carlos Oliveira', profile: 'Anticoagulante', status: 'Confirmado' },
  { time: '09:00', name: 'Beatriz Lima', profile: 'Nefrologia', status: 'Aguardando' },
];

const PatientTable = () => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
      <div className="px-6 py-5 border-b border-gray-100 flex items-center justify-between bg-gradient-to-r from-white to-gray-50">
        <div>
          <h2 className="text-lg font-bold text-gray-800">Lista de Pacientes Previstos para Hoje</h2>
          <p className="text-xs text-primary font-bold uppercase tracking-wider mt-0.5">Alta Recorrência Identificada por IA</p>
        </div>
        <div className="flex items-center gap-2">
            <span className="flex h-2 w-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-[10px] font-bold text-gray-500 uppercase">Tempo Real</span>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="bg-gray-50/80 text-gray-400 text-[11px] uppercase font-bold tracking-widest">
              <th className="px-6 py-4">Horário</th>
              <th className="px-6 py-4">Paciente</th>
              <th className="px-6 py-4">Perfil Clínico</th>
              <th className="px-6 py-4">Status</th>
              <th className="px-6 py-4 text-right">Ações Operacionais</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            <AnimatePresence>
              {patients.map((patient, index) => (
                <motion.tr
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * index }}
                  className={cn(
                    "hover:bg-primary/[0.03] transition-all duration-200 group cursor-default",
                    index % 2 === 0 ? "bg-white" : "bg-gray-50/30"
                  )}
                >
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-2">
                        <Clock size={14} className="text-gray-300" />
                        <span className="text-sm font-bold text-gray-700">{patient.time}</span>
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    <div className="flex flex-col">
                        <span className="text-sm text-gray-800 font-bold group-hover:text-primary transition-colors">{patient.name}</span>
                        <span className="text-[10px] text-gray-400 font-medium">ID: #{(1000 + index).toString()}</span>
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    <span className={cn(
                      "px-2.5 py-1 rounded-md text-[10px] font-black uppercase tracking-tight",
                      patient.profile === 'Anticoagulante' && "bg-orange-50 text-orange-600 border border-orange-100",
                      patient.profile === 'Quimioterapia' && "bg-purple-50 text-purple-600 border border-purple-100",
                      patient.profile === 'Nefrologia' && "bg-blue-50 text-blue-600 border border-blue-100",
                    )}>
                      {patient.profile}
                    </span>
                  </td>
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-2">
                      <div className={cn(
                        "w-2 h-2 rounded-full",
                        patient.status === 'Confirmado' ? "bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.4)]" : "bg-yellow-500 shadow-[0_0_8px_rgba(234,179,8,0.4)]"
                      )} />
                      <span className={cn(
                        "text-[11px] font-bold uppercase tracking-wide",
                        patient.status === 'Confirmado' ? "text-green-600" : "text-yellow-600"
                      )}>{patient.status}</span>
                    </div>
                  </td>
                  <td className="px-6 py-5 text-right">
                    <button className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 text-gray-600 rounded-lg text-xs font-bold hover:border-primary hover:text-primary hover:shadow-md transition-all duration-300 active:scale-95">
                      <Printer size={14} />
                      Etiqueta
                    </button>
                  </td>
                </motion.tr>
              ))}
            </AnimatePresence>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PatientTable;

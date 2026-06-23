import React from 'react';
import Header from './components/Header';
import KPIGrid from './components/KPIGrid';
import PatientTable from './components/PatientTable';
import DemandChart from './components/DemandChart';
import { motion } from 'framer-motion';

function App() {
  return (
    <div className="min-h-screen bg-[#F5F5F5] font-sans text-[#333333] flex flex-col selection:bg-primary selection:text-white">
      <Header />

      <main className="flex-1 max-w-[1600px] mx-auto w-full py-4">
        <KPIGrid />

        <div className="px-8 pb-8 grid grid-cols-1 lg:grid-cols-10 gap-8">
          <div className="lg:col-span-7">
            <PatientTable />
          </div>

          <div className="lg:col-span-3">
            <DemandChart />
          </div>
        </div>
      </main>

      <footer className="bg-white border-t border-gray-100 px-8 py-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              <span className="bg-primary/10 text-primary text-[10px] font-black px-2 py-0.5 rounded tracking-tighter">TRL 3 - PoC</span>
            </div>
            <p className="text-[11px] font-bold text-gray-400 uppercase tracking-tight">
              Inteligência desacoplada: <span className="font-medium lowercase italic text-gray-300">Dados lidos via CSV/Zênite sem impacto na operação atual.</span>
            </p>
          </div>
          <div className="flex items-center gap-2">
            <p className="text-[10px] font-black text-gray-300 uppercase tracking-widest">© 2024 Unimed Lab</p>
            <div className="w-1 h-1 rounded-full bg-gray-200" />
            <p className="text-[10px] font-black text-gray-300 uppercase tracking-widest">Digital Health Engine</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

import { ChevronDown, User } from 'lucide-react';

const Header = () => {
  return (
    <header className="flex items-center justify-between px-8 py-4 bg-white border-b border-gray-200">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-white font-bold text-xl">
          U
        </div>
        <div>
          <h1 className="text-xl font-bold text-primary">Unimed Lab</h1>
          <p className="text-xs text-gray-500 font-medium">Motor de Jornada Antecipada</p>
        </div>
      </div>

      <div className="flex items-center gap-6">
        <div className="flex items-center gap-2 px-3 py-1.5 bg-gray-100 rounded-md cursor-pointer hover:bg-gray-200 transition-colors">
          <span className="text-sm font-semibold text-gray-700">Unidade: Curitiba - Centro</span>
          <ChevronDown size={16} className="text-gray-500" />
        </div>

        <div className="flex items-center gap-3">
          <div className="text-right">
            <p className="text-sm font-bold text-gray-800 leading-none">Gerente: João</p>
            <p className="text-xs text-primary font-medium">Administrador</p>
          </div>
          <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center border-2 border-primary/20">
            <User size={20} className="text-gray-600" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

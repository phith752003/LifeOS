import React, { createContext, useContext, useState, useCallback } from 'react';

const ToastContext = createContext(null);

export const ToastProvider = ({ children }) => {
  const [toasts, setToasts] = useState([]);

  const addToast = useCallback((message, type = 'info') => {
    const id = Date.now();
    setToasts(prev => [...prev, { id, message, type }]);
    
    setTimeout(() => {
      setToasts(prev => prev.filter(t => t.id !== id));
    }, 3000);
  }, []);

  return (
    <ToastContext.Provider value={{ addToast }}>
      {children}
      <div className="fixed bottom-4 right-4 z-[100] flex flex-col gap-2 pointer-events-none">
        {toasts.map(t => (
          <div 
            key={t.id} 
            className="animate-in slide-in-from-right-4 fade-in duration-300 bg-surface border border-border shadow-lg rounded-lg px-4 py-3 flex items-center gap-3 pointer-events-auto"
          >
            <div className={`w-2 h-2 rounded-full ${t.type === 'success' ? 'bg-success' : t.type === 'danger' ? 'bg-danger' : 'bg-info'}`} />
            <p className="text-body font-medium text-text-primary">{t.message}</p>
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
};

export const useToast = () => useContext(ToastContext);

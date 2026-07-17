import React, { useState, useContext } from 'react';
import { Card } from '../common/Card';
import { SectionTitle } from '../common/SectionTitle';
import { DataContext } from '../../App';
import { useToast } from '../../contexts/ToastContext';
import { CheckCircle2, Circle, Plus, Trash2, Clock } from 'lucide-react';
import anime from 'animejs';
import { useStagger } from '../../hooks/useStagger';

export const TimePlanner = () => {
  const { data } = useContext(DataContext);
  const [tasks, setTasks] = useState(data.tasks);
  const [activeTab, setActiveTab] = useState('today');
  const [newTask, setNewTask] = useState('');
  const { addToast } = useToast();

  useStagger('.task-item', { delay: anime.stagger(30) }, [activeTab, tasks.length]);

  const toggleTask = (taskId, e) => {
    setTasks(prev => prev.map(t => {
      if (t.id === taskId) {
        const isCompleting = t.status !== 'completed';
        if (isCompleting) {
          addToast('Task completed!', 'success');
        }
        return { ...t, status: isCompleting ? 'completed' : 'pending' };
      }
      return t;
    }));
  };

  const removeTask = (taskId, e) => {
    const el = e.currentTarget.closest('.task-item');
    anime({
      targets: el,
      opacity: 0,
      translateX: 20,
      duration: 300,
      easing: 'easeOutExpo',
      complete: () => {
        setTasks(prev => prev.filter(t => t.id !== taskId));
        addToast('Task deleted');
      }
    });
  };

  const addTask = (e) => {
    e.preventDefault();
    if (!newTask.trim()) return;
    const nTask = {
      id: `task-${Date.now()}`,
      title: newTask,
      status: 'pending',
      priority: 'medium',
      deadline: new Date().toISOString()
    };
    setTasks([nTask, ...tasks]);
    setNewTask('');
    addToast('Task added', 'info');
  };

  const filteredTasks = tasks.filter(t => 
    activeTab === 'today' ? new Date(t.deadline).getDate() === new Date().getDate() : new Date(t.deadline).getDate() !== new Date().getDate()
  );

  return (
    <Card className="h-full flex flex-col">
      <SectionTitle title="Time Planner" />
      
      <div className="flex border-b border-border mb-4">
        <button 
          onClick={() => setActiveTab('today')}
          className={`pb-2 px-4 text-body font-medium border-b-2 transition-colors ${activeTab === 'today' ? 'border-palette-3 text-palette-3' : 'border-transparent text-text-secondary hover:text-text-primary'}`}
        >
          Today
        </button>
        <button 
          onClick={() => setActiveTab('upcoming')}
          className={`pb-2 px-4 text-body font-medium border-b-2 transition-colors ${activeTab === 'upcoming' ? 'border-palette-3 text-palette-3' : 'border-transparent text-text-secondary hover:text-text-primary'}`}
        >
          Upcoming
        </button>
      </div>

      <div className="flex-1 overflow-y-auto space-y-2 pr-2 scrollbar-hide min-h-[200px]">
        {filteredTasks.length === 0 ? (
          <div className="text-center p-4 text-text-secondary">No tasks found.</div>
        ) : (
          filteredTasks.map(task => (
            <div key={task.id} className="task-item group flex items-start gap-3 p-3 rounded-lg hover:bg-surface-hover transition-colors border border-transparent hover:border-border">
              <button onClick={(e) => toggleTask(task.id, e)} className="mt-0.5 text-palette-3 shrink-0">
                {task.status === 'completed' ? <CheckCircle2 size={20} /> : <Circle size={20} />}
              </button>
              <div className="flex-1 min-w-0">
                <p className={`text-body font-medium truncate transition-all duration-300 ${task.status === 'completed' ? 'line-through text-text-tertiary' : 'text-text-primary'}`}>
                  {task.title}
                </p>
                <div className="flex items-center gap-2 mt-1">
                  <span className={`text-caption px-2 py-0.5 rounded text-[10px] uppercase font-bold ${
                    task.priority === 'high' ? 'bg-danger/10 text-danger' : 
                    task.priority === 'medium' ? 'bg-warning/10 text-warning' : 
                    'bg-info/10 text-info'
                  }`}>
                    {task.priority}
                  </span>
                  <div className="flex items-center gap-1 text-text-tertiary text-caption">
                    <Clock size={12} />
                    <span>{new Date(task.deadline).toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' })}</span>
                  </div>
                </div>
              </div>
              <button 
                onClick={(e) => removeTask(task.id, e)} 
                className="opacity-0 group-hover:opacity-100 p-2 text-text-tertiary hover:text-danger hover:bg-danger/10 rounded-md transition-all"
                aria-label="Delete task"
              >
                <Trash2 size={16} />
              </button>
            </div>
          ))
        )}
      </div>

      <form onSubmit={addTask} className="mt-4 pt-4 border-t border-border flex gap-2">
        <input 
          type="text" 
          value={newTask}
          onChange={e => setNewTask(e.target.value)}
          placeholder="Add new task..." 
          className="flex-1 bg-surface-hover border border-border rounded-lg px-4 py-2 text-body focus:outline-none focus:ring-2 focus:ring-palette-3 transition-shadow"
        />
        <button type="submit" className="bg-palette-3 hover:bg-palette-2 text-white p-2 rounded-lg transition-colors flex items-center justify-center shadow-sm">
          <Plus size={20} />
        </button>
      </form>
    </Card>
  );
};

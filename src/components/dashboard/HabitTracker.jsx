import React, { useState, useContext } from 'react';
import { Card } from '../common/Card';
import { SectionTitle } from '../common/SectionTitle';
import { DataContext } from '../../App';
import { useToast } from '../../contexts/ToastContext';
import { Check, X, Flame, Bomb, Book, Dumbbell, Brain } from 'lucide-react';
import anime from 'animejs';
import { useStagger } from '../../hooks/useStagger';

const iconMap = {
  book: Book,
  dumbbell: Dumbbell,
  brain: Brain,
};

export const HabitTracker = () => {
  const { data } = useContext(DataContext);
  const [habits, setHabits] = useState(data.habits);
  const { addToast } = useToast();
  
  useStagger('.habit-row');

  const toggleDay = (habitId, dayIndex) => {
    setHabits(prev => prev.map(h => {
      if (h.id !== habitId) return h;
      const newWeek = [...h.week];
      const current = newWeek[dayIndex];
      newWeek[dayIndex] = current === 'done' ? 'missed' : current === 'missed' ? 'pending' : 'done';
      return { ...h, week: newWeek };
    }));
  };

  const handleSin = (e) => {
    anime({
      targets: e.currentTarget,
      translateX: [0, -10, 10, -5, 5, 0],
      duration: 400,
      easing: 'easeOutExpo'
    });
    addToast('SIN committed! Streak broken.', 'danger');
  };

  const dayLabels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

  return (
    <Card className="h-full flex flex-col">
      <SectionTitle title="Habit Tracker" action={
        <button onClick={handleSin} className="flex items-center gap-2 px-3 py-1.5 text-caption font-bold text-white bg-danger rounded-lg shadow-sm hover:bg-danger/80 transition-colors">
          <Bomb size={14} /> SIN
        </button>
      } />

      <div className="overflow-x-auto flex-1 mt-2">
        <div className="min-w-[500px]">
          <div className="flex mb-4 px-2">
            <div className="w-1/3"></div>
            <div className="w-1/2 flex justify-between px-2 text-caption font-medium text-text-tertiary">
              {dayLabels.map(d => <span key={d}>{d}</span>)}
            </div>
            <div className="w-1/6 text-right text-caption font-medium text-text-tertiary">Streak</div>
          </div>

          <div className="flex flex-col gap-3">
            {habits.map((habit) => {
              const Icon = iconMap[habit.icon] || Flame;
              return (
                <div key={habit.id} className="habit-row flex items-center p-2 rounded-xl hover:bg-surface-hover transition-colors">
                  <div className="w-1/3 flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-palette-3/10 text-palette-3">
                      <Icon size={18} />
                    </div>
                    <span className="text-body font-medium truncate">{habit.name}</span>
                  </div>
                  
                  <div className="w-1/2 flex justify-between px-2">
                    {habit.week.map((status, idx) => (
                      <button
                        key={idx}
                        onClick={() => toggleDay(habit.id, idx)}
                        className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${
                          status === 'done' ? 'bg-success text-white' :
                          status === 'missed' ? 'bg-danger/10 text-danger' :
                          'bg-border text-transparent hover:bg-border-hover'
                        }`}
                      >
                        {status === 'done' && <Check size={16} />}
                        {status === 'missed' && <X size={16} />}
                      </button>
                    ))}
                  </div>

                  <div className="w-1/6 flex items-center justify-end gap-1 font-bold text-palette-2">
                    <Flame size={16} />
                    <span>{habit.streak}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Card>
  );
};

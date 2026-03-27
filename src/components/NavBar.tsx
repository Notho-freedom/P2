import React from 'react';
import { Home, Search, Plus, MessageSquare, User } from 'lucide-react';
import { ViewState } from '../lib/types';
import { cn } from '../lib/utils';
interface NavBarProps {
  currentView: ViewState;
  navigate: (view: ViewState) => void;
}
export function NavBar({ currentView, navigate }: NavBarProps) {
  const navItems = [
  {
    id: 'home',
    icon: Home,
    label: 'Accueil'
  },
  {
    id: 'search',
    icon: Search,
    label: 'Recherche'
  },
  {
    id: 'publish',
    icon: Plus,
    label: 'Publier',
    isCenter: true
  },
  {
    id: 'chat',
    icon: MessageSquare,
    label: 'Messages'
  },
  {
    id: 'profile',
    icon: User,
    label: 'Profil'
  }] as
  const;
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-100 pb-safe">
      <div className="max-w-md mx-auto px-6 h-20 flex items-center justify-between relative">
        {navItems.map((item) => {
          const isActive = currentView === item.id;
          const Icon = item.icon;
          if (item.isCenter) {
            return (
              <button
                key={item.id}
                onClick={() => navigate('publish')}
                className="relative -top-5 flex flex-col items-center justify-center w-16 h-16 bg-emerald-600 rounded-full text-white shadow-lg shadow-emerald-600/30 hover:scale-105 active:scale-95 transition-all duration-200"
                aria-label={item.label}>
                
                <Icon className="w-8 h-8" />
              </button>);

          }
          return (
            <button
              key={item.id}
              onClick={() => navigate(item.id as ViewState)}
              className={cn(
                'flex flex-col items-center justify-center w-14 h-14 transition-all duration-200 active:scale-95',
                isActive ?
                'text-emerald-600' :
                'text-gray-400 hover:text-gray-600'
              )}>
              
              <Icon
                className={cn('w-6 h-6 mb-1', isActive && 'fill-emerald-50')} />
              
              <span className="text-[10px] font-medium">{item.label}</span>
            </button>);

        })}
      </div>
    </div>);

}
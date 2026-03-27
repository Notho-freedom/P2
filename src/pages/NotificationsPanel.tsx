import React from 'react';
import {
  ArrowLeft,
  Bell,
  CalendarCheck,
  MessageCircle,
  Star,
  AlertCircle } from
'lucide-react';
import { NavigationProps } from '../lib/types';
import { Card, CardContent } from '../components/ui/Card';
import { cn } from '../lib/utils';
export function NotificationsPanel({ navigate }: NavigationProps) {
  const notifications = [
  {
    id: 1,
    group: "Aujourd'hui",
    items: [
    {
      icon: CalendarCheck,
      color: 'bg-emerald-100 text-emerald-600',
      title: 'Réservation confirmée',
      desc: 'Votre trajet Paris → Lyon est confirmé.',
      time: 'Il y a 2h',
      unread: true
    },
    {
      icon: MessageCircle,
      color: 'bg-blue-100 text-blue-600',
      title: 'Nouveau message',
      desc: 'Alexandre D. vous a envoyé un message.',
      time: 'Il y a 3h',
      unread: true
    }]

  },
  {
    id: 2,
    group: 'Cette semaine',
    items: [
    {
      icon: Star,
      color: 'bg-amber-100 text-amber-600',
      title: 'Laissez un avis',
      desc: "Comment s'est passé votre trajet avec Sophie ?",
      time: 'Mar. 14:30',
      unread: false
    },
    {
      icon: AlertCircle,
      color: 'bg-purple-100 text-purple-600',
      title: 'Mise à jour',
      desc: 'Découvrez les nouvelles fonctionnalités de RideFlex.',
      time: 'Lun. 09:00',
      unread: false
    }]

  }];

  return (
    <div className="min-h-screen bg-gray-50 max-w-md mx-auto flex flex-col animate-slide-up">
      <div className="p-6 pb-4 flex items-center justify-between bg-white sticky top-0 z-10 shadow-sm">
        <div className="flex items-center">
          <button
            onClick={() => navigate('home')}
            className="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center text-gray-600 hover:bg-gray-100 transition-colors mr-4">
            
            <ArrowLeft className="w-5 h-5" />
          </button>
          <h1 className="text-xl font-heading font-bold text-gray-900 flex items-center">
            Notifications <Bell className="w-5 h-5 ml-2 text-gray-400" />
          </h1>
        </div>
        <button className="text-sm font-bold text-emerald-600 hover:underline">
          Tout lire
        </button>
      </div>

      <div className="flex-1 overflow-y-auto p-6 space-y-8">
        {notifications.map((group) =>
        <div key={group.id}>
            <h2 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-4 px-2">
              {group.group}
            </h2>
            <div className="space-y-3">
              {group.items.map((item, i) => {
              const Icon = item.icon;
              return (
                <Card
                  key={i}
                  className={cn(
                    'rounded-2xl border-none shadow-sm transition-all hover:shadow-md cursor-pointer',
                    item.unread ? 'bg-white' : 'bg-gray-50/50'
                  )}>
                  
                    <CardContent className="p-4 flex items-start gap-4 relative">
                      {item.unread &&
                    <div className="absolute top-4 right-4 w-2.5 h-2.5 bg-emerald-500 rounded-full" />
                    }
                      <div
                      className={cn(
                        'w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0',
                        item.color
                      )}>
                      
                        <Icon className="w-6 h-6" />
                      </div>
                      <div className="flex-1 pr-4">
                        <h3
                        className={cn(
                          'font-bold',
                          item.unread ? 'text-gray-900' : 'text-gray-700'
                        )}>
                        
                          {item.title}
                        </h3>
                        <p className="text-sm text-gray-500 mt-1 leading-snug">
                          {item.desc}
                        </p>
                        <p className="text-xs text-gray-400 mt-2 font-medium">
                          {item.time}
                        </p>
                      </div>
                    </CardContent>
                  </Card>);

            })}
            </div>
          </div>
        )}
      </div>
    </div>);

}
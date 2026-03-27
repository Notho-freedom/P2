import React from 'react';
import {
  Search,
  PlusCircle,
  Radio,
  CalendarCheck,
  MessageCircle,
  Megaphone,
  Bell,
  MapPin,
  Clock } from
'lucide-react';
import { NavigationProps } from '../lib/types';
import { MapPlaceholder } from '../components/MapPlaceholder';
import { Card, CardContent } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { Avatar, AvatarFallback, AvatarImage } from '../components/ui/Avatar';
export function HomeScreen({ navigate }: NavigationProps) {
  const quickActions = [
  {
    id: 'search',
    icon: Search,
    label: 'Chercher trajet',
    view: 'search'
  },
  {
    id: 'publish',
    icon: PlusCircle,
    label: 'Publier trajet',
    view: 'publish'
  },
  {
    id: 'driver',
    icon: Radio,
    label: 'Mode Dispo',
    view: 'driver'
  },
  {
    id: 'bookings',
    icon: CalendarCheck,
    label: 'Mes réservations',
    badge: '3',
    view: 'booking'
  },
  {
    id: 'messages',
    icon: MessageCircle,
    label: 'Messages',
    badge: '2',
    view: 'chat'
  },
  {
    id: 'demand',
    icon: Megaphone,
    label: 'Demande ouverte',
    view: 'demand'
  }] as
  const;
  return (
    <div className="relative min-h-screen bg-gray-50 max-w-md mx-auto overflow-hidden pb-24">
      {/* Map Background */}
      <MapPlaceholder className="absolute top-0 left-0 right-0 h-[60vh]">
        <button
          onClick={() => navigate('notifications')}
          className="absolute top-12 right-6 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-700 hover:scale-105 active:scale-95 transition-all duration-200 z-10">
          
          <div className="relative">
            <Bell className="w-6 h-6" />
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-destructive rounded-full border-2 border-white" />
          </div>
        </button>

        {/* Fake User Location Marker */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center animate-bounce-in">
          <div className="bg-emerald-600 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg mb-2">
            Vous êtes ici
          </div>
          <div className="w-6 h-6 bg-emerald-600 rounded-full border-4 border-white shadow-xl" />
          <div className="w-12 h-4 bg-black/20 rounded-full blur-sm mt-1" />
        </div>
      </MapPlaceholder>

      {/* Bottom Sheet */}
      <div className="absolute top-[45vh] left-0 right-0 bottom-0 bg-gray-50 rounded-t-3xl shadow-[0_-8px_30px_rgba(0,0,0,0.12)] animate-slide-up flex flex-col">
        <div className="flex-none p-6 pb-2">
          <div className="w-12 h-1.5 bg-gray-300 rounded-full mx-auto mb-6" />
          <h1 className="text-2xl font-heading font-bold text-gray-900">
            Bonjour, Alex 👋
          </h1>
          <p className="text-gray-500 mt-1">Où allez-vous aujourd'hui ?</p>
        </div>

        <div className="flex-1 overflow-y-auto px-6 pb-6 space-y-8">
          {/* Action Grid */}
          <div className="grid grid-cols-3 gap-4 mt-6">
            {quickActions.map((action) => {
              const Icon = action.icon;
              return (
                <button
                  key={action.id}
                  onClick={() => navigate(action.view as any)}
                  className="relative flex flex-col items-center justify-center p-4 bg-white rounded-2xl shadow-sm border border-gray-100 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 group">
                  
                  {action.badge &&
                  <span className="absolute -top-2 -right-2 w-6 h-6 bg-destructive text-white text-xs font-bold rounded-full flex items-center justify-center shadow-sm">
                      {action.badge}
                    </span>
                  }
                  <div className="w-12 h-12 bg-emerald-50 rounded-full flex items-center justify-center mb-3 group-hover:bg-emerald-100 transition-colors">
                    <Icon className="w-6 h-6 text-emerald-600" />
                  </div>
                  <span className="text-xs font-medium text-gray-700 text-center leading-tight">
                    {action.label}
                  </span>
                </button>);

            })}
          </div>

          {/* Recent Activity */}
          <div>
            <h2 className="text-lg font-bold text-gray-900 mb-4">
              Activité récente
            </h2>
            <div className="space-y-3">
              <Card
                className="rounded-2xl border-none shadow-sm hover:shadow-md transition-shadow cursor-pointer"
                onClick={() => navigate('booking')}>
                
                <CardContent className="p-4 flex items-center gap-4">
                  <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-emerald-600" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-gray-900 truncate">
                      Paris → Lyon
                    </h3>
                    <div className="flex items-center text-sm text-gray-500 mt-1">
                      <Clock className="w-3 h-3 mr-1" />
                      Aujourd'hui, 14:30
                    </div>
                  </div>
                  <Badge className="bg-emerald-100 text-emerald-700 hover:bg-emerald-100 border-none">
                    Confirmé
                  </Badge>
                </CardContent>
              </Card>

              <Card
                className="rounded-2xl border-none shadow-sm hover:shadow-md transition-shadow cursor-pointer"
                onClick={() => navigate('chat')}>
                
                <CardContent className="p-4 flex items-center gap-4">
                  <Avatar>
                    <AvatarImage src="https://i.pravatar.cc/150?u=marie" />
                    <AvatarFallback>M</AvatarFallback>
                  </Avatar>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-gray-900 truncate">
                      Marie L.
                    </h3>
                    <p className="text-sm text-gray-500 truncate mt-1">
                      Je suis au point de rendez-vous !
                    </p>
                  </div>
                  <div className="w-2 h-2 bg-emerald-500 rounded-full" />
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>);

}
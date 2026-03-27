import React, { useState } from 'react';
import { Radio, Settings, MapPin, Clock, Check, X } from 'lucide-react';
import { NavigationProps } from '../lib/types';
import { MapPlaceholder } from '../components/MapPlaceholder';
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
  DrawerFooter,
  DrawerClose } from
'../components/ui/Drawer';
import { Button } from '../components/ui/Button';
import { Slider } from '../components/ui/Slider';
import { Switch } from '../components/ui/Switch';
import { Card, CardContent } from '../components/ui/Card';
import { Avatar, AvatarFallback, AvatarImage } from '../components/ui/Avatar';
import { cn } from '../lib/utils';
export function DriverMode({ navigate }: NavigationProps) {
  const [isAvailable, setIsAvailable] = useState(false);
  const [radius, setRadius] = useState([15]);
  const [seats, setSeats] = useState(3);
  return (
    <div className="relative min-h-screen bg-gray-50 max-w-md mx-auto overflow-hidden pb-24">
      <MapPlaceholder className="absolute inset-0" />

      {/* Header Overlay */}
      <div className="absolute top-12 left-6 right-6 flex justify-between items-center z-10">
        <div className="bg-white/90 backdrop-blur-md px-4 py-2 rounded-full shadow-sm font-bold text-gray-900 flex items-center">
          <Radio
            className={cn(
              'w-5 h-5 mr-2',
              isAvailable ? 'text-emerald-500 animate-pulse' : 'text-gray-400'
            )} />
          
          Mode Conducteur
        </div>

        <Drawer>
          <DrawerTrigger asChild>
            <button className="w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-700 hover:scale-105 transition-transform">
              <Settings className="w-5 h-5" />
            </button>
          </DrawerTrigger>
          <DrawerContent className="max-w-md mx-auto rounded-t-3xl">
            <DrawerHeader className="text-left pb-2">
              <DrawerTitle className="text-2xl font-heading font-bold">
                Paramètres de disponibilité
              </DrawerTitle>
            </DrawerHeader>
            <div className="p-6 space-y-8">
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <label className="font-bold text-gray-900">
                    Rayon d'action
                  </label>
                  <span className="text-emerald-600 font-bold">
                    {radius[0]} km
                  </span>
                </div>
                <Slider
                  defaultValue={radius}
                  max={50}
                  min={1}
                  step={1}
                  onValueChange={setRadius}
                  className="py-4" />
                
              </div>

              <div className="space-y-4">
                <label className="font-bold text-gray-900">Plage horaire</label>
                <div className="flex gap-4">
                  <div className="flex-1 bg-gray-50 p-3 rounded-2xl border border-gray-100 flex items-center justify-between">
                    <span className="text-gray-500 text-sm">De</span>
                    <span className="font-bold">08:00</span>
                  </div>
                  <div className="flex-1 bg-gray-50 p-3 rounded-2xl border border-gray-100 flex items-center justify-between">
                    <span className="text-gray-500 text-sm">À</span>
                    <span className="font-bold">18:00</span>
                  </div>
                </div>
              </div>

              <div className="flex justify-between items-center">
                <label className="font-bold text-gray-900">
                  Places disponibles
                </label>
                <div className="flex items-center gap-4 bg-gray-50 rounded-full p-1 border border-gray-100">
                  <button
                    onClick={() => setSeats(Math.max(1, seats - 1))}
                    className="w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center font-bold">
                    
                    -
                  </button>
                  <span className="font-bold w-4 text-center">{seats}</span>
                  <button
                    onClick={() => setSeats(Math.min(4, seats + 1))}
                    className="w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center font-bold">
                    
                    +
                  </button>
                </div>
              </div>

              <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                <div>
                  <label className="font-bold text-gray-900 block">
                    Accepter automatiquement
                  </label>
                  <span className="text-sm text-gray-500">
                    Pour les passagers bien notés
                  </span>
                </div>
                <Switch defaultChecked />
              </div>
            </div>
            <DrawerFooter>
              <DrawerClose asChild>
                <Button className="w-full h-14 rounded-2xl text-lg font-bold">
                  Confirmer
                </Button>
              </DrawerClose>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </div>

      {/* Main Toggle Button */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 flex flex-col items-center">
        <button
          onClick={() => setIsAvailable(!isAvailable)}
          className={cn(
            'w-40 h-40 rounded-full flex flex-col items-center justify-center shadow-2xl transition-all duration-500 relative',
            isAvailable ?
            'bg-emerald-500 text-white scale-110' :
            'bg-white text-gray-500 hover:bg-gray-50'
          )}>
          
          {isAvailable &&
          <>
              <div className="absolute inset-0 bg-emerald-400 rounded-full animate-pulse-ring opacity-50" />
              <div
              className="absolute inset-0 bg-emerald-300 rounded-full animate-pulse-ring opacity-30"
              style={{
                animationDelay: '0.5s'
              }} />
            
            </>
          }
          <Radio
            className={cn(
              'w-12 h-12 mb-2 relative z-10',
              isAvailable && 'animate-bounce'
            )} />
          
          <span className="font-bold text-lg relative z-10">
            {isAvailable ? 'En ligne' : 'Je suis dispo'}
          </span>
        </button>
        <p
          className={cn(
            'mt-6 font-medium transition-opacity duration-300',
            isAvailable ? 'text-emerald-700' : 'text-gray-500'
          )}>
          
          {isAvailable ?
          'En attente de demandes...' :
          'Appuyez pour recevoir des trajets'}
        </p>
      </div>

      {/* Active Requests (Visible when available) */}
      {isAvailable &&
      <div className="absolute bottom-24 left-0 right-0 px-4 animate-slide-up">
          <Card className="rounded-3xl border-none shadow-2xl overflow-hidden">
            <div className="bg-emerald-500 text-white px-4 py-2 text-sm font-bold flex justify-between items-center">
              <span>Nouvelle demande !</span>
              <span className="bg-white/20 px-2 py-0.5 rounded-full text-xs">
                Dans 5 min
              </span>
            </div>
            <CardContent className="p-5">
              <div className="flex items-center gap-4 mb-4">
                <Avatar className="w-12 h-12 border-2 border-emerald-100">
                  <AvatarImage src="https://i.pravatar.cc/150?u=julien" />
                  <AvatarFallback>J</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <h3 className="font-bold text-gray-900 text-lg">Julien B.</h3>
                  <div className="flex items-center text-sm text-gray-500">
                    <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400 mr-1" />{' '}
                    4.8 • 2 places
                  </div>
                </div>
                <div className="text-2xl font-bold text-emerald-600">12€</div>
              </div>

              <div className="space-y-2 mb-6 relative">
                <div className="absolute left-2.5 top-3 bottom-3 w-0.5 bg-gray-200" />
                <div className="flex items-center gap-3 text-sm">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center z-10">
                    <div className="w-2 h-2 rounded-full bg-emerald-500" />
                  </div>
                  <span className="font-medium">Gare Centrale</span>
                  <span className="text-gray-400 ml-auto">1.2 km</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <div className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center z-10">
                    <div className="w-2 h-2 rounded-full bg-red-500" />
                  </div>
                  <span className="font-medium">Technopôle</span>
                  <span className="text-gray-400 ml-auto">8.5 km</span>
                </div>
              </div>

              <div className="flex gap-3">
                <Button
                variant="outline"
                className="flex-1 h-12 rounded-xl border-gray-200 text-gray-600 hover:bg-gray-50">
                
                  <X className="w-5 h-5 mr-2" /> Refuser
                </Button>
                <Button
                className="flex-1 h-12 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg shadow-emerald-600/20"
                onClick={() => navigate('chat')}>
                
                  <Check className="w-5 h-5 mr-2" /> Accepter
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      }
    </div>);

}
// Missing Star icon import in DriverMode, adding it here
function Star(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>);

}
import React from 'react';
import { ArrowLeft, MapPin, Calendar, Users, Search, Star } from 'lucide-react';
import { NavigationProps } from '../lib/types';
import { MapPlaceholder } from '../components/MapPlaceholder';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { Card, CardContent } from '../components/ui/Card';
import { Avatar, AvatarFallback, AvatarImage } from '../components/ui/Avatar';
export function QuickSearch({ navigate }: NavigationProps) {
  const mockResults = [
  {
    id: 1,
    name: 'Thomas D.',
    rating: '4.9',
    time: '14:30',
    price: '25',
    seats: 3,
    avatar: 'https://i.pravatar.cc/150?u=thomas'
  },
  {
    id: 2,
    name: 'Sophie M.',
    rating: '4.7',
    time: '15:15',
    price: '22',
    seats: 2,
    avatar: 'https://i.pravatar.cc/150?u=sophie'
  },
  {
    id: 3,
    name: 'Lucas R.',
    rating: '5.0',
    time: '16:00',
    price: '28',
    seats: 1,
    avatar: 'https://i.pravatar.cc/150?u=lucas'
  }];

  return (
    <div className="relative min-h-screen bg-gray-50 max-w-md mx-auto overflow-hidden">
      <MapPlaceholder className="absolute inset-0" />

      {/* Overlay Panel */}
      <div className="absolute top-20 left-0 right-0 bottom-0 bg-white rounded-t-3xl shadow-2xl animate-slide-up flex flex-col">
        <div className="p-6 pb-4 border-b border-gray-100 flex-none">
          <div className="w-12 h-1.5 bg-gray-200 rounded-full mx-auto mb-6" />
          <div className="flex items-center mb-6">
            <button
              onClick={() => navigate('home')}
              className="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center text-gray-600 hover:bg-gray-100 transition-colors mr-4">
              
              <ArrowLeft className="w-5 h-5" />
            </button>
            <h1 className="text-2xl font-heading font-bold text-gray-900">
              Chercher un trajet
            </h1>
          </div>

          <div className="space-y-3 relative">
            {/* Connecting Line */}
            <div className="absolute left-6 top-8 bottom-20 w-0.5 bg-gray-200 border-l-2 border-dashed border-gray-300" />

            <div className="relative">
              <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-emerald-500" />
              <Input
                placeholder="Départ (ex: Paris)"
                className="h-14 pl-12 rounded-2xl bg-gray-50 border-transparent focus:bg-white text-lg"
                defaultValue="Paris" />
              
            </div>
            <div className="relative">
              <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-destructive" />
              <Input
                placeholder="Arrivée (ex: Lyon)"
                className="h-14 pl-12 rounded-2xl bg-gray-50 border-transparent focus:bg-white text-lg"
                defaultValue="Lyon" />
              
            </div>
            <div className="flex gap-3">
              <div className="relative flex-1">
                <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <Input
                  placeholder="Aujourd'hui"
                  className="h-14 pl-12 rounded-2xl bg-gray-50 border-transparent focus:bg-white"
                  defaultValue="Aujourd'hui" />
                
              </div>
              <div className="relative w-24">
                <Users className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <Input
                  type="number"
                  placeholder="1"
                  className="h-14 pl-12 rounded-2xl bg-gray-50 border-transparent focus:bg-white"
                  defaultValue="1" />
                
              </div>
            </div>

            <Button
              className="w-full h-14 rounded-2xl text-lg font-bold shadow-lg shadow-emerald-600/20 mt-2"
              onClick={() => navigate('results')}>
              
              <Search className="w-5 h-5 mr-2" /> Rechercher
            </Button>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-6 bg-gray-50">
          <h2 className="text-lg font-bold text-gray-900 mb-4">
            Résultats instantanés
          </h2>
          <div className="space-y-4">
            {mockResults.map((result) =>
            <Card
              key={result.id}
              className="rounded-2xl border-none shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer hover:scale-[1.01]">
              
                <CardContent className="p-4">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center gap-3">
                      <Avatar className="w-12 h-12 border-2 border-white shadow-sm">
                        <AvatarImage src={result.avatar} />
                        <AvatarFallback>{result.name[0]}</AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="font-bold text-gray-900">
                          {result.name}
                        </h3>
                        <div className="flex items-center text-sm text-gray-500">
                          <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400 mr-1" />
                          {result.rating}
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-emerald-600">
                        {result.price}€
                      </div>
                      <div className="text-sm text-gray-500 flex items-center justify-end">
                        <Users className="w-3 h-3 mr-1" /> {result.seats} places
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between bg-gray-50 p-3 rounded-xl">
                    <div className="font-bold text-gray-900">{result.time}</div>
                    <Button
                    size="sm"
                    className="rounded-xl font-bold"
                    onClick={() => navigate('booking')}>
                    
                      Réserver
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>);

}
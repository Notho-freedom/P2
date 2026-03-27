import React from 'react';
import {
  ArrowLeft,
  SlidersHorizontal,
  Star,
  Users,
  ShieldCheck } from
'lucide-react';
import { NavigationProps } from '../lib/types';
import { MapPlaceholder } from '../components/MapPlaceholder';
import { Card, CardContent } from '../components/ui/Card';
import { Avatar, AvatarFallback, AvatarImage } from '../components/ui/Avatar';
import { Button } from '../components/ui/Button';
import { ScrollArea } from '../components/ui/ScrollArea';
export function SearchResults({ navigate }: NavigationProps) {
  const filters = ['Prix', 'Heure', 'Note', 'Direct'];
  const results = [
  {
    id: 1,
    name: 'Alexandre D.',
    rating: '4.9',
    time: '14:30',
    price: '25',
    seats: 3,
    avatar: 'https://i.pravatar.cc/150?u=alex',
    verified: true
  },
  {
    id: 2,
    name: 'Sarah M.',
    rating: '4.8',
    time: '15:00',
    price: '22',
    seats: 2,
    avatar: 'https://i.pravatar.cc/150?u=sarah',
    verified: true
  },
  {
    id: 3,
    name: 'Marc L.',
    rating: '4.5',
    time: '16:15',
    price: '20',
    seats: 4,
    avatar: 'https://i.pravatar.cc/150?u=marc',
    verified: false
  }];

  return (
    <div className="relative min-h-screen bg-gray-50 max-w-md mx-auto overflow-hidden">
      <MapPlaceholder className="absolute inset-0" />

      {/* Header & Filters */}
      <div className="absolute top-0 left-0 right-0 z-10 bg-gradient-to-b from-white/90 to-transparent pt-12 pb-6 px-4">
        <div className="flex items-center gap-4 mb-4">
          <button
            onClick={() => navigate('search')}
            className="w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center text-gray-700 hover:scale-105 transition-transform">
            
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div className="flex-1 bg-white rounded-full shadow-md px-4 py-2 flex items-center justify-between">
            <div className="font-bold text-gray-900 truncate">Paris → Lyon</div>
            <div className="text-sm text-gray-500">Auj.</div>
          </div>
        </div>

        <ScrollArea className="w-full whitespace-nowrap pb-2">
          <div className="flex gap-2 px-1">
            <button className="bg-white shadow-sm px-4 py-2 rounded-full text-sm font-bold text-gray-700 flex items-center gap-2 border border-gray-100">
              <SlidersHorizontal className="w-4 h-4" /> Filtres
            </button>
            {filters.map((f) =>
            <button
              key={f}
              className="bg-white shadow-sm px-4 py-2 rounded-full text-sm font-medium text-gray-600 border border-gray-100 hover:bg-gray-50">
              
                {f}
              </button>
            )}
          </div>
        </ScrollArea>
      </div>

      {/* Swipeable Cards Area */}
      <div className="absolute bottom-6 left-0 right-0 px-4 overflow-x-auto snap-x snap-mandatory flex gap-4 pb-4 hide-scrollbar">
        {results.map((result) =>
        <Card
          key={result.id}
          className="min-w-[90%] snap-center rounded-3xl border-none shadow-xl bg-white overflow-hidden">
          
            <CardContent className="p-0">
              <div className="p-5">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <Avatar className="w-14 h-14 border-2 border-white shadow-sm">
                        <AvatarImage src={result.avatar} />
                        <AvatarFallback>{result.name[0]}</AvatarFallback>
                      </Avatar>
                      {result.verified &&
                    <div className="absolute -bottom-1 -right-1 bg-blue-500 text-white rounded-full p-0.5 border-2 border-white">
                          <ShieldCheck className="w-3 h-3" />
                        </div>
                    }
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 text-lg">
                        {result.name}
                      </h3>
                      <div className="flex items-center text-sm text-gray-500">
                        <Star className="w-4 h-4 text-amber-400 fill-amber-400 mr-1" />
                        <span className="font-medium text-gray-700 mr-1">
                          {result.rating}
                        </span>
                        (124 avis)
                      </div>
                    </div>
                  </div>
                  <div className="text-3xl font-heading font-bold text-emerald-600">
                    {result.price}€
                  </div>
                </div>

                <div className="bg-gray-50 rounded-2xl p-4 mb-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-bold text-lg text-gray-900">
                      {result.time}
                    </span>
                    <span className="text-sm font-medium text-gray-500">
                      Paris
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-lg text-gray-900">
                      18:45
                    </span>
                    <span className="text-sm font-medium text-gray-500">
                      Lyon
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center text-gray-600 text-sm font-medium bg-emerald-50 text-emerald-700 px-3 py-1.5 rounded-full">
                    <Users className="w-4 h-4 mr-2" /> {result.seats} places
                    dispo
                  </div>
                  <Button
                  className="h-12 px-8 rounded-xl font-bold shadow-lg shadow-emerald-600/20"
                  onClick={() => navigate('booking')}>
                  
                    Réserver
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>);

}
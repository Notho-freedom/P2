import React from 'react';
import { ArrowLeft, MapPin, Calendar, Euro, Megaphone } from 'lucide-react';
import { NavigationProps } from '../lib/types';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { Card, CardContent } from '../components/ui/Card';
import { Avatar, AvatarFallback, AvatarImage } from '../components/ui/Avatar';
import { Badge } from '../components/ui/Badge';
export function OpenDemand({ navigate }: NavigationProps) {
  return (
    <div className="min-h-screen bg-gray-50 max-w-md mx-auto flex flex-col pb-24">
      <div className="p-6 pb-4 flex items-center bg-white sticky top-0 z-10 shadow-sm">
        <button
          onClick={() => navigate('home')}
          className="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center text-gray-600 hover:bg-gray-100 transition-colors mr-4">
          
          <ArrowLeft className="w-5 h-5" />
        </button>
        <h1 className="text-xl font-heading font-bold text-gray-900">
          Demande ouverte
        </h1>
      </div>

      <div className="p-6 space-y-8 animate-fade-in">
        <Card className="rounded-3xl border-none shadow-xl overflow-hidden bg-white">
          <div className="bg-emerald-600 p-6 text-white text-center">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
              <Megaphone className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-2xl font-bold mb-2">Publier une demande</h2>
            <p className="text-emerald-100 text-sm">
              Les conducteurs vous proposeront leurs trajets
            </p>
          </div>

          <CardContent className="p-6 space-y-4">
            <div className="relative">
              <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-emerald-500" />
              <Input
                placeholder="D'où partez-vous ?"
                className="h-14 pl-12 rounded-2xl bg-gray-50 border-transparent focus:bg-white text-lg" />
              
            </div>
            <div className="relative">
              <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-destructive" />
              <Input
                placeholder="Où allez-vous ?"
                className="h-14 pl-12 rounded-2xl bg-gray-50 border-transparent focus:bg-white text-lg" />
              
            </div>
            <div className="relative">
              <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <Input
                type="datetime-local"
                className="h-14 pl-12 rounded-2xl bg-gray-50 border-transparent focus:bg-white text-lg" />
              
            </div>
            <div className="relative">
              <Euro className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <Input
                type="number"
                placeholder="Budget max (ex: 20)"
                className="h-14 pl-12 rounded-2xl bg-gray-50 border-transparent focus:bg-white text-lg" />
              
            </div>

            <textarea
              placeholder="Détails supplémentaires (bagages, animaux...)"
              className="w-full p-4 rounded-2xl bg-gray-50 border-transparent focus:bg-white focus:ring-2 focus:ring-emerald-500 outline-none resize-none h-24" />
            

            <Button
              className="w-full h-14 rounded-2xl text-lg font-bold shadow-lg shadow-emerald-600/20 mt-4"
              onClick={() => navigate('home')}>
              
              Publier ma demande
            </Button>
          </CardContent>
        </Card>

        <div>
          <h3 className="font-bold text-gray-900 mb-4 px-2">
            Demandes récentes sur votre route
          </h3>
          <div className="space-y-4">
            <Card className="rounded-2xl border-none shadow-sm">
              <CardContent className="p-4">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <Avatar>
                      <AvatarImage src="https://i.pravatar.cc/150?u=paul" />
                      <AvatarFallback>P</AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-bold text-gray-900">Paul T.</h4>
                      <p className="text-xs text-gray-500">Il y a 10 min</p>
                    </div>
                  </div>
                  <Badge className="bg-emerald-100 text-emerald-700 hover:bg-emerald-100 border-none font-bold">
                    Max 15€
                  </Badge>
                </div>
                <div className="bg-gray-50 rounded-xl p-3 mb-3 text-sm font-medium text-gray-700">
                  Paris (13e) → Orléans
                  <div className="text-gray-500 mt-1">
                    Aujourd'hui, vers 18h
                  </div>
                </div>
                <Button
                  variant="outline"
                  className="w-full rounded-xl font-bold border-emerald-200 text-emerald-700 hover:bg-emerald-50">
                  
                  Proposer un trajet
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>);

}
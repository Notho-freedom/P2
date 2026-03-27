import React, { useState } from 'react';
import {
  ArrowLeft,
  MapPin,
  Calendar,
  Clock,
  Euro,
  CheckCircle2 } from
'lucide-react';
import { NavigationProps } from '../lib/types';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { Switch } from '../components/ui/Switch';
import { Progress } from '../components/ui/Progress';
import { Card, CardContent } from '../components/ui/Card';
import { cn } from '../lib/utils';
export function TripPublish({ navigate }: NavigationProps) {
  const [step, setStep] = useState(1);
  const totalSteps = 4;
  const nextStep = () => setStep(Math.min(step + 1, totalSteps));
  const prevStep = () => setStep(Math.max(step - 1, 1));
  return (
    <div className="min-h-screen bg-white max-w-md mx-auto flex flex-col">
      {/* Header */}
      <div className="p-6 pb-4 flex items-center bg-white sticky top-0 z-10">
        <button
          onClick={() => step === 1 ? navigate('home') : prevStep()}
          className="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center text-gray-600 hover:bg-gray-100 transition-colors mr-4">
          
          <ArrowLeft className="w-5 h-5" />
        </button>
        <div className="flex-1">
          <h1 className="text-xl font-heading font-bold text-gray-900">
            Publier un trajet
          </h1>
          <div className="flex items-center gap-2 mt-2">
            <Progress value={step / totalSteps * 100} className="h-2" />
            <span className="text-xs font-bold text-emerald-600 whitespace-nowrap">
              Étape {step}/{totalSteps}
            </span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto p-6">
        {step === 1 &&
        <div className="space-y-6 animate-slide-up">
            <h2 className="text-2xl font-bold text-gray-900">
              Quel est votre itinéraire ?
            </h2>

            <div className="space-y-4 relative">
              <div className="absolute left-6 top-8 bottom-8 w-0.5 bg-gray-200 border-l-2 border-dashed border-gray-300" />

              <div className="relative">
                <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-emerald-500" />
                <Input
                placeholder="Lieu de départ"
                className="h-14 pl-12 rounded-2xl bg-gray-50 border-transparent focus:bg-white text-lg" />
              
              </div>

              <button className="ml-12 text-sm font-bold text-emerald-600 hover:underline flex items-center">
                + Ajouter un arrêt
              </button>

              <div className="relative">
                <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-destructive" />
                <Input
                placeholder="Lieu d'arrivée"
                className="h-14 pl-12 rounded-2xl bg-gray-50 border-transparent focus:bg-white text-lg" />
              
              </div>
            </div>
          </div>
        }

        {step === 2 &&
        <div className="space-y-6 animate-slide-up">
            <h2 className="text-2xl font-bold text-gray-900">
              Quand partez-vous ?
            </h2>

            <div className="space-y-4">
              <div className="relative">
                <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <Input
                type="date"
                className="h-14 pl-12 rounded-2xl bg-gray-50 border-transparent focus:bg-white text-lg" />
              
              </div>

              <div className="relative">
                <Clock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <Input
                type="time"
                className="h-14 pl-12 rounded-2xl bg-gray-50 border-transparent focus:bg-white text-lg" />
              
              </div>

              <Card className="rounded-2xl border-gray-100 shadow-sm mt-6">
                <CardContent className="p-4 flex items-center justify-between">
                  <div>
                    <h3 className="font-bold text-gray-900">
                      Trajet régulier ?
                    </h3>
                    <p className="text-sm text-gray-500">
                      Répéter ce trajet chaque semaine
                    </p>
                  </div>
                  <Switch />
                </CardContent>
              </Card>
            </div>
          </div>
        }

        {step === 3 &&
        <div className="space-y-6 animate-slide-up">
            <h2 className="text-2xl font-bold text-gray-900">
              Fixez votre prix
            </h2>
            <p className="text-gray-500">
              Prix recommandé pour ce trajet : 15€ - 20€
            </p>

            <div className="flex items-center justify-center py-8">
              <div className="relative flex items-center">
                <Input
                type="number"
                defaultValue="18"
                className="w-32 h-24 text-5xl font-bold text-center rounded-3xl bg-gray-50 border-transparent focus:bg-white" />
              
                <Euro className="absolute right-4 w-8 h-8 text-gray-400" />
              </div>
            </div>
            <p className="text-center font-medium text-gray-700">
              Prix par passager
            </p>
          </div>
        }

        {step === 4 &&
        <div className="space-y-6 animate-slide-up">
            <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-8 h-8 text-emerald-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 text-center">
              Résumé du trajet
            </h2>

            <Card className="rounded-3xl border-none shadow-lg bg-gray-50 overflow-hidden">
              <CardContent className="p-6 space-y-6">
                <div className="space-y-4 relative">
                  <div className="absolute left-2.5 top-3 bottom-3 w-0.5 bg-gray-300" />
                  <div className="flex items-center gap-4">
                    <div className="w-5 h-5 rounded-full bg-emerald-500 border-4 border-white shadow-sm z-10" />
                    <div>
                      <p className="text-sm text-gray-500">Départ</p>
                      <p className="font-bold text-gray-900">
                        Paris (Gare de Lyon)
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-5 h-5 rounded-full bg-destructive border-4 border-white shadow-sm z-10" />
                    <div>
                      <p className="text-sm text-gray-500">Arrivée</p>
                      <p className="font-bold text-gray-900">
                        Lyon (Part-Dieu)
                      </p>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-200">
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Date & Heure</p>
                    <p className="font-bold text-gray-900">Auj, 14:30</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Prix par place</p>
                    <p className="font-bold text-emerald-600 text-lg">18€</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        }
      </div>

      {/* Footer Actions */}
      <div className="p-6 bg-white border-t border-gray-100 pb-safe">
        <Button
          className="w-full h-14 rounded-2xl text-lg font-bold shadow-lg shadow-emerald-600/20"
          onClick={() => step === totalSteps ? navigate('home') : nextStep()}>
          
          {step === totalSteps ? 'Publier le trajet' : 'Continuer'}
        </Button>
      </div>
    </div>);

}
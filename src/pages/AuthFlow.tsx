import React, { useState, createElement } from 'react';
import { Car, Users, Shield, ArrowRight } from 'lucide-react';
import { NavigationProps } from '../lib/types';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { cn } from '../lib/utils';
export function AuthFlow({ navigate }: NavigationProps) {
  const [step, setStep] = useState(0);
  const slides = [
  {
    icon: Car,
    title: 'Bienvenue sur RideFlex',
    subtitle: 'Le covoiturage intelligent pour tous vos trajets quotidiens.'
  },
  {
    icon: Users,
    title: 'Partagez vos trajets',
    subtitle: 'Économisez ensemble et réduisez votre empreinte carbone.'
  },
  {
    icon: Shield,
    title: 'Voyagez en confiance',
    subtitle: 'Conducteurs vérifiés et paiements 100% sécurisés.'
  }];

  const nextStep = () => {
    if (step < slides.length) {
      setStep(step + 1);
    }
  };
  return (
    <div className="min-h-screen bg-white max-w-md mx-auto flex flex-col relative overflow-hidden">
      {step < slides.length &&
      <button
        onClick={() => setStep(slides.length)}
        className="absolute top-12 right-6 text-gray-500 font-medium z-10 hover:text-gray-900">
        
          Passer
        </button>
      }

      <div className="flex-1 flex flex-col items-center justify-center p-8 text-center">
        {step < slides.length ?
        <div
          key={step}
          className="animate-fade-in flex flex-col items-center">
          
            <div className="w-48 h-48 bg-emerald-50 rounded-full flex items-center justify-center mb-12 relative">
              <div className="absolute inset-0 bg-emerald-100 rounded-full animate-pulse-ring opacity-50" />
              {createElement(slides[step].icon, {
              className: 'w-20 h-20 text-emerald-600 relative z-10'
            })}
            </div>
            <h1 className="text-3xl font-heading font-bold text-gray-900 mb-4">
              {slides[step].title}
            </h1>
            <p className="text-lg text-gray-500">{slides[step].subtitle}</p>
          </div> :

        <div className="w-full animate-slide-up">
            <div className="w-20 h-20 bg-emerald-600 rounded-2xl flex items-center justify-center mb-8 mx-auto shadow-lg shadow-emerald-600/30">
              <Car className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-3xl font-heading font-bold text-gray-900 mb-2">
              Connexion
            </h1>
            <p className="text-gray-500 mb-8">Entrez votre numéro ou email</p>

            <div className="space-y-4 mb-8 text-left">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">
                  Email ou Téléphone
                </label>
                <Input
                placeholder="ex: alex@exemple.com"
                className="h-14 rounded-2xl text-lg bg-gray-50 border-transparent focus:bg-white" />
              
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">
                  Mot de passe
                </label>
                <Input
                type="password"
                placeholder="••••••••"
                className="h-14 rounded-2xl text-lg bg-gray-50 border-transparent focus:bg-white" />
              
              </div>
            </div>

            <Button
            className="w-full h-14 rounded-2xl text-lg font-bold shadow-lg shadow-emerald-600/20 hover:scale-[1.02] active:scale-[0.98] transition-all"
            onClick={() => navigate('home')}>
            
              Continuer
            </Button>

            <div className="mt-8">
              <p className="text-gray-500">
                Nouveau sur RideFlex ?{' '}
                <button
                onClick={() => navigate('home')}
                className="text-emerald-600 font-bold hover:underline">
                
                  Créer un compte
                </button>
              </p>
            </div>
          </div>
        }
      </div>

      {step < slides.length &&
      <div className="p-8 pb-12 flex flex-col items-center">
          <div className="flex gap-2 mb-8">
            {slides.map((_, i) =>
          <div
            key={i}
            className={cn(
              'h-2 rounded-full transition-all duration-300',
              i === step ? 'w-8 bg-emerald-600' : 'w-2 bg-gray-200'
            )} />

          )}
          </div>
          <Button
          className="w-full h-14 rounded-2xl text-lg font-bold shadow-lg shadow-emerald-600/20 hover:scale-[1.02] active:scale-[0.98] transition-all"
          onClick={nextStep}>
          
            Suivant <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      }
    </div>);

}
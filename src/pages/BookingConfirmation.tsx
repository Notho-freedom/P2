import React from 'react';
import {
  CheckCircle,
  MapPin,
  Calendar,
  CreditCard,
  MessageCircle,
  Home } from
'lucide-react';
import { NavigationProps } from '../lib/types';
import { Button } from '../components/ui/Button';
import { Card, CardContent } from '../components/ui/Card';
import { Avatar, AvatarFallback, AvatarImage } from '../components/ui/Avatar';
export function BookingConfirmation({ navigate }: NavigationProps) {
  return (
    <div className="min-h-screen bg-white max-w-md mx-auto flex flex-col items-center justify-center p-6 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-20 left-10 w-4 h-4 bg-emerald-300 rounded-full animate-pulse" />
      <div
        className="absolute top-40 right-12 w-6 h-6 bg-emerald-200 rounded-full animate-bounce"
        style={{
          animationDuration: '3s'
        }} />
      
      <div
        className="absolute bottom-40 left-20 w-8 h-8 bg-emerald-100 rounded-full animate-pulse"
        style={{
          animationDelay: '1s'
        }} />
      

      <div className="w-24 h-24 bg-emerald-100 rounded-full flex items-center justify-center mb-6 animate-bounce-in relative z-10">
        <div className="absolute inset-0 bg-emerald-50 rounded-full animate-pulse-ring" />
        <CheckCircle className="w-12 h-12 text-emerald-600 relative z-10" />
      </div>

      <h1 className="text-3xl font-heading font-bold text-gray-900 mb-2 text-center animate-slide-up">
        Réservation confirmée !
      </h1>
      <p
        className="text-gray-500 text-center mb-8 animate-slide-up"
        style={{
          animationDelay: '0.1s'
        }}>
        
        Votre place est réservée. Le conducteur a été notifié.
      </p>

      <Card
        className="w-full rounded-3xl border-none shadow-xl bg-gray-50 overflow-hidden animate-slide-up"
        style={{
          animationDelay: '0.2s'
        }}>
        
        <CardContent className="p-6 space-y-6">
          <div className="flex items-center justify-between pb-4 border-b border-gray-200">
            <div className="flex items-center gap-3">
              <Avatar className="w-12 h-12 border-2 border-white shadow-sm">
                <AvatarImage src="https://i.pravatar.cc/150?u=alex" />
                <AvatarFallback>A</AvatarFallback>
              </Avatar>
              <div>
                <p className="text-sm text-gray-500">Conducteur</p>
                <p className="font-bold text-gray-900">Alexandre D.</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-500">Prix payé</p>
              <p className="font-bold text-emerald-600 text-xl">25€</p>
            </div>
          </div>

          <div className="space-y-4 relative">
            <div className="absolute left-2.5 top-3 bottom-3 w-0.5 bg-gray-300" />
            <div className="flex items-center gap-4">
              <div className="w-5 h-5 rounded-full bg-emerald-500 border-4 border-gray-50 shadow-sm z-10" />
              <div>
                <p className="font-bold text-gray-900">Paris (Gare de Lyon)</p>
                <p className="text-sm text-gray-500">14:30</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-5 h-5 rounded-full bg-destructive border-4 border-gray-50 shadow-sm z-10" />
              <div>
                <p className="font-bold text-gray-900">Lyon (Part-Dieu)</p>
                <p className="text-sm text-gray-500">18:45</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-4 flex items-center justify-between text-sm">
            <span className="text-gray-500">Réf: #RF-8492-X</span>
            <span className="font-bold text-gray-900">Aujourd'hui</span>
          </div>
        </CardContent>
      </Card>

      <div
        className="w-full space-y-4 mt-8 animate-slide-up"
        style={{
          animationDelay: '0.3s'
        }}>
        
        <Button
          variant="outline"
          className="w-full h-14 rounded-2xl text-lg font-bold border-2 border-emerald-100 text-emerald-700 hover:bg-emerald-50"
          onClick={() => navigate('chat')}>
          
          <MessageCircle className="w-5 h-5 mr-2" /> Contacter le conducteur
        </Button>
        <Button
          className="w-full h-14 rounded-2xl text-lg font-bold shadow-lg shadow-emerald-600/20"
          onClick={() => navigate('home')}>
          
          <Home className="w-5 h-5 mr-2" /> Retour à l'accueil
        </Button>
      </div>
    </div>);

}
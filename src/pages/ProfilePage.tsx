import React from 'react';
import {
  Settings,
  ShieldCheck,
  Star,
  Car,
  CreditCard,
  Bell,
  LogOut,
  ChevronRight,
  MapPin } from
'lucide-react';
import { NavigationProps } from '../lib/types';
import { Avatar, AvatarFallback, AvatarImage } from '../components/ui/Avatar';
import { Card, CardContent } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/Tabs';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger } from
'../components/ui/Accordion';
import { Button } from '../components/ui/Button';
import { ScrollArea } from '../components/ui/ScrollArea';
export function ProfilePage({ navigate }: NavigationProps) {
  return (
    <div className="min-h-screen bg-gray-50 max-w-md mx-auto flex flex-col pb-24">
      <div className="bg-emerald-600 pt-12 pb-24 px-6 rounded-b-[40px] relative shadow-lg">
        <h1 className="text-2xl font-heading font-bold text-white text-center mb-6">
          Mon Profil
        </h1>
        <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 flex flex-col items-center w-full">
          <div className="relative">
            <Avatar className="w-32 h-32 border-4 border-white shadow-xl">
              <AvatarImage src="https://i.pravatar.cc/150?u=alex" />
              <AvatarFallback>AD</AvatarFallback>
            </Avatar>
            <div className="absolute bottom-0 right-2 bg-blue-500 text-white p-1.5 rounded-full border-2 border-white shadow-sm">
              <ShieldCheck className="w-5 h-5" />
            </div>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mt-3">
            Alexandre Dupont
          </h2>
          <p className="text-gray-500 font-medium">Membre depuis 2022</p>
        </div>
      </div>

      <div className="mt-24 px-6 space-y-8">
        {/* Stats Row */}
        <div className="grid grid-cols-3 gap-3">
          <Card className="rounded-2xl border-none shadow-sm bg-white text-center py-4">
            <div className="text-2xl font-bold text-gray-900">47</div>
            <div className="text-xs text-gray-500 font-medium uppercase mt-1">
              Trajets
            </div>
          </Card>
          <Card className="rounded-2xl border-none shadow-sm bg-white text-center py-4">
            <div className="text-2xl font-bold text-gray-900 flex items-center justify-center">
              4.9{' '}
              <Star className="w-4 h-4 text-amber-400 fill-amber-400 ml-1" />
            </div>
            <div className="text-xs text-gray-500 font-medium uppercase mt-1">
              Note
            </div>
          </Card>
          <Card className="rounded-2xl border-none shadow-sm bg-white text-center py-4">
            <div className="text-2xl font-bold text-emerald-600">340€</div>
            <div className="text-xs text-gray-500 font-medium uppercase mt-1">
              Économies
            </div>
          </Card>
        </div>

        <Tabs defaultValue="history" className="w-full">
          <TabsList className="w-full bg-gray-200/50 p-1 rounded-2xl h-14 mb-6">
            <TabsTrigger
              value="history"
              className="flex-1 rounded-xl font-bold text-base data-[state=active]:bg-white data-[state=active]:shadow-sm">
              
              Historique
            </TabsTrigger>
            <TabsTrigger
              value="settings"
              className="flex-1 rounded-xl font-bold text-base data-[state=active]:bg-white data-[state=active]:shadow-sm">
              
              Paramètres
            </TabsTrigger>
          </TabsList>

          <TabsContent value="history" className="space-y-4 animate-fade-in">
            {[1, 2, 3].map((i) =>
            <Card
              key={i}
              className="rounded-2xl border-none shadow-sm hover:shadow-md transition-shadow">
              
                <CardContent className="p-4">
                  <div className="flex justify-between items-start mb-3">
                    <Badge
                    variant="outline"
                    className="bg-gray-50 text-gray-600 border-gray-200">
                    
                      12 Oct 2023
                    </Badge>
                    <span className="font-bold text-emerald-600">18€</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-emerald-50 rounded-full flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-emerald-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">Paris → Lyon</h4>
                      <p className="text-sm text-gray-500">Conducteur</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
          </TabsContent>

          <TabsContent value="settings" className="animate-fade-in">
            <Card className="rounded-3xl border-none shadow-sm overflow-hidden">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem
                  value="item-1"
                  className="border-b border-gray-100 px-4">
                  
                  <AccordionTrigger className="hover:no-underline py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center">
                        <ShieldCheck className="w-5 h-5 text-blue-600" />
                      </div>
                      <span className="font-bold text-gray-900">
                        Informations personnelles
                      </span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-500 pb-4">
                    Gérez vos informations de contact et votre mot de passe.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem
                  value="item-2"
                  className="border-b border-gray-100 px-4">
                  
                  <AccordionTrigger className="hover:no-underline py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-emerald-50 rounded-full flex items-center justify-center">
                        <Car className="w-5 h-5 text-emerald-600" />
                      </div>
                      <span className="font-bold text-gray-900">
                        Mon Véhicule
                      </span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-500 pb-4">
                    Renault Clio IV - Blanche - AB-123-CD
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem
                  value="item-3"
                  className="border-b border-gray-100 px-4">
                  
                  <AccordionTrigger className="hover:no-underline py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-purple-50 rounded-full flex items-center justify-center">
                        <CreditCard className="w-5 h-5 text-purple-600" />
                      </div>
                      <span className="font-bold text-gray-900">Paiement</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-500 pb-4">
                    Gérez vos cartes et votre RIB.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </Card>

            <Button
              variant="outline"
              className="w-full mt-8 h-14 rounded-2xl text-destructive border-destructive/20 hover:bg-destructive/5 font-bold text-lg"
              onClick={() => navigate('auth')}>
              
              <LogOut className="w-5 h-5 mr-2" /> Se déconnecter
            </Button>
          </TabsContent>
        </Tabs>
      </div>
    </div>);

}
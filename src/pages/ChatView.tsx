import React from 'react';
import { ArrowLeft, Phone, MoreVertical, Send, Smile } from 'lucide-react';
import { NavigationProps } from '../lib/types';
import { Avatar, AvatarFallback, AvatarImage } from '../components/ui/Avatar';
import { Input } from '../components/ui/Input';
import { cn } from '../lib/utils';
export function ChatView({ navigate }: NavigationProps) {
  const messages = [
  {
    id: 1,
    text: "Bonjour ! Je vous confirme la réservation pour tout à l'heure.",
    sender: 'other',
    time: '10:30'
  },
  {
    id: 2,
    text: 'Super, merci ! On se retrouve bien devant la gare ?',
    sender: 'me',
    time: '10:32'
  },
  {
    id: 3,
    text: "Oui exactement, côté dépose-minute. J'ai une Clio blanche.",
    sender: 'other',
    time: '10:35'
  },
  {
    id: 4,
    text: "Parfait, à tout à l'heure !",
    sender: 'me',
    time: '10:36'
  }];

  const quickReplies = [
  'Je suis en route',
  'À quelle heure ?',
  'Merci !',
  'Où êtes-vous ?'];

  return (
    <div className="min-h-screen bg-[#E5DDD5] max-w-md mx-auto flex flex-col relative">
      {/* WhatsApp-style Header */}
      <div className="bg-emerald-600 text-white p-4 flex items-center justify-between sticky top-0 z-20 shadow-md">
        <div className="flex items-center gap-3">
          <button
            onClick={() => navigate('home')}
            className="hover:bg-white/20 p-1 rounded-full transition-colors">
            
            <ArrowLeft className="w-6 h-6" />
          </button>
          <div className="relative">
            <Avatar className="w-10 h-10 border border-white/20">
              <AvatarImage src="https://i.pravatar.cc/150?u=alex" />
              <AvatarFallback>A</AvatarFallback>
            </Avatar>
            <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 border-2 border-emerald-600 rounded-full" />
          </div>
          <div>
            <h2 className="font-bold text-lg leading-tight">Alexandre D.</h2>
            <p className="text-xs text-emerald-100">En ligne</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Phone className="w-5 h-5" />
          <MoreVertical className="w-5 h-5" />
        </div>
      </div>

      {/* Chat Area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 pb-32">
        <div className="bg-emerald-100/80 text-emerald-800 text-xs text-center py-1 px-3 rounded-lg w-fit mx-auto mb-6 shadow-sm">
          Aujourd'hui
        </div>

        {messages.map((msg) => {
          const isMe = msg.sender === 'me';
          return (
            <div
              key={msg.id}
              className={cn('flex', isMe ? 'justify-end' : 'justify-start')}>
              
              <div
                className={cn(
                  'max-w-[80%] p-3 shadow-sm relative',
                  isMe ?
                  'bg-emerald-500 text-white rounded-2xl rounded-br-sm' :
                  'bg-white text-gray-900 rounded-2xl rounded-bl-sm'
                )}>
                
                <p className="text-sm leading-relaxed pr-8">{msg.text}</p>
                <span
                  className={cn(
                    'text-[10px] absolute bottom-1.5 right-2',
                    isMe ? 'text-emerald-100' : 'text-gray-400'
                  )}>
                  
                  {msg.time}
                </span>
              </div>
            </div>);

        })}
      </div>

      {/* Input Area */}
      <div className="absolute bottom-0 left-0 right-0 bg-gray-50 p-2 pb-safe">
        {/* Quick Replies */}
        <div className="flex gap-2 overflow-x-auto hide-scrollbar px-2 mb-2">
          {quickReplies.map((reply, i) =>
          <button
            key={i}
            className="whitespace-nowrap bg-white border border-gray-200 text-emerald-700 text-sm font-medium px-4 py-1.5 rounded-full shadow-sm hover:bg-emerald-50 transition-colors">
            
              {reply}
            </button>
          )}
        </div>

        <div className="flex items-end gap-2 px-2 pb-2">
          <div className="flex-1 bg-white rounded-3xl flex items-center shadow-sm border border-gray-200 px-2 min-h-[50px]">
            <button className="p-2 text-gray-400 hover:text-gray-600">
              <Smile className="w-6 h-6" />
            </button>
            <Input
              placeholder="Message..."
              className="border-none shadow-none focus-visible:ring-0 px-2 h-10 bg-transparent" />
            
          </div>
          <button className="w-[50px] h-[50px] bg-emerald-600 rounded-full flex items-center justify-center text-white shadow-md hover:scale-105 active:scale-95 transition-transform flex-shrink-0">
            <Send className="w-5 h-5 ml-1" />
          </button>
        </div>
      </div>
    </div>);

}
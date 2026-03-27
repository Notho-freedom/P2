import React from 'react';
import { cn } from '../lib/utils';
interface MapPlaceholderProps {
  className?: string;
  children?: React.ReactNode;
}
export function MapPlaceholder({ className, children }: MapPlaceholderProps) {
  return (
    <div
      className={cn('relative w-full bg-emerald-50 overflow-hidden', className)}>
      
      {/* Fake Street Grid Pattern */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(to right, #10b981 1px, transparent 1px),
            linear-gradient(to bottom, #10b981 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }} />
      

      {/* Decorative Map Elements */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-emerald-200 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-pulse-ring" />
      <div className="absolute bottom-1/3 right-1/4 w-48 h-48 bg-emerald-300 rounded-full mix-blend-multiply filter blur-xl opacity-30" />

      {/* Fake Route Line */}
      <svg
        className="absolute inset-0 w-full h-full opacity-40"
        xmlns="http://www.w3.org/2000/svg">
        
        <path
          d="M 50 150 Q 150 50 250 200 T 400 100"
          fill="none"
          stroke="#059669"
          strokeWidth="6"
          strokeDasharray="10,10"
          className="animate-pulse" />
        
      </svg>

      {children}
    </div>);

}
import React from 'react';

export enum ServiceType {
  ALTERNATE_HEALTH = 'Alternate Health',
  QUIT_SMOKING = 'Quit Smoking',
  WEIGHT_LOSS = 'Weight Loss'
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: number;
}

export interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  type: ServiceType;
  onClick: () => void;
}
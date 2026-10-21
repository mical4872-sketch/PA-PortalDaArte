import type { ComponentType, ReactNode } from 'react';
import type { ViewStyle } from 'react-native';

export type StatusContratacao = 'Pendente' | 'Confirmado' | 'Concluido' | 'Concluído';

// Perfil do Artista / Contratado
export interface PerfilContratado {
  id: string;
  name: string;
  category: string;
  fotoUrl?: string | null; // URL da foto do perfil (se existir)
  icon?: ComponentType<{ size?: number; color?: string }>; // Ícone padrão caso não tenha foto
  darkBgColor?: string;
  lightBgColor?: string;
  iconColor?: string;
}

// Processo de Contratação completo
export interface ProcessoContratacao {
  id: string;
  contratado: PerfilContratado;
  date: string;
  location: string;
  status: StatusContratacao;
}

// Props dos componentes visuais
export interface CardContratacaoProps {
  children: ReactNode;
  cardBg?: string;
  borderColor?: string;
  style?: ViewStyle;
}

export interface CardAvatarProps {
  fotoUrl?: string | null;
  iconFallback?: ComponentType<{ size?: number; color?: string }>;
  backgroundColor?: string;
  iconColor?: string;
}

export interface CardInfoProps {
  name: string;
  category?: string;
  date: string;
  location: string;
  textPrimaryColor?: string;
  textSecondaryColor?: string;
}

export interface CardStatusProps {
  status: StatusContratacao;
}
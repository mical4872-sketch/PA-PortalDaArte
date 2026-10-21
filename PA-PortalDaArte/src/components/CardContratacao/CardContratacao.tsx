import React, { useState } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Music } from 'lucide-react-native';
import {
  CardContratacaoProps,
  CardAvatarProps,
  CardInfoProps,
  CardStatusProps,
  StatusContratacao,
} from './types';

// -------------------------------------------------------------
// 1. CONTAINER DO CARD
// -------------------------------------------------------------
export function CardContratacao({
  children,
  cardBg = '#FFFFFF',
  borderColor = 'transparent',
  style,
}: CardContratacaoProps) {
  return (
    <View
      style={[
        styles.card,
        { backgroundColor: cardBg, borderColor: borderColor },
        style,
      ]}
    >
      {children}
    </View>
  );
}

// -------------------------------------------------------------
// 2. AVATAR (Foto de perfil com fallback para ícone)
// -------------------------------------------------------------
function CardAvatar({
  fotoUrl,
  iconFallback: IconComponent = Music,
  backgroundColor = '#FDE4D9',
  iconColor = '#E05A10',
}: CardAvatarProps) {
  const [hasError, setHasError] = useState(false);
  const showImage = Boolean(fotoUrl && !hasError);

  return (
    <View style={[styles.avatarContainer, { backgroundColor }]}>
      {showImage && fotoUrl ? (
        <Image
          source={{ uri: fotoUrl }}
          style={styles.avatarImage}
          onError={() => setHasError(true)}
        />
      ) : IconComponent ? (
        <IconComponent size={24} color={iconColor} />
      ) : null}
    </View>
  );
}

// -------------------------------------------------------------
// 3. INFORMAÇÕES DO ARTISTA E EVENTO
// -------------------------------------------------------------
function CardInfo({
  name,
  category,
  date,
  location,
  textPrimaryColor = '#000000',
  textSecondaryColor = '#666666',
}: CardInfoProps) {
  return (
    <View style={styles.artistDetails}>
      <View style={styles.nameCategoryRow}>
        <Text style={[styles.artistName, { color: textPrimaryColor }]}>
          {name}
        </Text>
        {category ? (
          <Text style={[styles.artistCategory, { color: textSecondaryColor }]}>
            {category}
          </Text>
        ) : null}
      </View>
      <Text style={[styles.infoText, { color: textSecondaryColor }]}>
        {date}
      </Text>
      <Text style={[styles.infoText, { color: textSecondaryColor }]}>
        {location}
      </Text>
    </View>
  );
}

// -------------------------------------------------------------
// 4. BADGE DE STATUS DO PROCESSO
// -------------------------------------------------------------
function CardStatus({ status }: CardStatusProps) {
  const getStatusColor = (currentStatus: StatusContratacao) => {
    switch (currentStatus) {
      case 'Pendente':
        return '#F2994A'; // Laranja
      case 'Confirmado':
        return '#56CCF2'; // Azul claro
      case 'Concluido':
      case 'Concluído':
        return '#27AE60'; // Verde
      default:
        return '#BDBDBD'; // Cinza padrão
    }
  };

  return (
    <View style={styles.cardRightGroup}>
      <View
        style={[
          styles.statusBadge,
          { backgroundColor: getStatusColor(status) },
        ]}
      >
        <Text style={styles.statusText}>{status}</Text>
      </View>
    </View>
  );
}

// Declara os subcomponentes como membros tipados do componente principal.
export namespace CardContratacao {
  export const Avatar = CardAvatar;
  export const Info = CardInfo;
  export const Status = CardStatus;
}

// -------------------------------------------------------------
// ESTILOS
// -------------------------------------------------------------
const styles = StyleSheet.create({
  card: {
    borderRadius: 12,
    paddingVertical: 16,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    borderWidth: 1,
  },
  avatarContainer: {
    width: 52,
    height: 52,
    borderRadius: 26,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
    overflow: 'hidden',
  },
  avatarImage: {
    width: '100%',
    height: '100%',
    borderRadius: 26,
  },
  artistDetails: {
    justifyContent: 'center',
    flex: 1,
  },
  nameCategoryRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
    flexWrap: 'wrap',
  },
  artistName: {
    fontSize: 16,
    fontWeight: '700',
    marginRight: 8,
  },
  artistCategory: {
    fontSize: 12,
    fontWeight: '500',
  },
  infoText: {
    fontSize: 12,
    marginTop: 2,
  },
cardRightGroup: {
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 12,
  },
  statusBadge: {
    width: 110,
    paddingVertical: 7,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  statusText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '700',
    textAlign: 'center',
  },
});
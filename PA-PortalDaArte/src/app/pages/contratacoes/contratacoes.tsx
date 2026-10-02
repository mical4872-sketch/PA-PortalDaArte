import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  ScrollView,
  Platform,
} from 'react-native';
import { Music, Headphones, Mic } from 'lucide-react-native';

// Importações dos Componentes e do Contexto
import Sidebar from '../../../components/Sidebar';
import Header from '../../../components/Header';
import { useTheme } from '../../../components/context/ThemeContext';

// Importação do Card Modularizado
import { CardContratacao, ProcessoContratacao } from '../../../components/CardContratacao';

const CONTRATACOES_LIST: ProcessoContratacao[] = [
  {
    id: '1',
    contratado: {
      id: 'art-1',
      name: 'Lucas Andrade',
      category: 'Violão e Voz',
      fotoUrl: null, // Exemplo com foto real: 'https://i.pravatar.cc/150?img=11'
      icon: Music,
      darkBgColor: '#3D2218',
      lightBgColor: '#FDE4D9',
      iconColor: '#E05A10',
    },
    date: '24/11/2026 - 20:00',
    location: 'Recife, PE',
    status: 'Pendente',
  },
  {
    id: '2',
    contratado: {
      id: 'art-2',
      name: 'Banda Vereda',
      category: 'Forró • 5 integrantes',
      fotoUrl: null,
      icon: Music,
      darkBgColor: '#412C1B',
      lightBgColor: '#FDE4D9',
      iconColor: '#E05A10',
    },
    date: '24/11/2026 - 20:00',
    location: 'São Paulo, SP',
    status: 'Confirmado',
  },
  {
    id: '3',
    contratado: {
      id: 'art-3',
      name: 'DJ Marina',
      category: 'Eletrônica • DJ Set',
      fotoUrl: null,
      icon: Headphones,
      darkBgColor: '#2E2243',
      lightBgColor: '#EBE4FA',
      iconColor: '#8C52FF',
    },
    date: '24/11/2026 - 20:00',
    location: 'Recife, PE',
    status: 'Concluido',
  },
  {
    id: '4',
    contratado: {
      id: 'art-4',
      name: 'Juliana Diniz',
      category: 'MPB • Cantora',
      fotoUrl: null,
      icon: Mic,
      darkBgColor: '#1B3736',
      lightBgColor: '#E0F2F1',
      iconColor: '#20B2AA',
    },
    date: '24/11/2026 - 20:00',
    location: 'Recife, PE',
    status: 'Concluido',
  },
];

export default function ContratacoesScreen() {
  const { theme, isLightMode } = useTheme();
  const styles = getStyles(theme);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle={isLightMode ? 'dark-content' : 'light-content'}
        backgroundColor={theme.headerBg}
      />

      <View style={styles.dashboardContainer}>
        <Sidebar activeRoute="contratacoes" />

        <View style={styles.mainContent}>
          <Header />

          <ScrollView
            style={styles.scrollView}
            contentContainerStyle={styles.scrollContentContainer}
            showsVerticalScrollIndicator={false}
          >
            <View style={styles.contentWrapper}>
              <View style={styles.pageHeader}>
                <Text style={styles.pageTitle}>Contratações</Text>
              </View>

              <View style={styles.cardsContainer}>
                {CONTRATACOES_LIST.map((item) => {
                  const avatarBg = isLightMode
                    ? item.contratado.lightBgColor
                    : item.contratado.darkBgColor;

                  return (
                    <CardContratacao
                      key={item.id}
                      cardBg={theme.cardBg}
                      borderColor={theme.borderColor}
                    >
                      <View style={styles.leftGroup}>
                        <CardContratacao.Avatar
                          fotoUrl={item.contratado.fotoUrl}
                          iconFallback={item.contratado.icon}
                          backgroundColor={avatarBg}
                          iconColor={item.contratado.iconColor}
                        />

                        <CardContratacao.Info
                          name={item.contratado.name}
                          category={item.contratado.category}
                          date={item.date}
                          location={item.location}
                          textPrimaryColor={theme.textPrimary}
                          textSecondaryColor={theme.textSecondary}
                        />
                      </View>

                      <CardContratacao.Status status={item.status} />
                    </CardContratacao>
                  );
                })}
              </View>
            </View>
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
}

const getStyles = (theme: any) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.mainBg,
      ...Platform.select({
        web: {
          height: '100vh',
          overflow: 'hidden',
        },
      }),
    },
    dashboardContainer: {
      flex: 1,
      flexDirection: 'row',
      backgroundColor: theme.mainBg,
      ...Platform.select({
        web: {
          height: '100vh',
          overflow: 'hidden',
        },
      }),
    },
    mainContent: {
      flex: 1,
      backgroundColor: theme.mainBg,
      ...Platform.select({
        web: {
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
        },
      }),
    },
    scrollView: {
      flex: 1,
      ...Platform.select({
        web: {
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
        },
      }),
    },
    scrollContentContainer: {
      flexGrow: 1,
    },
    contentWrapper: {
      flex: 1,
      paddingHorizontal: 32,
      paddingTop: 3,
      paddingBottom: 24,
    },
    pageHeader: {
      marginBottom: 20,
    },
    pageTitle: {
      fontSize: 28,
      fontWeight: '700',
      color: theme.textPrimary,
    },
    cardsContainer: {
      gap: 14,
      paddingBottom: 8,
    },
    leftGroup: {
      flexDirection: 'row',
      alignItems: 'center',
      flex: 1,
    },
  });
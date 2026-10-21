import React from 'react';
import { Stack } from 'expo-router';
import { ThemeProvider } from '../components/context/ThemeContext';
import { ProfileProvider } from '../components/context/ProfileContext';

export default function RootLayout() {
  return (
    <ThemeProvider>
      <ProfileProvider>
        <Stack screenOptions={{ headerShown: false }} />
      </ProfileProvider>
    </ThemeProvider>
  );
}

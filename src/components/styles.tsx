import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    card: {
      backgroundColor: '#f5f8ff',
      padding: 20,
      borderRadius: 20,
      marginHorizontal: 24,
      marginVertical: 20,
      shadowColor: '#000',
      shadowOpacity: 0.1,
      shadowOffset: { width: 0, height: 4 },
      shadowRadius: 10,
      elevation: 6,
      alignItems: 'center',
    },
    city: {
      fontSize: 26,
      fontWeight: '700',
      color: '#333',
    },
    country: {
      fontWeight: '400',
      color: '#666',
    },
    icon: {
      width: 100,
      height: 100,
      marginVertical: 8,
    },
    temp: {
      fontSize: 42,
      fontWeight: '700',
      color: '#1E88E5',
    },
    condition: {
      fontSize: 18,
      fontWeight: '500',
      color: '#555',
      marginBottom: 10,
    },
    row: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '100%',
      marginTop: 12,
    },
    column: {
      flex: 1,
      alignItems: 'center',
    },
    label: {
      fontSize: 14,
      color: '#888',
    },
    value: {
      fontSize: 18,
      fontWeight: '600',
      color: '#333',
    },
});
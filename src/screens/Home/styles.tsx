import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    header: {
      paddingHorizontal: 24,
      paddingTop: 16,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    title: {
      fontSize: 28,
      fontWeight: '700',
    },
    switchContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    form: {
      paddingHorizontal: 24,
      marginTop: 40,
    },
    input: {
      borderWidth: 1,
      padding: 14,
      borderRadius: 10,
      marginBottom: 16,
      fontSize: 16,
    },
    error: {
      textAlign: 'center',
      marginTop: 20,
      fontSize: 16,
    },
    darkModeText : {
      marginRight: 4, 
      marginLeft: 8
    },
    activity: { 
      marginTop: 30 
    },
    scroller: {
      flexGrow: 1
    }
});

export const grey = "#ccc"
export const darkGrey = "#555"
export const grey60 = "#999"
export const buttonColor = "#1e90ff"
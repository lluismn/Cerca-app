import { Text as RNAppText, StyleSheet, TextProps } from 'react-native';

export default function AppText(props: TextProps) {
  return (
    <RNAppText
      {...props}
      style={[styles.text, props.style]} // permite override si lo necesitas
    />
  );
}

const styles = StyleSheet.create({
  text: {
    fontFamily: 'NunitoSans-Regular', // Asegúrate de que esta fuente esté cargada en tu proyecto
    fontSize: 16,
    color: '#fff',
  },
});

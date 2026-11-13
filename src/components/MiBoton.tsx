import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

type Props = {
  textoBoton: string;
  nombreIcono: keyof typeof Ionicons.glyphMap;
  colorBoton: string;
  onPress: () => void;
};

const MiBoton = ({ textoBoton, nombreIcono, colorBoton, onPress }: Props) => {
  return (
    <TouchableOpacity
      style={[estilos.boton, { backgroundColor: colorBoton }]}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <Ionicons name={nombreIcono} size={18} color="#fff" />
      <Text style={estilos.texto}>{textoBoton}</Text>
    </TouchableOpacity>
  );
};

export default MiBoton;

const estilos = StyleSheet.create({
  boton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    borderRadius: 8,
    marginVertical: 4,
    gap: 8,
  },
  texto: { color: "#fff", fontSize: 14, fontWeight: "bold" },
});

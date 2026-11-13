import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

type Props = {
  nombre: string;
  icono: keyof typeof Ionicons.glyphMap;
  descripcion: string;
  onPress: () => void;
};

const TarjetaHobby = ({ nombre, icono, descripcion, onPress }: Props) => {
  return (
    <TouchableOpacity style={estilos.tarjeta} onPress={onPress} activeOpacity={0.7}>
      <Ionicons name={icono} size={32} color="#2563eb" />
      <Text style={estilos.nombre}>{nombre}</Text>
      <Text style={estilos.descripcion}>{descripcion}</Text>
    </TouchableOpacity>
  );
};

export default TarjetaHobby;

const estilos = StyleSheet.create({
  tarjeta: {
    backgroundColor: "#ffffff",
    padding: 16,
    borderRadius: 10,
    marginVertical: 8,
    borderWidth: 1,
    borderColor: "#ccc",
    alignItems: "center",
  },
  nombre: { fontSize: 16, fontWeight: "bold", color: "#0f172a", marginTop: 6 },
  descripcion: { fontSize: 13, color: "#555", textAlign: "center", marginTop: 4 },
});

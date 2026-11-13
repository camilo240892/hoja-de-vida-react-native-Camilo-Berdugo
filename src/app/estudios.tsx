import { Ionicons } from "@expo/vector-icons";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import TarjetaEstudio from "../components/TarjetaEstudio";

const estudios = () => {
  return (
    <ScrollView style={estilos.contenedor} contentContainerStyle={estilos.contenido}>
      <View style={estilos.encabezado}>
        <Ionicons name="phone-portrait-outline" size={100} color="#2563eb" />
        <Text style={estilos.nombre}>David Camilo Berdugo Martin</Text>
        <Text style={estilos.seccionTitulo}>Estudios</Text>
      </View>

      <View style={estilos.seccion}>
        <TarjetaEstudio
          titulo="Bachiller"
          institucion="Colegio Miguel Antonio Caro IED"
          anio={2025}
          enCurso={false}
        />
        <TarjetaEstudio
          titulo="Técnico En Desarrollo de Software"
          institucion="Colegio Miguel Antonio Caro IED"
          anio={2024}
          enCurso={false}
        />
        <TarjetaEstudio
          titulo="Tecnólogo en Análisis y Desarrollo de Software"
          institucion="SENA"
          anio={2026}
          enCurso={true}
        />
      </View>
    </ScrollView>
  );
};

export default estudios;

const estilos = StyleSheet.create({
  contenedor: { flex: 1, backgroundColor: "#f8fafc" },
  contenido: { padding: 20 },
  encabezado: { alignItems: "center", marginBottom: 20 },
  nombre: { fontSize: 24, fontWeight: "bold", color: "#0f172a", marginTop: 8, textAlign: "center" },
  seccionTitulo: { fontSize: 16, color: "#2563eb", fontWeight: "600" },
  seccion: {
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 12,
    elevation: 1,
  },
});

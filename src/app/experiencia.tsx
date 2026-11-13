import { Ionicons } from "@expo/vector-icons";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import TarjetaExperiencia from "../components/TarjetaExperiencia";

const experiencia = () => {
  return (
    <ScrollView style={estilos.contenedor} contentContainerStyle={estilos.contenido}>
      <View style={estilos.encabezado}>
        <Ionicons name="briefcase" size={100} color="#2563eb" />
        <Text style={estilos.nombre}>David Camilo Berdugo Martin</Text>
        <Text style={estilos.seccionTitulo}>Experiencia Laboral</Text>
      </View>

      <View style={estilos.seccion}>
        <TarjetaExperiencia
          cargo="Aprendiz en Análisis y Desarrollo de Software"
          empresa="SENA"
          periodo="2026 - Actualidad"
          descripcion="Formación en desarrollo de aplicaciones móviles con React Native y Expo, y control de versiones con Git y GitHub."
        />
        <TarjetaExperiencia
          cargo="Técnico en Desarrollo de Software"
          empresa="Colegio Miguel Antonio Caro IED"
          periodo="2023 - 2024"
          descripcion="Formación técnica en programación y desarrollo de software durante la media."
        />
        <TarjetaExperiencia
          cargo="Proyecto personal: App Hoja de Vida"
          empresa="Proyecto formativo SENA"
          periodo="2026"
          descripcion="Aplicación móvil con navegación por pestañas, componentes reutilizables y alertas interactivas."
        />
      </View>
    </ScrollView>
  );
};

export default experiencia;

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
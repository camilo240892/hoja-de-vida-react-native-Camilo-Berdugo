import { Ionicons } from "@expo/vector-icons";
import { Alert, ScrollView, StyleSheet, Text, View } from "react-native";
import TarjetaHobby from "../components/TarjetaHobby";

const hobbies = () => {
  return (
    <ScrollView style={estilos.contenedor} contentContainerStyle={estilos.contenido}>
      <View style={estilos.encabezado}>
        <Ionicons name="heart" size={100} color="#2563eb" />
        <Text style={estilos.nombre}>David Camilo Berdugo Martin</Text>
        <Text style={estilos.seccionTitulo}>Intereses / Hobbies</Text>
      </View>

      <View style={estilos.seccion}>
        <TarjetaHobby
          nombre="Videojuegos"
          icono="game-controller-outline"
          descripcion="Juegos de estrategia y aventura"
          onPress={() =>
            Alert.alert(
              "Videojuegos",
              "Juego en mis ratos libres, me ayuda a pensar en estrategia y a trabajar en equipo cuando es en línea."
            )
          }
        />
        <TarjetaHobby
          nombre="Música"
          icono="musical-notes-outline"
          descripcion="Escuchar y descubrir artistas"
          onPress={() =>
            Alert.alert(
              "Música",
              "Escucho música mientras programo, me ayuda a concentrarme."
            )
          }
        />
        <TarjetaHobby
          nombre="Ciclismo"
          icono="bicycle-outline"
          descripcion="Rutas los fines de semana"
          onPress={() =>
            Alert.alert(
              "Ciclismo",
              "Salgo en bicicleta los fines de semana para despejar la mente y hacer ejercicio."
            )
          }
        />
        <TarjetaHobby
          nombre="Programar"
          icono="code-slash-outline"
          descripcion="Proyectos personales"
          onPress={() =>
            Alert.alert(
              "Programar",
              "Me gusta crear proyectos propios para practicar lo que voy aprendiendo en el SENA."
            )
          }
        />
      </View>
    </ScrollView>
  );
};

export default hobbies;

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

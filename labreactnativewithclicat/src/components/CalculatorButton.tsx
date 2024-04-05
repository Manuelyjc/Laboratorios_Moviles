import { Pressable, Text } from "react-native";
import { colors, styles } from "../config/theme/app-theme";

interface Props {
    label: string;              // Etiqueta del botón
    color?: string;             // Color del botón (opcional, por defecto es colors.darkGray)
    doubleSize?: boolean;       // Indica si el botón debe tener el doble de tamaño (opcional, por defecto es false)
    blackText?: boolean;        // Indica si el texto del botón debe ser negro (opcional, por defecto es false)
    onPress: () => void;        // Función que se ejecutará al presionar el botón
}

export const CalculatorButton = ({ label, color = colors.darkGray, doubleSize = false, blackText = false, onPress }: Props) => {
    return (
        <Pressable
            onPress={() => onPress()}                              // Definir la función onPress del Pressable
            style={({ pressed }) => ({                              // Estilo condicional para el Pressable
                ...styles.button,                                   // Estilos base del botón
                backgroundColor: color,                             // Color de fondo del botón
                width: (doubleSize) ? 180 : 80,                      // Ancho del botón (doble tamaño si doubleSize es true)
                opacity: (pressed) ? 0.8 : 1                         // Opacidad del botón al ser presionado
            })}
        >
            <Text style={{ ...styles.buttonText, color: (blackText) ? 'black' : 'white' }}>
                {label}                                             // Contenido del botón (etiqueta)
            </Text>
        </Pressable>
    );
};

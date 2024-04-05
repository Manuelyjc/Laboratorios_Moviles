# Laboratorios_Moviles
Crear aplicaciones con react native 

# Crear laboratorio de la manera nativa
https://reactnative.dev/docs/environment-setup

   # Crear proyecto
     -npx react-native@latest init AwesomeProject (esperar que se instalen los paquetes).
     -cd C/:dirección-de-la-carpeta-del-laboratorio
     -dir (revisa los  paquetes que se instalo)
     -npx react-native run-android (ejecutar la app para el emulador)

# Estructura dentro de la carpeta src
 -src/

     -Component/
       |_ CalculatorButton.tsx

      -Config/theme
       |_ app-theme.tsx
      
      -hooks/
       |_ useCalculator.tsx

      -screens/
       |_ CalculatorScreen.tsx
      
-App.tsx

# Descripción de los archivos

# CalculatorButton.tsx
Este código define un componente de botón personalizado para nuestra calculadora en una aplicación de React Native. El componente CalculatorButton acepta varias propiedades como entrada y genera un botón interactivo que ejecuta una función (onPress) cuando se presiona.

label: Define el texto que aparecerá en el botón.
color: Especifica el color de fondo del botón. Por defecto, es colors.darkGray.
doubleSize: Indica si el botón debe tener el doble de tamaño. Por defecto, es false.
blackText: Indica si el texto del botón debe ser negro. Por defecto, es false.
onPress: Es la función que se ejecutará cuando se presione el botón.

El componente utiliza Pressable de React Native para la interactividad del botón y aplica estilos condicionales basados en si el botón está presionado o no. Además, permite personalizar el color del texto del botón según la propiedad blackText.


# Boton pressable, creado con react native (nueva versión de boton de  app)
https://reactnative.dev/docs/components-and-apis



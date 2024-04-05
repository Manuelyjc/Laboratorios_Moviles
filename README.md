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

     * CalculatorButton.tsx: Este código define un componente de botón personalizado para una calculadora en una aplicación de React Native. El componente `CalculatorButton` acepta propiedades como `label` para el texto del botón y `onPress` para la función que se ejecutará cuando se presione el botón. También permite especificar el color del botón (`color`), si debe tener el doble de tamaño (`doubleSize`), y si el texto debe ser negro (`blackText`). El botón se vuelve interactivo utilizando `Pressable` de React Native y cambia su opacidad cuando se presiona. Además, el texto del botón puede ser negro o blanco según la configuración de `blackText`.


# Boton pressable, creado con react native (nueva versión de boton de  app)
https://reactnative.dev/docs/components-and-apis



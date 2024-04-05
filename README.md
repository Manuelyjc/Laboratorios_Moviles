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

1-CalculatorButton.tsx: 

Este código define un componente de botón personalizado para nuestra calculadora en una aplicación de React Native. El componente CalculatorButton acepta varias propiedades como entrada y genera un botón interactivo que ejecuta una función (onPress) cuando se presiona.

label: Define el texto que aparecerá en el botón.
color: Especifica el color de fondo del botón. Por defecto, es colors.darkGray.
doubleSize: Indica si el botón debe tener el doble de tamaño. Por defecto, es false.
blackText: Indica si el texto del botón debe ser negro. Por defecto, es false.
onPress: Es la función que se ejecutará cuando se presione el botón.

El componente utiliza Pressable de React Native para la interactividad del botón y aplica estilos condicionales basados en si el botón está presionado o no. Además, permite personalizar el color del texto del botón según la propiedad blackText.

2-app-theme.tsx: 

Este código define un módulo que contiene una paleta de colores y estilos CSS para nuestra de calculadora en React Native. El objeto `colors` contiene varias constantes de color utilizadas en la aplicación, como `darkGray`, `lightGray`, `orange`, `textPrimary`, `textSecondary`, y `background`. Por otro lado, el objeto `styles` contiene estilos CSS definidos utilizando `StyleSheet.create()`. Incluye estilos para el fondo de la aplicación, el resultado principal y secundario, el contenedor de la calculadora, y los botones. Los estilos se aplican utilizando nombres de clase, como `background`, `mainResult`, `subResult`, `calculatorContainer`, `button`, `buttonText`, y `row`. Estos estilos aseguran que la aplicación tenga una apariencia coherente y atractiva.

3-useCalculator.tsx: 

Este código define un hook personalizado llamado `useCalculator` que proporciona el estado y las funciones necesarias para una calculadora. Utiliza hooks de estado como `useState` para mantener el estado de la calculadora, y `useRef` para almacenar el último operador seleccionado. También utiliza enums para representar los operadores aritméticos.

Las funciones proporcionadas por este hook incluyen:

- `clean`: para limpiar la calculadora y restablecerla a su estado inicial.
- `deleteOperation`: para eliminar el último dígito ingresado.
- `toggleSing`: para cambiar el signo del número actual.
- `buildNumber`: para construir el número ingresado por el usuario.
- `setLastNumber`: para establecer el último número y prepararse para una nueva operación.
- Funciones para las operaciones aritméticas como `divideOperation`, `multiplyOperation`, `addOperation`, y `subtractOperation`.
- `calculateResult`: para calcular el resultado final de la operación.
- `calculateSubResult`: para calcular el resultado parcial basado en la fórmula actual.

Además, utiliza efectos (`useEffect`) para actualizar la fórmula y calcular el resultado parcial cuando cambian el número actual o la fórmula.

En resumen, este hook encapsula la lógica necesaria para realizar operaciones aritméticas básicas en una calculadora y proporciona una interfaz limpia y fácil de usar para interactuar con ella en componentes de React.

4-CalculatorScreen.tsx:

Este código define la pantalla de nuestra calculadora en una aplicación de React Native. Muestra la fórmula y el resultado parcial, así como los botones para números y operaciones. Utiliza el hook `useCalculator` para manejar la lógica de la calculadora, como la entrada de números y la ejecución de operaciones. Los botones son componentes reutilizables (`CalculatorButton`) que ejecutan funciones específicas cuando se presionan. En resumen, el componente `CalculatorScreen` muestra la interfaz de usuario de la calculadora y delega la lógica a `useCalculator` y `CalculatorButton`.

5-App.tsx 

Este código define la estructura principal de la aplicación de React Native. Utiliza el componente `StatusBar` para configurar el estilo de la barra de estado. El contenido principal de la aplicación se encuentra dentro de un componente `View` con un estilo de fondo definido en `app-theme.js`. Dentro de este `View`, se renderiza el componente `CalculatorScreen` que contiene la lógica y la interfaz de usuario de la calculadora. En resumen, `App` es el punto de entrada de la aplicación y se encarga de organizar la estructura general y los componentes principales de la misma.


# Boton pressable, creado con react native (nueva versión de boton de  app)
https://reactnative.dev/docs/components-and-apis



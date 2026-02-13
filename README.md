# Formulario CUD - Policlínico Regional San Luis

Aplicación web de una sola página para solicitar turnos del Certificado Único de Discapacidad (CUD), siguiendo el sistema de diseño "Poncho" del gobierno argentino con cumplimiento WCAG 2.1 Level AA.

## 🚀 Inicio Rápido

### Instalar Dependencias
```bash
cd web
npm install
```

### Iniciar Servidor de Desarrollo
```bash
npm run dev
```

La aplicación se abrirá automáticamente en `http://localhost:3000`

### Generar Build de Producción
```bash
npm run build
npm run preview
```

## 📋 Características

### ✅ Cumplimiento del Sistema Poncho
- **Tipografía:** Roboto (Google Fonts)
- **Colores:**
  - Primario: `#0072BB` (Azul Gobierno)
  - Éxito: `#2E7D33` (Verde)
  - Texto Principal: `#333333`
  - Texto Secundario: `#666666`
  - Fondo: `#FFFFFF` / `#F8F9FA`
  - Callouts: `#EAF7FA`

### ♿ Accesibilidad (WCAG 2.1 AA)
- ✅ Objetivos táctiles mínimo 48px
- ✅ Etiquetas visibles sobre todos los campos (no solo placeholders)
- ✅ Alto contraste de colores (ratios >= 4.5:1)
- ✅ Navegación completa por teclado
- ✅ Atributos ARIA apropiados
- ✅ Mensajes de error claros y asociados

### 📱 Diseño Responsivo
- Mobile-first approach
- Breakpoints optimizados para móvil, tablet y desktop
- Grid flexible con espaciado consistente

## 🎯 Flujo del Formulario

### Paso 1: Datos del Solicitante
Campos requeridos:
- DNI (7-8 dígitos numéricos)
- Nombre y Apellido Completo
- Correo Electrónico (validación de formato)
- Teléfono/WhatsApp (10-15 dígitos)

### Paso 2: Tipo de Discapacidad y Datos Médicos
- Selección de tipo (Motora, Visual, Auditiva, Mental, Visceral/Otra)
- Descripción breve del diagnóstico médico (mínimo 20 caracteres)

### Paso 3: Documentación y Confirmación
- Carga de archivo (Certificado Médico - JPG/PNG/PDF)
- Checkbox de declaración jurada (obligatorio)
- Botón de envío con estado de carga

### Pantalla de Éxito
- Confirmación visual con ícono verde
- Instrucciones sobre próximos pasos
- Información sobre notificaciones (email y WhatsApp)

## 🔧 Estructura del Proyecto

```
web/
├── public/              # Archivos estáticos
├── src/
│   ├── components/      # Componentes React
│   │   ├── Header.jsx           # Encabezado institucional
│   │   ├── Breadcrumb.jsx       # Migaja de pan
│   │   ├── InfoCallout.jsx      # Recuadro informativo
│   │   ├── ProgressIndicator.jsx # Indicador de progreso
│   │   ├── Button.jsx           # Botón reutilizable
│   │   ├── FormInput.jsx        # Input accesible
│   │   ├── MultiStepForm.jsx    # Orquestador del formulario
│   │   ├── SuccessScreen.jsx    # Pantalla de éxito
│   │   └── steps/
│   │       ├── Step1ApplicantData.jsx
│   │       ├── Step2MedicalData.jsx
│   │       └── Step3Documentation.jsx
│   ├── App.jsx          # Componente principal
│   ├── main.jsx         # Punto de entrada
│   └── index.css        # Estilos globales
├── index.html           # HTML base
├── package.json         # Dependencias
├── vite.config.js       # Configuración Vite
├── tailwind.config.js   # Tokens de diseño Poncho
└── postcss.config.js    # Configuración PostCSS
```

## 🔌 Integración con n8n

El formulario está preparado para enviar datos a un webhook de n8n. Para conectarlo:

1. Abre `src/components/MultiStepForm.jsx`
2. Localiza la función `onSubmit`
3. Descomenta y configura la llamada al webhook:

```javascript
await fetch('TU_URL_WEBHOOK_N8N', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(data)
})
```

### Estructura de Datos Enviados

```json
{
  "dni": "12345678",
  "fullName": "Juan Pérez",
  "email": "juan@ejemplo.com",
  "phone": "2664123456",
  "disabilityType": "motora",
  "diagnosis": "Descripción del diagnóstico...",
  "medicalCertificate": FileObject,
  "declaration": true
}
```

## 🎨 Personalización

### Modificar Colores
Edita `tailwind.config.js` en la sección `theme.extend.colors`:

```javascript
colors: {
  'gov-primary': '#0072BB',    // Azul principal
  'gov-success': '#2E7D33',    // Verde de éxito
  'gov-text': '#333333',       // Texto principal
  // ...más colores
}
```

### Ajustar Validaciones
Modifica las reglas en cada componente de paso:

```javascript
register('email', {
  required: 'El correo es requerido',
  pattern: {
    value: /tu-regex-aqui/,
    message: 'Tu mensaje de error'
  }
})
```

## 📱 Testing Manual

### Checklist de Pruebas

**Funcionalidad:**
- [ ] Validación impide avanzar sin campos requeridos
- [ ] Validación de formato (DNI, email, teléfono)
- [ ] Navegación entre pasos (Siguiente/Anterior)
- [ ] Carga de archivos muestra nombre del archivo
- [ ] Checkbox debe estar marcado para enviar
- [ ] Botón muestra estado "Enviando..."
- [ ] Pantalla de éxito aparece tras envío

**Accesibilidad:**
- [ ] Navegación con Tab funciona correctamente
- [ ] Enter envía el formulario en el último paso
- [ ] Mensajes de error se leen con screen reader
- [ ] Todos los campos tienen labels visibles
- [ ] Contraste de colores cumple WCAG AA

**Diseño:**
- [ ] Colores coinciden con Poncho (#0072BB, etc.)
- [ ] Tipografía es Roboto
- [ ] Espaciado es consistente
- [ ] Responsivo en móvil, tablet, desktop

## 🐛 Solución de Problemas

### Las dependencias no se instalan
```bash
# Limpiar cache y reinstalar
rm -rf node_modules package-lock.json
npm install
```

### Tailwind no aplica estilos
```bash
# Verificar que PostCSS esté configurado
npm run dev
# Revisa la consola del navegador
```

### Errores de validación del formulario
- Verifica que `react-hook-form` esté instalado
- Revisa las reglas de validación en cada Step component

## 📄 Licencia

Este proyecto es parte del Policlínico Regional San Luis - Gobierno de la Provincia de San Luis.

## 🤝 Soporte

Para consultas sobre la implementación, contactar al equipo de desarrollo del Policlínico.

---

**Versión:** 1.0.0  
**Última actualización:** Febrero 2026

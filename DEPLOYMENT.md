# Guía de Despliegue en Vercel

## 🚀 Despliegue Rápido

### Opción 1: Desde GitHub (Recomendado)

1. **Ve a Vercel:**
   - Abre [vercel.com](https://vercel.com)
   - Inicia sesión con tu cuenta de GitHub

2. **Importa el Repositorio:**
   - Click en "Add New..." → "Project"
   - Busca `policlinico-cud-form`
   - Click en "Import"

3. **Configura el Proyecto:**
   ```
   Framework Preset: Vite
   Root Directory: ./
   Build Command: npm run build
   Output Directory: dist
   Install Command: npm install
   ```

4. **Variables de Entorno (Opcional):**
   Si necesitas configurar variables:
   - Click en "Environment Variables"
   - Agrega: `VITE_WEBHOOK_URL` con tu URL de n8n

5. **Deploy:**
   - Click en "Deploy"
   - ¡Listo! En ~2 minutos estará en producción

### Opción 2: CLI de Vercel

```bash
# Instalar Vercel CLI
npm i -g vercel

# Desde la carpeta web/
cd C:\Users\Eduardo\Desktop\Proyectos\Policlinico\web

# Deploy
vercel

# Para producción
vercel --prod
```

## 🔗 Tu Repositorio

**URL:** https://github.com/EduGarro/policlinico-cud-form

**Estado:** ✅ Código subido y listo

**Rama:** main

## ⚙️ Configuración Post-Despliegue

### Conectar Webhook de n8n

Una vez desplegado:

1. **Obtén tu URL de Vercel:**
   ```
   https://tu-app.vercel.app
   ```

2. **Actualiza el formulario:**
   - Ve a tu dashboard de Vercel
   - Settings → Environment Variables
   - Agrega: `VITE_WEBHOOK_URL` = tu URL de n8n

3. **O edita directamente en GitHub:**
   - Archivo: `src/components/MultiStepForm.jsx`
   - Línea ~50: descomentar y configurar fetch

4. **Commit y push:**
   ```bash
   git add .
   git commit -m "Add n8n webhook URL"
   git push
   ```

Vercel automáticamente redesplegará con los cambios.

## 📊 Dashboard de Vercel

Después del despliegue verás:

- **URL de Producción:** tu-app.vercel.app
- **Preview URLs:** Para cada commit
- **Analytics:** Tráfico y performance
- **Logs:** Errores y debugging

## 🔄 Despliegues Automáticos

Vercel automáticamente despliega:
- ✅ **Main branch** → Producción
- ✅ **Otras branches** → Preview
- ✅ **Pull Requests** → Preview

Cada push a GitHub activa un nuevo deploy.

## ⚡ Optimizaciones de Vercel

Vercel automáticamente optimiza:
- 🗜️ Compresión Gzip/Brotli
- 🌍 CDN global
- ⚡ Edge caching
- 📱 Lazy loading
- 🖼️ Optimización de imágenes

## 🛠️ Troubleshooting

### Error: Build failed

**Solución:**
```bash
# Probar build localmente
npm run build

# Si funciona, el problema es de configuración en Vercel
# Verifica que Build Command sea: npm run build
```

### Error: 404 en rutas

**Solución:**
Crear `vercel.json` en la raíz:
```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

### Cambios no se reflejan

**Solución:**
- Verifica que el commit se haya pusheado a GitHub
- Revisa el log de deployment en Vercel
- Limpia cache del navegador (Ctrl + Shift + R)

## 📱 Dominios Personalizados

Para usar tu propio dominio:

1. **En Vercel Dashboard:**
   - Settings → Domains
   - Click "Add Domain"
   - Ingresa: `cud.policlinico.gob.ar` (ejemplo)

2. **Configura DNS:**
   ```
   Type: CNAME
   Name: cud
   Value: cname.vercel-dns.com
   ```

3. **Espera propagación:**
   - Usualmente 10-60 minutos
   - Vercel automáticamente genera SSL

## ✅ Checklist Pre-Producción

Antes de activar en producción:

- [ ] Probar formulario completo en preview
- [ ] Verificar webhook de n8n funciona
- [ ] Validar que emails/WhatsApp se envían
- [ ] Probar en móvil y desktop
- [ ] Verificar accesibilidad
- [ ] Configurar dominio personalizado (opcional)
- [ ] Configurar Analytics (opcional)
- [ ] Notificar al equipo

## 📞 Soporte

**Vercel Docs:** https://vercel.com/docs  
**Status:** https://www.vercel-status.com  
**Community:** https://github.com/vercel/vercel/discussions

---

**Repositorio:** https://github.com/EduGarro/policlinico-cud-form  
**Próximo paso:** Importar en Vercel


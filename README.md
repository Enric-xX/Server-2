# Server #2 - OnlyPhone

Plataforma móvil exclusiva vulnerable para practicar bug bounty, User-Agent bypass, directory listing y CVE assessment.
---

## Estructura

| Ruta | Descripción | Acceso |
|------|-------------|--------|
| `index.html` | Página principal con Flag 1 | 🔒 Solo User-Agent iPhone |
| `desktop.html` | Página de error para escritorio | Público |
| `note.txt` | Pista sobre User-Agents válidos | Público |
| `detect.js` | Escáner de User-Agent (cada 1s) | Interno |
| `CVE-VULN/` | Herramienta de evaluación de CVEs con Flag 3 | 🔒 Solo User-Agent iPhone |
| `wp-admin/` | Panel de administración | 🔒 403 Forbidden |
| `wp-admin/shell.html` | Shell simulada del sistema con Flag 4 | 🔒 Oculto |
| `wp-admin/config/` | Configuración y contraseñas ROT13 | 🔒 Oculto |
| `wp-content/` | Contenido del sitio | 🔒 403 Forbidden |
| `wp-includes/` | Archivos internos con Directory Listing | 🔒 Oculto |
| `wp-includes/internal-notes.txt/` | Notas internas con Flag 2 | 🔒 Oculto |
| `wp-json/` | API REST del servidor | Público |

---

## Writeup

Lee el writeup completo en Medium: *Server-2: OnlyPhone — CTF Walkthrough (4 Flags)* *(próximamente)*

---

> [!NOTE]  
> Algunos endpoints contienen información interna  
> Usa Ctrl+U para encontrar pistas en el código fuente  
> Los User-Agents válidos están en note.txt  
> Solo para pruebas éticas

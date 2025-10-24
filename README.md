# 🏭 ByYourOrders

**ByYourOrders** es un sistema de gestión integral diseñado para optimizar el control de **Órdenes de Pedido, Modelos de Productos y Materiales de Producción**. Su objetivo principal es centralizar y digitalizar el flujo de trabajo de manufactura, asegurando la trazabilidad y la eficiencia operativa.

## ✨ Características Principales

El sistema aborda las necesidades operativas clave del proceso productivo:

1.  **Gestión de Órdenes (CRUD):** Registro, seguimiento y actualización del estado de cada pedido de cliente.
2.  **Sistema de Gestión de Usuarios y Permisos:** Control de acceso basado en roles para manejar permisos y acciones, crucial para las operaciones en Almacén, Corte, Producción y Calidad.
3.  **Gestión de Materiales y Modelos:** Catálogo de productos y control de inventario del **Bill of Materials (BOM)**, enfocado inicialmente en la materia prima de **Madera**.
4.  **Trazabilidad del Producto:** El sistema gestiona el producto a través de las siguientes fases operativas: **Almacén $\rightarrow$ Corte $\rightarrow$ Producción $\rightarrow$ Calidad**.
    * *(Nota: El área de Envíos es una fase planeada para una futura iteración de desarrollo).*

## ⚙️ Flujo de Trabajo y Roles Operacionales

El desarrollo de un producto sigue un ciclo de vida definido por los roles y áreas dentro de la aplicación.

### 👥 Roles de Usuario y Responsabilidades

| Rol | Área Operacional | Acciones clave en el sistema |
| :--- | :--- | :--- |
| **Almacén** | Operaciones de Materiales | Cargar y gestionar la existencia del **Bill of Materials (BOM)**. |
| **Corte** | Transformación de Materia Prima | Registrar el uso y corte de la **Madera** según el Modelo requerido. |
| **Producción** | Ensamblaje de Productos | Actualizar el estado de la Orden a "En Armado". |
| **Calidad** | Inspección y Validación | Marcar la Orden como "Validada" o "Rechazada" para su siguiente fase. |

### 🔄 Ciclo de Vida de una Orden

Una orden pasa secuencialmente por las siguientes etapas controladas por el sistema:

1.  **Inicio (Almacén):** La Orden se inicia con la disponibilidad de los materiales cargados (BOM).
2.  **Preparación (Corte):** La materia prima se transforma para el modelo específico.
3.  **Ensamblaje (Producción):** El producto es armado.
4.  **Revisión (Calidad):** El producto terminado se inspecciona.
5.  **Finalización:** La orden está lista. (El envío se gestionará externamente por ahora).

---

## 💻 Stack Tecnológico

| Componente | Tecnología | Versión Clave |
| :--- | :--- | :--- |
| **Backend (API)** | **Node.js y Express** | (Node , Express) |
| **Frontend (Interfaz)** | **Angular** | v18 |
| **Base de Datos** | Mysql | (Version) |
| **Diagramas** | **PlantUML** | Esquemas de base de datos y arquitectura. |

## 🛠️ Guía para Desarrolladores (Setup Local)

*(Aquí debes continuar con los pasos detallados para la instalación, configuración de dependencias y ejecución del proyecto, como se sugirió en la respuesta anterior.)*

### 📋 Prerrequisitos

* Node.js (versión mínima o recomendada)
* Angular CLI
* (Tu motor de Base de Datos)
* etc.

### 🏗️ Instalación y Configuración
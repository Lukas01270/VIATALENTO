export const coursesData = {
  'gestor-cobranza': {
    id: 'gestor-cobranza',
    title: 'GESTOR DE COBRANZA Y RECUPERACION DE CARTERA',
    category: 'Finanzas',
    image: '/assets/ImagCourses/GestorCobranza.jpg',
    certificate: 'Gestor de Cobranza y Recuperacion de cartera',
    precio: 200, // 👈 AGREGADO
    description: [
      'Este curso está diseñado para contadores, economistas, ingenieros financieros, administradores de empresas, profesionales en áreas financieras y aquellos interesados en adquirir habilidades específicas en gestión de cobranza y recuperación de cartera en el contexto financiero en Bolivia.',
      'Incluye temas actualizados al 2026 que te permiten resolver problemas del entorno profesional asi como',
      'Capacitar a los participantes en las técnicas y conocimientos esenciales para desempeñarse eficazmente como gestores de cobranza y recuperación de mora, aplicando la Ley 393 y la Normativa de la Autoridad de Supervisión del Sistema Financiero (ASFI) en Bolivia.'
    ],
    objectives: [
      'Tema 1: Conceptualización y Fundamentos del Crédito y la Mora',
      'Tema 2: Bases de la Gestión de Cobranzas',
      'Tema 3: Cobranza a la Medida del Cliente',
      'Tema 4: Cobranza Judicial',
      'Tema 5: Normalización de Cartera y Negociación',
      'Tema 6: Ley 393 y Normativa ASFI'
    ],
    duration: 'Duracion',
    hoursPerWeek: '8 Horas Academicas',
    relatedCourses: ['asesor-creditos', 'cajero-bancario', 'atencion-plataforma']
  },

  'asesor-creditos': {
    id: 'asesor-creditos',
    title: 'ASESOR DE CREDITOS',
    category: 'Finanzas',
    image: '/assets/ImagCourses/AsesorCreditos.jpg',
    certificate: 'Asesor de creditos',
    precio: 200, // 👈 AGREGADO
    description: [
      'Este curso está dirigido a ingenieros financieros, economistas, contadores, administradores, profesionales y estudiantes de áreas comerciales, así como al público interesado en adquirir conocimientos especializados para desempeñarse como asesores de créditos en el contexto financiero boliviano.',
      'Los objetivos de este curso es:',
      'Capacitar a los participantes en las habilidades y conocimientos fundamentales necesarios para ejercer eficazmente como asesores de créditos, tomando en cuenta la Ley Nº 393 y la Normativa de la Autoridad de Supervisión del Sistema Financiero (ASFI) enfocada en créditos en Bolivia.'
    ],
    objectives: [
      'Tema 1: Que es un Asesor de Creditos?',
      'Tema 2: Ley Nº 393 y Normativa ASFI enfocada a Créditos ',
      'Tema 3: Tipos de Créditos y Garantías',
      'Tema 4: Proceso Crediticio',
      'Tema 5: Armado de la Carpeta de Créditos',
      'Tema 6: Análisis y Evaluación de la Capacidad de Pago:',
      'Tema 7:	Créditos de Consumo, Vivienda, Productivos y Microcréditos'
    ],
    duration: 'Duracion del curso',
    hoursPerWeek: '8 horas academicas',
    instructor: {
      name: 'Instructor Especializado',
      title: 'Especialista en Créditos',
      photo: '/assets/instructors/placeholder.jpg'
    },
    relatedCourses: ['gestor-cobranza', 'cajero-bancario']
  },

  'cajero-bancario': {
    id: 'cajero-bancario',
    title: 'CAJERO BANCARIO',
    category: 'Finanzas',
    image: '/assets/ImagCourses/CajeroBancario.jpg',
    certificate: 'Cajero Bancario',
    precio: 200, // 👈 AGREGADO
    description: [
      'Este curso esta diseñado profesionales y estudiantes interesados en desempeñarse como cajeros bancarios en entidades financieras de Bolivia. Está dirigido a contadores, administradores, estudiantes de áreas financieras y a cualquier persona que busque adquirir habilidades específicas en el ámbito bancario.',
      'Capacitar a los participantes en las competencias esenciales requeridas para ejercer con eficacia, eficiencia y profesionalismo el rol de cajero bancario, cumpliendo con las regulaciones y estándares establecidos por la Ley de Servicios Financieros 393 y la Normativa de la Autoridad de Supervisión del Sistema Financiero (ASFI) en Bolivia.'
    ],
    objectives: [
      'Tema 1: Caracteristicas del rol de Cajero Bancario',
      'Tema 2: Funcionamiento del área de Caja',
      'Tema 3: Comercializacion de Productos desde Caja',
      'Tema 4: Tecnicas de Conteo de Billetes',
      'Tema 5: Deteccion de billetes falsos',
      'Tema 6: Atencion al cliente financiero',
      'Tema 8: Ley de Servicios Financieros 393 y Normativa ASFI'
    ],
    duration: 'Duracion total',
    hoursPerWeek: '8 horas academicas',
    relatedCourses: ['asesor-creditos', 'atencion-plataforma']
  },

  'atencion-plataforma': {
    id: 'atencion-plataforma',
    title: 'ATENCION Y PLATAFORMA',
    category: 'Finanzas',
    image: '/assets/ImagCourses/AtencionPlataforma.png',
    certificate: 'Atención y plataforma',
    precio: 200, // 👈 AGREGADO
    description: [
      'Este curso está dirigido a profesionales en áreas financieras, contadores, administradores, ingenieros comerciales, personal de atención al cliente y a aquellos interesados en adquirir conocimientos específicos para desempeñarse como ejecutivos de plataforma en entidades de intermediación financiera de Bolivia.',
      'Los objetivos de este curso es Capacitar a los participantes en las habilidades y conocimientos necesarios para brindar atención al cliente de manera eficiente y cumpliendo con la normativa establecida por la Autoridad de Supervisión del Sistema Financiero (ASFI), así como para gestionar efectivamente puntos de reclamo en entidades bancarias.'
    ],
    objectives: [
      'Tema 1: Ejecutivo d eplataforma',
      'Tema 2: Productos Financieros',
      'Tema 3: Sistemas Operativos Bancarios',
      'Tema 4: Atencion al Cliente Bancarios',
      'Tema 5: Llenado de Formulario UIF',
      'Tema 6: Puntos de reclamos bancarios'
    ],
    duration: 'Duracion',
    hoursPerWeek: '8 horas academicas',
    
    relatedCourses: ['cajero-bancario', 'asesor-creditos']
  }
};
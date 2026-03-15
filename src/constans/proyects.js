import { TAGS } from "./tags";
import finzenImg from "../assets/Finzen.png";
import portafolioImg from "../assets/PortafolioImg.png";

export const PROYECTS = [
{
title: "FinZen",
description: "FinZen es una plataforma web diseñada para facilitar la gestión de finanzas personales. Permite a los usuarios llevar un control detallado de sus ingresos y gastos, categorizarlos y generar reportes visuales que facilitan la toma de decisiones financieras inteligentes.",
image: finzenImg,
link: "https://fin-zeenn.vercel.app/",
github: "https://github.com/sarchiandres/finzenBackend",
tags: [TAGS.REACT, TAGS.SPRING, TAGS.MYSQL, TAGS.TYPESCRIPT, TAGS.TAILWIND],
},
{
title: "Portafolio",
description: "Portafolio personal desarrollado con Astro y Tailwind CSS. El sitio web está diseñado para mostrar mis proyectos, experiencia y habilidades como desarrollador Fullstack. Cuenta con un diseño moderno y responsive, optimizado para ofrecer una experiencia de usuario fluida y eficiente.",
image: portafolioImg,
link: "https://andres-sarchi-portafolio-jrj7.vercel.app/",
github: "https://github.com/sarchiandres/Andres-Sarchi-Portafolio",
tags: [TAGS.ASTRO, TAGS.TAILWIND],
}
];
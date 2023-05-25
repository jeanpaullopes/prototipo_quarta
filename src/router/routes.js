const routes = [
  {
    path: "/",
    component: () => import("layouts/NovoLayout.vue"),
    children: [{ path: "", component: () => import("pages/IndexPage.vue") }],
  },
  {
    path: "/pagina2",
    component: () => import("layouts/NovoLayout.vue"),
    children: [
      { path: "", component: () => import("pages/SegundaPagina.vue") },
    ],
  },
  {
    path: "/pagina3",
    component: () => import("layouts/NovoLayout.vue"),
    children: [
      { path: "", component: () => import("pages/TerceiraPagina.vue") },
    ],
  },
  {
    path: "/pagina4",
    component: () => import("layouts/NovoLayout.vue"),
    children: [{ path: "", component: () => import("pages/QuartaPagina.vue") }],
  },
  {
    path: "/selecao",
    component: () => import("layouts/NovoLayout.vue"),
    children: [
      { path: "", component: () => import("pages/SelecaoPagina.vue") },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;

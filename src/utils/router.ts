export type Route = 'home' | 'projects' | 'cv' | 'scribbles' | 'contact';

export const navigate = (route: Route) => {
  window.location.hash = route === 'home' ? '' : route;
};

export const getCurrentRoute = (): Route => {
  const hash = window.location.hash.slice(1) as Route;
  return hash || 'home';
};

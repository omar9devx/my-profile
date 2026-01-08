import { useState, useEffect } from 'react';

export type Route = 'home' | 'projects' | 'cv' | 'scribbles' | 'contact' | 'logs' | 'stack';

export const getCurrentRoute = (): Route => {
  const hash = window.location.hash.replace('#', '');
  return (hash as Route) || 'home';
};

export const navigate = (route: Route) => {
  window.location.hash = route;
};
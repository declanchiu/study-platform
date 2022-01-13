import { useRoutes } from 'react-router-dom';

import { routeList } from './routes';

export const RenderRouter = () => {
  const element = useRoutes(routeList);
  return element;
};

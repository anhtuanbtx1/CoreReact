import { lazy } from 'react';
import { FuseRouteItemType } from '@fuse/utils/FuseUtils';

const User = lazy(() => import('./User'));

/**
 * The Example page route.
 */
const ExampleRoute: FuseRouteItemType = {
	path: 'user',
	element: <User />
};

export default ExampleRoute;

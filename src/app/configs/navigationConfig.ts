import i18next from 'i18next';
import { FuseNavItemType } from '@fuse/core/FuseNavigation/types/FuseNavItemType';
import ar from './navigation-i18n/ar';
import en from './navigation-i18n/en';
import tr from './navigation-i18n/tr';

i18next.addResourceBundle('en', 'navigation', en);
i18next.addResourceBundle('tr', 'navigation', tr);
i18next.addResourceBundle('ar', 'navigation', ar);

/**
 * The navigationConfig object is an array of navigation items for the Fuse application.
 */
const navigationConfig: FuseNavItemType[] = [
	{
		id: 'example-component',
		title: 'Example',
		translate: 'EXAMPLE',
		type: 'item',
		icon: 'heroicons-outline:star',
		url: 'example'
	},
	{
		id: 'apps.ecommerce',
		title: 'User',
		type: 'collapse',
		icon: 'heroicons-outline:shopping-cart',
		translate: 'User',
		children: [
			{
				id: 'e-commerce-products',
				title: 'Products',
				type: 'item',
				url: '/apps/e-commerce/products',
				end: true
			},
			{
				id: 'e-commerce-product-detail',
				title: 'Product Detail',
				type: 'item',
				url: '/apps/e-commerce/products/1/a-walk-amongst-friends-canvas-print'
			},
			{
				id: 'e-commerce-new-product',
				title: 'New Product',
				type: 'item',
				url: '/apps/e-commerce/products/new'
			},
			{
				id: 'e-commerce-orders',
				title: 'Orders',
				type: 'item',
				url: '/apps/e-commerce/orders',
				end: true
			}
			
		]
	}
];

export default navigationConfig;

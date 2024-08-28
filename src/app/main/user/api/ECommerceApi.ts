import { apiService as api } from 'app/store/apiService';
import { PartialDeep } from 'type-fest';

export const addTagTypes = ['eCommerce_products', 'eCommerce_product', 'eCommerce_orders', 'eCommerce_order'] as const;

const ECommerceApi = api
	.enhanceEndpoints({
		addTagTypes
	})
	.injectEndpoints({
		endpoints: (build) => ({
			getECommerceOrders: build.query<GetECommerceOrdersApiResponse, GetECommerceOrdersApiArg>({
				query: () => ({ url: `/mock-api/ecommerce/orders` }),
				providesTags: ['eCommerce_orders']
			}),
			getECommerceOrder: build.query<GetECommerceOrderApiResponse, GetECommerceOrderApiArg>({
				query: (orderId) => ({ url: `/mock-api/ecommerce/orders/${orderId}` }),
				providesTags: ['eCommerce_order']
			}),
			updateECommerceOrder: build.mutation<UpdateECommerceOrderApiResponse, UpdateECommerceOrderApiArg>({
				query: (order) => ({
					url: `/mock-api/ecommerce/orders/${order.id}`,
					method: 'PUT',
					data: order
				}),
				invalidatesTags: ['eCommerce_order', 'eCommerce_orders']
			}),
			deleteECommerceOrder: build.mutation<DeleteECommerceOrderApiResponse, DeleteECommerceOrderApiArg>({
				query: (orderId) => ({
					url: `/mock-api/ecommerce/orders/${orderId}`,
					method: 'DELETE'
				}),
				invalidatesTags: ['eCommerce_order', 'eCommerce_orders']
			}),
			deleteECommerceOrders: build.mutation<DeleteECommerceOrdersApiResponse, DeleteECommerceOrdersApiArg>({
				query: (ordersId) => ({
					url: `/mock-api/ecommerce/orders`,
					method: 'DELETE',
					data: ordersId
				}),
				invalidatesTags: ['eCommerce_order', 'eCommerce_orders']
			})
		}),
		overrideExisting: false
	});

export default ECommerceApi;



export type GetECommerceOrdersApiResponse = EcommerceOrder[];
export type GetECommerceOrdersApiArg = void;

export type GetECommerceOrderApiResponse = EcommerceOrder;
export type GetECommerceOrderApiArg = string; 

export type UpdateECommerceOrderApiResponse = unknown;
export type UpdateECommerceOrderApiArg = EcommerceOrder; 

export type DeleteECommerceOrderApiResponse = unknown;
export type DeleteECommerceOrderApiArg = string; 

export type DeleteECommerceOrdersApiResponse = unknown;
export type DeleteECommerceOrdersApiArg = string[]; 


export type EcommerceOrder = {
	id: string;
	reference: string;
	subtotal: string;
	tax: string;
	discount: string;
	total: string;
	date: string;
	customer: {
		id: string;
		firstName: string;
		lastName: string;
		avatar: string;
		company: string;
		jobTitle: string;
		email: string;
		phone: string;
		invoiceAddress: {
			address: string;
			lat: number;
			lng: number;
		};
		shippingAddress: {
			address: string;
			lat: number;
			lng: number;
		};
	};

	status: {
		id: string;
		name: string;
		color: string;
		date?: string;
	}[];
	payment: {
		transactionId: string;
		amount: string;
		method: string;
		date: string;
	};
	shippingDetails: {
		tracking: string;
		carrier: string;
		weight: string;
		fee: string;
		date: string;
	}[];
};

export const {
	useGetECommerceOrdersQuery,
	useGetECommerceOrderQuery,
	useUpdateECommerceOrderMutation,
	useDeleteECommerceOrderMutation,
	useDeleteECommerceOrdersMutation,
} = ECommerceApi;

export type ECommerceApiType = {
	[ECommerceApi.reducerPath]: ReturnType<typeof ECommerceApi.reducer>;
};

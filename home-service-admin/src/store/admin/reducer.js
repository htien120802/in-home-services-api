import {
  GET_ALL_SERVICES,
  GET_ALL_SERVICES_SUCCESS,
  GET_ALL_SERVICES_FAILED,
  UPDATE_SERVICE,
  UPDATE_SERVICE_SUCCESS,
  UPDATE_SERVICE_FAILED,
  CREATE_SERVICE,
  CREATE_SERVICE_SUCCESS,
  CREATE_SERVICE_FAILED,
  UPDATE_PROVIDER_PROFILE,
  UPDATE_PROVIDER_PROFILE_SUCCESS,
  UPDATE_PROVIDER_PROFILE_FAILED,
  DELETE_PROVIDER,
  DELETE_PROVIDER_SUCCESS,
  DELETE_PROVIDER_FAILED,
  UPDATE_CUSTOMER_PROFILE,
  UPDATE_CUSTOMER_PROFILE_SUCCESS,
  UPDATE_CUSTOMER_PROFILE_FAILED,
  DELETE_CUSTOMER,
  DELETE_CUSTOMER_SUCCESS,
  DELETE_CUSTOMER_FAILED,
  GET_ALL_PROVIDERS,
  GET_ALL_PROVIDERS_SUCCESS,
  GET_ALL_PROVIDERS_FAILED,
  CREATE_PROVIDER,
  CREATE_PROVIDER_SUCCESS,
  CREATE_PROVIDER_FAILED,
  GET_ALL_CUSTOMERS,
  GET_ALL_CUSTOMERS_SUCCESS,
  GET_ALL_CUSTOMERS_FAILED,
  CREATE_CUSTOMER,
  CREATE_CUSTOMER_SUCCESS,
  CREATE_CUSTOMER_FAILED,
  CREATE_CATEGORY,
  CREATE_CATEGORY_SUCCESS,
  CREATE_CATEGORY_FAILED,
  UPDATE_CATEGORY,
  UPDATE_CATEGORY_SUCCESS,
  UPDATE_CATEGORY_FAILED,
  GET_SALES_STATISTICS,
  GET_SALES_STATISTICS_SUCCESS,
  GET_SALES_STATISTICS_FAILED,
  GET_QUANTITY_STATISTICS,
  GET_QUANTITY_STATISTICS_SUCCESS,
  GET_QUANTITY_STATISTICS_FAILED,
  GET_ALL_REVIEWS,
  GET_ALL_REVIEWS_SUCCESS,
  GET_ALL_REVIEWS_FAILED,
  GET_REVIEW,
  GET_REVIEW_SUCCESS,
  GET_REVIEW_FAILED,
  DELETE_REVIEW,
  DELETE_REVIEW_SUCCESS,
  DELETE_REVIEW_FAILED,
  GET_ENTITY_COUNT,
  GET_ENTITY_COUNT_SUCCESS,
  GET_ENTITY_COUNT_FAILED,
  GET_ALL_BOOKINGS,
  GET_ALL_BOOKINGS_SUCCESS,
  GET_ALL_BOOKINGS_FAILED,
  GET_BOOKING,
  GET_BOOKING_SUCCESS,
  GET_BOOKING_FAILED,
  DELETE_BOOKING,
  DELETE_BOOKING_SUCCESS,
  DELETE_BOOKING_FAILED,
  DELETE_SERVICE,
  DELETE_SERVICE_SUCCESS,
  DELETE_SERVICE_FAILED,
  DELETE_ADDRESS,
  DELETE_ADDRESS_SUCCESS,
  DELETE_ADDRESS_FAILED,
} from './actionTypes';

const initialState = {
  loading: false,
  services: [],
  providerProfile: null,
  customerProfile: null,
  providers: [],
  customers: [],
  categories: [],
  salesStatistics: [],
  reviews: [],
  quantityStatistics: [],
  entityCounts: [],
  booking: null,
  bookings: [],
  addresses: [],
};

const admin = (state = initialState, action) => {
  switch (action.type) {
    // Get all services
    case GET_ALL_SERVICES:
      return {
        ...state,
        loading: true,
      };

    case GET_ALL_SERVICES_SUCCESS:
      return {
        ...state,
        loading: false,
        services: action.payload,
      };

    case GET_ALL_SERVICES_FAILED:
      return {
        ...state,
        loading: false,
      };

    // Update a service
    case UPDATE_SERVICE:
      return {
        ...state,
        loading: true,
      };

    case UPDATE_SERVICE_SUCCESS:
      return {
        ...state,
        loading: false,
        services: action.payload,
      };

    case UPDATE_SERVICE_FAILED:
      return {
        ...state,
        loading: false,
      };

    // Create a service
    case CREATE_SERVICE:
      return {
        ...state,
        loading: true,
      };

    case CREATE_SERVICE_SUCCESS:
      return {
        ...state,
        loading: false,
        services: [...state.services, action.payload],
      };

    case CREATE_SERVICE_FAILED:
      return {
        ...state,
        loading: false,
      };

    // Update profile of a provider
    case UPDATE_PROVIDER_PROFILE:
      return {
        ...state,
        loading: true,
      };

    case UPDATE_PROVIDER_PROFILE_SUCCESS:
      return {
        ...state,
        loading: false,
        providerProfile: action.payload,
      };

    case UPDATE_PROVIDER_PROFILE_FAILED:
      return {
        ...state,
        loading: false,
      };

    // Delete a provider
    case DELETE_PROVIDER:
      return {
        ...state,
        loading: true,
      };

    case DELETE_PROVIDER_SUCCESS:
      return {
        ...state,
        loading: false,
        providers: state.providers.filter(provider => provider.id !== action.payload),
      };

    case DELETE_PROVIDER_FAILED:
      return {
        ...state,
        loading: false,
      };

    // Update profile of a customer
    case UPDATE_CUSTOMER_PROFILE:
      return {
        ...state,
        loading: true,
      };

    case UPDATE_CUSTOMER_PROFILE_SUCCESS:
      return {
        ...state,
        loading: false,
        customerProfile: action.payload,
      };

    case UPDATE_CUSTOMER_PROFILE_FAILED:
      return {
        ...state,
        loading: false,
      };

    // Delete a customer
    case DELETE_CUSTOMER:
      return {
        ...state,
        loading: true,
      };

    case DELETE_CUSTOMER_SUCCESS:
      return {
        ...state,
        loading: false,
        customers: state.customers.filter(customer => customer.id !== action.payload),
      };

    case DELETE_CUSTOMER_FAILED:
      return {
        ...state,
        loading: false,
      };

      // Get all providers
    case GET_ALL_PROVIDERS:
      return {
        ...state,
        loading: true,
      };

    case GET_ALL_PROVIDERS_SUCCESS:
      return {
        ...state,
        loading: false,
        providers: action.payload,
      };

    case GET_ALL_PROVIDERS_FAILED:
      return {
        ...state,
        loading: false,
      };

    // Create a provider
    case CREATE_PROVIDER:
      return {
        ...state,
        loading: true,
      };

    case CREATE_PROVIDER_SUCCESS:
      return {
        ...state,
        loading: false,
        providers: [...state.providers, action.payload],
      };

    case CREATE_PROVIDER_FAILED:
      return {
        ...state,
        loading: false,
        // Handle failure, if needed
      };

    // Get all customers
    case GET_ALL_CUSTOMERS:
      return {
        ...state,
        loading: true,
      };

    case GET_ALL_CUSTOMERS_SUCCESS:
      return {
        ...state,
        loading: false,
        customers: action.payload,
      };

    case GET_ALL_CUSTOMERS_FAILED:
      return {
        ...state,
        loading: false,
      };

    // Create a customer
    case CREATE_CUSTOMER:
      return {
        ...state,
        loading: true,
      };

    case CREATE_CUSTOMER_SUCCESS:
      return {
        ...state,
        loading: false,
        customers: [...state.customers, action.payload],
      };

    case CREATE_CUSTOMER_FAILED:
      return {
        ...state,
        loading: false,
        // Handle failure, if needed
      };

    // Create a category
    case CREATE_CATEGORY:
      return {
        ...state,
        loading: true,
      };

    case CREATE_CATEGORY_SUCCESS:
      return {
        ...state,
        loading: false,
        categories: [...state.categories, action.payload],
      };

    case CREATE_CATEGORY_FAILED:
      return {
        ...state,
        loading: false,
        // Handle failure, if needed
      };

    // Update a category
    case UPDATE_CATEGORY:
      return {
        ...state,
        loading: true,
      };

    case UPDATE_CATEGORY_SUCCESS:
      return {
        ...state,
        loading: false,
        categories: action.payload,
      };

    case UPDATE_CATEGORY_FAILED:
      return {
        ...state,
        loading: false,
        // Handle failure, if needed
      };

    // Get sales statistics
    case GET_SALES_STATISTICS:
      return {
        ...state,
        loading: true,
      };

    case GET_SALES_STATISTICS_SUCCESS:
      return {
        ...state,
        loading: false,
        salesStatistics: action.payload,
      };

    case GET_SALES_STATISTICS_FAILED:
      return {
        ...state,
        loading: false,
        // Handle failure, if needed
      };

    // Get quantity statistics
    case GET_QUANTITY_STATISTICS:
      return {
        ...state,
        loading: true,
      };

    case GET_QUANTITY_STATISTICS_SUCCESS:
      return {
        ...state,
        loading: false,
        quantityStatistics: action.payload,
      };

    case GET_QUANTITY_STATISTICS_FAILED:
      return {
        ...state,
        loading: false,
        // Handle failure, if needed
      };

    // Get all reviews
    case GET_ALL_REVIEWS:
      return {
        ...state,
        loading: true,
      };

    case GET_ALL_REVIEWS_SUCCESS:
      return {
        ...state,
        loading: false,
        reviews: action.payload,
      };

    case GET_ALL_REVIEWS_FAILED:
      return {
        ...state,
        loading: false,
        // Handle failure, if needed
      };

    // Get a review
    case GET_REVIEW:
      return {
        ...state,
        loading: true,
      };

    case GET_REVIEW_SUCCESS:
      return {
        ...state,
        loading: false,
        review: action.payload,
      };

    case GET_REVIEW_FAILED:
      return {
        ...state,
        loading: false,
        // Handle failure, if needed
      };

    // Delete a review
    case DELETE_REVIEW:
      return {
        ...state,
        loading: true,
      };

    case DELETE_REVIEW_SUCCESS:
      return {
        ...state,
        loading: false,
        // Filter out the deleted review from the list
        reviews: state.reviews.filter(review => review.id !== action.payload),
      };

    case DELETE_REVIEW_FAILED:
      return {
        ...state,
        loading: false,
        // Handle failure, if needed
      };

    // Count entity
    case GET_ENTITY_COUNT:
      return {
        ...state,
        loading: true,
      };

    case GET_ENTITY_COUNT_SUCCESS:
      return {
        ...state,
        loading: false,
        entityCount: action.payload,
      };

    case GET_ENTITY_COUNT_FAILED:
      return {
        ...state,
        loading: false,
        // Handle failure, if needed
      };

    // Get all bookings
    case GET_ALL_BOOKINGS:
      return {
        ...state,
        loading: true,
      };

    case GET_ALL_BOOKINGS_SUCCESS:
      return {
        ...state,
        loading: false,
        bookings: action.payload,
      };

    case GET_ALL_BOOKINGS_FAILED:
      return {
        ...state,
        loading: false,
        // Handle failure, if needed
      };

    // Get a booking
    case GET_BOOKING:
      return {
        ...state,
        loading: true,
      };

    case GET_BOOKING_SUCCESS:
      return {
        ...state,
        loading: false,
        booking: action.payload,
      };

    case GET_BOOKING_FAILED:
      return {
        ...state,
        loading: false,
        // Handle failure, if needed
      };

    // Delete a booking
    case DELETE_BOOKING:
      return {
        ...state,
        loading: true,
      };

    case DELETE_BOOKING_SUCCESS:
      return {
        ...state,
        loading: false,
        // Filter out the deleted booking from the list
        bookings: state.bookings.filter(booking => booking.id !== action.payload),
      };

    case DELETE_BOOKING_FAILED:
      return {
        ...state,
        loading: false,
        // Handle failure, if needed
      };

    // Delete a service
    case DELETE_SERVICE:
      return {
        ...state,
        loading: true,
      };

    case DELETE_SERVICE_SUCCESS:
      return {
        ...state,
        loading: false,
        // Filter out the deleted service from the list
        services: state.services.filter(service => service.id !== action.payload),
      };

    case DELETE_SERVICE_FAILED:
      return {
        ...state,
        loading: false,
        // Handle failure, if needed
      };

    // Delete an address
    case DELETE_ADDRESS:
      return {
        ...state,
        loading: true,
      };

    case DELETE_ADDRESS_SUCCESS:
      return {
        ...state,
        loading: false,
        // Filter out the deleted address from the list
        addresses: state.addresses.filter(address => address.id !== action.payload),
      };

    case DELETE_ADDRESS_FAILED:
      return {
        ...state,
        loading: false,
        // Handle failure, if needed
      };

    default:
      return state;
  }
};

export default admin;

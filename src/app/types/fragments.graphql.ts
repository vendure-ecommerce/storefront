import gql from 'graphql-tag';

export const CART_FRAGMENT = gql`
    fragment Cart on Order {
        id
        state
        lines {
            id
            featuredAsset {
                id
                preview
                name
            }
            unitPrice
            unitPriceWithTax
            quantity
            totalPrice
            productVariant {
                id
                name
            }
            adjustments {
                amount
                description
                adjustmentSource
                type
            }
        }
        subTotal
        subTotalBeforeTax
        totalBeforeTax
        shipping
        shippingMethod
        total
        adjustments {
            amount
            description
            adjustmentSource
            type
        }
    }
`;

export const COUNTRY_FRAGMENT = gql`
    fragment Country on Country {
        id
        code
        name
        enabled
    }
`;

export const SHIPPING_ADDRESS_FRAGMENT = gql`
    fragment ShippingAddress on ShippingAddress {
        fullName
        company
        streetLine1
        streetLine2
        city
        province
        postalCode
        country
        phoneNumber
    }
`;

export const PRODUCT_QUERY = `
query {
    products {
      data {
        attributes {
          title,
          price,
          slug,
          image {
            data {
              attributes {
                formats
              }
            }
          }
        }
      }
    }
  }
`;

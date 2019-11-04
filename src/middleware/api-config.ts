export default {
    create: {
      id: {
        custom: {
          options: (value: object) => {
            console.log('Value', value);
            return true;
          },
        },
        in: ['body'],
        isAlphanumeric: true,
        isEmpty: {
          errorMessage: 'Id is Required',
          negated: true,
        },
      },
      name: {
        in: ['body'],
        isEmpty: {
          errorMessage: 'Name is Required',
          negated: true,
        },
        isLength: {
          errorMessage: 'Name should be 4 character long',
          options: { min: 4 },
        },
        matches: {
          errorMessage: 'Name should be in format',
          options: [/(\w+)$/],
        },
      },
    },
    delete: {
      id: {
        errorMessage: 'ID must be Int',
        in: ['params', 'query'],
        isInt: true,
        toInt: true,
      },
    },
    get: {
      limit: {
        errorMessage: 'Limit is invalid',
        in: ['query'],
        isInt: true,
      },
      skip: {
        in: ['query'],
        isInt: true,
      },
    },
    update: {
      dataToUpdate: {
        custom: {
          options: (dataToUpdate: object) => {
            console.log(dataToUpdate);
            return true;
          },
        },
        in: ['body'],
      },
      id: {
        errorMessage: 'ID must be Int',
        in: ['params', 'query'],
        isInt: true,
        toInt: true,
      },
    },
  };
import "@testing-library/jest-dom"


// let mockActualReact;

// jest.doMock('react', () => {
//   if (!mockActualReact) {
//     mockActualReact = jest.requireActual('react');
//   }
//   return mockActualReact;
// });


// const RESET_MODULE_EXCEPTIONS = [
//   'react',
//   'react-redux',
// ];

// let mockActualRegistry = {};

// RESET_MODULE_EXCEPTIONS.forEach(moduleName => {
//   jest.doMock(moduleName, () => {
//     if (!mockActualRegistry[moduleName]) {
//       mockActualRegistry[moduleName] = jest.requireActual(moduleName);
//     }
//     return mockActualRegistry[moduleName];
//   });
// });
// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

const { TextDecoder, TextEncoder } = require("util");

global.TextDecoder = TextDecoder;
global.TextEncoder = TextEncoder;

window.scrollTo = jest.fn();

// jsdom does not implement IntersectionObserver (used by the scroll-reveal hook).
class IntersectionObserverStub {
  observe() {}
  unobserve() {}
  disconnect() {}
}
window.IntersectionObserver = IntersectionObserverStub;

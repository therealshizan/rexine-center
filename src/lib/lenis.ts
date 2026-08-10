import Lenis from "lenis";

let lenisInstance: Lenis | null = null;

export const setLenis = (lenis: Lenis) => {
  lenisInstance = lenis;
};

export const stopLenis = () => {
  lenisInstance?.stop();
};

export const startLenis = () => {
  lenisInstance?.start();
};
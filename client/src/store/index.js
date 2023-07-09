import { proxy } from "valtio";

const state = proxy({
  intro: true,
  color: '#EFDB48',
  isLogoTexture: true,
  isFullTexture: false,
  logoDecal: "./threejs.png",
  fullDecal: "./full-shirt.jpg"
});

export default state;

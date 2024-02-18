export const createAnimate = (controls, scene, camera, renderer) => {
  const animate = () => {
    requestAnimationFrame(animate);

    controls.update();
    renderer.render(scene, camera);
  }

  return animate;
}
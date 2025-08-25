const Lights = () => {
  return (
    <>
      <ambientLight intensity={1} />
      <directionalLight position={[10, 10, 10]} />
    </>
  );
};

export default Lights;
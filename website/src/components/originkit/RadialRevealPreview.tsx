import RadialRevealButton from "./ui/radial-reveal-button";

export default function RadialRevealPreview() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "grid",
        placeItems: "center",
        background: "#0f1412",
        margin: 0,
      }}
    >
      <RadialRevealButton />
    </main>
  );
}

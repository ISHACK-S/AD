import Link from "next/link";

export default function Home() {
  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "100vh" }}>
      <Link href="https://od-rose.vercel.app">
        <button style={{
          padding: "12px 24px",
          fontSize: "16px",
          fontWeight: "bold",
          backgroundColor: "#007bff",
          color: "white",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer"
        }}>
          Organizer Dashboard
        </button>
      </Link>
    </div>
  );
}

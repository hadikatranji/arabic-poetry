export default function Disclaimer() {
  return (
    <div
      dir="rtl"
      style={{
        marginTop: "2rem",
        padding: "0.75rem 1rem",
        borderTop: "1px solid var(--border)",
        fontSize: "0.75rem",
        color: "var(--muted)",
        textAlign: "center",
        lineHeight: "1.6",
      }}
    >
      <p>
        الأشعار والمحتوى المعروض هو إرث أدبي وثقافي للأغراض التعليمية فقط، ولا يعبّر عن آراء دينية أو سياسية.
      </p>
      <p style={{ marginTop: "0.25rem", fontSize: "0.7rem" }}>
        Poetry and content displayed is literary and cultural heritage for educational purposes only and does not represent religious or political views.
      </p>
    </div>
  );
}

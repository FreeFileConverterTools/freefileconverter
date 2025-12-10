export default function Home() {
  const tools = [
    { name: "PNG to JPG", link: "/png-to-jpg" }
  ];

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">
        Free Multi File Converter Tools
      </h1>

      <div className="grid grid-cols-1 gap-4">
        {tools.map((t) => (
          <a
            key={t.link}
            href={t.link}
            className="p-4 bg-white shadow rounded text-lg font-semibold"
          >
            {t.name}
          </a>
        ))}
      </div>
    </div>
  );
    }

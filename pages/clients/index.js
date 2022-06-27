import Link from "next/link";

const ClientsPage = () => {
  const clients = [
    { id: "russ", name: "Russell" },
    { id: "jake", name: "Jacob" },
    { id: "tyler", name: "Tylarious" },
    { id: "josh", name: "Joshua" },
  ];
  return (
    <div>
      <h1>The Clients Page</h1>
      <ul>
        {clients.map((client) => (
          <li key={client.id}>
            <Link
              href={{
                pathname: "/clients/[id]",
                query: {
                  id: client.id,
                },
              }}
            >
              {client.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ClientsPage;

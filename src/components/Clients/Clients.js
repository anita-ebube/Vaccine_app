const ClientsIcons = [
  {
    id: 1,
    src: "/images/clients/Moderna.png",
  },
  {
    id: 2,
    src: "/images/clients/Pfizer.png",
  },
  {
    id: 3,
    src: "/images/clients/astra.png",
  },
  {
    id: 4,
    src: "/images/clients/sinovac.png",
  },
];

const Clients = () => {
  return (
    <>
      <section className="bg-[#ffffffda] flex items-center justify-center p-5 my-[-17%] lg:m-0">
        {ClientsIcons.map(({ src, id }) => (
          <div>
            <img src={src} alt="" className="px-2 lg:px-10"/>
          </div>
        ))}
      </section>
    </>
  );
};
export default Clients;

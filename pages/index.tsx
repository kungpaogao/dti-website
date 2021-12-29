const projects = [
  { id: "AI", name: "AI Learners" },
  { id: "CV", name: "ClubView" },
  { id: "CG", name: "CornellGo" },
  { id: "ID", name: "IDOL" },
  { id: "Ca", name: "Carriage" },
  { id: "CA", name: "CU Apts" },
  { id: "CR", name: "CU Reviews" },
  { id: "CP", name: "CoursePlan" },
  { id: "QM", name: "QMI" },
  { id: "Zi", name: "Zing" },
  { id: "DC", name: "D@C" },
];

export default function Home() {
  return (
    <div className="p-6">
      <div className="text-5xl font-bold">
        <h1>Cornell Design & Tech Initiative</h1>
      </div>
      <div className="mx-auto mt-5">
        <h2 className="text-2xl font-bold">Projects</h2>
        {/* <div className="grid grid-cols-3 grid-flow-row">{}</div> */}
        <div>
          {projects.map(({ id, name }) => (
            <div key={id} className="underline">
              {name}
            </div>
          ))}
        </div>

        <button className="mt-5 p-5 w-full text-2xl border-2 border-white rounded-lg text-left">
          Team <span className="float-right">&gt;</span>
        </button>

        <button className="mt-5 p-5 w-full text-2xl border-2 border-white rounded-lg text-left">
          Courses <span className="float-right">&gt;</span>
        </button>
      </div>
    </div>
  );
}

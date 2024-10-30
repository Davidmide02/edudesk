import caleb from "../assets/caleb.svg";
import crown from "../assets/crown.svg";
import legacy from "../assets/legacy.svg";
import anita from "../assets/anita.svg";
const trustSchool = [
  {
    img: caleb,
    school: "Caleb Internatinal School",
  },
  {
    img: crown,
    school: "Crowns Gate School",
  },
  {
    img: legacy,
    school: "Legacy Schools",
  },
  {
    img: anita,
    school: "Anita College",
  },
];

const TrustSection = () => {
  return (
    <>
      <div className="head p-4 font-bold text-center">
        Trusted by over 20 Schools
      </div>
      <div className="schools flex justify-between flex-wrap ">
        {trustSchool.map((sch) => (
          <div className="sch flex items-center justify-around mt-2 md:mt-0">
            <img src={sch.img} alt="img" />
            <p className="ml-2">{sch.school}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default TrustSection;

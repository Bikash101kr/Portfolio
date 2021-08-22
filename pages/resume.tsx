import Bar from "../components/Bar";
import { languages, tools } from "../data";

const Resume = () => {
  return (
    <div >
      {/* //! Education & Experience */}
      <div className="grid gap-6 my-3 md:grid-cols-2">
        <div className="">
          <h5 className="py-1 pl-3 text-2xl font-bold bg-gray-200 dark:bg-dark-200 dark:bg-black-500">Education:</h5>
          <div className="bg-green-200 dark:bg-dark-200 dark:bg-black-500">
            <h5 className="px-3 pt-2 pl-3 text-xl font-bold">
              Bachelor of Science
            </h5>
            <p className="pl-3 pr-3 font-semibold">Coventry University, UK (July 2021)</p>
            <p className="pb-3 pl-6 pr-3 my-3">
              I have been awared the degree of Bachelore of Science with <b>Honours First Class</b> in <b>Computing</b>.
            </p>
          </div>
        </div>
        <div>
          <h5 className="py-1 pl-3 text-2xl font-bold bg-gray-200 dark:bg-dark-200 dark:bg-black-500">Experience</h5>
          <div className="bg-yellow-200 dark:bg-dark-200 dark:bg-black-500">
            <h5 className="px-3 pt-2 pl-3 text-xl font-bold ">IT Support Specialist</h5>
            <p className="pl-3 pr-3 font-semibold">Chitwan Network Pvt. Ltd. (Dec 2018 - Nov 2019)</p>
            <h5 className="px-3 pt-2 pl-3 text-xl font-bold ">Web Developer Intern.</h5>
            <a href="https://webandapp.com.np/" >
            <p className="pl-3 pr-3 font-semibold hover:border-blue-800 hover:text-blue-800 hover:underline"> Web and App Pvt. Ltd. (Current)</p>
            {/* <p className="pb-3 pl-6 pr-3 my-3">Currently working as a web developer intern </p> */}
            </a>
          </div>
          
        </div>
      </div>

      {/*Languages & Tools */}
      <div className="grid gap-9 md:grid-cols-2">
        <div>
          <h5 className="py-1 pl-3 text-2xl font-bold bg-gray-200 dark:bg-dark-200 dark:bg-black-500">Language & Framework</h5>
          <div className="mx-3 my-4">
            {languages.map((language, i) => (
              <Bar value={language} key={i} />
            ))}
          </div>
        </div>

        <div>
          <h5 className="py-1 pl-3 text-2xl font-bold bg-gray-200 dark:bg-dark-200 dark:bg-black-500">Tools & Softwares</h5>
          <div className="mx-3 my-4">
            {tools.map((tool, i) => (
              <Bar value={tool} key={i} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;

import EducationDiv from "./components/EducationDiv";

export default function Education() {
  return (
    <div className="bg-gray-50 h-screen">
      <div className="flex flex-col items-center justify-center h-30 font-bold text-gray-700 text-2xl mt-30">
        <h1>EDUCATION</h1>
      </div>
      <div className="border-t text-gray-200"></div>
      <div className="flex justify-center mt-20 gap-20">
        <EducationDiv/>
        <EducationDiv date="2023-2024" title="Diploma in Python (Flask)" location="Surulere, Lagos." schoolName="National Institute of Information and Technology (NIIT)"/>
        
      </div>
    </div>
  );
}

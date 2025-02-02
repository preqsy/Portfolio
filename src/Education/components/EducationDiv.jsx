// import Education from "../Education";

export default function EducationDiv({date = "2023-2024", title="Diploma in Backend Development", schoolName= "ALTSCHOOL AFRICA", location="Remote", description="description"}) {
    return (
        <div>
          <p className="mb-3">{title}</p>
          <p className="font-light text-gray-700">{date}</p>
          <div className="relative mt-5">
            <div className="border-t-1 text-gray-300 ml-3"></div>

            <div className="w-2 h-2 rounded-full bg-pink-500 border-4 border-pink-500 absolute -top-1 left-0"></div>
          </div>
          <div>
            <h2 className="mt-3">{schoolName}</h2>
            <h3 className="font-light text-gray-700 mt-3 mb-3">{location}</h3>
            <p className="text-gray-400 w-[600px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo nihil asperiores expedita dolores vel molestias unde, ducimus officia tempora repudiandae! Facilis ratione deserunt repellat magnam, amet alias autem repellendus odit!</p>
          </div>
        </div>
    )
}
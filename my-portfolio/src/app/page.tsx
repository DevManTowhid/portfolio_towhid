import React from "react";
import Link from "next/link";
import TechnicalSkills from "./TechnicalSkills/page";
import MultiSelectDropdown from "./MultiSelectDropdown/page";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <header className="text-center">
        <h1 className="text-4xl font-bold">Md. Towhidul Alam</h1>
        <p className="text-lg">Electrical and Computer Engineering Student</p>
        <p>📍 Rajshahi, Bangladesh | 📞 +880 1709-364471</p>
        <p>📧 towhidulalam632@gmail.com</p>
        <div className="flex justify-center space-x-4 mt-2">
          <Link href="https://www.linkedin.com/in/md-towhidul-alam-59b5b8302/">
            {/* <a className="text-blue-400 hover:underline">LinkedIn</a> */}
          </Link>
          <Link href="https://github.com/DevManTowhid/">
            {/* <a className="text-blue-400 hover:underline">GitHub</a> */}
          </Link>
        </div>
      </header>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold">Professional Summary</h2>
        <p>
          BSc candidate in Electrical and Computer Engineering at Rajshahi
          University of Engineering & Technology (RUET) with hands-on experience
          in software development, machine learning, and web technologies.
        </p>
      </section>

      <section className="mt-6">
        <h2 className="text-2xl font-semibold">Education</h2>
        <p className="font-bold">BSc in Electrical and Computer Engineering</p>
        <p>Rajshahi University of Engineering & Technology (RUET)</p>
        <p>Relevant Coursework: Machine Learning, Embedded Systems, Data Structures</p>
      </section>

      <TechnicalSkills/>
      <MultiSelectDropdown/>

      <section className="mt-6">
        <h2 className="text-2xl font-semibold">Projects</h2>
        <div>
          <p className="font-bold">Doctor Appointment System</p>
          <Link href="https://github.com/DevManTowhid/doctor-appointment-project">
            {/* <a className="text-blue-400 hover:underline">GitHub Repository</a> */}
          </Link>
        </div>
        <div className="mt-4">
          <p className="font-bold">TypeMaster (In Progress)</p>
          <Link href="https://github.com/DevManTowhid/typemaster">
            {/* <a className="text-blue-400 hover:underline">GitHub Repository</a> */}
          </Link>
        </div>
      </section>
    </div>
  );
}

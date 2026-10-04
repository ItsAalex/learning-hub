import { SectionTitle } from "../components/SectionTItle";
import CoursesCatalogClient from "../components/CoursesCatalogClient";
import { getAllCourses, getCourseCategories, getCourseLevels } from "@/lib/data";

export default function Courses() {

    const courses = getAllCourses();
    const categories = getCourseCategories();
    const levels = getCourseLevels();

  return (
    <section className="pad-section">
        <div className="container">
            <div className="stack">
                <SectionTitle
                    eyebrow="Catalog"
                    title="All courses"
                    description="Browse every course in the catelog. Use the filters to narrow down by title, category or level."
                />

                <CoursesCatalogClient 
                    courses={courses}
                    categories = {categories}
                    levels = {levels}
                >

                </CoursesCatalogClient>             

            </div>
        </div>
    </section>
  );
}

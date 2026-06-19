import CoursesCatalogClient from "./courses-catalog-client";
import { getAllCourses, getCourseCategories } from "@/lib/data";

export default function Courses() {

    const courses = getAllCourses();
    const categories = getCourseCategories();

  return (
    <section className="pad-section">
        <div className="container">
            <div className="stack">
                <div className="section-head">
                    <span className="eyebrow">Catalog</span>
                    <h2 className="title-page">All Courses</h2>
                    <p className="text-muted max-prose">
                        Browse every course in the catelog. Use the filters to narrow down by title, category or level.
                    </p>
                </div>



                <CoursesCatalogClient 
                courses={courses}
                categories = {categories}
                >

                </CoursesCatalogClient>             

            </div>
        </div>
    </section>
  );
}

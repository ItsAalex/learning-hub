"use client";
import { instructors, type Course } from "@/lib/data";
import { useMemo, useState } from "react";
import { CourseCard } from "./CourseCard";


function instructorNameForCourse(course: Course): string {
    return (
        instructors.find(
            (i) => i.slug === course.instructorSlug)
                 ?.name ?? "Unknown instructor"
    )
}

export default function CoursesCatalogClient({
    courses,
    categories,
    levels
}: {
    courses: Course[];
    categories: string[];
    levels: string[];
}) {

    const [query, setQuery] = useState<string>("");
    const [category, setCategory] = useState<string>("all");
    const [level, setLevel] = useState<string>("all");

    // Saving filter options selected by user.
    const filtered = useMemo(() => {
        const q = query.trim().toLowerCase();

        // show all courses if searchbar is empty, or if user types something check if course.title contains the query.
        return courses.filter((course) => {
            const matchesQuery = q === "" || course.title.toLocaleLowerCase().includes(q);
            const matchesCategory = category === "all" || course.category === category;

            // show all courses if value is all, or if user changes level value check if course data contain selected level.
            const matchesLevel = level === "all" || course.level === level;


            // all 3 values must be true in order for `filtered` to sucessfully return data.
            return matchesQuery && matchesCategory && matchesLevel;
        })
    }, [courses, query, level]);

    const resetFilters = () => {
        setQuery("");
        setCategory("all");
        setLevel("all");
    }

    // if any of filters changed, `isFiltering` is true.
    const isFiltering = query !== "" || category !== "all" || level !== "all";


    return(
        <div className="stack-md">


            <div className="panel">
                <div className="grid-filters">
                    <div className="field">
                        <label htmlFor="course-search" className="field-label">
                            Search by title
                        </label>
                        <input
                            id="course-search" 
                            type="text" 
                            className="input" 
                            placeholder="e.g. Next.js"
                            onChange={(e) => setQuery(e.target.value)}
                            value={query}
                        />
                    </div>

                    <div className="field">
                        <label htmlFor="course-category" className="field-label">
                            Category
                        </label>
                        <select 
                            id="course-category"
                            className="input"
                            onChange={(e) => setCategory(e.target.value)}
                            value={category}    
                        >
                            <option value="all">All</option>
                            {categories.map((c) => (
                                <option key={c} value={c}>
                                    {c}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="field">
                        <label htmlFor="course-level" className="field-label">
                            Level
                        </label>
                        <select
                            id="course-level"
                            className="input"
                            onChange={(e) => setLevel(e.target.value)}
                            value={level}
                        >
                            <option value="all">All</option>
                            {levels.map((l) => (
                                <option value={l} key={l}>
                                    {l}
                                </option>
                            ))}

                        </select>
                    </div>                                 
                </div>

                <div className="filter-bar">
                    {isFiltering? (<button className="btn-link" onClick={resetFilters}>Reset filters</button>) : null}
                </div>
            </div>
            <div className="grid-cards">

                {filtered.map((course) => (
                    <CourseCard
                        key={course.id}
                        course={course} 
                        instructorName={instructorNameForCourse(course)}
                    />
                ))}
            </div>
        </div>            
    )    
}
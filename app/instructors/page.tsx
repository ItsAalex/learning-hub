import { getAllInstructors } from "@/lib/data";
import Link from "next/link"
import { SectionTitle } from "../components/SectionTItle";

function initials(name:string): string {
    return name
            .split(" ")
            .map((part) => part[0])
            .filter(Boolean)
            .slice(0, 2)
            .join("")
            .toUpperCase()
}

export default function Instructors() {
    const instructorsList = getAllInstructors();
  return (
    <section className="pad-section">
        <div className="container">
            <div className="stack">

                <SectionTitle
                    eyebrow="Team"
                    title="Meet the instructors"
                    description="Working engineers and designers who teach the courses you see on LearnHub."
                />
                
                <div className="grid-cards">
                    {instructorsList.map((instructor) => (
                        <Link
                            key={instructor.id}
                            href={`/instructors/${instructor.slug}`}
                            className="card-link"
                        >
                            <div className="instructor-row">
                                <div className="avatar">{initials(instructor.name)}</div>
                                <div>
                                    <h3 className="instructor-card-name">{instructor.name}</h3>
                                    <p className="instructor-card-role">{instructor.specialty}</p>
                                </div>
                            </div>

                            <p className="instructor-card-bio">{instructor.shortBio}</p>

                            <span className="instructor-card-cta">View Profile</span>
                        </Link>
                    ))}
                </div>

            </div>
        </div>
    </section>
  );
}

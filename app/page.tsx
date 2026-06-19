import Link from "next/link";

export default function Home() {
  return (
    <section className="hero">
      <div className="container pad-hero">
        <div className="hero-inner">
          <span className="helo-pill">Learn. Build. Ship</span>
          <h1 className="hero-title">Practical courses for modern web development</h1>
          <p className="hero-lede">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, ex laboriosam perspiciatis error odio cum ullam, iure, dolorum fugiat molestiae cumque animi laudantium quaerat dolorem excepturi quasi praesentium maiores harum.
          </p>

          <div className="hero-actions">
            <Link href="/courses" className="btn btn-primary">
              Browse Courses
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

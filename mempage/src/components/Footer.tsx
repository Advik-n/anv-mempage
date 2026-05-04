export function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-base py-12">
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <h3 className="text-xl font-bold text-heading">Anveshan</h3>
            <p className="mt-2 text-sm text-muted">
              A I/ML CLUB · BUILD DOCUMENTATION
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <span className="font-semibold text-heading">Quick Links</span>
            <a href="#" className="text-sm text-muted hover:text-accent">About</a>
            <a href="/members" className="text-sm text-accent">Members</a>
            <a href="#" className="text-sm text-muted hover:text-accent">Events</a>
          </div>
          <div className="flex flex-col gap-2">
            <span className="font-semibold text-heading">Social</span>
            <a href="#" className="text-sm text-muted hover:text-accent">GitHub</a>
            <a href="#" className="text-sm text-muted hover:text-accent">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

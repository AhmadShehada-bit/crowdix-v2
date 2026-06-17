import EmptyState from "@/components/EmptyState";

export default function NotFound() {
  return (
    <div className="section-space">
      <div className="page-shell">
        <EmptyState
          title="This page is not in the archive"
          description="The route exists for published case studies and founder records only. Use the main archive routes to continue browsing."
          actionHref="/projects"
          actionLabel="Browse projects"
        />
      </div>
    </div>
  );
}

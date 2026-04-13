import { useParams } from "react-router";
import { useProjectSummary } from "../hooks/useProject";
import { LoadingSpinner } from "../components/common/LoadingSpinner";
import { ErrorAlert } from "../components/common/ErrorAlert";
import { ProjectHeader } from "../components/project/ProjectHeader";
import { ProjectTabs } from "../components/project/ProjectTabs";
import { ScorePanel } from "../components/project/ScorePanel";
import { ScanHistoryTable } from "../components/project/ScanHistoryTable";
import { NextActions } from "../components/project/NextActions";
import { CampaignTimeline } from "../components/project/CampaignTimeline";
import { ActionFeed } from "../components/project/ActionFeed";
import { InsightBanner } from "../components/dashboard/InsightBanner";
import { useI18n } from "../i18n";
import { ProjectCommandCenter } from "../components/project/ProjectCommandCenter";

export function ProjectPage() {
  const { id } = useParams();
  const projectId = Number(id);
  const { data, isLoading, error } = useProjectSummary(projectId);
  const { t } = useI18n();

  if (isLoading) return <LoadingSpinner />;
  if (error) return <ErrorAlert message={error.message} />;
  if (!data) return <ErrorAlert message={t("common.projectNotFound")} />;

  const {
    project,
    latest,
    previous,
    latest_monitoring,
    latest_reports,
    is_paused,
    competitor_count,
    pending_approvals,
  } = data;

  return (
    <div>
      <ProjectHeader project={project} isPaused={is_paused} />
      <InsightBanner projectId={projectId} />
      <ProjectTabs projectId={projectId} />

      <div className="mt-6">
        <ProjectCommandCenter
          projectId={projectId}
          latest={latest}
          latestMonitoring={latest_monitoring}
          latestReports={latest_reports}
          competitorCount={competitor_count}
          pendingApprovals={pending_approvals}
        />
      </div>

      <div className="mt-6">
        <ScorePanel latest={latest} previous={previous} latestMonitoring={latest_monitoring} />
      </div>

      <div className="mt-6">
        <ActionFeed projectId={projectId} />
      </div>

      <NextActions projectId={projectId} />
      <CampaignTimeline projectId={projectId} />

      {/* Scan history collapsed at the bottom */}
      <details className="mt-8 group">
        <summary className="cursor-pointer text-sm font-semibold text-slate-500 hover:text-slate-700 transition">
          Scan History ▾
        </summary>
        <div className="mt-3">
          <ScanHistoryTable latest={latest} />
        </div>
      </details>
    </div>
  );
}

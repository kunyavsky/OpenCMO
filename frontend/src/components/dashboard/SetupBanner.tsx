import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getSettings } from "../../api/settings";
import { useI18n } from "../../i18n";
import { KeyRound, ChevronRight, X, AlertTriangle, CheckCircle2 } from "lucide-react";

/**
 * A persistent banner shown at the top of the app when essential API keys
 * (OpenAI + Tavily) are not configured. Clicking it opens the Settings dialog.
 */
export function SetupBanner({ onOpenSettings }: { onOpenSettings: () => void }) {
  const { t } = useI18n();
  const [dismissed, setDismissed] = useState(false);
  const { data: settings } = useQuery({
    queryKey: ["settings"],
    queryFn: getSettings,
    staleTime: 60_000,
  });

  // Don't show if dismissed this session
  if (dismissed) return null;
  // Don't show until settings loaded
  if (!settings) return null;

  const hasLLM = settings.api_key_set;
  const hasTavily = settings.tavily_key_set;

  // All configured — don't show
  if (hasLLM && hasTavily) return null;

  const missingItems: string[] = [];
  if (!hasLLM) missingItems.push(t("setup.llmKey"));
  if (!hasTavily) missingItems.push(t("setup.tavilyKey"));

  return (
    <div className="mb-6 animate-in fade-in slide-in-from-top-4 duration-500">
      <div className="relative overflow-hidden rounded-2xl border border-amber-200/60 bg-gradient-to-r from-amber-50 via-orange-50 to-yellow-50 p-5 shadow-sm">
        {/* Decorative glow */}
        <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-amber-200/30 blur-2xl" />
        <div className="absolute -left-4 -bottom-4 h-24 w-24 rounded-full bg-orange-200/20 blur-xl" />

        <div className="relative flex items-start gap-4">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-amber-100 text-amber-600">
            <AlertTriangle size={22} />
          </div>

          <div className="flex-1 min-w-0">
            <h3 className="text-[15px] font-semibold text-amber-900">
              {t("setup.title")}
            </h3>
            <p className="mt-1 text-sm text-amber-700/80 leading-relaxed">
              {t("setup.description")}
            </p>

            {/* Missing items */}
            <div className="mt-3 flex flex-wrap gap-2">
              {!hasLLM && (
                <span className="inline-flex items-center gap-1.5 rounded-lg bg-white/70 border border-amber-200/50 px-3 py-1.5 text-xs font-medium text-amber-800">
                  <X size={12} className="text-rose-500" />
                  {t("setup.llmKey")}
                </span>
              )}
              {hasLLM && (
                <span className="inline-flex items-center gap-1.5 rounded-lg bg-emerald-50 border border-emerald-200/50 px-3 py-1.5 text-xs font-medium text-emerald-700">
                  <CheckCircle2 size={12} />
                  {t("setup.llmKey")}
                </span>
              )}
              {!hasTavily && (
                <span className="inline-flex items-center gap-1.5 rounded-lg bg-white/70 border border-amber-200/50 px-3 py-1.5 text-xs font-medium text-amber-800">
                  <X size={12} className="text-rose-500" />
                  {t("setup.tavilyKey")}
                </span>
              )}
              {hasTavily && (
                <span className="inline-flex items-center gap-1.5 rounded-lg bg-emerald-50 border border-emerald-200/50 px-3 py-1.5 text-xs font-medium text-emerald-700">
                  <CheckCircle2 size={12} />
                  {t("setup.tavilyKey")}
                </span>
              )}
            </div>

            <button
              onClick={onOpenSettings}
              className="mt-4 inline-flex items-center gap-2 rounded-xl bg-amber-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition-all hover:bg-amber-700 hover:shadow-md active:scale-95"
            >
              <KeyRound size={14} />
              {t("setup.configureNow")}
              <ChevronRight size={14} />
            </button>
          </div>

          <button
            onClick={() => setDismissed(true)}
            className="shrink-0 rounded-lg p-1.5 text-amber-400 transition-colors hover:bg-amber-100 hover:text-amber-600"
            title={t("setup.dismissHint")}
          >
            <X size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}

import { cn } from "../lib/utils";
import { statusBadge, statusBadgeDefault } from "../lib/status-colors";

export function StatusBadge({ status }: { status: string }) {
  const statusLabels: Record<string, string> = {
    backlog: "待规划",
    todo: "待办",
    in_progress: "进行中",
    in_review: "评审中",
    done: "已完成",
    blocked: "阻塞",
    cancelled: "已取消",
    active: "活跃",
    running: "运行中",
    paused: "已暂停",
    error: "异常",
    idle: "空闲",
    terminated: "已终止",
    pending: "待处理",
    pending_approval: "待审批",
    approved: "已批准",
    rejected: "已拒绝",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium whitespace-nowrap shrink-0",
        statusBadge[status] ?? statusBadgeDefault
      )}
    >
      {statusLabels[status] ?? status.replace(/_/g, " ")}
    </span>
  );
}

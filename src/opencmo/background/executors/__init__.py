"""Executor registry package for unified background tasks."""

from __future__ import annotations

from .report import run_report_executor
from .scan import run_scan_executor

__all__ = ["run_scan_executor", "run_report_executor"]

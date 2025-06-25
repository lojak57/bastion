/**
 * Error Service for weKnowCO
 * Handles error logging and reporting for the marketing site
 */

import { browser } from '$app/environment';
import { ENV } from '$lib/utils/env';

export interface ErrorInfo {
  message: string;
  stack?: string;
  context?: string;
  timestamp: string;
  url?: string;
  userAgent?: string;
}

class ErrorService {
  private errors: ErrorInfo[] = [];
  private maxErrors = 50; // Keep last 50 errors in memory

  /**
   * Handle and log errors
   */
  handleError(error: Error | unknown, context?: string): void {
    const errorInfo: ErrorInfo = {
      message: error instanceof Error ? error.message : String(error),
      stack: error instanceof Error ? error.stack : undefined,
      context,
      timestamp: new Date().toISOString(),
      url: browser ? window.location.href : undefined,
      userAgent: browser ? navigator.userAgent : undefined,
    };

    // Store error (in memory only for marketing site)
    this.errors.unshift(errorInfo);
    if (this.errors.length > this.maxErrors) {
      this.errors = this.errors.slice(0, this.maxErrors);
    }

    // Log to console in development
    if (import.meta.env.DEV) {
      console.error('🚨 Error:', errorInfo);
    }

    // In production, you could send to error tracking service
    if (!import.meta.env.DEV && browser) {
      this.reportToAnalytics(errorInfo);
    }
  }

  /**
   * Report errors to analytics (if enabled)
   */
  private reportToAnalytics(errorInfo: ErrorInfo): void {
    // Only report if analytics is enabled
    if (!ENV.ENABLE_ANALYTICS) return;

    // Send to Google Analytics as an event
    if (typeof window !== 'undefined' && 'gtag' in window) {
      (window as any).gtag('event', 'exception', {
        description: errorInfo.message,
        fatal: false,
        error_context: errorInfo.context,
      });
    }

    // You could also send to other error tracking services here
    // e.g., Sentry, LogRocket, etc.
  }

  /**
   * Get recent errors (for debugging)
   */
  getRecentErrors(): ErrorInfo[] {
    return [...this.errors];
  }

  /**
   * Clear error history
   */
  clearErrors(): void {
    this.errors = [];
  }

  /**
   * Create a user-friendly error message
   */
  getUserMessage(error: Error | unknown): string {
    // Network errors
    if (error instanceof TypeError && error.message.includes('fetch')) {
      return 'Network connection issue. Please check your internet and try again.';
    }

    // Form validation errors
    if (error instanceof Error && error.message.includes('validation')) {
      return 'Please check your form inputs and try again.';
    }

    // API errors
    if (error instanceof Error && error.message.includes('API')) {
      return 'Service temporarily unavailable. Please try again in a few moments.';
    }

    // Default message
    return 'Something went wrong. Please try again or contact support.';
  }
}

// Export singleton instance
export const errorService = new ErrorService();

// Export convenience function
export function handleError(error: Error | unknown, context?: string): void {
  errorService.handleError(error, context);
}